import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar se o utilizador já aceitou os cookies
    const cookieConsent = localStorage.getItem("airpark_cookie_consent");
    if (!cookieConsent) {
      // Mostrar o banner após 1 segundo
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("airpark_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("airpark_cookie_consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gold shadow-2xl animate-slide-up">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <Cookie className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                🍪 Utilizamos Cookies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Este website utiliza cookies para melhorar a sua experiência de navegação, 
                analisar o tráfego do site e personalizar conteúdos. Ao clicar em "Aceitar", 
                concorda com o uso de cookies conforme descrito na nossa{" "}
                <a 
                  href="https://www.airpark.pt/politica-de-privacidade" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gold hover:underline font-medium"
                >
                  Política de Privacidade
                </a>.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              onClick={handleReject}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 w-full sm:w-auto"
            >
              Rejeitar
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-gold hover:bg-yellow-600 text-black font-bold w-full sm:w-auto"
            >
              Aceitar Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
