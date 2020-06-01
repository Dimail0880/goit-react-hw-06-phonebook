import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import BasicFormSchema from "../../helpers/validation";
import styles from "./Form.module.css";
import { v4 as uuidv4 } from "uuid"; // uuidv4()

export default class FormFormik extends Component {
  state = {
    name: "",
    number: "",
  };

  handleNameChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleNumberChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addItem(newContact);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    const { name, number } = this.state;
    const initialValues = this.state;
    console.log(name, number);
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={BasicFormSchema}
        onSubmit={this.handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Field
              type="text"
              name="name"
              value={name}
              onChange={this.handleNameChange}
              className={styles.input}
            />

            {errors.name && touched.name && <div>{errors.name}</div>}

            <Field
              type="text"
              name="number"
              value={number}
              onChange={this.handleNumberChange}
              className={styles.input}
            />

            {errors.number && touched.number && <div>{errors.number}</div>}

            <button
              type="submit"
              // onClick={this.handleSubmit}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}
