"use client";

import React, { useState } from "react";
import Image from "next/image";
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
import ArticlePreviewComponent from "@/components/ArticlePreview";
import TestimonialGridComponent from "@/components/TestimonialGrid";

const componentes = [
  {
    nombre: "Tarjeta QR",
    componente: QrCard,
    enlace: "/qrcodecard",
    descripcion: "Un componente simple de código QR",
    etiquetas: ["QR", "Tarjeta"],
    imagen: "/imagepreview/qrcard.png",
  },
  {
    nombre: "Vista previa de Blog",
    componente: BlogPreviewCard,
    enlace: "/blogpreview",
    descripcion: "Una tarjeta de vista previa para entradas de blog",
    etiquetas: ["Blog", "Tarjeta"],
    imagen: "/imagepreview/blogpreview.png",
  },
  {
    nombre: "Enlaces de Perfil",
    componente: ProfileLinkCard,
    enlace: "/socialprofile",
    descripcion: "Una tarjeta que muestra enlaces de perfil social",
    etiquetas: ["Perfil", "Social"],
    imagen: "/imagepreview/socialprofile.png",
  },
  {
    nombre: "Receta",
    componente: RecipeComponent,
    enlace: "/recipepage",
    descripcion: "Tarjeta para pagina de recetas",
    etiquetas: ["Receta", "Comida"],
    imagen: "/imagepreview/recipe.png",
  },
  {
    nombre: "Opiniones destacadas",
    componente: TestimonialGridComponent,
    enlace: "/testimonialpage",
    descripcion: "Diseño asimetrico para sesión de opiniones",
    etiquetas: ["Testimonio", "Grid"],
    imagen: "/imagepreview/testimonial.png",
  },
  {
    nombre: "Vista previa de Artículo",
    componente: ArticlePreviewComponent,
    enlace: "/articlepreview",
    descripcion: "Una vista previa de un artículo o entrada de blog",
    etiquetas: ["Artículo", "Vista previa", "Blog"],
    imagen: "/imagepreview/articlepreview.png",
  },
];

export default function Home() {
  const [filtro, setFiltro] = useState("");

  const componentesFiltrados = componentes.filter(
    (comp) =>
      comp.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      comp.etiquetas.some((etiqueta) =>
        etiqueta.toLowerCase().includes(filtro.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Componentes de Frontend Mentor Challenge
      </h1>
      <Input
        type="text"
        placeholder="Filtrar componentes..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="max-w-md mx-auto mb-8 rounded-xl bg-transparent p-4 shadow-md border border-gray-400 text-gray-400"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {componentesFiltrados.map((comp, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">{comp.nombre}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-0">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-full h-48 cursor-pointer overflow-hidden">
                    <Image
                      src={comp.imagen}
                      alt={`Vista previa de ${comp.nombre}`}
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="w-full max-w-4xl max-h-[80vh] overflow-auto">
                  <comp.componente />
                </DialogContent>
              </Dialog>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">{comp.descripcion}</p>
                <div className="flex flex-wrap gap-2">
                  {comp.etiquetas.map((etiqueta, i) => (
                    <Badge key={i} variant="secondary">
                      {etiqueta}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href={comp.enlace}>Ver Página Completa</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
