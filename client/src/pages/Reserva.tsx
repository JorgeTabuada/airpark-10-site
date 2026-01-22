import { ArrowRight, MapPin } from "lucide-react";

export default function Reserva() {
  const airports = [
    {
      id: "lisboa",
      name: "Hub Lisboa",
      badge: "LIS",
      description: "Centro empresarial do país. Estacionamento premium no Aeroporto Humberto Delgado com acesso direto aos terminais.",
      image: "/images/lisboa-airport.jpg",
      bookingUrl: "https://multipark.pt/book?city=lisbon&parkBrand=airpark&campaignId=iSYFzGr7tJjs8cFu8RzQ"
    },
    {
      id: "porto",
      name: "Hub Porto",
      badge: "OPO",
      description: "Gateway do Norte. Soluções profissionais de estacionamento no Aeroporto Sá Carneiro.",
      image: "/images/porto-airport.jpg",
      bookingUrl: "https://multipark.pt/book?city=porto&parkBrand=airpark&campaignId=RROLAawcryZz9VaBYz0C"
    },
    {
      id: "faro",
      name: "Hub Faro",
      badge: "FAO",
      description: "Porta do Algarve. Serviços executivos no Aeroporto de Faro para profissionais e empresas.",
      image: "/images/faro-airport.jpg",
      bookingUrl: "https://multipark.pt/book?city=faro&parkBrand=airpark&campaignId=Ux5LQAh3gyFfS1ztUqDl"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section with Background Image */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/banner_prata.png)',
            filter: 'blur(3px)',
            transform: 'scale(1.1)'
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Uma Década de Excelência
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 font-light mb-8 drop-shadow-md">
            Estacionamento Aeroportuário Premium
          </p>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md">
            Escolha onde quer fazer a sua reserva
          </p>
        </div>
      </section>

      {/* Airports Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {airports.map((airport) => (
            <div
              key={airport.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Airport Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={airport.image}
                  alt={airport.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback para cor sólida se a imagem não carregar
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
                <div className="absolute top-4 right-4 bg-[#003D82] text-white px-4 py-2 rounded-full font-bold text-sm">
                  {airport.badge}
                </div>
              </div>

              {/* Airport Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#D4A574]" />
                  <h3 className="text-2xl font-bold text-gray-900">{airport.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {airport.description}
                </p>

                {/* CTA Button */}
                <a
                  href={airport.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#003D82] hover:bg-[#002a5c] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  Reservar Já
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que as empresas líderes escolhem a Airpark
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">€</span>
              </div>
              <h3 className="text-xl font-bold text-[#003D82] mb-3">Custo-Benefício Excecional</h3>
              <p className="text-gray-600">
                Desde 6€/dia — redução significativa de custos face aos parques oficiais dos aeroportos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-[#003D82] mb-3">Serviço Valet Premium</h3>
              <p className="text-gray-600">
                Entrega e receção do veículo diretamente no terminal. Zero deslocações, máxima eficiência.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🕐</span>
              </div>
              <h3 className="text-xl font-bold text-[#003D82] mb-3">Flexibilidade Total</h3>
              <p className="text-gray-600">
                Alterações de última hora? A Airpark adapta-se à dinâmica do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#003D82] to-[#0052a8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para a Próxima Viagem?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reserve o seu lugar com a Airpark e viaje descansado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="text-[#D4A574]">✓</span>
              <span>Cancelamento Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4A574]">✓</span>
              <span>Melhor Preço Garantido</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
