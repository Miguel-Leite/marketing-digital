<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function store(Request $request) {
        $contact = new Contact();
        $contact->name = $request->input('name');
        $contact->email = $request->input('email');
        $contact->subject = $request->input('subject');
        $contact->message = $request->input('message');
        $contact->save();

        return response()->json([
            'status' => 200,
            'response' => 'Message send successful'
        ]);
    }

    public function edit(Request $request) {

    }
}
