<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class PagesController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function about()
    {
        return Inertia::render('About');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function services()
    {
        return Inertia::render('Services');
    }
}
