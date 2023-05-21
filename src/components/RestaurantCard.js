/**
 * created by surendra yalakala
 */

import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
  return (
    <div className="bg-blue-100 shadow-lg w-52 m-2">
      <img className="res-logo" alt="res-logo" src={LOGO_URL} />
      <div className="p-2">
        <h3 className="font-sans text-sm text-black py-1">{name}</h3>
        <h4 className="font-sans text-xs text-gray-600 py-1">
          {cuisines.join(", ")}
        </h4>
        <h4 className="font-sans text-xs text-gray-600 py-1">{avgRating}</h4>
        <h4 className="font-sans text-xs text-gray-600 py-1">
          ₹{costForTwo / 100} FOR TWO
        </h4>
        <h4 className="font-sans text-xs text-gray-600 py-1">{deliveryTime}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
