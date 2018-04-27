<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    public function index(){

    	
    
    }

    public function upload(Request $request){


        if ($request->hasFile('text_file')) {
            //get file with extension
            $fileNameWithExt = $request->text_file;
     
            //$path = $request->file('text_file')->storeAs('public/text_files/', $fileNameWithExt);

            \Storage::disk('local')->put($fileNameWithExt, 'text_file');    

            return back()->withErrors(['text_file'=>'Text file loaded']);
        }else {
            return back()->withErrors(['text_file'=>'Text file error']);
        }

    }

    public function list(){

    	return view("File.Form");
    
    }

}
