import React, { useState, useEffect } from "react";
import Axios from "axios";

/* const api = Axios.create({
  baseURL: "http://localhost:3000/courses.json",
}); */

export default function CourseList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([
    { id: 0, nameCourse: "estado inicial 1" },
  ]);

  /* useEffect(() => {
    setTimeout(() => {
      setItems([{ id: 0, content: "estado inicial 1" }]);
    }, 1000);
  }, []); */

  //   useEffect(() => {
  //     Axios({
  //       url: "http://localhost:3000/courses.json",
  //     })
  //       .then((response) => {
  //         setItems(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [setItems]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url: "http://localhost:3000/courses.json",
        });

        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setItems]);

  if (error) {
    return <div>Ocurrio un error</div>;
  } else {
    return (
      <>
        <div>
          {items.map((item) => (
            <div key={item.id}>{item.nameCourse}</div>
          ))}
        </div>
      </>
    );
  }
}
