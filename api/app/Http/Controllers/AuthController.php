<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    
    //Método para registrar usuarios

    public function register(Request $request){
        //Validar los datos con Validator

        $validator = Validator::make($request->all(), [
            'nombre_usuario' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'biografia' => 'required|string|max:500',
            'foto_perfil' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        //Verificar si la validación falla
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        //Manejar la subida del archivo de imágen

        if ($request->hasFile('foto_perfil')) {
            //obtener el archivo
            $file = $request->file('foto_perfil');
            //generar el nombre del archivo
            $nombreArchivo =Str::random(10). '.' . $file->getClientOriginalExtension();
            //almacenar el archivo
            $file->storeAs('public/fotos_perfil/', $nombreArchivo);
            //guardar el nombre del archivo en la base de datos
            $foto_perfil = $nombreArchivo;
        
        }

        //Crear el nuevo usuario en la base de datos
        $user = User::create([
            'nombre_usuario' => $request->nombre_usuario,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'biografia' => $request->biografia,
            'foto_perfil' => $foto_perfil ?? null,
        ]);

        //generar token con Sanctum (Este token servirá para identificar al usuario al momento de loguearse)
        $token = $user->createToken('auth_token')->plainTextToken;

        //Retornar mensaje de éxito
        return response()->json([
        'message' => 'Usuario creado con éxito',
        'user' => $user,
        'access_token' => $token,
        'token_type' => 'Bearer',
        ], 201);



    }


    public function login(Request $request)
    {
        // Validar los datos del usuario
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
    
        // Buscar el usuario por email
        $user = User::where('email', $request->email)->first();
    
        // Verificar si el usuario existe y si la contraseña es correcta
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }
    
        // Generar un nuevo Token con Sanctum
        $token = $user->createToken('auth_token')->plainTextToken;
    
        // Devolver respuesta con el token
        return response()->json([
            'message' => 'Usuario logueado con éxito',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 200);
    }
    






}
