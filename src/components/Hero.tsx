
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Seu visto internacional com <span className="text-intervisa">facilidade</span> e <span className="text-intervisa">segurança</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Assessoria completa em vistos para Estados Unidos, Canadá, Reino Unido e Austrália com 
              altas taxas de aprovação e processo finalizado em até <span className="font-bold">20 dias</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-intervisa hover:bg-intervisa-dark text-white px-8 py-6 text-lg">
                <a href="#cta">
                  Quero meu visto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-intervisa text-intervisa hover:bg-intervisa/10 px-8 py-6 text-lg">
                <a href="#services">Conhecer serviços</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                alt="Paisagem montanhosa nos Estados Unidos" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-64 h-64 bg-intervisa/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-48 h-48 bg-intervisa/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
