"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Importa todos tus componentes aquí
import BlogPreviewCard from "@/components/BlogCardPreview";
import QrCard from "@/components/QrCard";
import ProfileLinkCard from "@/components/ProfileLinksCard";
import RecipeComponent from "@/components/recipeComponent";
import TestimonialGridComponent from "@/components/TestimonialGrid";

const components = [
  {
    name: "QR Card",
    component: QrCard,
    link: "/qrcodecard",
    description: "A simple QR code component",
    tags: ["QR", "Card"],
  },
  {
    name: "Blog Preview",
    component: BlogPreviewCard,
    link: "/blogpreview",
    description: "A preview card for blog posts",
    tags: ["Blog", "Card"],
  },
  {
    name: "Profile Links",
    component: ProfileLinkCard,
    link: "/socialprofile",
    description: "A card displaying social profile links",
    tags: ["Profile", "Social"],
  },
  {
    name: "Recipe",
    component: RecipeComponent,
    link: "/recipepage",
    description: "A component displaying a recipe",
    tags: ["Recipe", "Food"],
  },
  {
    name: "Testimonial Grid",
    component: TestimonialGridComponent,
    link: "/testimonialpage",
    description: "A grid layout of testimonials",
    tags: ["Testimonial", "Grid"],
  },
];

export default function Home() {
  const [filter, setFilter] = useState("");

  const filteredComponents = components.filter(
    (comp) =>
      comp.name.toLowerCase().includes(filter.toLowerCase()) ||
      comp.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frontend Mentor Challenge Components
      </h1>
      <Input
        type="text"
        placeholder="Filter components..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="max-w-md mx-auto mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredComponents.map((comp, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{comp.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-full h-full flex items-center justify-center  rounded-md cursor-pointer">
                      <comp.component />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-4xl">
                    <comp.component />
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-sm text-gray-600 mb-2">{comp.description}</p>
              <div className="flex flex-wrap gap-2">
                {comp.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant={"outline"} asChild className="w-full">
                <Link href={comp.link}>View Full Page</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
