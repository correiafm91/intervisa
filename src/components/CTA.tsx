
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-intervisa-light to-intervisa">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Pronto para conquistar seu visto?
          </h2>
          <p className="text-white text-xl mb-8">
            Dê o primeiro passo para realizar seu sonho internacional. Nossa equipe 
            especializada está pronta para ajudar você.
          </p>
          <Button className="bg-white text-intervisa hover:bg-gray-100 text-lg px-8 py-6 shadow-lg">
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex items-center">
              Emitir meu visto
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="text-white/80 mt-4 text-sm">
            Entre em contato hoje mesmo e inicie seu processo com segurança e tranquilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
