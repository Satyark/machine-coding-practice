'use client'
import InfiniteScrollV2 from '@/components/InfiniteScrollV2'
import InifinteScroll from '@/components/InifinteScroll'
import ProgressBar from '@/components/ProgressBar'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setProgressValue((prev) => {
        return prev + 10;
      });
    }, 3000);

    return () => clearInterval(id);
  }, []);

  const onStart = () => {
    console.log("Progress Started");
  }
  const onComplete = () => {
    console.log("Progress Completed");
  }

  return (
    <div className="flex flex-col min-h-screen gap-10 items-center justify-center">
      <div className="flex gap-10 items-center justify-center">
        <section>
          <p>V1</p>
          <InifinteScroll />
        </section>
        <section>
          <p>V2</p>
          <InfiniteScrollV2 />
        </section>
      </div>
      <section>
        <ProgressBar value={progressValue} max={100} onStart={onStart} onComplete={onComplete} />
      </section>
    </div>
  )
}

export default Page;
