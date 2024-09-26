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

    public function getOwnerNameAttribute(){
        return $this->user?->name;
    }

    public function getOwnerAvatarAttribute(){
        return $this->user?->gravatar;
    }

    public function relateVideos(int $count){
        return $this->category->getRandomVideos($count);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function getCategoryNameAttribute(){
        return $this->category?->name;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

}
