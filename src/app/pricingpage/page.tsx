"use client";

import PricingwToggle from "@/components/pricingcomponent";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import IPricing from "../../../interfaces/Iprincing";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
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
    setIsAnnual(!isAnnual);
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen flex-col p-4 overflow-hidden"
      style={{
        backgroundImage: `url("/pricingPage/bg-top.svg"), url("/pricingPage/bg-bottom.svg")`,
        backgroundPosition: "right -15px top 0px, left -28.5px bottom -70.5px",
        backgroundSize: "26.5%, 26.5%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex items-center justify-center min-h-screen flex-col p-4">
        <h1 className="font-bold text-3xl text-[#6D708D] mb-8">Our Pricing</h1>
        <div className="flex flex-row items-center gap-6 mb-8">
          <h3 className="text-sm font-medium">Annually</h3>
          <Switch checked={isAnnual} onCheckedChange={handleToggle} />
          <h3 className="text-sm font-medium">Monthly</h3>
        </div>
        <div className="flex flex-col md:flex-row  sm:flex-col gap-6 justify-center items-center">
          {cardInformation.map((info, index) => (
            <PricingwToggle
              key={index}
              {...info}
              isProfessional={info.pack === "Professional"}
              isAnnual={isAnnual}
            />
          ))}
        </div>
        <div className="absolute top-4 right-0 p-2 rounded-full bg-gray-400 text-white  hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
          <Link href="/">
            <IoHome className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
