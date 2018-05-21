<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Auth;

class LoginController extends Controller
{


    /*public function __construct(){
         $this->middleware('guest', ['showLoginForm']);
    }*/

    public function showLoginForm(){

        return view('auth.login');
    }


    public function login(){

        $credentials = $this->validate(request(), [
            'email' => 'email|required|string',
            'password' => 'required|string'
        ]);

       if ( Auth::attempt($credentials)) {
            
            return response()->json(1);

        }

        return response()->json('wrong user');
        //return back()->withErrors(['email'=>'Wrong User']);
    }


    public function logout(){

        Auth::logout();

        return redirect('/');

    }

}
