
import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Análise inicial",
    description: "Avaliamos seu perfil e objetivos para determinar a melhor estratégia para seu visto."
  },
  {
    number: "02",
    title: "Preparação documental",
    description: "Orientamos na coleta e organização de todos os documentos necessários para sua solicitação."
  },
  {
    number: "03",
    title: "Preenchimento de formulários",
    description: "Auxiliamos no preenchimento correto de todos os formulários exigidos pelo consulado."
  },
  {
    number: "04",
    title: "Treinamento para entrevista",
    description: "Preparamos você para responder às perguntas mais comuns da entrevista consular."
  },
  {
    number: "05",
    title: "Acompanhamento final",
    description: "Monitoramos todo o processo até a retirada do seu passaporte com o visto aprovado."
  }
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-3">
            Como <span className="text-intervisa">Funciona</span> Nosso Processo
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A Intervisa simplifica o processo de obtenção do seu visto em 5 etapas claras,
            garantindo eficiência e tranquilidade durante todo o percurso.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-intervisa-light"></div>
          
          {/* Timeline steps */}
          <div className="space-y-16 md:space-y-24 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Circle on timeline for desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-intervisa z-10"></div>
                
                {/* Content */}
                <div className={`md:text-right ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4 md:justify-end">
                      <span className="text-5xl font-bold text-intervisa mr-3 md:order-2">{step.number}</span>
                      <h3 className="text-2xl md:mr-3 md:order-1">{step.title}</h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty div for alternating layout */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
