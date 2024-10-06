<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_category';

    public function stories()
    {
        return $this->belongsToMany(Story::class, 'category_story', 'id_story');
    }
}
