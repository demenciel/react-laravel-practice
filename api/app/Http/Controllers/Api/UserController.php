<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function signup(Request $request) {
        $payload = $request->validate([
            'username' => ['required', 'string'],
            'email'=>['required','unique:users,email'] ,
            'password'=>'required'
        ]);
        $user = User::create($payload);
        auth()->login($user);
        return response(['message'=>'User created successfully']);
    }
}
