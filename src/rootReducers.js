const initialState = { courses: [] };

export default (prevState = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...prevState,
        courses: action.payload,
      };
    case "ADD_ITEM":
      return {
        ...prevState,
        courses: [...prevState.courses, action.payload],
      };

    default:
      return prevState;
  }
};


