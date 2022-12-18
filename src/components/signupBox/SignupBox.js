import * as React from 'react';
import "./SignupBox.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

const SignupBox = () => {

const emailAddresses =[
  'test@gmail.com',
  'total@gmail.com',
  'onabajooluwakeji.daniel@gmail.com'
]

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/


const signupSchema = Yup.object().shape({
  firstname:Yup.string().required("Firstname is required"),
  lastname:Yup.string().required("Lastname is required"),
  email:Yup.string()
  .lowercase()
  .email("Please enter a valid email address")
  .notOneOf(emailAddresses, "Email already exist").required("Email is required"),
  phone: Yup.string()
  .matches(phoneRegExp, "Phone number is not valid")
  .required("*Phone number required"),  
  username:Yup.string().required("Username is required"),
  state:Yup.string().required("State is required"),
  lga:Yup.string().required("Your LGA is required"),
  password:Yup.string().min(8, "Password is not secure")
  .matches(/(?=.*[a-z])/, 'Atleast 1 lowercase required!')
  .matches(/(?=.*[A-Z])/, 'Atleast 1 uppercase required!')
  .matches(/(?=.*[0-9])/, 'Atleast 1 numeric character required!').required("Password is required"),
  cPassword:Yup.string().oneOf([Yup.ref('password')], "Password must be the same").required("Please confirm password"),
  acceptTerms: Yup.bool().oneOf([true], 'You must accept before submitting'),
});

// const sendRequest = async (props) => {
//   const res = await axios
//     .post("http://localhost:5000/api/signup", props)
//     .catch((err) => console.log(err))
//     .finally(() => {
//       // Hide loading text while fetching profile
//       setLoading(false);
//       setActiveProfile(true);
//     })
//   const data = await res.data;
//   return data;
// };


  return (
    <div className='container mt-5 mb-5'>
      <Formik
              initialValues={{           
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                username: "",
                state: "",
                lga: "",
                password:"",
                cPassword: "",
                acceptTerms: false
               }}
              validationSchema={signupSchema}
              onSubmit={(values, actions) => {
                
                console.log(values);
                // alert(JSON.stringify(values, null, 2));
                // actions.setSubmitting(true);
                
                  axios.post("http://localhost:5000/api/signup", {
                    firstname: values.firstname,
                    lastname: values.lastname,
                    email: values.email,
                    phone: values.phone,
                    username: values.username,
                    state: values.state,
                    lga: values.lga,
                    password: values.password,
                  })
                  .then( (response) => {
                    console.log(response.data.message);
                  }).catch((err) => {
                    console.log(err.response.data.errors);
                  }).finally(() => {     
                  actions.setSubmitting(false);
                    });
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form className="row g-3">
 
      <div className="form-group">
    <label htmlFor="firstname" className="form-label">First name</label>
    <Field
      type="text"
      name="firstname"
      id="firstname"
      placeholder="Enter firstname"
      className={`form-control ${
      touched.firstname && errors.firstname ? "is-invalid" : ""
      }`}
      />
      <ErrorMessage
        component="div"
        name="firstname"
        className="invalid-feedback"
      />
      </div>

<div className="form-group">
    <label htmlFor="lastname" className="form-label">Last name</label>
    <Field
      type="text"
      name="lastname"
      id="lastname"
      placeholder="Enter lastname"
      className={`form-control ${
      touched.lastname && errors.lastname ? "is-invalid" : ""
      }`}
      />
      <ErrorMessage
        component="div"
        name="lastname"
        className="invalid-feedback"
      />
      </div>

<div className="form-group">
    <label htmlFor="email" className="form-label">Email address</label>
    <Field
      type="email"
      name="email"
      id="email"
      placeholder="Enter email address"
      className={`form-control ${
      touched.email && errors.email ? "is-invalid" : ""
      }`}
      />
      <ErrorMessage
        component="div"
        name="email"
        className="invalid-feedback"
      />
      </div>

<div className="form-group">
    <label htmlFor="phone" className="form-label">Phone number</label>
    <Field
      type="tel"
      name="phone"
      id="phone"
      placeholder="Enter phone number"
      className={`form-control ${
      touched.phone && errors.phone ? "is-invalid" : ""
      }`}
      />
      <ErrorMessage
        component="div"
        name="phone"
        className="invalid-feedback"
      />
      </div>

<div className="form-group">
    <label htmlFor="username" className="form-label">username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
    <Field
      type="text"
      name="username"
      id="username"
      placeholder="Enter username"
      className={`form-control ${
      touched.username && errors.username ? "is-invalid" : ""
      }`}
      />
      <ErrorMessage
        component="div"
        name="username"
        className="invalid-feedback"
      />
      </div>
      </div>

      <div className="form-group">
    <label htmlFor="state" className="form-label">State</label>
    <Field name="state" id="state" as="select"
    className={`form-select ${ touched.state && errors.state ? "is-invalid" : "" }`}
      >
      <option disabled value="">Select state</option>
      <option value="Otto">...</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
 </Field>
      <ErrorMessage
        component="div"
        name="state"
        className="invalid-feedback"
      />
      </div>

 <div className="form-group">
    <label htmlFor="lga" className="form-label">Local Government Area</label>
    <Field name="lga" id="lga" as="select" className={`form-select ${ touched.lga && errors.lga ? "is-invalid" : "" }`}
      >
      <option disabled value="">Select LGA</option>
      <option value="Otto">...</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
 </Field>
      <ErrorMessage
        component="div"
        name="lga"
        className="invalid-feedback"
      />
      </div>

      <div className="form-group">
    <label htmlFor="password" className="form-label">Password</label>
    <Field
      type="password"
      name="password"
      placeholder="Enter your password"
      className={`form-control ${
      touched.password && errors.password ? "is-invalid" : ""
      }`}
      />
      <ErrorMessage
        component="div"
        name="password"
        className="invalid-feedback"
      />
      </div>

      <div className="form-group">
    <label htmlFor="cPassword" className="form-label">Confirm password</label>
    <Field
      type="password"
      name="cPassword"
      placeholder="Confirm password"
      className={`form-control ${ touched.cPassword && errors.cPassword ? "is-invalid" : "" }`}
      />
      <ErrorMessage
        component="div"
        name="cPassword"
        className="invalid-feedback"
      />
      </div>

<div className="form-group form-check">
<Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
<label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
<ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
</div>

  <div className="col-12">
  <button
    type="submit"
    className="btn btn-primary btn-block"
    disabled={isSubmitting}
  >
    {isSubmitting ? "Please wait..." : "Submit"}
  </button>
  </div>
                </Form>
              )}
            </Formik>


    </div>
  )
}

export default SignupBox