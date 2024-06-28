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
            'taskUrl' => route("process.task")
        ];

        return view("modules.index", compact('data'));
    }

    public function loadTable()
    {
        return [
            "draw" => request()->draw,
            "recordsTotal" => 0,
            "recordsFiltered" => 0,
            "data" => []
        ];
    }

    public function createOrUpdateTask()
    {
        return Task::createOrUpdateTask(request()->payload);
    }
}
