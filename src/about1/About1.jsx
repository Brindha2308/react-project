import React, { Component } from "react";
import first from "../images/road.jpg";
 import onetwo from "../images/two.jpg";
import onethree from "../images/three.jpg";
import onefour from "../images/four.jpg";
import final from "../images/Beourpart.jpg"
function About1() {
  return (
    <div>
      
      <>
       <br></br>
            <div >
                <h2 className=" text-3xl text-black text-center font-bold">ABOUT</h2>
                <h3 className="text-2xl font-semibold italic text-blue-500 text-center">
                  All ROADS LEAD TO EXPERIENCE.</h3>
             </div>
              
              <div className="flex flex-row">
                <div className="flex justify-center basis-1/2 w-full h-96 ml-20 mt-20">
                <div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
                    <div class="w-full sm:w-1/3">
                    <img class="object-cover rounded-full h-44 pl-2 mt-20" src={first} alt="Flower and sky"/>
                    </div>
                <div class="flex-1 px-6 py-4">
                     <h2 class="mb-3 text-2xl font-semibold tracking-tight underline text-blue-500">2016-2022</h2>
                     <h2 class="mb-3 text-2xl font-semibold tracking-tight italic text-blue-500">Our Humble Beginning</h2>

                    <p class="leading-normal text-gray-700">our company originated with young minds with
                     prematured baby steps into this software development world with the motive of providing
                      world class software service from small scale to large scale industries with enhanced trainees.</p>
                </div>
            </div>
            </div>

            <div className="flex flex-row">
                <div className="flex justify-center w-52 h-54 mt-72">
                <img class="object-cover rounded-full mt-20" src={final} alt="Flower and sky"/>

                  </div>
                  </div>

         <div>
          <hr className=" border-slate-500 h-1"></hr>
        </div>
            <div className="flex justify-center basis-1/2 w-full h-96 mt-20">
        <div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
        <div class="w-full sm:w-1/3">
        <img class="object-cover rounded-full h-44 pl-2 mt-20" src={onetwo} alt="Flower and sky"/>

          {/* <img class="object-cover rounded-full w-full h-44 pl-2 mt-20" src={onetwo} alt="Flower and sky"/> */}
        </div>
        <div class="flex-1 px-6 py-4">
          <h2 class="mb-3 text-2xl font-semibold tracking-tight underline text-blue-500">JANUARY 2022</h2>
          <h2 class="mb-3 text-2xl font-semibold tracking-tight text-blue-500 italic">An Agency is Born</h2>
          <p class="leading-normal text-gray-700">Our company has changed to reasearch and development 
          industry with enough development tools to handle development of an application.</p>
        </div>
        </div>
             
        </div>
         </div>  
      <div className="flex flex-row">
       <div className="flex justify-center basis-1/2 w-full h-96 ml-0">
         <div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
          <div class="w-full sm:w-1/3">
           <img class="object-cover rounded-full h-44 pl-2 mt-20 ml-0" src={onethree} alt="Flower and sky"/>
          </div>
        <div class="flex-1 px-6 py-4">
          <h2 class="mb-3 text-2xl font-semibold tracking-tight text-blue-500">AUGUST 2022</h2>
          <h2 class="mb-3 text-2xl font-semibold tracking-tight italic text-blue-500">Transition to Full Service</h2>

          <p class="leading-normal text-gray-700">Our development services started formally with internal 
          application and grown our employee count to multiple of tens with successful implementations handled 
          during the training sessions.</p>
      </div>
       </div>
         </div>
         
      <div className="flex justify-center basis-1/2 w-full h-96 pl-32">
        <div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
        <div class="w-full sm:w-1/3">
          <img class="object-cover rounded-full w-full h-44 pl-2 mt-20" src={onefour} alt="Flower and sky"/>
        </div>
        <div class="flex-1 px-6 py-4">
          <h2 class="mb-3 text-2xl font-semibold tracking-tight text-blue-500">JUNE 2023</h2>
          <h2 class="mb-3 text-2xl font-semibold tracking-tight text-blue-500 italic">Phase Two Expansion</h2>
          <p class="leading-normal text-gray-700">We launched mobile friendly webapps to the market with 
          the help of our enhanced development team and expanded our development to multiple categories 
          namely, backend, frontend, fullstack and business process automation.</p>
        </div>
        </div>
             
        </div>
         </div>   
       
      </>

    </div>
  )
}

export default About1;
