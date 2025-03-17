import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  const [formState, setFormstate] = useState({
    name: "",
    email: "",
    message: ""
  })

  function formSubmit(e) {
    e.preventDefault();

    fetch("https://eoik88x358lpljk.m.pipedream.net", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formState),
      headers: {
        "content-type": "application/json"
      }
    });
    setFormstate(()=>({
      name: "",
      email: "",
      message: ""
    }));
console.log("rest dome ", formState);
  }

  function handleChange(e) {
    setFormstate({ ...formState, [e.target.name]: e.target.value });
    console.log(" name", e.target.name)
    console.log(" value", e.target.value)
  }

  return (
    <div className=' w-full mt-[100px] flex justify-center'>
      <div className=' w-[900px] h-[450px] grid gap-10  rounded-2xl  shadow-2xl rgba(100, 0, 0, 0.15) 1.95px 1.95px 2.6px'>
        <div className='grid grid-cols-2 gap-2.5'>
          <form onSubmit={formSubmit}>
            <div className='grid gap-4 p-10'>
              <div>
                <h2 className='font-bold text-3xl text-orange-300 '>Get in touch</h2>
              </div>
              <div className='relative'>
                <div>
                  <input type="text" id='name' name='name' value={formState.name} onChange={handleChange} placeholder='Name' className=' w-full  py-3 px-8  rounded-2xl outline-0 border-b-2  border-orange-200  ' />
                </div>
                <div className='absolute top-4 left-3'>
                  <FaUser className='text-orange-300' />
                </div>
              </div>
              <div className='relative'>
                <div>
                  <input type="email" name='email' id='email' placeholder='E-mail' value={formState.email} onChange={handleChange} className='w-full py-3 px-8  rounded-2xl outline-0 border-b-2  border-orange-200 ' />
                </div>
                <div className='absolute top-4 left-2'>
                  <MdEmail size={20} className='text-orange-300' />
                </div>
              </div>
              <div className='relative'>
                <div>
                  <textarea placeholder='Message....' id='message' name='message' value={formState.message} onChange={handleChange} rows={2} className='w-full py-3 px-8  rounded-2xl outline-0 border-b-2 text-black  border-orange-200 '></textarea>
                </div>
                <div className='absolute  top-4 left-3.5'>
                  <FaMessage className='text-orange-300' />
                </div>
              </div>
              <div>
                <button className='text-white w-full p-3 rounded-2xl font-bold bg-orange-300 cursor-pointer'>submit</button>
              </div>
            </div>
          </form>
          <div className=' bg-orange-300   rounded-r-2xl p-4 text-white '>
            <div className='mt-5 text-2xl font-bold'>
              <span>Contact Us</span>
            </div>
            <div className='h-[300px] flex items-center'>
              <div className='flex  flex-col gap-4'>
                <div>
                  <span className='font-bold flex items-center gap-3'><FaLocationDot size={20} />location:-</span>
                  <address className='ml-6 text-[18px]' >456, Cyber Hub, DLF Phase 2, Gurugram, Haryana - 122002, India</address>
                </div>
                <div>
                  <span className='font-bold flex items-center gap-3'><IoIosCall size={20} />Let's Talk:-</span>
                  <p className='ml-6 font-bold text-[18px]'>+91 8761535200</p>
                </div>
                <div>
                  <span className='font-bold flex items-center gap-3'> <MdEmail size={20} /> Email:-</span>
                  <p className='ml-6 text-[18px]'>VedVyasFoundation@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact