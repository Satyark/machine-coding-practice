'use client';
import React, { useState } from 'react'

const InifinteScroll = () => {
    const threshold = 20;
    const [data,setData] = useState([... new Array(40)]);
    const [loading, setLoading] = useState(false);

    const loadMore = ()=>{
        setLoading(true);
        setTimeout(()=>{
            setData((prev)=>[...prev,... new Array(10)]);
            setLoading(false);
        },1000)
    };

    const handleScroll = (event: any)=>{
        const scrollTop = event.target.scrollTop;
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;
        const remainingHeight = scrollHeight - (scrollTop + clientHeight);
        if(remainingHeight<threshold && !loading){
            loadMore();
        }
        
    };
  return (
    <div className='overflow-auto h-[265px] w-[300px]' onScroll={handleScroll}>
        {data.map((row,index)=>{
            return (
                <div className='p-2 border bg-amber-200 text-black' key={index}>{index+1}</div>
            )
        })}
       {loading && <div className='p-2 border bg-amber-200 text-black text-center'>Loading....</div>}
    </div>
  )
}

export default InifinteScroll