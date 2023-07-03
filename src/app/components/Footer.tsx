import React from "react";
import TimeCard from "./TimeCard";
import Button from "./Button";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="my-[100px] w-[327px] h-[254px] mb-[100px] text-white z-20 uppercase tracking-[5px] flex flex-col items-center">
      <h3>
        Coming <span className="text-[#5175FF]">4 Nov 2020</span>
      </h3>
      <section className="flex mt-[18px] gap-x-[13px]">
        <TimeCard number={"47"} stat={"Days"} />
        <TimeCard number={"07"} stat={"Hours"} />
        <TimeCard number={"56"} stat={"Min"} />
        <TimeCard number={"14"} stat={"Sec"} />
      </section>
      <Button buttonTheme={"px-[41px] bg-[#5175FF] mt-10"}>Get Started</Button>
    </footer>
  );
}

export default Footer;
