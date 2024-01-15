import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  //local state variables

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // const json = await data.json();
    // console.log(json);

    const json = await data.json();

    const restaurantInfoArray =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    const restaurantList = restaurantInfoArray.map(
      (restaurant) => restaurant?.info
    );

    setListOfRestaurants(restaurantList);
  };
  //conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.5
            );
            setListOfRestaurants(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-main">
        <div className="res-container">
          {listOfRestaurants.map((Restaurant, index) => (
            <RestaurantCard key={index} resData={Restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
