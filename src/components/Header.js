import { useState } from "react";
import Image from "../../clickandeat.jpeg";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setstate] = useState("Login");
  const Onlinestatus = useOnlinestatus();

  //Subscribing to thr cart using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between  bg-pink-100 shadow-xl sm: lg:bg-blue-400 ">
      <div className="logo-container">
        <Link to="/">
          <img className="w-48 m-4 p-4" src={Image} height={50} width={50} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex  p-4 m-4">
          <li className="px-4  hover:bg-sky-700 hover:font-semibold hover:text-white rounded-lg">
            Online:{Onlinestatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4  hover:bg-sky-700 hover:font-semibold hover:text-white  rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  hover:bg-sky-700 hover:font-semibold hover:text-white rounded-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4  hover:bg-sky-700 hover:font-semibold hover:text-white rounded-lg">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 text-xl font-bold  hover:bg-sky-700 hover:font-semibold rounded-lg hover:text-white">
            <Link to="/cart">🛒({cartItems.length}items)</Link>
          </li>
          <li className="px-4  hover:bg-sky-700 hover:font-semibold hover:text-white rounded-lg">
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <button
            className="px-4  hover:bg-sky-700 hover:font-semibold hover:text-white rounded-lg "
            onClick={() => {
              btnname === "Login" ? setstate("Logout") : setstate("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
