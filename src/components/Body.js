import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local state variables

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-main">
        <div className="res-container">
          {listOfRestaurants.map((Restaurant) => (
            <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
