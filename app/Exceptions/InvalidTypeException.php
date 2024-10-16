<?php

namespace App\Exceptions;

use Exception;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class InvalidTypeException extends Exception
{
    public function report(){
        Log::error('this is error');
    }
    public function render(Request $request){
        return response()->view('Exceptions.invalid-type',status:500);
    }
}
