/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./style.scss";

const Main = () => {
  const [state, setState] = useState<any[]>([]);
  const [value, setValue] = useState();
  const [filter, setFilter] = useState();
  const [check, setCheck] = useState(false);
  const [chosenIndex, setChosenIndex] = useState<number>();

  useEffect(() => {
    if (filter === "Letter") {
      axios.get(`/search.php?f=${value}`).then((response: any) => {
        setState(response.data.drinks);
      });
    } else if (filter === "Name") {
      axios.get(`/search.php?s=${value}`).then((response: any) => {
        setState(response.data.drinks);
      });
    } else if (filter === "Ingredient") {
      axios.get(`/search.php?i=${value}`).then((response: any) => {
        setState(response.data.drinks);
      });
    } else if (filter === "Random") {
      axios.get(`/random.php`).then((response: any) => {
        setState(response.data.drinks);
      });
    } else {
      axios.get(`/search.php?s=ad`).then((response: any) => {
        setState(response.data.drinks);
      });
    }
  }, [value]);

  // function handleNameChange(event: any) {
  //   const name = event.target.value;

  //   setValue(name);
  // }
  // function handleTypeChange(event: any) {
  //   const type = event.target.value;
  //   setFilter(type);
  // }
  // function handleSubmit(event: any) {
  //   event.preventDefault();
  // }

  console.dir(state);
  return (
    <div className="start">
      {state.map((item, index) => (
        <div className="grid" key={index}>
          <div
            className="first"
            onMouseEnter={() => {
              setCheck(true);
              setChosenIndex(index);
            }}
            onMouseLeave={() => setCheck(false)}
          >
            {check && index === chosenIndex && (
              <div className="name">
                <div className="title">
                  {item.strIngredient1 +
                    ", " +
                    item.strIngredient2 +
                    ", " +
                    item.strIngredient3}
                </div>
              </div>
            )}
            <img src={item.strDrinkThumb} alt="image" />
          </div>
          <div className="second">
            <img src={item.strDrinkThumb} alt="image" />
            <div className="texts">
              <div className="title">
                {item.strIngredient1 +
                  ", " +
                  item.strIngredient2 +
                  ", " +
                  item.strIngredient3}
              </div>
              <div className="span">{item.strInstructions}</div>
              <a href="/detail">read more</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
