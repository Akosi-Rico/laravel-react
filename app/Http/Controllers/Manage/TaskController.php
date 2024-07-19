<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manage\TaskRequest;
use App\Models\Management\Task;

class TaskController extends Controller
{
    public function index()
    {
        $data = [
            'statusOption' => config("taskOption.status"),
            'taskUrl' => route("process.task"),
            'logo' => asset("image/logo.png"),
        ];

       // return $data;
        return view("modules.index", compact('data'));
    }

    public function loadTable()
    {
       return Task::loadData();
    }

    public function createOrUpdateTask(TaskRequest $request)
    {
        //info(request()->all());
        return Task::createOrUpdateTask(request()->payload);
    }
}
