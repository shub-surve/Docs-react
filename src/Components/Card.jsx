import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[40px] bg-zinc-600 text-white p-5 overflow-hidden py-10 px-5'>
       <FaRegFileAlt /> 
       <p className='text-sm font-semibold leading-tight p-2 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequuntur consequatur iure! At, error excepturi. Suscipit..</p>
       <div className='footer absolute bottom-0 w-full h-10 left-0 text-zinc-900'>
          <div className='flex items-center justify-between px-8 py-3 mt-[-60px]'>
              <h5>0.4mb</h5>
              <span className='w-8 h-8 bg-zinc-400 rounded-full flex items-center justify-center'><MdOutlineDownloading /></span>
          </div>
          <div className='tag w-full bg-green-600 h-11 flex items-center justify-center'>
            <h3 className="text-black">Download</h3>
          </div>
       </div>
    </div>
  );
}

export default Card;


