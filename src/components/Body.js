import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-main">
        <div className="res-container">
          {resList.map((Restaurant) => (
            <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
