import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function Card() {

    const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-100 flex justify-center items-center">
        <div className="relative w-96 h-52 bg-zinc-500 rounded-md overflow-hidden flex">
            <img   className={`shrink-0 w-full h-full transition-transform duration-500 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover`} src="https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img   className={`shrink-0 w-full h-full transition-transform duration-500 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1732647169576-49abfdef3348?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
            <span onClick={()=>setVal(()=>!val)} className="w-11 h-11 transition-all rounded-full flex justify-center items-center absolute bg-[#dadada9b] bottom-1 left-1/2 -translate-x-[50%] -translate-y-[50%] hover:cursor-pointer">
                {val === false ? <FaArrowRightLong size={".9em"} /> : <FaArrowLeftLong size={".9em"} />}
            </span>
        </div>
    </div>
  )
}


export default Card