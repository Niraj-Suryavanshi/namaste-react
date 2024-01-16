import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

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
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
