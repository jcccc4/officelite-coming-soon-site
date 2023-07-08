import React, { useRef, useState } from "react";
import Image from "next/image";
type Props = {};

interface Pack {
  name: string;
  price: string;
}

export default function Dropdown({}: Props) {
  const options: Pack[] = [
    {
      name: "Basic Pack",
      price: "Free",
    },
    {
      name: "Pro Pack",
      price: "$9.99",
    },
    {
      name: "Ultimate Pack",
      price: "$19.99",
    },
  ];
  const [selected, setSelected] = useState<Pack>(options[0]);
  const optionRef = useRef<HTMLUListElement>(null);
  const dropdownHandler = (): void => {
    if (optionRef.current) {
      optionRef.current.classList.toggle("hidden");
      optionRef.current.classList.toggle("flex");
    }
  };
  const selectHander = (e: React.MouseEvent, i: number): void => {
    setSelected(options[i]);
    if (optionRef.current) {
        optionRef.current.classList.toggle("hidden");
      }
  };
  const renderOption = (option: Pack, i: number) => (
    <li
      key={option.name}
      className="flex  border-b h-[45px] items-start justify-between"
      onClick={(event) => selectHander(event, i)}
    >
      <span className="font-bold text-[#333950]">{option.name}</span>
      <span className="font-bold text-[#333950] opacity-40">
        {option.price}
      </span>
    </li>
  );
  return (
    <section className="relative">
      <span
        className="relative border-b h-[45px] flex items-start justify-between  px-4"
        onClick={dropdownHandler}
      >
        <span className=" flex gap-[7px]">
          <span className="font-bold text-[#333950]">{selected.name}</span>
          <span className="font-bold text-[#333950] opacity-40">
            {selected.price}
          </span>
        </span>
        <Image
          src={"/sign-up/icon-arrow-down.svg"}
          width={13}
          height={8}
          alt={"arrow"}
        ></Image>
      </span>
      <ul
        ref={optionRef}
        className="hidden absolute top-[69px] gap-y-4 w-[279px] flex-col p-4 z-20 border bg-white rounded-lg"
      >
        {options.map(renderOption)}
      </ul>
    </section>
  );
}
