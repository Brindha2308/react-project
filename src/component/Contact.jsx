import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
    
    <div className=" space-y-4 lg:pt-14">
      <h1 className=" font-semibold text-4xl text-center  md:text-start">
        Contact Us!.
      </h1>
      <form>
        
        <div className='m-4 border-slate-700'>
          <label className=' font-semibold'>Name</label><br></br>
          <input type='text' placeholder='Name' className='h-10 w-80 bg-slate-200'></input><br></br>
        </div>
        <div className='m-4'>
        <label className=' font-semibold'>Email Address</label><br></br>
        <input type="email" placeholder='abc@xyz.com' className=' w-80 h-10 bg-slate-200'></input><br></br>
        </div>
        
        <div className='m-4'>
        <label className=' font-semibold'>Type your Message</label><br></br>
        <input type='textarea' placeholder='Message' className=' w-80 h-40 bg-slate-200'></input><br></br>
        </div>
      </form>
      
    </div>
    </div>
  )
}

export default Contact
