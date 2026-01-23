import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/images/logo_quadrado_10anos.png" alt="Airpark 10 Anos" className="h-8 w-8 md:h-10 md:w-10 rounded-sm" />
            <span className="font-bold text-base md:text-xl tracking-wide text-foreground">
              AIRPARK <span className="text-gold">10 ANOS</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#timeline" className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors">A Nossa História</a>
          <a href="#ofertas" className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors">Ofertas</a>
          <Link href="/faq" className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors">FAQ</Link>
          <Link href="/reserva">
            <Button className="bg-gold hover:bg-yellow-600 text-black font-bold rounded-full px-6">
              Reservar Agora
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4 flex flex-col gap-4">
          <a href="#ofertas" className="text-gray-700 hover:text-gold" onClick={() => setIsOpen(false)}>Ofertas</a>
          <Link href="/faq" className="text-gray-700 hover:text-gold" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link href="/reserva">
            <Button className="bg-gold text-black font-bold w-full">
              Reservar Agora
            </Button>
          </Link>
          <a href="#timeline" className="text-gray-700 hover:text-gold" onClick={() => setIsOpen(false)}>Conhecer a História</a>
        </div>
      )}
    </nav>
  );
}
