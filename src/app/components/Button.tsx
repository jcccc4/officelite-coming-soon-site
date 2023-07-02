import React from "react";

type Props = {
  buttonTheme: string;
  children: React.ReactNode;
};

export default function Button({ children, buttonTheme }: Props) {
  return (
    <button
      type="button"
      className={`${buttonTheme} font-bold text-button py-[14px] rounded-full `}
    >
      {children}
    </button>
  );
}
