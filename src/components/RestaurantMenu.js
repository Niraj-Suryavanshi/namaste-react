import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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

  const finalItemCard = itemCards1 == null ? itemCards2 : itemCards1;

  const categories =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories is :", categories);

  const { name, cuisines, costForTwoMessage, avgRating } = info;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* Categories Accordion */}
      {categories.map((Category) => (
        <RestaurantCategory
          key={Category.card.card.title}
          data={Category.card.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
