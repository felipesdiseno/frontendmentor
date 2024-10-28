import React from "react";
import { Button } from "../ui/button";
import IPricing from "../../../interfaces/Iprincing";

interface PricingwToggleProps extends IPricing {
  className?: string;
  isProfessional?: boolean;
}
function PricingwToggle({
  pack,
  priceMonth,

  storage,
  users,
  send,
  isProfessional,
}: PricingwToggleProps) {
  return (
    <div
      className={`p-4 rounded-xl shadow-lg transition-all duration-300
        ${
          isProfessional
            ? "bg-gradient-to-b from-[#A2A7F0] to-[#696EDD] text-white md:scale-105 md:shadow-xl"
            : "bg-white"
        } 
        ${
          isProfessional
            ? "md:w-[324px] md:h-[503px] sm:w-[337.5px] sm:h-[423px]"
            : "md:w-[300px] md:h-[450px]"
        }
      `}
    >
      <h3
        className={
          isProfessional
            ? "text-white font-bold text-center text-[18.5px]"
            : "text-[#6D708D] font-bold text-center text-[18.5px]"
        }
      >
        {pack}
      </h3>
      <div className="flex flex-row items-center justify-center border-b-2 w-full border-[#D9DAE2] text-white">
        <h3
          className={
            isProfessional
              ? "font-bold text-[37.5px] text-white"
              : "font-bold text-[37.5px] text-[#B3B5C5]"
          }
        >
          $
        </h3>
        <h1
          className={
            isProfessional
              ? "mb-6 text-[69px] text-white font-bold mt-6"
              : "mb-6 text-[69px] text-[#B3B5C5] font-bold mt-6"
          }
        >
          {priceMonth}
        </h1>
      </div>
      <div className="border-b-2 w-full border-[#D9DAE2] flex justify-center">
        <h2
          className={
            isProfessional
              ? "mb-6 text-[15.9px] text-white font-bold mt-6"
              : "mb-6 text-[15p.9px] text-[#B3B5C5] font-bold mt-6"
          }
        >
          {storage}
        </h2>
      </div>
      <div className="border-b-2 w-full border-[#D9DAE2]  flex justify-center">
        <h2
          className={
            isProfessional
              ? "mb-6 text-[15.9px] text-white font-bold mt-6"
              : "mb-6 text-[15p.9px] text-[#B3B5C5] font-bold mt-6"
          }
        >
          {users}
        </h2>
      </div>
      <div className="border-b-2 w-full border-[#D9DAE2] flex justify-center">
        <h2
          className={
            isProfessional
              ? "mb-6 text-[15.9px] text-white font-bold mt-6"
              : "mb-6 text-[15p.9px] text-[#B3B5C5] font-bold mt-6"
          }
        >
          {send}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Button
          className={`w-full rounded-xl mb-4  ${
            isProfessional
              ? " text-[#6C71DE] bg-white border border-white hover:border-white hover:text-white hover:bg-[#6C71DE]"
              : "text-white bg-[#6C71DE] border border-transparent hover:bg-white hover:border-[#6C71DE] hover:text-[#6C71DE] rounded-xl"
          }
            
          `}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}

export default PricingwToggle;
