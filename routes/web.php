<?php

use App\Http\Controllers\Manage\TaskController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view("modules.index");
// });

Route::get("/", [TaskController::class, 'index']);
Route::get("/table", [TaskController::class, 'loadTable']);
Route::post("/process/task", [TaskController::class, 'createOrUpdateTask'])->name("process.task");
