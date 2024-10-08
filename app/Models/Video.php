<?php

namespace App\Models;

use App\Filters\VideoFilters;
use App\Models\Traits\Likeable;
use App\Observers\VideoObserver;
use Hekmatinasser\Verta\Verta;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use function PHPUnit\TestFixture\func;


#[ObservedBy([VideoObserver::class])]
class Video extends Model
{
    use HasFactory,Likeable;
    protected $fillable=
        [
            'name',
            'length',
            'slug',
            'path',
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

        return date('i:s',$this->length) ;
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

    public function getVideoUrlAttribute()
    {
        return  '/storage/'.$this->path;
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
        return $this->hasMany(Comment::class)->orderBy('created_at','desc');
    }

    public function scopeFilter(Builder $builder ,array $params)
    {

        return (new VideoFilters($builder))->apply($params);

    }

}
