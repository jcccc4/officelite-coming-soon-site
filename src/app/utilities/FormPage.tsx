import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Dropdown from "./Dropdown";

type Props = { clickHandler: () => void };

export default function FormPage({ clickHandler }: Props) {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setisEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isCompanyValid, setIsCompanyValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const onfocusHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.previousElementSibling?.classList.add("invisible");
    setIsFocus(true)
  };

  const onblurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.value ||
      event.target.previousElementSibling?.classList.add("invisible");
    event.target.parentElement?.parentElement?.classList.remove(
      "border-[#F05B5B]",
      "text-[#F05B5B]"
    );
    setIsFocus(false)
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.nextElementSibling?.classList.remove("hidden");
    event.target.type === "email" ? validateEmail(event) : validateString(event);
  };

  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.nextElementSibling?.classList.remove("hidden");
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
      event.target.parentElement?.parentElement?.classList.remove(
        "border-[#F05B5B]",
        "text-[#F05B5B]"
      );
      setisEmailValid(true);
    } else {
      event.target.parentElement?.parentElement?.classList.add(
        "border-[#F05B5B]",
        "text-[#F05B5B]"
      );
      setisEmailValid(false);
    }
  };
  const validateString = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.nextElementSibling?.classList.remove("hidden");
    if (event.target.value) {
      event.target.parentElement?.parentElement?.classList.remove(
        "border-[#F05B5B]",
        "text-[#F05B5B]"
      );
      switch (event.target.id) {
        case "name":
          setIsNameValid(true);
          break;
        case "phone":
          setIsPhoneValid(true);
          break;
        case "company":
          setIsCompanyValid(true);
          break;
      }
    } else {
      event.target.parentElement?.parentElement?.classList.add(
        "border-[#F05B5B]",
        "text-[#F05B5B]"
      );
      switch (event.target.id) {
        case "name":
          setIsNameValid(false);
          break;
        case "phone":
          setIsPhoneValid(false);
          break;
        case "company":
          setIsCompanyValid(false);
          break;
      }
    }
  };
  
  return (
    <form className="mx-auto w-[327px] rounded-[13px] bg-white mb-[87px] flex flex-col p-6 gap-y-6">
      <Input
        type={"text"}
        onfocusHandler={onfocusHandler}
        onblurHandler={onblurHandler}
        onChangeHandler={onChangeHandler}
        isValid={isNameValid}
        id={"name"}
        isFocus={isFocus}
      >
        Name
      </Input>
      <Input
        type={"email"}
        onfocusHandler={onfocusHandler}
        onblurHandler={onblurHandler}
        onChangeHandler={onChangeHandler}
        isValid={isEmailValid}
        id={"email"}
        isFocus={isFocus}
      >
        Email Address
      </Input>
      <Dropdown />
      <Input
        type={"text"}
        onfocusHandler={onfocusHandler}
        onblurHandler={onblurHandler}
        onChangeHandler={onChangeHandler}
        isValid={isPhoneValid}
        id={"phone"}
        isFocus={isFocus}
      >
        Phone Number
      </Input>
      <Input
        type={"text"}
        onfocusHandler={onfocusHandler}
        onblurHandler={onblurHandler}
        onChangeHandler={onChangeHandler}
        isValid={isCompanyValid}
        id={"company"}
        isFocus={isFocus}
      >
        Company
      </Input>
      <Button
        buttonTheme={"w-[279px] py-[14px]  text-white bg-[#5175FF]"}
        clickHandler={clickHandler}
      >
        Get on the list
      </Button>
    </form>
  );
}
