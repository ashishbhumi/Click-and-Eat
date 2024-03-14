import { useEffect, useState } from "react";
import { ResList_Api } from "../utils/constant";

const useFilteredRestro = (filteredData) => {
  const [filteredRestro, setlistoffilteredrestro] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ResList_Api);
    const json = await data.json();
    setlistoffilteredrestro(
      filteredData
    );
  };

  return filteredRestro;
};

export default useFilteredRestro;