import React, { useState, useEffect } from "react";
import Axios from "axios";
import CourseItem from "./CourseItem";
import {connect} from "react-redux";
import { setListItems } from '../rootReducers';



const CourseList = (props) => {

  if(props.courses!=null){
    return (
      <>
        <div>
           {props.courses.map((item) => (
             <CourseItem key={item.id} courseName={item.courseName}/>
             //<div key={item.id}>{item.courseName}</div> 
            
          ))}
        </div>
      </>
    );
  }
  else{
    return(
    <div>asdasd</div>
    )
  }

  
  
}

const mapStateToProps = (state,ownProps) =>{
     return {
        courses: state.app.courses
        //courses: setListItems(state.courses)
    }
}

export default connect(mapStateToProps)(CourseList)