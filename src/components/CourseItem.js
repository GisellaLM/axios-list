import React from "react";

export default function CourseItem(props) {
  return (
    <>
      <div key={props.id}>{props.courseName}</div>
    </>
  );
}
