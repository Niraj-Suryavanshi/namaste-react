import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(Menu_API + resId);

      const json = await data.json();

      setResInfo(json.data);
      console.log("ResInfo here", resInfo);
    } catch (error) {
      console.log("Error occure", error.message);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const info = resInfo?.cards?.[0]?.card?.card?.info;

  const itemCards1 =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  const itemCards2 =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;

  // console.log(itemCards);
  const finalItemCard = itemCards1 == null ? itemCards2 : itemCards1;

  const { name, cuisines, costForTwoMessage, avgRating } = info;

  return (
    <div className="menu">
      <div className="menu-container">
        <div className="menu-info">
          <div>
            <h1>{name}</h1>
            <p>
              {cuisines.join(",")} - {costForTwoMessage}
              <br />
            </p>
          </div>
          <button className="rating-btn">{avgRating} Star</button>
        </div>
        <hr />
        <div className="main-menu-items">
          <button className="menu-btn">
            <h3>Recommended</h3>
          </button>
          <ul>
            {finalItemCard.map((item, index) => (
              <li className="menu-name" key={index}>
                {item?.card?.info?.name}
                <li>
                  Rs.
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </li>

                <p className="menu-desc">{item?.card?.info?.description}</p>
                <br />
                <br />
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
