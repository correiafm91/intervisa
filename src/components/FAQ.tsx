
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Quais são as chances de aprovação do meu visto?",
    answer:
      "As chances de aprovação dependem de diversos fatores, incluindo seu histórico de viagens, situação financeira, vínculos com o país de origem e o propósito da viagem. Nossa assessoria especializada analisa seu perfil e maximiza suas chances de aprovação, com taxa de sucesso superior a 95% para nossos clientes.",
  },
  {
    question: "Quanto tempo leva o processo de obtenção do visto?",
    answer:
      "O tempo varia de acordo com o país e o tipo de visto solicitado. Em geral, o processo pode levar de 2 semanas a 3 meses, dependendo da disponibilidade de datas para entrevista no consulado e do tempo de processamento. Nossa equipe trabalha para agilizar o processo sempre que possível.",
  },
  {
    question: "Preciso falar inglês para a entrevista de visto?",
    answer:
      "Embora seja recomendável, não é obrigatório para todos os tipos de visto. Para vistos de turismo, um conhecimento básico pode ser suficiente. Para vistos de estudo ou trabalho, os requisitos podem ser mais exigentes. Oferecemos preparação específica para cada situação, incluindo simulações de entrevista.",
  },
  {
    question: "A Intervisa garante a aprovação do meu visto?",
    answer:
      "Nenhuma empresa pode garantir 100% de aprovação, pois a decisão final cabe exclusivamente ao oficial consular. No entanto, nosso conhecimento especializado e experiência nos permitem identificar e minimizar possíveis problemas, aumentando significativamente suas chances de aprovação.",
  },
  {
    question: "O que acontece se meu visto for negado?",
    answer:
      "Em caso de negativa, analisamos os motivos e desenvolvemos uma estratégia para uma nova aplicação, quando possível. Dependendo do pacote contratado, podemos oferecer suporte para uma segunda tentativa com condições especiais.",
  },
  {
    question: "Vocês agendam a entrevista no consulado?",
    answer:
      "Sim, realizamos todo o agendamento para você, buscando as melhores datas disponíveis e preparando toda a documentação necessária para o dia da entrevista.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-3">
            Perguntas <span className="text-intervisa">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Esclarecemos suas principais dúvidas sobre o processo de obtenção de vistos
            internacionais.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
