<?php

namespace App\Models\Management;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Helper\TaskHelper;
use App\Services\JsonOutput;
use Symfony\Component\HttpFoundation\Response;

class Task extends Model
{
    use HasFactory, TaskHelper;

    public static function createOrUpdateTask($request)
    {
        // if (empty($request)) {
        //     return false;
        // }

        // $task = self::where("id", $request['id'])->first();
        // if (empty($task)) {
        //     $task = new self();
        // }

        // $task->title = $request['title'];
        // $task->content = $request['task'];
        // $task->save();


        try {
            DB::beginTransaction();
            throw new \Exception("Testing Error");
            DB::commit();
        } catch (\Throwable $th) {
            return self::loadResponse($th->getMessage(), Response::HTTP_BAD_REQUEST, new JsonOutput);
        }
    }
}
