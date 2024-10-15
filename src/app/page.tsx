import BlogPreviewCard from "@/components/BlogCardPreview";
import QrCard from "@/components/QrCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex items-center justify-center font-[family-name:var(--font-geist-sans)] flex-col bg-[#D5E1EF] ">
      <h1 className="text-3xl text-gray-500 font-bold mb-4 mt-2 mx-auto p-2 text-center">
        Projects carried out to complete the frontend mentor challenge
      </h1>
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="flex items-center justify-center mb-6 flex-col gap-6">
          <QrCard />
          <Button variant="outline">
            <Link href="/qrcodecard">See the qr card component</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center mb-6 flex-col gap-6">
          <BlogPreviewCard />

          <Button variant="outline">
            <Link href="/blogpreview">See the Blog preview card</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
