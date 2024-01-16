import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  //local state variables

  console.log("body rendered");

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [serchText, setSearchText] = useState("");

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

    //optional chaining

    const restaurantList = restaurantInfoArray.map(
      (restaurant) => restaurant?.info
    );
    console.log("data fetched again");
    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };

  //conditional rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="input-text"
            value={serchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-text"
            onClick={() => {
              //Filter the restaurant card in update the UI
              // console.log(serchText);

              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(serchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.1
            );
            setListOfRestaurants(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-main">
        <div className="res-container">
          {filteredRestaurants.map((Restaurant, index) => (
            <RestaurantCard key={index} resData={Restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
