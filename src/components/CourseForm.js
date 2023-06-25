import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addItem } from "../action";
import { v4 as uuid } from 'uuid';

const CourseForm = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    console.log("por añadir");
    let datos = getValues();
    datos.id= uuid();
    props.dispatch(addItem(datos));
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          
        <div>
          <label>Name course</label>
          <input {...register("courseName")}></input>
        </div>
        <div>
          <label>Number course</label>
          <input {...register("courseNumber", { pattern: /\d+/ })} />
          {errors.age && <p>Please enter a number.</p>}
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.app.courses,
  };
};

export default connect(mapStateToProps)(CourseForm);
