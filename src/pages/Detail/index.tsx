import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import IndexContext from "../../context";
import axios from "../../axios";
import "./style.scss";

const Detail = () => {
  const ctx: any = useContext(IndexContext);
  const haveIndex = ctx.chosenIndex;

  const [state, setState] = useState<any[]>([]);
  const [value, setValue] = useState();

  useEffect(() => {
    axios.get(`/search.php?s=ad`).then((response: any) => {
      setState(response.data.drinks);
    });
  }, [value]);
  return (
    <div>
      <Header />
      {state.map((item, index) => (
        <div className="classone" key={index}>
          {haveIndex === index && (
            <div className="classtwo">
              <img className="mainImage" src={item.strDrinkThumb} alt="image" />
              <div className="classthree">
                {item.strIngredient1 +
                  ", " +
                  item.strIngredient2 +
                  ", " +
                  item.strIngredient3}
              </div>
              <span className="classfour">
                Valentine’s Day, ah, what a magical time of year. Everything is
                pink and fluffy and full of gushy and bleh. It’s not really my
                thing. Sure, I’ll celebrate, but it’s more an at-home, make a
                good meal kinda thing. It’s not go out, have a big showoff be
                fancy deal. There’s no need to score internet points by being
                extremely extravagant in your grand gestures (especially if
                they’re reserved for only one day a year). Let’s all fill our
                hearts with love and joy by having a nice drink, like the Bitter
                Valentine.
              </span>
              <img
                className="imageone"
                src="https://www.thedrinkblog.com/wp-content/uploads/2018/02/tdb-bitter-valentine01.jpg"
                alt="cocktail"
              />
              <span className="classfive">
                The last time I made a big effort to go out on Valentine’s Day,
                I decided Alice and I should eat at one of our favorite
                restaurants in LA: The Foundry on Melrose. There’s nothing we
                didn’t love about that place, the food was amazing, the service
                was second to none, the grilled cheese was mind blowing, it’s
                still the best burger I’ve ever had, the cocktails were on
                point, literally (thanks Bobby [there’s a story there too, but
                that’s another post]) everything was stupendous. However, the
                downside of going on the big V day is that it’s always a set
                menu. I completely understand this as it’s difficult to knock
                out a full menu when you’re trying to turn tables and get in as
                many love birds as possible. Still, the meal was good, but I
                knew I wanted to go back for the full experience — mostly
                because a few of my favorites weren’t on the set menu. Then they
                closed.
              </span>
              <img
                className="imagetwo"
                src="https://www.thedrinkblog.com/wp-content/uploads/2018/02/tdb-bitter-valentine04.jpg"
                alt="shit"
              />
              <img
                className="imagethree"
                src="https://www.thedrinkblog.com/wp-content/uploads/2018/02/tdb-bitter-valentine05.jpg"
                alt="shitty"
              />
              <span className="classsix">
                If you’ve never tried Amaro Lucano, it’s earthy, bitter and has
                some unique botanical notes. One of the things that it really
                works with is strawberry. If you don’t believe me, go take a
                swig and consider for yourself. I’ll wait. After deciding to go
                down Strawberry Lane, I must have been inspired by spring’s
                encroaching nature (at least here in California where it’s
                hovering around 77°F today) and figured a nice tequila would
                work famously. Now we were set with Amaro Lucano, tequila,
                strawberry liqueur and something. We needed something else in
                there to round out the flavors. That something else turned out
                to be lemon. Mix those all together and you have yourself a
                refreshing, slightly bitter, slightly sweet, endlessly tasty
                cocktail. Whether you love the big day for teddy bears or hate
                it, you’ll enjoy the Bitter Valentine. For everyone else, let’s
                get to the Bitter Valentine!
              </span>
              <img
                className="imagefour"
                src="https://www.thedrinkblog.com/wp-content/uploads/2018/02/tdb-bitter-valentine07.jpg"
                alt="fuck"
              />
            </div>
          )}
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Detail;
