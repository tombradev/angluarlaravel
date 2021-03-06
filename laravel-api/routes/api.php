<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Route::get('nameOfTheLink','NameOfController@NameOfMethods');

//get All employee
Route::get('employees','App\Http\Controllers\EmployeeController@getEmployee');

//get specific employee
Route::get('employee/{id}','App\Http\Controllers\EmployeeController@getSpecificEmployee');