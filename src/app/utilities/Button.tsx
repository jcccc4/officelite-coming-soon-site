import React from "react";

type Props = {
  buttonTheme: string;
  children: React.ReactNode;
  clickHandler:()=>void;
};

export default function Button({ children, buttonTheme,clickHandler }: Props) {
  return (
    <button
      type="button"
      className={`${buttonTheme}  font-bold text-button py-[14px] rounded-full z-10`}
    onClick={clickHandler}>
      {children}
    </button>
  );
}
