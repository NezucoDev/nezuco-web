import axios from 'axios'
import logger from './logService'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500

    if (!expectedError) {
        logger.log(error)
    }

    return Promise.reject(error)
})

function setJwt(jwt) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    setJwt
}