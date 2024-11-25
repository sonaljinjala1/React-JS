import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import View from './pages/View'
import Add from './pages/Add'
import Edit from './pages/Edit'

function App ()  {


    return (
        <div>
            <BrowserRouter>
                <Router path="/"  element= {<View/>} > </Router>
                <Router path="/Add" element = {<Add/>} ></Router>
                <Router path="/Edit" element = {<Edit/>} > </Router>
            </BrowserRouter>

        </div>
    )
}
