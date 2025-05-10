
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
    imageUrl: "https://i.postimg.cc/pr5jhnMg/A-silhouetted-New-York-City-scene-bathed-in-natural-earth-tones-utilizing-backlighting-with-a-light.jpg",
    altText: "Paisagem de Nova York, Estados Unidos",
    color: "border-intervisa",
  },
  {
    name: "Canadá",
    description: "Vistos de visitante, estudo, trabalho e programas de imigração.",
    flag: "🇨🇦",
    imageUrl: "https://i.postimg.cc/Znm9Rsjy/A-bright-and-vibrant-image-of-Vancouver-bathed-in-gentle-soft-light-diffused-shadows-and-subtle.jpg",
    altText: "Paisagem de Vancouver, Canadá",
    color: "border-intervisa",
  },
  {
    name: "Reino Unido",
    description: "Vistos de turismo, estudo, negócios e autorizações de trabalho.",
    flag: "🇬🇧",
    imageUrl: "https://i.postimg.cc/7Ls8b5V1/A-classic-black-and-white-photograph-of-the-United-Kingdom-employing-a-blurred-bokeh-effect-for-a-s.jpg",
    altText: "Paisagem em preto e branco do Reino Unido",
    color: "border-intervisa",
  },
  {
    name: "Austrália",
    description: "Vistos de turismo, estudo, trabalho e programas de imigração qualificada.",
    flag: "🇦🇺",
    imageUrl: "https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec",
    altText: "Paisagem da costa australiana com o Twelve Apostles",
    color: "border-intervisa",
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
              <div className="relative h-48 overflow-hidden border-4 border-intervisa">
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
                  <a href="https://ig.me/m/intervisabr" target="_blank" rel="noopener noreferrer">Consultar agora</a>
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
