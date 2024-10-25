"use client";
import PricingwToggle from "@/components/pricingcomponent";
import { Switch } from "@/components/ui/switch";
import React from "react";
import { useState } from "react";
import IPrincing from "../../../interfaces/Iprincing";

const cardIformation: IPrincing[] = [
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
function PrincingPage() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex items-center justify-center h-screen flex-col bg-blue-300">
      <h1 className="font-bold text-[30px] text-[#6D708D] ">Our Pricing</h1>
      <div className="flex flex-row items-center gap-6">
        <h3>Anually</h3>
        <Switch
          className=" bg-[#797EE2]"
          checked={toggle}
          onCheckedChange={handleToggle}
        />
        <h3>Monthly</h3>
      </div>
      <div className="flex flex-row gap-6">
        {cardIformation.map((info, index) => (
          <div className="mt-6 " key={index}>
            <PricingwToggle
              key={index}
              pack={info.pack}
              priceMonth={toggle ? info.priceYear : info.priceMonth}
              priceYear={info.priceYear}
              storage={info.storage}
              users={info.users}
              send={info.send}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrincingPage;
