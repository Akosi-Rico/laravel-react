<?php

namespace App\Http\Requests\Manage;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'payload.title' => 'required',
            'payload.task' => 'required'
        ];
    }

    public function messages()
    {
        return  [
            'payload.title.required' => 'Title is required!',
            'payload.task.required' => 'Task is required!',
        ];
    }
}
