import React from 'react';
import { Button, Card, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, CardHeader, CardBody, Col, CustomInput, Form, FormFeedback, FormGroup, Label, Input,  Row} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup'
import './ValidationForms.css'

const validationSchema = function (values) {
  return Yup.object().shape({
    firstName: Yup.string()
    .min(2, `First name has to be at least 2 characters`)
    .required('First name is required'),
    lastName: Yup.string()
    .min(1, `Last name has to be at least 1 character`)
    .required('Last name is required'),
    userName: Yup.string()
    .min(5, `Username has to be at least 5 characters`)
    .required('Username is required'),
    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
    password: Yup.string()
    .min(6, `Password has to be at least ${6} characters!`)
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([values.password], 'Passwords must match')
    .required('Password confirmation is required'),
    accept: Yup.bool()
    .required('* required')
    .test('accept', 'You have to accept our Terms and Conditions!', value => value === true),
  })
}

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values)
    try {
      validationSchema.validateSync(values, { abortEarly: false })
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
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  accept: false
}

const onSubmit = (values, { setSubmitting, setErrors }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    // console.log('User has been successfully saved!', values)
    setSubmitting(false)
  }, 2000)
}

class AddNewEtudiant extends React.Component {
  constructor(props){
    super(props)
    this.touchAll = this.touchAll.bind(this);

    // dropdown
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(2).fill(false),
    };

  }

    toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
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
        firstName: true,
        lastName: true,
        userName: true,
        email: true,
        password: true,
        confirmPassword: true,
        accept: true
      }
    )
    this.validateForm(errors)
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className=""></i><strong>Inscription Etudiant</strong>
          </CardHeader>
          <CardBody>
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
                    <Col lg="8">
                      <Form onSubmit={handleSubmit} noValidate name='simpleForm'>

                      {/* ########################################################## */}
                        <div className="" id="identite">
                          <div className="colonne-centree">
                          <i className=""></i><strong className="h3">Identité</strong>
                          </div>
                          <div>
                        <FormGroup>
                          <Label for="firstName">CNE</Label>
                          <Input type="text"
                                 name="firstName"
                                 id="firstName"
                                 placeholder="CNE de l'étudiant"
                                 autoComplete="given-name"
                                 valid={!errors.firstName}
                                 invalid={touched.firstName && !!errors.firstName}
                                 autoFocus={true}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.firstName} />
                          <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="cin">Cin</Label>
                          <Input type="text"
                                 name="cin"
                                 id="cin"
                                 placeholder="Cin de l'étudiant"
                                 autoComplete="given-name"
                                 valid={!errors.firstName}
                                 invalid={touched.firstName && !!errors.firstName}
                                 
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.firstName} />
                          <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="firstName">Nom</Label>
                          <Input type="text"
                                 name="firstName"
                                 id="firstName"
                                 placeholder="Nom de l'étudiant"
                                 autoComplete="given-name"
                                 valid={!errors.firstName}
                                 invalid={touched.firstName && !!errors.firstName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.firstName} />
                          <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="lastName">Prénom</Label>
                          <Input type="text"
                                 name="lastName"
                                 id="lastName"
                                 placeholder="Prenom de l'étudiant"
                                 autoComplete="family-name"
                                 valid={!errors.lastName}
                                 invalid={touched.lastName && !!errors.lastName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.lastName} />
                          <FormFeedback>{errors.lastName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="firstName">Date Naissance</Label>
                          <Input type="text"
                                 name="firstName"
                                 id="firstName"
                                 placeholder="Date de naissance de l'étudiant"
                                 autoComplete="given-name"
                                 valid={!errors.firstName}
                                 invalid={touched.firstName && !!errors.firstName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.firstName} />
                          <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="firstName">Sexe</Label>
                          <Row>
                          <Col md={2}>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                  Homme
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md={2}>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                  Femme
                              </Label>
                            </FormGroup>
                          </Col>
                          </Row>

                        </FormGroup>
                        <FormGroup>
                          <Label for="firstName">Adresse</Label>
                          <Input type="text"
                                 name="firstName"
                                 id="firstName"
                                 placeholder="Adresse de l'étudiant"
                                 autoComplete="given-name"
                                 valid={!errors.firstName}
                                 invalid={touched.firstName && !!errors.firstName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.firstName} />
                          <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="firstName">Nationalité</Label>
                          <Input type="text"
                                 name="firstName"
                                 id="firstName"
                                 placeholder="Nationalité de l'étudiant"
                                 autoComplete="given-name"
                                 valid={!errors.firstName}
                                 invalid={touched.firstName && !!errors.firstName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.firstName} />
                          <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                        </div>
                        </div>

                        {/* ########################################################## */}
                        <div className="" id="contacts">
                          <div className="colonne-centree">
                          <i className=""></i><strong className="h3">Contacts</strong>
                          </div>
                          <div>
                        <FormGroup>
                          <Label for="userName">Tel</Label>
                          <Input type="text"
                                 name="userName"
                                 id="userName"
                                 placeholder="Numero Telephone de l'etudiant"
                                 autoComplete="username"
                                 valid={!errors.userName}
                                 invalid={touched.userName && !!errors.userName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.userName} />
                          <FormFeedback>{errors.userName}</FormFeedback>
                        </FormGroup>
                        
                        <FormGroup>
                          <Label for="email">Email</Label>
                          <Input type="email"
                                 name="email"
                                 id="email"
                                 placeholder="Email de l'étudiant"
                                 autoComplete="email"
                                 valid={!errors.email}
                                 invalid={touched.email && !!errors.email}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.email} />
                          <FormFeedback>{errors.email}</FormFeedback>
                        </FormGroup>
                        </div>
                        </div>
                        
                        {/* ########################################################## */}
{/*                        <div className="" id="parents">
                          <div className="colonne-centree">
                          <i className=""></i><strong className="h3">Informations Parents</strong>
                          </div>
                          <div>
                        <FormGroup>
                          <Label for="userName">Père</Label>
                          <Input type="text"
                                 name="userName"
                                 id="userName"
                                 placeholder="Nom et prenom du Père l'etudiant"
                                 autoComplete="username"
                                 valid={!errors.userName}
                                 invalid={touched.userName && !!errors.userName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.userName} />
                          <FormFeedback>{errors.userName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="firstName">Sa Profession</Label>
                          <Input type="text"
                                 name="firstName"
                                 id="firstName"
                                 placeholder="Profession du père de l'étudiant"
                                 autoComplete="given-name"
                                 valid={!errors.firstName}
                                 invalid={touched.firstName && !!errors.firstName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.firstName} />
                          <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="email">Mère</Label>
                          <Input type="email"
                                 name="email"
                                 id="email"
                                 placeholder="Nom et prénom de la Mère de l'étudiant"
                                 autoComplete="email"
                                 valid={!errors.email}
                                 invalid={touched.email && !!errors.email}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.email} />
                          <FormFeedback>{errors.email}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="firstName">Sa Profession</Label>
                          <Input type="text"
                                 name="firstName"
                                 id="firstName"
                                 placeholder="Profession de la Mère de l'étudiant"
                                 autoComplete="given-name"
                                 valid={!errors.firstName}
                                 invalid={touched.firstName && !!errors.firstName}
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.firstName} />
                          <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                        </div>
                        </div>
*/}
                        
                        {/* ########################################################## */}
                        <div className="" id="etude">
                          <div className="colonne-centree">
                          <i className=""></i><strong className="h3">Etude</strong>
                          </div>
                          <div>
                        <Row>
                          <Col md={6}>
                        <FormGroup>
                          <Label for="userName">Niveau</Label>
                          <Input type="select" name="select" id="exampleSelect">
                              <option>1ère Année</option>
                              <option>2ème Année</option>
                              <option>3ème Année</option>
                              <option>4ème Année</option>
                              <option>5ème Année</option>
                            </Input>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                          <Label for="Filiere">Filière</Label>
                          <Input type="select" name="select" id="exampleSelect">
                              <option>Filière A</option>
                              <option>Filière B</option>
                              <option>Filière C</option>
                              <option>Filière D</option>
                              <option>Filière E</option>
                            </Input>
                        </FormGroup>
                        </Col>
                        </Row>
                        
                        </div>
                        </div>

                        
                        {/* ########################################################## */}
                        
                        
                        <FormGroup>
                          <Button type="submit" color="primary" className="mr-1" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Wait...' : 'Inscrire'}</Button>
                          <Button type="reset" color="danger" className="mr-1" onClick={handleReset}>Reinitialisé</Button>
                        </FormGroup>
                      
                      </Form>
                    </Col>
                    {/* <Col lg="6">
                      <Card className={isValid ? 'bg-info' : 'bg-secondary'}>
                        <CardBody>
                          <pre>values: {JSON.stringify(values, null, 2)}</pre>
                          <pre>errors: {JSON.stringify(errors, null, 2)}</pre>
                          <pre>touched: {JSON.stringify(touched, null, 2)}</pre>
                        </CardBody>
                      </Card>
                    </Col> */}
                  </Row>
                  
                )} />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default AddNewEtudiant;
