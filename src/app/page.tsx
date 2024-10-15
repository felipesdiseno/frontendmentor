import QrCard from "@/components/QrCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-[family-name:var(--font-geist-sans)] flex-col bg-[#D5E1EF]">
      <h1 className="text-3xl text-gray-500 font-bold mb-10 mt-4">
        Projects carried out to complete the frontend mentor challenge
      </h1>
      <div className="flex items-center justify-center mb-6 flex-col">
        <QrCard />
        <h1 className="mt-4 ">version Desktop and movile</h1>
      </div>
    </div>
  );
}
