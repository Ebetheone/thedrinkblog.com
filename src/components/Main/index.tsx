/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useContext } from "react";
import axios from "../../axios";
import IndexContext from "../../context";
import "./style.scss";

const Main = () => {
  const [state, setState] = useState<any[]>([]);
  const [value, setValue] = useState();
  const [check, setCheck] = useState(false);
  const [chosenIndex, setChosenIndex] = useState<number>();

  const ctx: any = useContext(IndexContext);
  const HaveIndex = (props: any) => {
    ctx.HaveIndex(props);
  };

  useEffect(() => {
    axios.get(`/search.php?s=ad`).then((response: any) => {
      setState(response.data.drinks);
    });
  }, [value]);

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
            <div className="texts">
              <div className="title">
                {item.strIngredient1 +
                  ", " +
                  item.strIngredient2 +
                  ", " +
                  item.strIngredient3}
              </div>
              <div className="span">{item.strInstructions}</div>
              <a href="/detail" onClick={() => HaveIndex(index)}>
                read more
              </a>
            </div>
          </div>
          <div
            className="second"
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
            <div className="texts">
              <div className="title">
                {item.strIngredient1 +
                  ", " +
                  item.strIngredient2 +
                  ", " +
                  item.strIngredient3}
              </div>
              <div className="span">{item.strInstructions}</div>
              <a href="/detail" onClick={() => HaveIndex(index)}>
                read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
