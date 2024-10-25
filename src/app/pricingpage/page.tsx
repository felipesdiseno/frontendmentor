"use client";

import PricingwToggle from "@/components/pricingcomponent";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import IPricing from "../../../interfaces/Iprincing";

const cardInformation: IPricing[] = [
  {
    pack: "Basic",
    priceMonth: "19.99",
    priceYear: "199.99",
    storage: "500 GB Storage",
    users: "2 Users Allowed",
    send: "Send up to 3 GB",
  },
  {
    pack: "Professional",
    priceMonth: "24.99",
    priceYear: "249.99",
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    send: "Send up to 10 GB",
  },
  {
    pack: "Master",
    priceMonth: "39.99",
    priceYear: "399.99",
    storage: "2 TB Storage",
    users: "10 Users Allowed",
    send: "Send up to 20 GB",
  },
];

function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    setIsAnnual((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-blue-300 p-4">
      <h1 className="font-bold text-3xl text-[#6D708D] mb-8">Our Pricing</h1>
      <div className="flex flex-row items-center gap-6 mb-8">
        <h3 className="text-sm font-medium">Monthly</h3>
        <Switch
          className="bg-[#797EE2]"
          checked={isAnnual}
          onCheckedChange={handleToggle}
        />
        <h3 className="text-sm font-medium">Annually</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {cardInformation.map((info, index) => (
          <PricingwToggle
            key={index}
            pack={info.pack}
            priceMonth={isAnnual ? info.priceYear : info.priceMonth}
            priceYear={info.priceYear}
            storage={info.storage}
            users={info.users}
            send={info.send}
            className={`
              p-4 rounded-lg shadow-lg transition-all duration-300
              ${
                info.pack === "Professional"
                  ? "bg-gradient-to-b from-[#A2A7F0] to-[#696EDD] text-white md:scale-105 md:shadow-xl"
                  : "bg-white"
              }
              ${
                info.pack === "Professional"
                  ? "md:w-[324px] md:h-[503px] sm:w-[337.5px] sm:h-[423px]"
                  : "md:w-[300px] md:h-[450px]"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default PricingPage;
