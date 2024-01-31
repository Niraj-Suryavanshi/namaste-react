import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  console.log("body rendered", listOfRestaurants);

  const [serchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

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

    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline !! Please check your internet connection and
        try again !!!
      </h1>
    );

  //conditional rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="rounded-md border mx-2 border-gray-300 "
            type="input-text"
            value={serchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-text mx-2 bg-gray-300 rounded-md  px-5"
            onClick={() => {
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
          className="filter-btn rounded-md bg-green-300  px-5"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.4
            );
            setFilteredRestaurants(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search-container">
          <label>UserName: </label>
          <input
            className="rounded-md border mx-2 border-gray-300 "
            type="input-text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-main">
        <div className="res-container">
          {filteredRestaurants.map((Restaurant, index) => (
            <Link
              className="link-card"
              to={"restaurants/" + Restaurant.id}
              key={Restaurant.id}
            >
              <RestaurantCard key={index} resData={Restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
