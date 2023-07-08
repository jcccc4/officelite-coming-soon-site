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
        } w-[327px] h-[508px] rounded-[13px] flex flex-col items-center relative overflow-hidden md:w-[689px] md:h-[316px] md:items-start md:px-12`}
      >
        <Image
          src={"/home/bg-pattern-pricing.svg"}
          height={880}
          width={880}
          alt="Background Pricing"
          className="absolute  max-w-none max-h-none -left-[277px] -top-[379px] md:-left-[319px] md:-top-[282px]"
        />
        <h2 className="mt-10 md:mt-12">{title}</h2>
        <h1 className="mt-10 text-plan md:mt-4">{bill}</h1>
        <h3>{userPayment}</h3>
        <ul className="mt-14 flex flex-col gap-y-4 md:absolute md:top-[92px] md:left-[400px] md:m-0">
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
