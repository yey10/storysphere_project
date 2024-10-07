<?php

namespace App\Http\Controllers;

use App\Models\story;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class StoryController extends Controller
{

    //método para obtener todas las historias
    public function index()
    {
        $stories = Story::with('user'  , 'category')->get();
        return response()->json($stories);
    }


    //método para crear nueva historia
    public function store(Request $request)
    {
        // Validar los datos de la historia
        try {
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string',
                'state' => 'required|boolean',
                'categories' => 'required|array',
                'categories.*' => 'exists:categories,id_category'
            ]);


            //Verificar si el usuario autenticado existe

            $user = Auth::user();

            if(!$user){
                return response()->json(['message' => 'El usuario no existe'], 404);    
            }
    
            // Crear la historia y asignar el usuario que la creó
            $story = Story::create([
                'title' => $validatedData['title'],
                'content' => $validatedData['content'],
                'state' => $validatedData['state'],
                'id_user' => Auth::id(),
            ]);
    
            $story->categories()->sync($validatedData['categories']);
    
            return response()->json(['message' => 'Historia creada con éxito', 'story' => $story], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Captura de excepciones de validación
            return response()->json(['error' => $e->validator->errors()], 422);
        } catch (\Illuminate\Database\QueryException $e) {
            // Captura de excepciones de base de datos
            return response()->json(['error' => $e->getMessage()], 500);
        } catch (\Exception $e) {
            // Captura de cualquier otro tipo de excepciones
            return response()->json(['error' => 'Error inesperado: ' . $e->getMessage()], 500);
        }
    }


    //método para obtener una historia especifica
    public function show(story $story)
    {
        $story = Story::with('user', 'categories')->findOrFail($story);
        return response()->json($story);
    }


    public function update(Request $request, story $id)
    {
        try{

            $story = Story::findOrFail($id);

            //Verificamos que el usuario autenticado sea el dueño de la historia

            if ($story->id_user !==  Auth::id()) {
                return  response()->json(['message' => 'No tienes permiso para editar esta historia'], 403);
            }
            
            //Validar los datos de la historia

            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string',
                'state' => 'required|boolean',
                'categories' => 'nullable|array',
                'categories.*' => 'exists:categories,id_category'
                            
            ]);

            //Actualizar la historia

            $story->update($validatedData);

            //Si se envian categorias, actualizarlas

            if(isset($validatedData['categories'])){

                $story->categories()->sync($validatedData['categories']);

            }else{
                    $story->categories()->detach();
            }

            return response()->json(['message' => 'Historia actualizada con éxito', 'story' => $story], 200);


        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error inesperado: ' . $e->getMessage()], 500);
        }
    }


    public function destroy(story $id)
    {
        try {
            $story =  Story::findOrFail($id);

            if ($story->id_user  !==  Auth::id()) {
                return   response()->json(['message' => 'No tienes permiso para eliminar esta historia'], 403);
            }
            
            $story->delete();
            return response()->json(['message' => 'Historia eliminada con éxito'], 200);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error inesperado: ' . $e->getMessage()], 500);
        }
    }
}
