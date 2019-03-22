<?php

namespace App\Http\Controllers;
/**
 * 
 * 
 * Laravelでセッションを使ってみる
 * https://qiita.com/reflet/items/5638ab18fd7cededed17
 */

use Illuminate\Http\Request;

class SessionTestController extends Controller
{
    public function list(Request $request)
    {
        $result = [
            [ 'id' => 1, 'title' => '1件目' ],
            [ 'id' => 2, 'title' => '2件目' ],
            [ 'id' => 3, 'title' => '3件目' ],
            [ 'id' => 4, 'title' => '4件目' ],
            [ 'id' => 5, 'title' => '5件目' ],
        ];
        return response()->json($result);
    }

    public function put(Request $request)
    {
        $test_text = $request->get('test_text', '');
        $request->session()->put('test_text', $test_text);
        return response()->json(['result' => true]);
    }
}
