import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Alert from '../../components/alert'

import authService from '../../services/authService'

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard | Nezuco'
    })

    const user = authService.getCurrentUser()

    return (
        <>
            <div style={{color:'white'}}>
                <h2>Welcome, {user.firstName} {user.lastName}!</h2>
                <Link to='/logout'><h3 className='center'>Logout</h3></Link>
                <h1>Dashboard</h1>
                <h2>Coming Soon</h2>
            </div>
            <Alert title='In Development' message='This page is under construction.' />
        </>
    )
}

export default Dashboard