import React from "react";
import './landing.css'
import Person_2 from "../components/person/person_2";
import Navbar from "../components/navbar/navbar";

function Landing1(){
    return(
        <div>
  <Navbar/>

  <div className='frame_main'>
    <Person_2/>

  </div>
</div>



    )
}

export default Landing1;