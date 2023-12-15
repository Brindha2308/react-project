import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
    
    <div className=" space-y-4 lg:pt-14">
      <form>
        <div className='flex flex-col sm:flex w-96 h-full bg-[#edede9] border-[#adb5bds] border-2 rounded p-2 ml-40 mt-10'>
        <div className='text-center font-semibold' >
        <label className='font-bold text-xl text-center underline'>Login</label><br></br><br></br>
        </div>
        
        <div className='m-4'>
          <label>Name</label><br></br>
          <input type='text' placeholder='Name' className=' w-80 h-10'></input><br></br>
        </div>

        <div className='m-4'>
        <label>Email Address</label><br></br>
        <input type="email" placeholder='abc@xyz.com' className=' w-80 h-10'></input><br></br>
        </div>
        
        <div className='m-4'>
        <label>Mobile Number</label><br></br>
        <input type='number' placeholder='9876543210' className=' w-80 h-10'></input><br></br>
        </div>
        <button className='border-2 border-orange-600 rounded-full
             hover:bg-orange-600 font-bold pl-2 pr-2 w-40 h-14 ml-20 mb-10'>Create Account</button><br></br>
        </div>        
        </form>
        </div>
    </div>
  )
}

export default Login
