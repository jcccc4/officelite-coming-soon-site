import React from "react";
import Image from "next/image";
type Props = {
  type: string;
  onfocusHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  onblurHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChangeHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  isValid: boolean;
  isFocus: boolean;
  id: string;
  children: React.ReactNode;
};

export default function Input({
  type,
  onfocusHandler,
  onblurHandler,
  onChangeHandler,
  isValid,
  isFocus,
  id,
  children,
}: Props) {
  return (
    <section className="relative border-b h-[45px]">
      <label>
        <span className=" opacity-50 absolute left-4 no-underline tracking-[-0.222222px]">
          {children}
        </span>

        <input
          id={id}
          type={type}
          className="bg-transparent w-[260px] focus:outline-0 absolute bottom-0 left-4"
          onFocus={onfocusHandler}
          onBlur={onblurHandler}
          onChange={onChangeHandler}
        />

        {isFocus && (isValid ? (
          <Image
            src={"/sign-up/icon-check.svg"}
            width={15}
            height={12}
            alt={""}
            className=" absolute bottom-3 right-1"
          ></Image>
        ) : (
          <Image
            src={"/sign-up/icon-cross.svg"}
            width={15}
            height={12}
            alt={""}
            className=" absolute top-[4px] right-0"
          ></Image>
        ))}
      </label>
    </section>
  );
}
