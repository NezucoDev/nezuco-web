import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import ProtectedRoute from '../components/protectedRoute'
import Logout from '../components/logout'

import Home      from './Home'
import Products  from './Products'
import About     from './About'
import Login     from './accounts/login'
import Register  from './accounts/register'
import Dashboard from './accounts/dashboard'

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home}  />
            <Route path='/products' component={Products}  />
            <Route path='/about' component={About}  />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <ProtectedRoute path='/dashboard' component={Dashboard} />
            <ProtectedRoute path='/logout' exact component={Logout} />
        </BrowserRouter>
    )
}

export default App
