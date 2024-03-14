import { useEffect, useState } from "react";

const useOnlinestatus = () => {

    const [Onlinestatus,setOnlineStatus]=useState(true)

    //Logic for online/offline

    useEffect(()=>{

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);

        });

        window.addEventListener("online",()=>{
            setOnlineStatus(true);

        })

    },[])

    //Boolean value
    return Onlinestatus;

};

export default useOnlinestatus;