'use client';
import React, { useEffect, useState } from 'react'

const RandomCouponGenerator = () => {
    const [coupon, setCoupon] = useState('');

    const generateCoupon = (length = 8) => {
        return Math.random().toString(36).substring(2, 2 + length).toUpperCase();
      };

      useEffect(()=>{
        const interval = setInterval(()=>{
            const newCoupon = generateCoupon(8);
            setCoupon(newCoupon);
        },5000)
        return ()=> clearInterval(interval);
      },[])

      const handleCopy=async()=>{
        try {
            await navigator.clipboard.writeText(coupon);
            alert('Coupon copied to clipboard!');
          } catch (err) {
            alert('Failed to copy coupon.');
          }
      };
  return (
    <div className='p-5 border w-[500px] flex flex-col items-center justify-center my-20 gap-10'>
        <h1 className='text-3xl font-bold'>Click to Generate Coupon</h1>
        {coupon.length>0? <p>This is your coupon: {coupon}</p>: null}
        <button className='bg-gray border p-3 rounded-md' onClick={handleCopy}>Copy to clipboard</button>
    </div>
  )
}

export default RandomCouponGenerator