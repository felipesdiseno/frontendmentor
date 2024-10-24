import React from "react";

const cardIformation = [
  {
    title: "Basic",
    priceMonth: "19.99",
    priceYear: "199.99",
    storage: "500 GB Storage",
    users: "2 Users Allowed",
    send: "Send up to 3 GB",
  },
  {
    title: "Professional",
    priceMonth: "24.99",
    priceYear: "249.99",
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    send: "Send up to 10 GB",
  },
  {
    title: "Master",
    priceMonth: "39.99",
    priceYear: "399.99",
    storage: "2 TB Storage",
    users: "10 Users Allowed",
    send: "Send up to 20 GB",
  },
];
// if (toggle === "on") {
//   return cardInformation.map((card) => card.priceMonth); // Retorna los precios mensuales
// } else {
//   return cardInformation.map((card) => card.priceYear); // Retorna los precios anuales
// }

function PricingwToggle() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-300">
      <h3>Basic</h3>
    </div>
  );
}

export default PricingwToggle;
