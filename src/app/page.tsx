"use client";

import Image from "next/image";
import SignUp from "@/app/components/SignUp";
import Main from "@/app/components/Main";
import { ReactComponentElement, ReactElement, useState } from "react";
export default function Home() {
  const [isGetStarted, setIsGetStarted] = useState<boolean>(true);

  const clickHandler = (): void => {
    console.log(isGetStarted);
    setIsGetStarted(!isGetStarted);
  };
  const pageHandler = (): ReactElement => {
    if (isGetStarted) {
      
    return <Main clickHandler={clickHandler} isGetStarted={isGetStarted} />}
     return <SignUp clickHandler={clickHandler} isGetStarted={isGetStarted} />
  }
  return (
    <>
      <Image
        src={"/home/bg-pattern-header.svg"}
        height={458}
        width={458}
        alt="Background Header"
        className="absolute -top-[170px]"
      />
      {pageHandler()}
    </>
  );
}
