
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const countryData = [
  {
    name: "Estados Unidos",
    description: "Vistos de turismo (B1/B2), estudo (F1), trabalho (H1B) e outros.",
    flag: "🇺🇸",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    altText: "Skyline de Nova York com o Empire State Building",
    color: "border-blue-500",
  },
  {
    name: "Canadá",
    description: "Vistos de visitante, estudo, trabalho e programas de imigração.",
    flag: "🇨🇦",
    imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    altText: "Vista de Toronto com a CN Tower",
    color: "border-red-500",
  },
  {
    name: "Reino Unido",
    description: "Vistos de turismo, estudo, negócios e autorizações de trabalho.",
    flag: "🇬🇧",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    altText: "London Eye e o Big Ben em Londres",
    color: "border-blue-700",
  },
  {
    name: "Austrália",
    description: "Vistos de turismo, estudo, trabalho e programas de imigração qualificada.",
    flag: "🇦🇺",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    altText: "Opera House em Sydney",
    color: "border-green-500",
  }
];

const Countries = () => {
  return (
    <section id="countries" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-3">
            Países <span className="text-intervisa">Disponíveis</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Oferecemos assessoria especializada para vistos dos destinos mais 
            procurados, com equipes dedicadas para cada país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {countryData.map((country, index) => (
            <Card key={index} className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${country.color}`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={country.imageUrl} 
                  alt={country.altText}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 text-4xl" aria-hidden="true">
                  {country.flag}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{country.name}</CardTitle>
                <CardDescription className="text-base">{country.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="border-intervisa text-intervisa hover:bg-intervisa/10">
                  <a href="#cta">Consultar agora</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
