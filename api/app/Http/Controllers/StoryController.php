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
        //validar los datos de la historia

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string|',
            'state' => 'required|boolean',
            'categories' => 'required|array', //Se valida el envio de las categorias en unarray para permitir la asignaciond e multiples categorias
            'categories.*' => 'exists:categories, id_category' //verifica que los id's enviados existan en el campo id_category de la tabla categories
        ]);

        //Crear la historia y asignar el usuario  que la creo

        $story = Story::create([
            'title' => $validatedData['title'],
            'content' => $validatedData['content'],
            'state' => $validatedData['state'],
            'id_user' => Auth::id(),
        ]);

        $story->categories()->sync($validatedData['categories']);

        return  response()->json(['message' => 'Historia creada con exito', $story], 201);







    }


    //método para obtener una historia especifica
    public function show(story $story)
    {
        $story = Story::with('user', 'categories')->findOrFail($story);
        return response()->json($story);
    }


    public function update(Request $request, story $story)
    {
        //
    }


    public function destroy(story $story)
    {
        //
    }
}
