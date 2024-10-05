<?php

namespace App\Models;

use App\Observers\LikeObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[ObservedBy([LikeObserver::class])]
class Like extends Model
{
    use HasFactory;


    protected $fillable=['user_id','vote'];
    public function likeable()
    {
        return $this->morphTo();
    }
}
