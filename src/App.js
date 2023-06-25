import "./App.css";
import React, { useState, useEffect } from 'react';
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import store from "./store";
import { setItems } from "./action";
import Axios from "axios";


function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const response = await Axios({
        url: "http://localhost:3000/courses.json",
      });

      store.dispatch(setItems(response.data))
      setIsLoaded(true)

    } catch (error) {
      console.log('prueba');
      console.log('verificando el update');
      console.log(error);
    }
  };

  useEffect(() => { fetchData(); });

  return (
    <div className="App">
      {
        !isLoaded ? <div>loading</div> : (
          <div>
            <CourseList></CourseList>
            <CourseForm></CourseForm>
            <div>prueba git merge!</div>
          </div>)

      }


      {/* <div><CourseItem key={""} courseName={""}></CourseItem></div> */}
    </div>
  );
}

export default App;
