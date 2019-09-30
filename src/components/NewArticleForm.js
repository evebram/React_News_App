import React from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage, FieldArray } from 'formik';
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

    const categories = ["Politics", "Eduction", "Health", "Tech", "Science", "Crime"];

    return(
      <Formik
        initialValues={{
          title: '',
          journalist: '',
          date: '',
          summary: '',
          image: null,
          content: '',
          category: ['Politics']
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
              <label>Image: </label>
               <input name="image" type="file" />
              </div>

              <div>
               <label>Summary: </label>
               <Field type="text" name="summary" placeholder="Write a brief summary of your article"/>
               <ErrorMessage name="summary" />
              </div>

              <div>
               <label>Content: </label>
               <Field type="text" name="content" placeholder="Main article body"/>
               <ErrorMessage name="content" />
              </div>

              // <div>
              //   <label>Category: </label>
              //     <FieldArray name="categorySelect">
              //       {categories.map((category, index) =>
              //         <label check key={index}>
              //         {category}
              //         <Field
              //         value={category}
              //         checked={this.state.taggedCategories === category}
              //         onChange={this.handleCategoryChange}
              //         type="checkbox" />{''}
              //       </label>
              //     )}
              //   </FieldArray>
              // </div>

              <div>
                <button
                  type="submit"
                  disabled={formProps.isSubmitting}>
                    Submit Form
                 </button>
              </div>
              </Form>
           );
        }}
     />);
   }
}

export default NewArticleForm;
