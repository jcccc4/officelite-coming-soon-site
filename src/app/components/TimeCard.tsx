"use client";
import React, { useEffect } from "react";

type Props = {
  number: number;
  stat: string;
  isGetStarted:boolean
};

function TimeCard({ number, stat, isGetStarted }: Props) {
  return (
    <div className={`${isGetStarted?'bg-[#333950]':'bg-[#EEF1FF] text-[#5175FF]'}  w-[72px] h-[92px] rounded-[4px] text-center`}>
      <div className="text-time font-bold mt-[11px]">{number}</div>
      <div className="text-timeName font-bold tracking-widest text-[#999CA7]">
        {stat}
      </div>
    </div>
  );
}

export default TimeCard;
