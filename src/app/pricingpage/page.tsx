import PricingwToggle from "@/components/pricingcomponent";
import { Switch } from "@/components/ui/switch";
import React from "react";

function PrincingPage() {
  return (
    <div className="flex items-center justify-center h-screen flex-col bg-blue-300">
      <h1 className="text-3xl font-bold">Our Pricing</h1>
      <div className="flex flex-row items-center gap-6">
        <h3>Anually</h3>
        <Switch className=" bg-[#797EE2]" />
        <h3>Monthly</h3>
      </div>
      <div className="flex flex-row">
        <PricingwToggle />
        <PricingwToggle />
        <PricingwToggle />
      </div>
    </div>
  );
}

export default PrincingPage;
