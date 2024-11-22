import React, { useState } from 'react'

const CheckColor = () => {
    const [colorRed,setColorRed]= useState(0);
    const [colorGreen,setColorGreen]= useState(0);
    const [colorBlue,setColorBlue]= useState(0);
  return (
    <div className='flex justify-center items-center  gap-20 h-screen'>
       
   
     <div><p>red</p>   <input className=''
         type="range"
        min={0}
         max={256}
        step={10}
        value={colorRed}
        onChange={(e)=>setColorRed(Number(e.target.value))}
         />
              <p>green</p> 
                <input className=''
         type="range"
        min={0}
         max={256}
        step={10}
        value={colorGreen}
        onChange={(e)=>setColorGreen(e.target.value)}
         />
              <p>blue</p>   <input className=''
         type="range"
        min={0}
         max={256}
        step={10}
        value={colorBlue}
        onChange={(e)=>setColorBlue(e.target.value)}
         />
         </div>
     <div>
     <div className={`w-[200px] h-[200px] rounded-xl `}
              style={{ backgroundColor: `rgb(${colorRed}, ${colorGreen}, ${colorBlue})` }}
        ></div>
        <p className='mt-10 text-center text-[25px]'>rgb({colorRed},{colorGreen},{colorBlue})</p>
     </div>
    </div>
  )
}

export default CheckColor