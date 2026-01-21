import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 pt-16 pb-8">
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
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contactos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Aeroportos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Aeroporto de Lisboa</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Aeroporto do Porto</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Aeroporto de Faro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contactos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5" />
                <span>Rua do Estacionamento, 123<br />1700-000 Lisboa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span>+351 210 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span>info@airpark.pt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Airpark Portugal. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Termos e Condições</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Livro de Reclamações</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
