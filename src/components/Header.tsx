
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-black">
              <span className="text-intervisa">Inter</span>visa
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-black hover:text-intervisa font-medium transition-colors">
              Serviços
            </a>
            <a href="#countries" className="text-black hover:text-intervisa font-medium transition-colors">
              Países
            </a>
            <a href="#process" className="text-black hover:text-intervisa font-medium transition-colors">
              Processo
            </a>
            <a href="#faq" className="text-black hover:text-intervisa font-medium transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-intervisa hover:bg-intervisa-dark text-white">
              <a href="#cta">Solicitar Visto</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-black hover:text-intervisa font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#countries"
                className="text-black hover:text-intervisa font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Países
              </a>
              <a
                href="#process"
                className="text-black hover:text-intervisa font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Processo
              </a>
              <a
                href="#faq"
                className="text-black hover:text-intervisa font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button asChild className="bg-intervisa hover:bg-intervisa-dark text-white w-full">
                <a href="#cta" onClick={() => setMobileMenuOpen(false)}>Solicitar Visto</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
