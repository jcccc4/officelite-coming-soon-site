import React from "react";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer";
import Image from "next/image";

type Props = {
  clickHandler: () => void;
  isGetStarted:boolean
};

export default function Main({ clickHandler, isGetStarted }: Props) {
  return (
    <>
      <main className="flex flex-col items-center relative ">
        <div className="absolute w-screen h-[1248px] bg-[#25293A] left-0 bottom-0 flex justify-center items-center overflow-hidden">
          <Image
            src={"/home/bg-pattern-footer.svg"}
            height={1202}
            width={1202}
            alt="Background Footer"
            className="relative max-w-none max-h-none mt-[156px]"
          />
        </div>
        <Image
          src={"/shared/logo.svg"}
          height={30}
          width={155}
          alt="Background Header"
          className=" mt-[46px]"
        />
        <Image
          src={"/home/illustration-charts.svg"}
          height={192}
          width={171}
          alt="Background Header"
          className="mt-20"
        />
        <section className="mt-16 w-[327px] text-center ">
          <h1>A simple solution to complex tasks is coming soon</h1>
          <p className="mt-6 text-[#747B95]">
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </p>
          <Button
            buttonTheme={"bg-[#5175FF] text-white px-[41px] mt-[46px]"}
            clickHandler={clickHandler}
          >
            Get Started
          </Button>
        </section>

        <section className="mt-10 flex flex-col gap-y-8 z-20">
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
            description3={"More control and insights Try for Free"}
            clickHandler={clickHandler}
          />
          <Card
            isPro={false}
            title={"Ultimate"}
            bill={"$19.99 "}
            userPayment={"Per user, billed monthly"}
            description1={"Robust work management"}
            description2={"100 gb storage"}
            description3={"VIP support Try for Free"}
            clickHandler={clickHandler}
          />
        </section>

        <Footer marginY={"my-[100px]"} textColor={"text-white"} isGetStarted={isGetStarted} />

    
      </main>
    </>
  );
}
