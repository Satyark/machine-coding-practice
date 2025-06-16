'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react'
interface Props{
    value: number;
    max: number;
    onStart: ()=> void;
    onComplete: ()=>void;
}
const ProgressBar: React.FC<Props> = ({value,max = 100, onStart, onComplete}) => {
const progressStartRef = useRef(false);

useEffect(()=>{
    if(value>= max){
        onComplete();
    }
    if(value){
        if(!progressStartRef.current){
            onStart();
            progressStartRef.current = true;
        }
    }
},[value])


  return (
    <div className='w-[100px] h-[16px] border rounded-md overflow-hidden'>
        <div
        className="h-full bg-green-400"
        style={{ transform: `translateX(-${100-value}px)`, transition: 'transform 0.2s ease-in' }}
        // style={{ width: `${value}px`, transition: 'width 0.2s ease-in' }}
        />
{/* <progress id="progress-bar" value="70" max="100" className=''>70 %</progress> */}
    </div>
  )
}

export default ProgressBar