import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=243517&catalog_qa=undefined&submitAction=ENTER"
      );

      const json = await data.json();

      setResInfo(json.data);
      console.log("New Data", json.data);
    } catch (error) {
      console.log("Error occure", error.message);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const info = resInfo?.cards?.[0]?.card?.card?.info;

  const itemCards =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  //   console.log("ItemCards", itemCards);

  const { name, cuisines, costForTwoMessage } = info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}> {item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
