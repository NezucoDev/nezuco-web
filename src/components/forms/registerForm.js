import React from 'react'
import { Link } from 'react-router-dom'
import Joi from '@hapi/joi'

import Form from '../form'

import userService from '../../services/userService'


class RegisterForm extends Form {
    constructor() {
        super()

        this.state = {
            formData: {
                firstName: '', lastName: '', email: '', password: ''
            },
            formErrors: {}
        }

        this.schema = Joi.object({
            firstName: Joi.string().min(2).required().label('First Name'),
            lastName: Joi.string().min(2).required().label('Last Name'),
            email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
            password: Joi.string().required().min(8).label('Password')
        })
    }

    submitForm = async () => {
        this.props.setAwaitingResponse(true)

        try {
            const { firstName, lastName, email, password } = this.state.formData
            await userService.register(firstName, lastName, email, password)
        } catch (e) {
            if (e.response && e.response.status === 400) {
                const errors = {}
                e.response.data.forEach(error => {
                    errors[error.context.key] = error.message
                })
                this.setState({ formErrors: errors })
            } else {
                console.log(e)
            }
        }
        this.props.setAwaitingResponse(false)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.renderInput('firstName', 'First Name')}
                {this.renderInput('lastName', 'Last Name')}
                {this.renderInput('email', 'Email')}
                {this.renderInput('password', 'Password', 'password')}

                <p>By creating an account, you agree to our <Link to='/terms-and-conditions'>Terms & Conditions</Link> and <Link
                    to='/privacy-policy'>Privacy Policy</Link>.</p>

                <div className='form-group mt-15 align-items-center'>
                    <button type='submit' className='btn' style={{width: '40%'}}>Register</button>
                </div>
            </form>
        )
    }
}

export default RegisterForm