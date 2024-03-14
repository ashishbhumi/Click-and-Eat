import Restaurentcard, { WithVegLabel } from "./RestaurentCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listofrestro, setlistofrestro] = useState([]);
  const [filteredrestro, setlistoffilteredrestro] = useState([]);
  const [searchtxt, setsearchtxt] = useState("");

  const RestaurentCardVeg = WithVegLabel(Restaurentcard);

  console.log("Body rendered ", listofrestro);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2722072&lng=77.4684046&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    console.log(json);
    setlistofrestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistoffilteredrestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const Onlinestatus = useOnlinestatus();

  if (Onlinestatus === false) {
    return <h1>You are not Connected to Internet</h1>;
  }

  return listofrestro?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="Filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchtxt}
            onChange={(e) => {
              setsearchtxt(e?.target?.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-300  rounded-xl shadow-2x"
            onClick={() => {
              console.log(searchtxt);
              const filteredData = listofrestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
              );
              setlistoffilteredrestro(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 m-4 bg-green-300 rounded-xl shadow-2xl"
            onClick={() => {
              const filteredlist = listofrestro?.filter(
                (res) => res?.info?.avgRating > 4.0
              );
              setlistoffilteredrestro(filteredlist);
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
      </div>
      <div className="res-container flex  flex-wrap ">
        {filteredrestro?.map((restaurent) => (
          <Link
            key={restaurent?.info?.id}
            to={"/restaurents/" + restaurent?.info?.id}
          >
          {
             restaurent.info.veg?<RestaurentCardVeg resData={restaurent}/>:<Restaurentcard resData={restaurent} />
          }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
