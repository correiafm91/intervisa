
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-intervisa">Inter</span>visa
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Especialistas em serviços de assessoria para vistos internacionais, 
              ajudando pessoas a realizarem seus sonhos ao redor do mundo desde 2020.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-intervisa transition-colors">Serviços</a></li>
              <li><a href="#countries" className="text-gray-400 hover:text-intervisa transition-colors">Países</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-intervisa transition-colors">Processo</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-intervisa transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Intervisa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
