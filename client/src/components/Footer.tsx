import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/logo_quadrado_10anos_prata.png" alt="Airpark Logo" className="h-12 w-12" />
              <span className="font-bold text-xl text-white">AIRPARK</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Há 10 anos a redefinir o estacionamento aeroportuário em Portugal. Segurança, conforto e o melhor preço em Lisboa, Porto e Faro.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/AirparkPortugal" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/airpark.pt/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/company/airpark-portugal/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.youtube.com/@AirparkPortugal" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.airpark.pt/" className="text-gray-300 hover:text-gold transition-colors">Sobre Nós</a></li>
              <li><a href="https://www.airpark.pt/" className="text-gray-300 hover:text-gold transition-colors">Serviços</a></li>
              <li><a href="https://www.airpark.pt/" className="text-gray-300 hover:text-gold transition-colors">Preços</a></li>
              <li><a href="https://www.airpark.pt/" className="text-gray-300 hover:text-gold transition-colors">Blog</a></li>
              <li><a href="https://www.airpark.pt/" className="text-gray-300 hover:text-gold transition-colors">Contactos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Aeroportos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.airpark.pt/" className="text-gray-300 hover:text-gold transition-colors">Aeroporto de Lisboa</a></li>
              <li><a href="https://www.airpark.pt/" className="text-gray-300 hover:text-gold transition-colors">Aeroporto do Porto</a></li>
              <li><a href="https://www.airpark.pt/" className="text-gray-300 hover:text-gold transition-colors">Aeroporto de Faro</a></li>
              <li className="pt-2">
                <span className="text-gray-400 text-xs">Disponível 24h/dia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contactos</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-gold" />
                <div>
                  <div className="font-semibold">Lisboa</div>
                  <a href="tel:+351218206188" className="text-gray-300 hover:text-gold">218 206 188</a> / <a href="tel:+351965041858" className="text-gray-300 hover:text-gold">965 041 858</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-gold" />
                <div>
                  <div className="font-semibold">Porto</div>
                  <a href="tel:+351962406304" className="text-gray-300 hover:text-gold">962 406 304</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-gold" />
                <div>
                  <div className="font-semibold">Faro</div>
                  <a href="tel:+351966687408" className="text-gray-300 hover:text-gold">966 687 408</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-gold" />
                <a href="mailto:info@multipark.pt" className="text-gray-300 hover:text-gold">info@multipark.pt</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-gold" />
                <div className="text-gray-300">
                  Azinhaga Sousas<br />
                  2680-310 Apelação
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Airpark Portugal. Todos os direitos reservados.</p>
            <p className="mt-1">Campanha 10 Anos - 12 Meses, 12 Prémios</p>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="/termos-e-condicoes" className="text-gray-300 hover:text-gold transition-colors">Termos e Condições</Link>
            <a href="https://www.airpark.pt/" className="text-gray-300 hover:text-gold transition-colors">Política de Privacidade</a>
            <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors">Livro de Reclamações</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
