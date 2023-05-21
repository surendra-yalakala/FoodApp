import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = (props) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const cleartCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button
        className="p-1 bg-red-200 font-sans text-xs"
        onClick={() => cleartCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <FoodItems key={item.id} {...cartItems[0]} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
