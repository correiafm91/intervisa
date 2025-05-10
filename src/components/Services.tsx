
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const serviceData = [
  {
    title: "Assessoria Completa",
    description:
      "Acompanhamento em todas as etapas, desde a preparação de documentos até a entrevista no consulado.",
    icon: "📋",
  },
  {
    title: "Análise de Perfil",
    description:
      "Avaliação detalhada do seu caso para maximizar suas chances de aprovação.",
    icon: "🔍",
  },
  {
    title: "Preparação para Entrevista",
    description:
      "Treinamento e orientação para responder corretamente às perguntas do oficial consular.",
    icon: "🎯",
  },
  {
    title: "Documentação Especializada",
    description:
      "Orientação na preparação e organização de todos os documentos necessários.",
    icon: "📄",
  },
  {
    title: "Acompanhamento Pós-Visto",
    description:
      "Suporte com dúvidas e orientações mesmo após a aprovação do seu visto.",
    icon: "✈️",
  },
  {
    title: "Agendamentos Prioritários",
    description:
      "Acesso a datas de entrevistas mais próximas, quando disponíveis.",
    icon: "🗓️",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-3">
            Nossos <span className="text-intervisa">Serviços</span> Especializados
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A Intervisa oferece soluções completas e personalizadas para garantir
            que seu processo de visto seja o mais tranquilo e bem-sucedido possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="text-4xl mb-3">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
