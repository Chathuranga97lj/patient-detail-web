import React from 'react'
import './person.css'
import pic2 from './pic2.jpg'
import temperature from './temperature 1.png'
import io2 from './o2 1.png'
import heart from './heart 1.png'

function Person_2(){
  return (
    <div>
        <div className='frame_1'>
        
            <img src={pic2} className='img'/>

            <div>

            </div>

            <p>Name : amali</p>
            <p>Reg. Number :2022/56</p>
            <p>Age :29</p>
            <p>NIC :123456V</p>
            <p>Clinical Details :</p>
            <a id='a'>amali is a heart patient since 2022</a>
            <p>Prescriptions :</p>
            <a id='a'>Panadol</a>
            <br/>
            <a id='a'>Piriton</a>
            <br/>
            <a id='a'>Citracene</a>
            
         

        </div>
        <div className='frame_2'>

            <a id='heart_rate'>Heart Rate</a>
            <div>
            <img id='heart_icon' src={heart}/>
            </div>

            <p id='heart'>72 bpm</p>

        </div>
        <div className='frame_3'>
        <a id='SPO2'>SPO2</a>
        <div>
        <img id='spo2_icon' src={io2}/>
        </div>

        <p id='pso'>50%</p>

        </div>
        <div className='frame_4'>
        <a id='body_temp'>Body Temp</a>
        <div>
        <img id='temp_icon' src={temperature}/>
        </div>

        <p id='temp'>27 C</p>

        </div>
        <a id='prev' href='/'>prev</a>
        <a id='next' href='/2'>next</a>




    </div>
  )
}

export default Person_2;