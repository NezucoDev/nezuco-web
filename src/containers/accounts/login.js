import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import LoginForm from '../../components/forms/loginForm'
import authService from '../../services/authService'

import './auth.css'

const Login = ({ location }) => {
    useEffect(() => {
        document.title = 'Login | Nezuco'
        document.querySelector('meta[name=description]').setAttribute('content', 'Log in to your Nezuco account or sign up.')
    })

    const next = new URLSearchParams(location.search).get('next')

    const [awaitingResponse, setAwaitingResponse] = useState(false)

    if (authService.getJwt()) {
        if (document.referrer && next)
            window.location = `${document.referrer}auth?next=${next}&jwt=${authService.getJwt()}`
        else window.location = '/dashboard'

        return <></>
    }

    return (
        <div id='auth-container' className='d-flex flex-column' style={{ minHeight: '100vh', alignItems: 'center', backgroundColor: '#e2e2e2' }}>
            <div className='center'>
                <h1 className='title mt-2'>Nezuco</h1>
                <h3 className='mt-2'>Login With Your Nezuco Account</h3>
            </div>
            <div style={{ height: '70%', width: '30%' }} className='mt-2'>
                <div className={`card ${awaitingResponse ? 'disabled' : ''}`}>
                    <LoginForm setAwaitingResponse={setAwaitingResponse} />

                    <p>Don't have an account? <Link to={`/register${next ? `?next=${next}` : ''}`}>Register now</Link>.</p>
                </div>
            </div>
            <footer className='mt-2'>
                <p>&copy; Copyright 2020, Nezuco Inc. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Login