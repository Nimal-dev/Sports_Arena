<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

use App\Http\Controllers\TurfController;
use App\Http\Controllers\tournamentController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);




// Aslams
Route::post('/post',[PostController::class,'Post']);
Route::post('/postfileupload',[PostController::class,'fileUpload']);
Route::get('/viewpost',[PostController::class,'viewpost']);
Route::post('/social_register',[PostController::class,'register']);
// Route::post('/login',[PostController::class,'login']);
Route::post('/deletepost',[PostController::class,'deletepost']);
Route::post('/comment',[PostController::class,'comment']);
Route::post('/viewcomment',[PostController::class,'viewComment']);
Route::post('/like',[PostController::class,'like']);
Route::post('/dislike',[PostController::class,'dislike']);

// turf and tournaments

Route::post('/turf',[TurfController::class,'turf']);
Route::post('/turfregister',[TurfController::class,'register']);
Route::post('/tournamentfileUpload',[TurfController::class,'fileUpload']);
// Route::post('/login',[TurfController::class,'login']);
Route::post('/updateprofile',[TurfController::class,'updateprofile']);
Route::post('/tournamentregister',[tournamentController::class,'tournamentregister']);
Route::get('/turfview',[tournamentController::class,'turfview']);
Route::get('/UserView',[tournamentController::class,'UserView']);
Route::post('/addtournament',[tournamentController::class,'addTournament']);
Route::post('/tournamentview', [tournamentController::class, 'tournamentView']);
Route::get('/getAllTournaments', [tournamentController::class, 'getAllTournaments']);
Route::post('/tournamentdelete/{id}', [tournamentController::class, 'deleteTournament']);
Route::get('/gettournament/{id}', [tournamentController::class, 'getTournament']);
Route::post('/updatetournament/{id}', [tournamentController::class, 'updateTournament']);

Route::post('/gettournament', [tournamentController::class, 'tournamentView']);


Route::post('/addfeedback', [AuthController::class, 'addfeedback']);
Route::get('/getfeedbacks', [AuthController::class, 'getFeedbacks']);


Route::post('/createOrder', [tournamentController::class, 'createOrder']);
Route::post('/verifyPayment', [tournamentController::class, 'verifyPayment']);
