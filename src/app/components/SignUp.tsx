import React from "react";
import Footer from "@/app/utilities/Footer";
import Image from "next/image";
import FormPage from "@/app/utilities/FormPage";

type Props = {
  clickHandler: () => void;
  isGetStarted: boolean;
};
export default function SignUp({ clickHandler, isGetStarted }: Props) {
  return (
    <>
      <main className="flex flex-col items-center relative z-10 min">
       
        <Image
          src={"/shared/logo.svg"}
          height={30}
          width={155}
          alt="Background Header"
          className=" mt-[46px]"
        />

        <section className="mt-20 w-[327px] text-center">
          <h1>Work smarter. Save time.</h1>
          <p className="mt-4 text-[#747B95]">
            Easily manage your projects. Get on the list and receive in-app
            perks available only to early subscribers. We are moving into final
            development and getting ready for official launch soon.
          </p>
        </section>
        <Footer
          marginY={"my-16"}
          textColor={"text-[#333950]"}
          isGetStarted={isGetStarted}
        />
        <FormPage clickHandler={clickHandler} />
      </main>
    </>
  );
}
