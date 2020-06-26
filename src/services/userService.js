import http from './httpService'
import authService from './authService'

async function register(firstName, lastName, email, password) {
    const { headers } = await http.post('/register', {
        firstName,
        lastName,
        email,
        password
    })

    const authHeader = headers['authorization']
    if (!authHeader)
        throw new Error('No authorization header present')
    
    const jwt = authHeader.split(' ')[1]
    authService.loginWithJwt(jwt)
}

export default {
    register
}