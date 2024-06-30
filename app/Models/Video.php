<?php

namespace App\Models;

use Hekmatinasser\Verta\Verta;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;
    protected $fillable=
        [
            'name',
            'length',
            'slug',
            'url',
            'thumbnail',
            'description',
        ];
//accessor should be like Attribute in database
    public function getLengthAttribute($value){
        return gmdate('i:s',$value);
    }

    public function getCreatedAtAttribute($value){

        return (new Verta($value))->formatDifference();
    }
}
