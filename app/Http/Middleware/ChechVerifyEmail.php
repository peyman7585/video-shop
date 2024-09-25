<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ChechVerifyEmail
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if ($request->user() && $request->user()->hasVerifiedEmail()){
            return $next($request);
        }
        return redirect()->route('index')->with('alert','برای بهره مند شدن از تمامی امکانات سایت لطفا ایمیل خود را تایید کنید');
    }
}
