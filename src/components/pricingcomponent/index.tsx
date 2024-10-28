import React from "react";
import { Button } from "../ui/button";
import IPricing from "../../../interfaces/Iprincing";

interface PricingwToggleProps extends IPricing {
  className?: string;
  isProfessional?: boolean;
  isAnnual?: boolean;
}

function PricingwToggle({
  pack,
  priceMonth,
  priceYear,
  storage,
  users,
  send,
  isProfessional,
  isAnnual,
}: PricingwToggleProps) {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition-all duration-300 flex flex-col justify-between
        ${
          isProfessional
            ? "bg-gradient-to-b from-[#A2A7F0] to-[#696EDD] text-white md:scale-105 md:shadow-xl"
            : "bg-white"
        } 
        ${isProfessional ? "md:w-[320px]" : "md:w-[300px]"}
        h-[450px]
      `}
    >
      <div className="space-y-4">
        <h3
          className={`font-bold text-center text-lg ${
            isProfessional ? "text-white" : "text-[#6D708D]"
          }`}
        >
          {pack}
        </h3>
        <div className="flex items-center justify-center">
          <span
            className={`text-5xl font-bold ${
              isProfessional ? "text-white" : "text-[#4A4D60]"
            }`}
          >
            ${isAnnual ? priceYear : priceMonth}
          </span>
        </div>
      </div>
      <div className="space-y-4 text-center">
        <div className="py-4 border-t border-b border-[#D9DAE2]">
          <p className={isProfessional ? "text-white" : "text-[#6D708D]"}>
            {storage}
          </p>
        </div>
        <div className="py-4 border-b border-[#D9DAE2]">
          <p className={isProfessional ? "text-white" : "text-[#6D708D]"}>
            {users}
          </p>
        </div>
        <div className="py-4 border-b border-[#D9DAE2]">
          <p className={isProfessional ? "text-white" : "text-[#6D708D]"}>
            {send}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Button
          className={`w-full py-3 rounded-lg text-sm font-bold transition-colors duration-200 ${
            isProfessional
              ? "bg-white text-[#6C71DE] hover:bg-transparent hover:text-white hover:border-white border-2 border-transparent"
              : "bg-gradient-to-r from-[#A2A7F0] to-[#696EDD] text-white hover:from-white hover:to-white hover:text-[#6C71DE] hover:border-[#6C71DE] border-2 border-transparent"
          }`}
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}

export default PricingwToggle;
