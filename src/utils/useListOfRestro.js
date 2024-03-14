import { ResList_Api } from "../utils/constant";
import { useState ,useEffect} from "react";

const useListOfRestro = () => {
  const [listofrestro, setlistofrestro] = useState(null);
  useEffect(() => {
    fetchdata();
  },[]);

  const fetchdata = async () => {
    const data = await fetch(ResList_Api);
    const json = await data?.json();
    console.log(json);
    setlistofrestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listofrestro;
};

export default useListOfRestro;
