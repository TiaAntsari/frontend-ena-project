import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserDataServices from '../../../api/users/UserDataServices';

class AddUserSimple extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    validate(values) {
        let errors = {}
        if (!values.username) {
            errors.username = 'Enter a username'
        } else if (values.username.length < 5) {
            errors.username = 'Enter atleast 5 Characters in username'
        }

        if (!values.password) {
          errors.password = 'Enter a password'
        } else if (values.password.length < 5) {
          errors.password = 'Enter atleast 5 Characters in password'
        }

        return errors

    }

    onSubmit(values) {

        let user = {
            username: values.username,
            password: values.password
        }

            UserDataServices.createUser(user)
                .then(() => this.props.history.push('/users'))

        console.log(values);
    }

    render() {

        let { username, password } = this.state
        //let targetDate = this.state.targetDate

        return (
            <div>
                <h1>Ajout New User</h1>
                <div className="container">
                    <Formik
                        initialValues={{ username, password }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="username" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="password" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Username</label>
                                        <Field className="form-control" type="text" name="username" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control" type="password" name="password" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Enregister</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default AddUserSimple