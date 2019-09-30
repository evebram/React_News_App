import React from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import Yup from 'yup';

export class NewArticleForm extends React.Component {

  handleSubmit = (values, {
    props = this.props,
    setSubmitting
  }) => {

    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    return;
  }

  render() {

    return(
      <Formik
        initialValues={{
          title: '',
          journalist: '',
          date: '',
          summary: '',
          image: '',
          content: '',
          category: []
        }}
        validate={(values) => {
          let errors = {};

          if(!values.title)
             errors.title = "A title is required";

             return errors;
        }}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return(
            <Form>
              <div>
               <label>Title: </label>
               <Field type="text" name="title" placeholder="Your title here"/>
               <ErrorMessage name="title" />
              </div>

              <div>
                <label>Author: </label>
                <Field component="select" name="journalist" placeholder="Choose an author">
                  <option value="Ben">Ben</option>
                  <option value="Eve">Eve</option>
                  <option value="Daniela">Daniela</option>
                  <option value="Graeme">Graeme</option>
                </Field>
                <ErrorMessage name="journalist" />
              </div>

              <div>
               <label>Summary: </label>
               <Field type="text" name="summary" placeholder="Write a brief summary of your article"/>
               <ErrorMessage name="summary" />
              </div>

                <button
                  type="submit"
                  disabled={formProps.isSubmitting}>
                    Submit Form
                 </button>
              </Form>
           );
        }}
     />);
   }
}

export default NewArticleForm;
