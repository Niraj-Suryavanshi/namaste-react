import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
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
