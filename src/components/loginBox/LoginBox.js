import * as React from 'react';
import "./LoginBox.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const LoginBox = () => {

const navigate = useNavigate();

//Validation
const LoginSchema = Yup.object().shape({
  email:Yup.string().required("Email is required"), 
  password:Yup.string().required("Password is required"),
});

// const sendRequest = async (props) => {
//   const {values, actions} = props;
//   const res = await axios
//   .post("http://localhost:5000/api/login", {
//     email: em.values,
//     password: password.values,
//   }).then( (response) => {
//     // console.log(response.data.message);

//     toast.success("😇 You've just signed up successfully!", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       });
      
//       actions.setSubmitting(false);
      
//     setTimeout(() => {                      
//       navigate("/login");
//     }, 4000);


//   }).catch((err) => {

//     // console.log(err.response.data.message);
//     toast.error(`Oops! ${err.response.data.message}` , {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       });

//   }).finally(() => {     
//   actions.setSubmitting(false);
//     });
// };


  return (
    <div className='container mt-5 mb-5'>
      <Formik
              initialValues={{ 
                email: "",
                password:"",
               }}
              validationSchema={LoginSchema}
              onSubmit={(values, actions) => {
                
                alert(JSON.stringify(values, null, 2));
                 axios.post("http://localhost:5000/api/login", {
                    email: values.email,
                    password: values.password,
                  })
                  .then( (response) => {

                    // console.log(response.data.message);
                    toast.success("😇You're in! Welcome Roommie", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                      
                      actions.setSubmitting(false);
                      
                    setTimeout(() => {                      
                      navigate("/user");
                    }, 4000);


                  }).catch((err) => {
                    
                    // console.log(err.response.data.message);
                    toast.error(`Oops! ${err.response.data.message}` , {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });

                  }).finally(() => {     
                  actions.setSubmitting(false);
                    })
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form className="row g-3">
 
   
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

<div className="form-group form-check">
<Field type="checkbox" name="acceptTerms" className="form-check-input" />
<label htmlFor="acceptTerms" className="form-check-label">Remember me</label>
</div>

  <div className="col-12">
  <button
    type="submit"
    className="btn btn-primary btn-block"
    disabled={isSubmitting}
  >
    {isSubmitting ? "Please wait..." : "Login"}
  </button>
  </div>
  <ToastContainer />
                </Form>
              )}
            </Formik>


    </div>
  )
}

export default LoginBox