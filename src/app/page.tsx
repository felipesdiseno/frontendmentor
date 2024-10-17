import BlogPreviewCard from "@/components/BlogCardPreview";
import QrCard from "@/components/QrCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProfileLinkCard from "@/components/ProfileLinksCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-[family-name:var(--font-geist-sans)] flex-col bg-[#D5E1EF] min-h-screen p-6">
      <h1 className="text-3xl text-gray-700 font-bold mb-8 text-center">
        Proyectos realizados para completar el desafío de Frontend Mentor
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex-grow flex items-center">
            <QrCard />
          </div>
          <Button variant="outline" className="w-full max-w-[200px] mt-4">
            <Link href="/qrcodecard" className="w-full text-center">
              Ver tarjeta QR
            </Link>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex-grow flex items-center">
            <BlogPreviewCard />
          </div>
          <Button variant="outline" className="w-full max-w-[200px] mt-4">
            <Link href="/blogpreview" className="w-full text-center">
              Ver vista previa del blog
            </Link>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex-grow flex items-center shadow-lg ">
            <ProfileLinkCard />
          </div>
          <Button variant="outline" className="w-full max-w-[200px] mt-4">
            <Link href="/socialprofile" className="w-full text-center">
              Ver enlaces de perfil
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-gray-700 font-bold mb-8 text-center">
          recipe component
        </h1>
        <Button variant="outline" className="w-full max-w-[200px] mt-4">
          <Link href="/recipepage" className="w-full text-center">
            Vista receta
          </Link>
        </Button>
      </div>
    </div>
  );
}
