"use client";

import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";

type Props = {
  paddingY: string;
  textColor: string;
  isGetStarted: boolean;
};

function Footer({ paddingY, textColor, isGetStarted }: Props) {
  const currentdate = new Date();
  const deadlinedate = new Date(
    Date.UTC(
      currentdate.getFullYear(),
      currentdate.getMonth(),
      currentdate.getDate() + 30,
      currentdate.getTimezoneOffset() / 60,
      0,
      0,
      0
    )
  );

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  function calculateDateDifferenceInSeconds() {
    const differenceInSeconds = Math.floor(
      (deadlinedate.getTime() - currentdate.getTime()) / 1000
    );
    let days = Math.floor(differenceInSeconds / (60 * 60 * 24));
    let hours = differenceInSeconds % (60 * 60 * 24);
    let minutes = hours % (60 * 60);
    let seconds = minutes % 60;
    setDays(days);
    setHours(Math.floor(hours / (60 * 60)));
    setMinutes(Math.floor(minutes / 60));
    setSeconds(seconds);
  }
  useEffect(() => {
    const timerId = setInterval(() => {
      calculateDateDifferenceInSeconds();
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [currentdate]);

  return (
    <footer
      className={`${paddingY} w-[327px]  text-white z-20 uppercase tracking-[5px] flex flex-col items-center md:w-auto relative`}
    >
      <h3 className={textColor}>
        Coming <span className="text-[#5175FF] ">4 Nov 2020</span>
      </h3>
      <section className="flex mt-[18px] gap-x-[13px] md:gap-x-4">
        <TimeCard number={days} stat={"Days"} isGetStarted={isGetStarted} />
        <TimeCard number={hours} stat={"Hours"} isGetStarted={isGetStarted} />
        <TimeCard number={minutes} stat={"Min"} isGetStarted={isGetStarted} />
        <TimeCard number={seconds} stat={"Sec"} isGetStarted={isGetStarted} />
      </section>
    </footer>
  );
}

export default Footer;
