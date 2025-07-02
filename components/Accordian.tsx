import { accordionData } from '@/data/folderData'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const Accordian = () => {
const data = accordionData;
const [active, setActive] = useState<number>(0);
const accordionRef = useRef<HTMLDivElement>(null);

useEffect(()=>{
    const handleOutSideClick = (e: MouseEvent)=>{
        if(accordionRef.current && !accordionRef.current.contains(e.target as Node)){
            setActive(0)
        }
    };
    document.addEventListener('mousedown',handleOutSideClick);
    return ()=>{ //cleanup function
        document.removeEventListener('mousedown',handleOutSideClick);
    }
},[])


  return (
    <div ref={accordionRef} className='p-5 border rounded-md w-full'>
        {data.map((item)=>(
            <div key={item.id} className='m-5 border py-2 px-4 ' >
                <span className='flex justify-between items-center'>
                <p className='text-left'>{item.title}</p>
                <button className='hover:cursor-pointer' onClick={()=>(active === item.id ? setActive(0) : setActive(item.id))}>{active === item.id ? <ChevronUp/> : <ChevronDown/>}</button>
                </span>

                {active === item.id && <div className='m-5 border py-2 px-4'>
                <p className='text-left'>{item.content}</p>
                </div>}
            </div>

        ))}
    </div>
  )
}

export default Accordian;