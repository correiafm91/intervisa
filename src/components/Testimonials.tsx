
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonialData = [
  {
    quote: "A Intervisa me auxiliou em todo o processo do visto americano. Fui aprovado na primeira tentativa e pude realizar minha viagem dos sonhos.",
    author: "Carlos Oliveira",
    location: "São Paulo, SP",
    rating: 5,
  },
  {
    quote: "Excelente serviço! Atendimento personalizado e muito profissional. Consegui meu visto para o Canadá sem nenhum problema.",
    author: "Marina Souza",
    location: "Rio de Janeiro, RJ",
    rating: 5,
  },
  {
    quote: "Já havia tentado o visto britânico duas vezes sem sucesso. Com a ajuda da Intervisa, fui aprovado e agora estou estudando em Londres.",
    author: "Rafael Mendes",
    location: "Belo Horizonte, MG",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-3">
            O Que Nossos <span className="text-intervisa">Clientes</span> Dizem
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Centenas de pessoas já realizaram seus sonhos internacionais com a
            nossa assessoria especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
