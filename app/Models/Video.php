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
            'category_id'
        ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

//accessor should be like Attribute in database
    public function getLengthInHumenAttribute(){
        return gmdate('i:s',$this->value);
    }

    public function getCreatedAtAttribute($value){

        return (new Verta($value))->formatDifference();
    }

    public function relateVideos( int $count=6){
        return Video::all()->random($count);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function getCategoryNameAttribute(){
        return $this->category?->name;
    }
}
