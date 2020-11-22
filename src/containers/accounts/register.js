import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import RegisterForm from '../../components/forms/registerForm'

import authService from '../../services/authService'


const Register = ({ location }) => {
    useEffect(() => {
        document.title = 'Register | Nezuco'
        document.querySelector('meta[name=description]').setAttribute('content', 'Create a new Nezuco account. Login if you already have one.')
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
        <div id='auth-container' className='d-flex flex-column' style={{ alignItems: 'center', backgroundColor: '#e2e2e2' }}>
            <div className='center'>
                <h1 className='title mt-2'>Nezuco</h1>
                <h3 className='mt-2'>Create a New Nezuco Account</h3>
            </div>
            <div style={{ height: '70%', width: '30%' }} className='mt-2'>
                <div className={`card ${awaitingResponse ? 'disabled' : ''}`}>
                    <RegisterForm setAwaitingResponse={setAwaitingResponse} />

                    <p>Already have an account? <Link to={`/login${next ? `?next=${next}` : ''}`}>Login now</Link>.</p>
                </div>
            </div>
            <footer className='mt-2'>
                <p>&copy; Copyright 2020, Nezuco Inc. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Register