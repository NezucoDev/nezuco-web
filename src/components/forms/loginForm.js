import React from 'react'
import Joi from '@hapi/joi'

import Form from '../form'
import authService from '../../services/authService'

class LoginForm extends Form {
    constructor() {
        super()

        this.state = {
            formData: { email: '', password: '' },
            formErrors: {}
        }

        this.schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
            password: Joi.string().required().label('Password')
        })
    }

    submitForm = async () => {
        this.props.setAwaitingResponse(true)

        try {
            const { email, password } = this.state.formData
            await authService.login(email, password)
        } catch (e) {
            if (e.response && e.response.status === 400) {
                const errors = {}
                e.response.data.forEach(error => {
                    errors[error.context.key] = error.message
                })
                this.setState({ formErrors: errors })
            }
        }
        this.props.setAwaitingResponse(false)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.renderInput('email', 'Email')}
                {this.renderInput('password', 'Password', 'password')}

                <div className='form-group'>
                    <button type='submit'>Login</button>
                </div>
            </form>
        )
    }
}

export default LoginForm