import React from "react";
import './landing.css'
import Person_1 from "../components/person/person_1";
import Navbar from "../components/navbar/navbar";

function Landing(){
    return(
        <div>
  <Navbar/>

  <div className='frame_main'>
    <Person_1/>

  </div>
</div>



    )
}

export default Landing;