import React from "react";
import { Button } from "../ui/button";
import IPricing from "../../../interfaces/Iprincing";

const bestPrice: IPricing[] = [
  {
    pack: "Professional",
    priceMonth: "24.99",
    priceYear: "249.99",
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    send: "Send up to 10 GB",
  },
];
interface PricingwToggleProps extends IPricing {
  className?: string;
}
function PricingwToggle({
  pack,
  priceMonth,

  storage,
  users,
  send,
}: PricingwToggleProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#A0A5EF] to-[#6B70DD] p-4 rounded-xl">
      <h3 className={isProfessional ? "text-white" : "text-[#6D708D]"}>
        {pack}
      </h3>
      <div className="flex flex-row items-center justify-center border-b-2 w-full border-[#D9DAE2] text-white">
        <h3 className="font-bold text-[37.5px]">$</h3>
        <h1 className="font-bold text-[69px]">{priceMonth}</h1>
      </div>
      <div className="border-b-2 w-full border-[#D9DAE2] flex justify-center">
        <h2 className="mb-6 text-[15px] text-white font-bold mt-6">
          {storage}
        </h2>
      </div>
      <div className="border-b-2 w-full border-[#D9DAE2]  flex justify-center">
        <h2 className="mb-6 text-[15px] text-white font-bold mt-6">{users}</h2>
      </div>
      <div className="border-b-2 w-full border-[#D9DAE2] flex justify-center">
        <h2 className="mb-6 text-[15px] text-white font-bold mt-6">{send}</h2>
      </div>
      <Button className="bg-[#F9F9F9] hover:text-white text-[#6C71DE] hover:bg-[#6C71DE] hover: border border-white rounded-xl mt-4">
        LEARN MORE
      </Button>
    </div>
  );
}

export default PricingwToggle;
