"use client";
import React, { useEffect } from "react";

type Props = {
  number: number;
  stat: string;
  isGetStarted:boolean
};

function TimeCard({ number, stat, isGetStarted }: Props) {
  return (
    <div className={`${isGetStarted?'bg-[#333950]':'bg-[#EEF1FF] text-[#5175FF]'}  w-[72px] h-[92px] rounded-[4px] text-center md:w-[100px] flex flex-col justify-center items-center  md:h-[128px] md:rounded-[13px]`}>
      <div className="text-time font-bold mt-[11px] md:text-time-md">{number}</div>
      <div className="text-timeName font-bold tracking-widest text-[#999CA7] md:text-timeName-md">
        {stat}
      </div>
    </div>
  );
}

export default TimeCard;
