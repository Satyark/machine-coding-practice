'use client';
import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const stopwatchRef = useRef(0); //for current time
  const intervalRef = useRef(null); // for time passed { ;
  const needToResumeRef = useRef(false);

  useEffect(() => {
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [time]);

  const handleBlur = () => {
    needToResumeRef.current = !!intervalRef.current;
    // @ts-ignore:
    clearInterval(intervalRef.current);
  };
  const handleFocus = () => {
    if (needToResumeRef.current) {
      needToResumeRef.current = false;
      handleStart();
    }
  };
  const handleStart = () => {
    stopwatchRef.current = new Date().getTime() - time;
    // @ts-ignore:
    intervalRef.current = setInterval(() => {
      setTime(new Date().getTime() - stopwatchRef.current);
    }, 10);
  };
  const handlePause = () => {
    // @ts-ignore:
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    // @ts-ignore:
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = () => {
    /*
    1s--->1000ms
    1234ms -> 1.234s --> (1234 % 1000) / 10 = Math.floor(23.4) -> gives me 2 digits of ms
    */
    const ms = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    const s = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const mins = Math.floor((time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const hrs = Math.floor(time / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    return `${hrs}:${mins}:${s}:${ms}`;
  };
  return (
    <div className="flex flex-col items-center justify-center my-20 gap-10">
      <h1 className="text-3xl font-bold">Counter</h1>
      {/* <div className="flex gap-4 items-end justify-center"> */}
      <span className="inline-block w-[250px] text-[50px] font-bold">
        {formatTime()}
      </span>
      {/* </div> */}
      <div className="flex gap-5 justify-center items-center">
        <button className="border py-2 px-5 rounded-md" onClick={handleStart}>
          Start
        </button>
        <button className="border py-2 px-5 rounded-md" onClick={handlePause}>
          Pause
        </button>
        <button className="border py-2 px-5 rounded-md" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
