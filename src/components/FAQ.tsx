
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
      "Com a Intervisa, o processo completo leva até 20 dias, desde a contratação até a emissão do visto. Trabalhamos com eficiência para garantir que seu visto seja processado o mais rápido possível, respeitando os prazos de cada consulado.",
  },
  {
    question: "Preciso falar inglês para a entrevista de visto?",
    answer:
      "Não é necessário falar inglês para a entrevista. As entrevistas são realizadas nos consulados brasileiros, onde há atendimento em português. Nossa equipe também prepara você completamente para a entrevista no seu idioma nativo.",
  },
  {
    question: "Onde são realizadas as entrevistas de visto?",
    answer:
      "As entrevistas são realizadas em consulados brasileiros, incluindo: Embaixada em Brasília, Consulado-Geral em Porto Alegre, Recife, Rio de Janeiro e São Paulo. Agendamos sua entrevista no local mais próximo de sua residência para sua conveniência.",
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
      "Sim, realizamos todo o agendamento para você, buscando as melhores datas disponíveis no consulado mais próximo de sua localidade e preparando toda a documentação necessária para o dia da entrevista.",
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
