'use client';
import React, { useEffect, useRef, useState } from 'react'

const InfiniteScrollV2 = () => {

    const [data,setData] = useState([... new Array(40)]);
    const [loading, setLoading] = useState(false);

    const arrayListRef = useRef([]);

    useEffect(()=>{
        const observer = new IntersectionObserver(function (entries){
            if(entries[0].isIntersecting){
                observer.unobserve(entries[0].target)
                loadMore();
            }
        },{
            rootMargin:"-200px"
        });

        const lastElement = arrayListRef.current[arrayListRef.current.length - 1]
        observer.observe(lastElement);
        return ()=>{
            observer.unobserve(lastElement);
        }
    },[data.length])

    const loadMore = ()=>{
        setLoading(true);
        setTimeout(()=>{
            setData((prev)=>[...prev,... new Array(10)]);
            setLoading(false);
        },1000)
    };

  return (
    <div className='overflow-auto h-[265px] w-[300px]'>
        {data.map((row,index)=>{
            return (
                //@ts-ignore
                <div ref={(el)=>(arrayListRef.current[index] = el)} className='p-2 border bg-amber-200 text-black' key={index}>{index+1}</div>
            )
        })}
       {loading && <div className='p-2 border bg-amber-200 text-black text-center'>Loading....</div>}
    </div>
  )
}

export default InfiniteScrollV2