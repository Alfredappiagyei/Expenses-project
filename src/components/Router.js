import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import App from '../App';
import Editform from './Editform';
export default function Router() {
    return (
        <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Editform} />
        
        </BrowserRouter>
    )
}