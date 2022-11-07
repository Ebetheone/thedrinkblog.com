import React, { useState, createContext } from "react";

const IndexContext = createContext();

const initialState = {
  index: 0,
};

export const Context = (props) => {
  const [state, setState] = useState(initialState);
  const HaveIndex = (props) => {
    setState({ ...state, index: props });
  };
  const chosenIndex = state.index;
  return (
    <IndexContext.Provider value={{ chosenIndex, HaveIndex }}>
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexContext;
