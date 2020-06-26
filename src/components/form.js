import React from 'react'
import Joi from '@hapi/joi'

class Form extends React.Component {

    inputChangeHandler = ({ currentTarget: input }) => {
        const errorMessage = this.validateProperty(input)
        const formErrors = { ...this.state.formErrors }

        if (errorMessage) formErrors[input.name] = errorMessage
        else delete formErrors[input.name]

        const formData = { ...this.state.formData }
        formData[input.name] = input.value

        this.setState({ formData, formErrors })
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value }

        const schema = Joi.object({ [name]: this.schema.extract(name) })

        const { error } = schema.validate(obj)
        return error ? error.details[0].message : null
    }

    validate() {
        const options = { abortEarly: false }
        const schema = Joi.compile(this.schema)
        const { error } = schema.validate(this.state.formData, options)

        const errors = {}
        if (error) {
            for (let err of error.details) {
                errors[err.path[0]] = err.message
            }
        }

        return errors
    }

    submitHandler = async (e) => {
        e.preventDefault()

        const errors = this.validate()
        this.setState({ errors: errors })

        if (Object.keys(errors).length > 0) return

        await this.submitForm()
    }

    renderInput(name, label, type = 'text') {
        const { formData, formErrors } = this.state

        return (
            <div className='form-group mt-30'>
                <input type={type} name={name} value={formData[name]} onChange={this.inputChangeHandler} required />
                <span className='bar'></span>
                <label>{label}</label>
                {formErrors[name] ? <span className='form-error'>{formErrors[name]}</span> : ''}
            </div>
        )
    }

    renderButton(text) {
        return (
            <div className='form-group'>
                <button clickHandler={this.submitHandler}>{text}</button>
            </div>
        )
    }

    renderSelect(name, label, options = []) {
        const { formData, errors } = this.state
        options = options.map(option => {
            return <option key={option.value} value={option.value}>{option.text}</option>
        })

        return (
            <div className='form-group'>
                <select
                    name={name}
                    error={errors[name]}
                    value={formData[name]}
                    onChange={this.inputChangeHandler}>
                    {options}
                </select>
                <label>{label}</label>
            </div>
        )
    }
}

export default Form