import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="res-img-container ">
        <img
          className="res-img"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>

      <div className="res-desc">
        <h3 className="res-name">{name}</h3>
        <div className="res-rating">
          <h4>{avgRating} Star .</h4>
          <h4>{sla.deliveryTime} mins</h4>
        </div>
        <h4 className="cuisines-style ">{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{loggedInUser}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
