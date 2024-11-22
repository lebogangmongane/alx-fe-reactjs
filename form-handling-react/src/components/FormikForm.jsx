import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function FormikForm() {
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = (values) => {
    console.log("Formik Form Data Submitted:", values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label>Username:</label>
          <Field name="username" />
          <ErrorMessage name="username" component="div" />
        </div>
        <div>
          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
