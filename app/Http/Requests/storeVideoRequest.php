<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class storeVideoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>['required'],
            'slug'=>['required','unique:videos,slug','alpha_dash'],
            'thumbnail'=>['required','url'],
            'length'=>['required','integer'],
            'category_id'=>['required','exists:categories,id'],
            'file'=>['required','file','mimetypes:video/mp4']
        ];
    }

//in this case you can change Persian letter to english
    protected function prepareForValidation(): void
    {
        $this->merge([
            'slug' => Str::slug($this->slug),
        ]);
    }

    public function messages()
    {
        return [
            'file.*'=>'فایل باید ویدیویی باشد.'
        ];
    }
}
