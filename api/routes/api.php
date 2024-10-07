<?php


use App\Http\Controllers\AuthController;
use App\Http\Controllers\StoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');*/

//Rutas para autenticación
Route::post('/register', [AuthController::class,  'register']);  // register new user
Route::post('/login', [AuthController::class, 'login']); //Loguear user

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']); // Cerrar sesión
});


//Rutas para creacion de historias
Route::apiResource('stories', StoryController::class)->only(['index', 'show' ]);  //rutas publicas
Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('stories', StoryController::class)->only(['store', 'update', 'destroy']); //rutas protegidas (se necesita autenticación)
});


// accion, drama, ficcion, misterio, romance, terror