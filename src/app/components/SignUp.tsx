import React from "react";
import Timestamp from "@/app/utilities/Timestamp";
import Image from "next/image";
import FormPage from "@/app/utilities/FormPage";

type Props = {
  clickHandler: () => void;
  isGetStarted: boolean;
};
export default function SignUp({ clickHandler, isGetStarted }: Props) {
  return (
    <>
      <div className="absolute w-screen  flex justify-end   md:hidden  ">
        <Image
          src={"/home/bg-pattern-header.svg"}
          height={458}
          width={458}
          alt="Background Header"
          className="mt-[-170px] md:w-[666px] md:h-[666px] md:mt-[-164px] md:mr-[-293px]"
        />
      </div>
      <main className="flex flex-col items-center relative z-10 min dsk:items-start ">
        <div className="absolute w-screen h-[320px] md:h-[380px] bg-[#25293A] bottom-0 flex justify-center items-center overflow-hidden z-0 dsk:top-0 dsk:right-0 dsk:w-[420px] dsk:h-screen ">
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
          className="mt-[46px] md:self-start md:ml-10 md:mt-[72px]  dsk:ml-[165px] dsk:mt-[81px]"
        />

        <section className="mt-20 w-[327px] text-center md:mt-[104px] dsk:mt-[154px] dsk:text-left dsk:ml-[165px] dsk:w-[540px]">
          <h1>Work smarter. Save time.</h1>
          <p className="mt-4 text-[#747B95] md:mt-6">
            Easily manage your projects. Get on the list and receive in-app
            perks available only to early subscribers. We are moving into final
            development and getting ready for official launch soon.
          </p>
     
         </section>
         <section className="dsk:ml-[165px]">
         <Timestamp
          paddingY={"mt-10 mb-[104px]"}
          textColor={"text-[#333950]"}
          isGetStarted={isGetStarted}
        />
         </section>
        <section className="dsk:absolute dsk:right-[165px] dsk:top-[237px]">
        <FormPage clickHandler={clickHandler} />
     
        </section>
         
      </main>
    </>
  );
}
