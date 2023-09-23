


import Banner from "../Header/Banner";

import Phones from "../Phones/Phones";
import { useEffect, useState } from "react";



const Home = () => {
        

  

    

    const [data,setData]=useState()
   
    useEffect(()=>{
        fetch(`phones.json`)
        .then(res => res.json())
        .then(data=>setData(data))
    },[])
    
    return (
        <div>
                
                 <Banner></Banner> 
                 <Phones data={data}></Phones> 
                 
        </div>
    );
};

export default Home;