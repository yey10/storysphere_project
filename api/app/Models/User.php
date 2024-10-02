<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Roles;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    //Los campos que son rellenables ($fillable) para proteger los datos contra asignaciones masivas.
    //Los campos ocultos ($hidden), como la contraseña, para que no se envíen en respuestas JSON por seguridad.

    protected $fillable = [
        'nombre_usuario', 'email', 'password', 'biografia', 'foto_perfil',
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function role()
    {
        return $this->belongsTo(Roles::class);
    }


   


}
