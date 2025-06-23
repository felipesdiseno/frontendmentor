"use client";
import { useState } from "react";

interface ButtonTipProps {
  mount: number;
  onClick?: () => void;
  isSelected: boolean;
}
export function ButtonTip({ mount, onClick, isSelected }: ButtonTipProps) {
  const handleClick = () => {
    isSelected = true;
    onClick?.();
  };
  return (
    <button
      onClick={handleClick}
      className={`bg-[#00494d] w-[145px] h-[45px] rounded-[8px] text-white p-[10px] text-[13.3] ${
        isSelected ? "bg-[#26c0ab]" : "bg-[#00494d]"
      } `}
    >
      <span>{mount}</span>
      <span>%</span>
    </button>
  );
}
