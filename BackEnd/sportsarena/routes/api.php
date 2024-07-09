<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/post',[PostController::class,'Post']);
Route::post('/fileupload',[PostController::class,'fileUpload']);
Route::get('/viewpost',[PostController::class,'viewpost']);
Route::post('/register',[PostController::class,'register']);
Route::post('/login',[PostController::class,'login']);
Route::post('/deletepost',[PostController::class,'deletepost']);
Route::post('/comment',[PostController::class,'comment']);
Route::post('/viewcomment',[PostController::class,'viewComment']);
Route::post('/like',[PostController::class,'like']);
Route::post('/dislike',[PostController::class,'dislike']);

