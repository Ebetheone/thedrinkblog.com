import React, { useState, createContext } from "react";

const IndexContext = createContext();

const initialState = {
  index: 0,
};

export const Context = (props) => {
  const [state, setState] = useState(initialState);
  const haveIndex = (props) => {
    setState({ ...state, index: state.index + props });
  };
  return (
    <IndexContext.Provider value={{ state, haveIndex }}>
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexContext;
