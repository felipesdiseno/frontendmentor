import QrCard from "@/components/QrCard";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center font-[family-name:var(--font-geist-sans)] flex-col bg-[#D5E1EF] ">
      <h1 className="text-3xl text-gray-500 font-bold mb-10 mt-4 mx-auto p-2 text-center">
        Projects carried out to complete the frontend mentor challenge
      </h1>
      <div className="flex items-center justify-center mb-6 flex-col">
        <QrCard />
        <Link href="/qrcodecard">
          <h1 className="mt-4 "> See the version Desktop and movile</h1>
        </Link>
      </div>
    </div>
  );
}
