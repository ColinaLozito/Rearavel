<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    public function index(){

    	
    
    }

    public function upload(Request $request){

    	
    	dd('upload method');
    
    }

    public function list(){

    	return view("File.Form");
    
    }

}
