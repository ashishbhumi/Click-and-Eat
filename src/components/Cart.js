import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //Dispatch an action
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-10">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-center p-10 m-4 bg-pink-200 text-black font-semibold">
            Oh! Looks like you added nothing
            <br/>
            Please enjoy tasty food from anywhere😋
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
