import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  CustomInput,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Row,
  Container
} from 'reactstrap';
import {
  Formik
} from 'formik';
import * as Yup from 'yup'
import './ValidationForms.css'
import UserDataServices from '../../../api/users/UserDataServices';

const validationSchema = function (values) {
  return Yup.object().shape({
  
    userName: Yup.string()
      .min(5, `Username has to be at least 5 characters`)
      .required('Username is required'),
   
    password: Yup.string()
      .min(6, `Password has to be at least ${6} characters!`)
      .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([values.password], 'Passwords must match')
      .required('Password confirmation is required'),
    
  })
}

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values)
    try {
      validationSchema.validateSync(values, {
        abortEarly: false
      })
      return {}
    } catch (error) {
      return getErrorsFromValidationError(error)
    }
  }
}

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }
  }, {})
}

const initialValues = {

  userName: "",

  password: "",
  confirmPassword: "",

}

const onSubmit = (values, {
  setSubmitting,
  setErrors,
}) => {
  let user = {
    username: values.userName,
    password: values.password
  }
  UserDataServices.createUser(user);
  
  setTimeout(() => {
    //alert(JSON.stringify(values, null, 2))
    if(user!=null){
      alert("Ajout avec succes!");
    }
    // console.log('User has been successfully saved!', values)
    setSubmitting(false)
  }, 1500)
}


class AddNewUser extends React.Component {

constructor(props){
    super(props)
    this.touchAll = this.touchAll.bind(this)

  }

  findFirstError (formName, hasError) {
    const form = document.forms[formName]
    for (let i = 0; i < form.length; i++) {
      if (hasError(form[i].name)) {
        form[i].focus()
        break
      }
    }
  }

  validateForm (errors) {
    this.findFirstError('simpleForm', (fieldName) => {
      return Boolean(errors[fieldName])
    })
  }

  touchAll(setTouched, errors) {
    setTouched({
    
        userName: true,
    
        password: true,
        confirmPassword: true,
   
      }
    )
    this.validateForm(errors)
  }

  render() {
    return (
      <div className="animated fadeIn">
      <Container>
        <Card className="mx-4">
          <CardHeader>
            <i className="icon-note"></i><strong>Nouveau Utilisateur</strong>
            
          </CardHeader>
          <CardBody className="p-4">
            
            
            <Formik
              initialValues={initialValues}
              validate={validate(validationSchema)}
              onSubmit={onSubmit}
              render={
                ({
                  values,
                  errors,
                  touched,
                  status,
                  dirty,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  isValid,
                  handleReset,
                  setTouched
                }) => (
                  <Row className="justify-content-center">
                    <Col md="8">
                      <Form onSubmit={handleSubmit} noValidate name='simpleForm'>
                        
                        <FormGroup>
                          <Label for="userName">Nom d'utilisateur</Label>
                          <Input type="text"
                                 name="userName"
                                 id="userName"
                                 placeholder="User Name"
                                 autoComplete="username"
                                 valid={!errors.userName}
                                 invalid={touched.userName && !!errors.userName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.userName} />
                          <FormFeedback>{errors.userName}</FormFeedback>
                        </FormGroup>
                        
                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="password">Mot de Passe</Label>
                              <Input type="password"
                                     name="password"
                                     id="password"
                                     placeholder="Password"
                                     autoComplete="new-password"
                                     valid={!errors.password}
                                     invalid={touched.password && !!errors.password}
                                     required
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.password} />
                              {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                              <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="confirmPassword">Confirmation Mot de Passe</Label>
                              <Input type="password"
                                     name="confirmPassword"
                                     id="confirmPassword"
                                     placeholder="Confirm password"
                                     autoComplete="new-password"
                                     valid={!errors.confirmPassword}
                                     invalid={touched.confirmPassword && !!errors.confirmPassword}
                                     required
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.confirmPassword} />
                              <FormFeedback>{errors.confirmPassword}</FormFeedback>
                            </FormGroup>
                          </Col>
                        </Row>
                        
                        <FormGroup>
                          <Button type="submit" color="success" block className="mr-1" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Patientez...' : 'Enregistrer'}</Button>
                          
                        </FormGroup>
                      </Form>
                    </Col>
                    
                  </Row>
                )} />
          </CardBody>
        </Card>
        </Container>
      </div>
    )
  }
}
export default AddNewUser;
