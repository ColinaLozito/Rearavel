<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class FileController extends Controller
{
    public function index(){

    	
    
    }

    public function upload(Request $request){


        if ($request->hasFile('text_file')) {
            

            $file = $request->file('text_file');

            $contents = File::get($file);

            $lines = preg_split('/\n|\r\n?/', $contents);

            foreach ($lines as $key => $line) {
                preg_match_all("/[A-Z]/", $line, $caps_match); 

                $caps = $caps_match [0];
                
                $caps_count = count($caps_match [0]); 

                print "($line) - : ". json_encode($caps) .'<br/>'; 
                # code...
            }



            //return back()->withErrors(['text_file'=>'Text file loaded']);
        }else {
            return back()->withErrors(['text_file'=>'Text file error']);
        }

    }

    public function list(){

    	return view("File.Form");
    
    }

}
