"use client";

import React, { useEffect, useState } from "react";
import TimeCard from "./TimeCard";

type Props = {
  paddingY: string;
  textColor: string;
  isGetStarted: boolean;
};

function Timestamp({ paddingY, textColor, isGetStarted }: Props) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
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

  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  function formatSingleDigit(number: number): string {
    return number < 10 ? "0" + number : number.toString();
  }

  function calculateDateDifferenceInSeconds() {
    const differenceInSeconds = Math.floor(
      (deadlinedate.getTime() - currentdate.getTime()) / 1000
    );
    let days = Math.floor(differenceInSeconds / (60 * 60 * 24));
    let hours = differenceInSeconds % (60 * 60 * 24);
    let minutes = hours % (60 * 60);
    let seconds = minutes % 60;
    setDays(formatSingleDigit(days));
    setHours(formatSingleDigit(Math.floor(hours / (60 * 60))));
    setMinutes(formatSingleDigit(Math.floor(minutes / 60)));
    setSeconds(formatSingleDigit(seconds));
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
      className={`${paddingY} w-[327px]  text-white z-20 uppercase tracking-[5px] flex flex-col items-center md:w-auto relative dsk:items-start`}
    >
      <h3 className={`${textColor}`} >
        Coming{" "}
        <span className="text-[#5175FF] ">
          <span>{deadlinedate.getDate()} </span>
          <span>{monthNames[deadlinedate.getMonth()]} </span>
          <span>{deadlinedate.getFullYear()}</span>
        </span>
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

export default Timestamp;
