import React from "react";
import Button from "./Button";
import Image from "next/image";

type Props = {
  title: string;
  bill: string;
  userPayment: string;
  description1: string;
  description2: string;
  description3: string;
  isPro: boolean;
  clickHandler: () => void;
};

export default function Card({
  isPro,
  title,
  bill,
  userPayment,
  description1,
  description2,
  description3,
  clickHandler,
}: Props) {
  return (
    <div className=" flex justify-center">
      <div
        className={`${
          isPro ? "bg-[#5175FF] text-white" : "bg-white"
        } w-[327px] h-[508px] rounded-[13px] flex flex-col items-center relative overflow-hidden md:w-[689px] md:h-[316px] md:items-start md:px-12 dsk:w-[350px] dsk:h-[508px] dsk:items-center`}
      >
        {isPro&&<Image
          src={"/home/bg-pattern-pricing.svg"}
          height={880}
          width={880}
          alt="Background Pricing"
          className="absolute  max-w-none max-h-none -left-[277px] -top-[379px] md:-left-[319px] md:-top-[282px]"
        />}
        <h2 className="mt-10 md:mt-12 dsk:mt-10 ">{title}</h2>
        <h1 className="mt-10 md:mt-4 dsk:mt-10">{bill}</h1>
        <h3 className="mt-2">{userPayment}</h3>
        <ul className="mt-14 flex flex-col gap-y-4 md:absolute md:top-[92px] md:left-[400px] md:m-0 dsk:relative dsk:md:left-0 dsk:md:top-0 dsk:text-center dsk:mt-[56px]">
          <li>{description1}</li>
          <li>{description2}</li>
          <li>{description3}</li>
        </ul>
        <Button
          buttonTheme={"px-[41.5px] bg-[#E4EAFF] text-[#5175FF] mt-8 md:mt-6"}
          clickHandler={clickHandler}
        >
          Try for Free
        </Button>
      </div>
    </div>
  );
}
