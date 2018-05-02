<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Uppercase extends Model
{
    protected $fillable = [
        'user_id','uppercase_str'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}
