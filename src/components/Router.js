import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import Editform from './Editform';
import Register from './Register';
import Login from './Login';
 import ProtectedRoute from './ProtectRoute'

 const Router = () => {
    return (
        <BrowserRouter>
        <ProtectedRoute exact path='/' component={App} />
        <Route path='/edit/:id' component={Editform} />  
        <Route path='/register' component={Register} />  
        <Route path='/login' component={Login} />       
        </BrowserRouter>
    );
};


export default Router;