<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $data = [
            "status" => [
                [
                    "id" => 1,
                    "label" => "Ongoing",
                ],
                [
                 "id" => 2,
                 "label" => "Done",
                ],
                [
                    "id" => 3,
                    "label" => "Hold",
                ]
            ],
        ];
        
        return view("modules.index", compact('data'));
    }
}
