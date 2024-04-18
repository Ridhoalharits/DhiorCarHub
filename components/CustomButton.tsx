"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonInterface } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonInterface) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      <div className="relative w-6 h-6">
        {rightIcon && (
          <Image src={rightIcon} fill className="object-contain" alt="arrow" />
        )}
      </div>
    </button>
  );
};

export default CustomButton;
