import http from './httpService'

const apiEndpoint = '/login'

http.setJwt(getJwt())

let user = null

async function login(email, password) {
    const { data } = await http.post(apiEndpoint, new URLSearchParams({
        username: email,
        password,
        client_id: '60cf4334a12c6b52c6d79620',
        client_secret: 'nezucochan',
        grant_type: 'password'
    }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })

    localStorage.setItem('accessToken', data.access_token)
    localStorage.setItem('refreshToken', data.refresh_token)
}

function loginWithJwt(accessToken) {
    localStorage.setItem('accessToken', accessToken)
}

function logout() {
    localStorage.removeItem('accessToken')
}

function getCurrentUser() {
    if (user) {
        return user
    } else {
        try {
            const token = localStorage.getItem('accessToken')
            return token
        } catch (ex) {
            console.error(ex)
            return null
        }
    }
}

function getJwt() {
    return localStorage.getItem('accessToken')
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
}