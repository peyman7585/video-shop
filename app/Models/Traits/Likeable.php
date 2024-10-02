<?php

namespace App\Models\Traits;

use App\Models\Like;
use App\Models\User;

trait Likeable
{
    public function likes ()
    {
        return $this->morphMany(Like::class,'likeable');
    }

    public function getLikesCountAttribute()
    {
        return $this->likes()
            ->where('vote',1)
            ->count();
    }

    public function getDisLikesCountAttribute()
    {
        return $this->likes()
            ->where('vote',-1)
            ->count();
    }

    public function likeby (User $user)
    {
        if ($this->isLikeby($user)){
            return $this->likes()
                ->where('vote',1)
                ->delete(['vote'=>1]);
        }
        return $this->likes()->create([
            'user_id'=>$user->id,
            'vote'=>1
        ]);
    }

    public function dislikeby (User $user)
    {
        if ($this->isDisLikeby($user)) {
            return $this->likes()
                ->where('vote',-1)
                ->delete(['vote' => -1,]);

        }
        return $this->likes()->create([
            'user_id'=>$user->id,
            'vote'=> -1
        ]);
    }

    public function isLikeby(User $user)
{
    return $this->likes()
        ->where('vote',1)
        ->where('user_id',$user->id)
        ->exists();
}
    public function isDisLikeby(User $user)
    {
        return $this->likes()
            ->where('vote',-1)
            ->where('user_id',$user->id)
            ->exists();
    }
}
