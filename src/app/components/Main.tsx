import React from "react";
import Button from "@/app/utilities/Button";
import Card from "@/app/utilities/Card";
import TimeStamp from "@/app/utilities/Timestamp";
import Image from "next/image";

type Props = {
  clickHandler: () => void;
  isGetStarted: boolean;
};

export default function Main({ clickHandler, isGetStarted }: Props) {
  return (
    <>
      <div className="w-full flex justify-center  absolute md:justify-end  ">
        <Image
          src={"/home/bg-pattern-header.svg"}
          height={458}
          width={458}
          alt="Background Header"
          className="absolute -top-[170px] md:w-[666px] md:h-[666px] md:-top-[164px] md:-right-[293px]"
        />
      </div>
      <main className="flex flex-col items-center relative md:block ">
        <div className="absolute w-screen md:h-[986px] h-[1248px] bg-[#25293A] bottom-0  flex justify-center items-center overflow-hidden z-0 dsk:h-[603px]">
          <Image
            src={"/home/bg-pattern-footer.svg"}
            height={1202}
            width={1202}
            alt="Background Footer"
            className="relative max-w-none max-h-none mt-[156px] "
          />
        </div>
        <Image
          src={"/shared/logo.svg"}
          height={30}
          width={155}
          alt="Background Header"
          className=" mt-[46px] md:mt-[72px] md:mx-10 dsk:ml-[165px] dsk:mt-[81px]"
        />
        <div className=" flex flex-col items-center md:flex-wrap md:flex-row-reverse md:justify-end md:items-start">
          <Image
            src={"/home/illustration-charts.svg"}
            height={192}
            width={171}
            alt="Background Header"
            className="mt-20 md:w-[281px] md:h-[314px] md:mt-[124px] md:absolute md:right-10 dsk:mt-[102px] dsk:w-[475px] dsk:h-[531px] dsk:right-[165px] "
          />
          <section className="mt-16 w-[327px] text-center md:text-left md:ml-10 md:mr-[48px] md:w-[345px]  md:mt-[104px]  dsk:mt-[174px] dsk:ml-[165px] dsk:w-[540px]">
            <h1>A simple solution to complex tasks is coming soon</h1>
            <p className="mt-6 text-[#747B95]">
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </p>
            <Button
              buttonTheme={"bg-[#5175FF] text-white px-[41px] mt-6"}
              clickHandler={clickHandler}
            >
              Get Started
            </Button>
          </section>
        </div>

        <section className="mt-10 flex flex-col gap-y-8 z-20 md:mt-[140px] md:gap-y-6  dsk:mt-[255px] dsk:flex-row dsk:w-screen dsk:justify-between dsk:px-[165px]">
          <Card
            isPro={false}
            title={"Basic"}
            bill={"Free"}
            userPayment={"Up to 5 users for free"}
            description1={"Basic document collaboration"}
            description2={"2 gb storage"}
            description3={" Great security and support"}
            clickHandler={clickHandler}
          />
          <Card
            isPro={true}
            title={"Pro"}
            bill={"$9.99 "}
            userPayment={"Per user, billed monthly"}
            description1={"All essential integrations"}
            description2={"50 gb storage"}
            description3={"More control and insights"}
            clickHandler={clickHandler}
          />
          <Card
            isPro={false}
            title={"Ultimate"}
            bill={"$19.99 "}
            userPayment={"Per user, billed monthly"}
            description1={"Robust work management"}
            description2={"100 gb storage"}
            description3={"VIP support"}
            clickHandler={clickHandler}
          />
        </section>
        <footer className="flex flex-col items-center dsk:flex-row  dsk:justify-between   dsk:mx-[165px] dsk:pb-[91px]  dsk:mt-[82px]">
          <TimeStamp
            paddingY={"pt-[100px] dsk:p-0"}
            textColor={"text-white"}
            isGetStarted={isGetStarted}
          />
          <Button
            buttonTheme={"mt-10 md:mt-12 mb-[100px] md:w-[171px] bg-[#5175FF] text-white px-10 relative z-20 dsk:m-0"}
            clickHandler={clickHandler}
          >
            Get Started
          </Button>
        </footer>
      </main>
    </>
  );
}
