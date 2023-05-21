/**
 * created by surendra yalakala
 */

import { LOGO_URL } from "../utils/constants";

const FoodItems = (props) => {
  const { name, price, description, ratings } = props;
  console.log(name);

  return (
    <div className="bg-blue-100 shadow-lg w-52 m-2">
      <img className="res-logo" alt="res-logo" src={LOGO_URL} />
      <div className="p-2">
        <h3 className="font-sans text-sm text-black py-1">{name}</h3>
        <h4 className="font-sans text-xs text-gray-600 py-1">{description}</h4>
        <h4 className="font-sans text-xs text-gray-600 py-1">₹{price / 100}</h4>
        <h4 className="font-sans text-xs text-gray-600 py-1">
          {ratings?.aggregatedRating?.rating}
        </h4>
      </div>
    </div>
  );
};

export default FoodItems;
