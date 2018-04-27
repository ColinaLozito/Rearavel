<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Uppercase extends Model
{
    protected $fillable = [
        'user_id','uppercase_str'
    ];
}
