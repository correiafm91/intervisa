
import React from "react";
import { Trophy } from "lucide-react";

const TopAgency = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-intervisa rounded-full p-6 shadow-lg">
              <Trophy 
                className="h-16 w-16 md:h-24 md:w-24 text-white" 
                strokeWidth={1.5} 
              />
            </div>
          </div>
          <div className="text-center md:text-left md:max-w-2xl">
            <h2 className="mb-4">
              <span className="font-bold text-intervisa">TOP 1</span> em Todo o Brasil
            </h2>
            <p className="text-lg text-gray-700">
              A Intervisa é reconhecida como a <strong>principal agência de assessoria para vistos no Brasil</strong>, com a maior taxa 
              de aprovação e satisfação de clientes desde 2020. Confie em quem entende do assunto e possui experiência 
              comprovada para tornar sua jornada internacional mais simples e segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAgency;
