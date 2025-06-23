"use client";
import { useState } from "react";
import { ButtonTip } from "./button-tip";

const tips = [5, 10, 15, 25, 50];

export function TipCalculator() {
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [customSelected, setCumstomSelected] = useState(false);
  return (
    <div className="w-[1000px] h-[378px] flex flex-row bg-white p-[30px] gap-8 rounded-[10px]">
      <div className="flex flex-col">
        <span className="mt-[30px]">bill</span>
        <div className="relative w-[454px] h-[36px]">
          <input
            type="number"
            placeholder="0"
            className="pl-10 w-full h-full rounded-md"
          />
          <img
            src="/tip-calculator/icon-dollar.svg"
            alt="person"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
        <span>Select Tip %</span>
        <div className="grid grid-cols-3 gap-x-[10px] gap-y-[10px]">
          {tips.map((tip) => (
            <ButtonTip
              key={tip}
              mount={tip}
              isSelected={selectedTip === tip}
              onClick={() => setSelectedTip(tip)}
            />
          ))}
          <input
            type="number"
            placeholder="Custom"
            className="w-[145px] h-[45px] bg-[#f4fafb] text-[#7f9c9f] rounded-[8px]"
          />
        </div>
        <div>
          <span>Number of People</span>
          <div className="relative w-[454px] h-[36px]">
            <input
              type="number"
              placeholder="0"
              className="pl-10 w-full h-full rounded-md"
            />
            <img
              src="/tip-calculator/icon-person.svg"
              alt="person"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#00494d] flex flex-col px-8 rounded-[10px] w-full">
        <div className="mt-[37px]">
          <span className="text-white"> Tip Amount</span>
          <span>000</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white"> Total</span>
          <button className="bg-[#26c0ab] text-[#00494d] text-[13.3px] rounded-[10px] w-[390px] h-[36px] hover:bg-white">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
