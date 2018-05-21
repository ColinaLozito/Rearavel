<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::resource('todo', 'TodoController');




Auth::routes();

Route::get('/', 'Auth\LoginController@showLoginForm')->middleware('guest');

Route::post('login', 'Auth\LoginController@login')->name('login');

Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::get('app', 'indexController@index')->name('app');

Route::resource('users', 'UserController');

Route::get('file', 'FileController@index')->name('file');

Route::post('fileUpload', 'FileController@upload')->name('fileUpload');

Route::get('fileList', 'FileController@list')->name('fileList');

Route::get('recordList', 'FileController@getRecords')->name('recordList');