import React from 'react'
//import { Button } from 'react-scroll'
import Button from "../layout/Button";
import img from '../asset/about.png'
import { Link } from 'react-scroll';

const Home = () => {
  // const imageUrl = '../asset/home.jpg';
  return (
    <Link to='/'>
   <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-gradient-to-r from-[#a57b5b] to-[#e2561a]">
   <img src={img} alt="img" />

      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className=" text-backgroundColor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  

  </Link>
  )
}

export default Home
