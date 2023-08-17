<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class AuthController extends Controller
{
    public function signup(Request $request) {
        $payload = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);
        $payload['password'] = bcrypt($request['password']);
        $user = User::create($payload);
        auth()->login($user);
        return response('hello world');
    }
}


