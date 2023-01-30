import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { axiosPost } from "../../axios/config";

const initialValues = {
  title: "",
  answer: "",
  options: [""],
};

const AddQuestions = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axiosPost("/api/v1/test", values);
      if (!response.status) {
        return alert(response.message || "oops something went wrong....");
      } else {
        alert("Hurray...post request successfully");
        values.title = "";
        values.answer = "";
        values.options = [""];
      }
    } catch (error) {
      alert("there is some issues...");
      console.error(error);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="answer">Answer</label>
              <input
                id="answer"
                name="answer"
                type="text"
                value={values.answer}
                onChange={handleChange}
              />
            </div>
            <div>
              <FieldArray name="options">
                {({ insert, remove, push }) => (
                  <div>
                    {values.options.length > 0 &&
                      values.options.map((friend, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`options[${index}]`}>Name</label>
                            <Field
                              name={`options.[${index}]`}
                              placeholder="Jane Doe"
                              type="text"
                            />
                            <ErrorMessage
                              name={`options[${index}]`}
                              component="div"
                              className="field-error"
                            />
                          </div>

                          <div className="col">
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push("")}
                    >
                      Add Option
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddQuestions;
