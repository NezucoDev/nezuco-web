import React, { useEffect } from 'react'
import authService from '../services/authService'

const Logout = () => {
    useEffect(() => {
        authService.logout()

        setTimeout(function () {
            window.location = '/login'
        }, 2000)
    })

    return (
        <p style={{ color: 'black' }}>Logging out...</p>
    )
}

export default Logout