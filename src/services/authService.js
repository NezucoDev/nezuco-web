import jwtDecode from 'jwt-decode'
import http from './httpService'

const apiEndpoint = '/login'

http.setJwt(getJwt())

async function login(email, password) {
    const { headers } = await http.post(apiEndpoint, { email, password })

    const authHeader = headers['authorization']
    if (!authHeader)
        throw new Error('No authorization header present')

    const jwt = authHeader.split(' ')[1]
    localStorage.setItem('jwt', jwt)
}

function loginWithJwt(jwt) {
    localStorage.setItem('jwt', jwt)
}

function logout() {
    localStorage.removeItem('jwt')
}

function getCurrentUser() {
    try {
        const token = localStorage.getItem('jwt')
        return jwtDecode(token)
    } catch (ex) {
        return null
    }
}

function getJwt() {
    return localStorage.getItem('jwt')
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
}