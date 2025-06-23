import { TipCalculator } from "@/components/tipCalculator/tipcalculator";
import { Link } from "lucide-react";
import { IoHome } from "react-icons/io5";

function tipCalculatorPage() {
  return (
    <div className="bg-[#c5e4e7] w-screen h-screen flex flex-col items-center justify-center ">
      <span className="text-2xl text-[#00494d]">SPLI</span>
      <span className="text-2xl mb-16 text-[#00494d]">TTER</span>
      <TipCalculator />
      <div className="absolute top-4 right-6 p-2 rounded-full bg-gray-400 text-white  hover:bg-gray-500 hover:cursor-pointer transform hover:scale-110 ease-in-out">
        <Link href="/">
          <IoHome className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default tipCalculatorPage;
