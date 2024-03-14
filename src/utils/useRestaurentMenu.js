import { useEffect, useState } from "react";
import { Menu_Api } from "../utils/constant";

const useRestaurentMenu = (resID) => {

    const [resInfo,setResInfo]=useState(null);

    //fetch the data
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(Menu_Api + resID);
    
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurentMenu;