<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUsersRequest;
use App\Http\Requests\UpdateUsersRequest;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return 'hola';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUsersRequest $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(User $users)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUsersRequest $request, User $users)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $users)
    {
        //
    }
}
