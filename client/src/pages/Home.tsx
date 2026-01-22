import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, CheckCircle2, Download, Gift, Star, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#d4dce6] pt-14">
        <div className="max-w-6xl mx-auto">
          <img
            src="/images/hero_10anos.svg"
            alt="Airpark 10 Anos"
            className="w-full h-auto block"
          />
        </div>

        {/* Buttons below image */}
        <div className="text-center px-4 py-8 bg-[#d4dce6]">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#ofertas">
              <Button className="bg-gold hover:bg-yellow-600 text-black font-bold text-base px-6 py-3 rounded-full shadow-lg">
                Ver Ofertas do Mês
              </Button>
            </a>
            <a href="#timeline">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 font-medium text-base px-6 py-3 rounded-full">
                Conhecer a História
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-gold">10</div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500">Anos de História</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-gray-800">100k+</div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500">Clientes Felizes</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-gray-800">3</div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500">Aeroportos</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-gold">24/7</div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500">Suporte Premium</div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section - Nós Fazemos Anos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                NÓS FAZEMOS ANOS, MAS AS PRENDAS SÃO PARA TI. 🎁
              </h2>
            </div>

            {/* Intro Text */}
            <div className="prose prose-lg max-w-none text-gray-600 mb-12 space-y-4">
              <p>
                Parece que foi ontem, mas a Airpark já anda nisto há uma década. São 10 anos a cuidar do teu carro. 10 anos a ver-te partir e a receber-te de volta. 10 anos de confiança.
              </p>
              <p className="font-medium text-gray-800">
                A verdade é simples: sem ti, não havia festa.
              </p>
              <p>
                Por isso, achámos que não fazia sentido comprarmos um bolo e comê-lo sozinhos no escritório. Queremos celebrar contigo, da única forma que faz sentido: a oferecer-te a melhor experiência possível.
              </p>
              <p>
                Para marcar esta data redonda, preparámos o maior agradecimento da nossa história: <strong>um ano inteiro de ofertas, mimos garantidos e prémios loucos</strong> (sim, incluindo aquele ano de estacionamento VIP avaliado em <span className="text-gold font-bold">2.300€</span>!).
              </p>
              <p className="font-medium text-gray-800">
                Queres saber como podes levar isto tudo para casa? É muito simples.
              </p>
              <p>
                Lê as regras abaixo e entra na festa:
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <a href="/termos-e-condicoes" className="text-gold hover:underline font-medium">Consulta aqui o Regulamento Completo da Campanha</a>
              </p>
            </div>

            {/* Rules Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-200 mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
                🎮 COMO JOGAR & GANHAR: AS REGRAS DA FESTA
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Parece muita coisa? Não é. O resumo é: <strong>quem chega primeiro, ganha mais.</strong>
              </p>
              <p className="text-gray-600 mb-8">
                Aqui está a lógica para este ano de aniversário:
              </p>

              {/* Rule 1 */}
              <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-gold text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  O Prémio de Arranque (Janeiro & Fevereiro): A Escapadinha 🏨
                </h4>
                <p className="text-gray-600">
                  Para começar em grande, fundimos os primeiros meses. Quem fizer reserva agora (ainda em Janeiro) ou durante o mês de Fevereiro, entra automaticamente no sorteio de uma <strong>Escapadinha de Fim de Semana</strong>. Queremos que descanses — não só do estacionamento, mas da vida.
                </p>
              </div>

              {/* Rule 2 */}
              <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-gold text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  A "Bola de Neve" dos Descontos (Acumula até 30%)
                </h4>
                <p className="text-gray-600 mb-4">
                  A vantagem de reservar já não é só garantir lugar. É o preço. As campanhas de desconto são acumuláveis para reservas futuras.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 space-y-2">
                  <p><strong>Como funciona:</strong> Se reservares agora com 10% e, no próximo mês, lançarmos uma campanha extra de 5%, esse valor soma-se à tua reserva existente.</p>
                  <p><strong>O Limite:</strong> Podes acumular descontos até um máximo de <span className="text-gold font-bold">30%</span> sobre o valor total. (Sim, quase um terço do preço oferecido por nós).</p>
                  <p><strong>Conclusão:</strong> Quanto mais cedo entrares, mais descontos apanhas pelo caminho até atingires o teto máximo.</p>
                </div>
              </div>

              {/* Rule 3 */}
              <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-gold text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Bilhete Vitalício para os Sorteios
                </h4>
                <p className="text-gray-600">
                  Quando fazes uma reserva, entras automaticamente nos sorteios mensais <strong>até à data da tua viagem</strong>. Por exemplo: se reservares agora para viajar em Julho, participas nos sorteios de Janeiro, Fevereiro, Março, Abril, Maio e Junho. Depois da tua viagem, só voltarás a participar quando fizeres uma nova reserva. <strong>Resumindo: Reservas uma vez, habilitas-te aos prémios todos até à data da tua viagem.</strong>
                </p>
              </div>

              {/* Rule 4 */}
              <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-gold text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  O Mimo é Garantido (Sempre)
                </h4>
                <p className="text-gray-600">
                  Independentemente da sorte, ninguém sai de mãos a abanar. Quando deixares cá o carro, recebes o brinde desse mês. <strong>Exemplo:</strong> Se viajares em Fevereiro, levas o Kit Carnaval. Se for em Março, levas o Cheirinho Airpark.
                </p>
              </div>

              {/* Rule 5 - Grand Prize */}
              <div className="p-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/30">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-gold text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  O Grande Final (Dezembro)
                </h4>
                <p className="text-gray-600 mb-4">
                  Todas as reservas do ano (sim, a tua de agora também) entram no pote para o "Santo Graal". Não é um lugar qualquer, é o pacote VIP completo:
                </p>
                <div className="bg-white p-4 rounded-lg border border-gold/20">
                  <p className="text-center font-bold text-lg text-gray-800 mb-2">
                    🏆 1 ANO DE ESTACIONAMENTO GRÁTIS (COBERTO + VALET)
                  </p>
                  <p className="text-center text-gray-600 text-sm">
                    Estamos a falar de uma oferta avaliada em <span className="text-gold font-bold text-lg">2.300€</span>. O teu carro dorme sempre à sombra e nós vamos buscá-lo e levá-lo ao terminal por ti. Tratamento de luxo o ano todo, por nossa conta.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary CTA */}
            <div className="bg-gray-800 text-white rounded-2xl p-6 md:p-10">
              <h3 className="text-xl font-bold mb-6 text-center">Resumindo:</h3>
              <div className="space-y-3 mb-8">
                <p className="flex items-start gap-2">
                  <span>👉</span>
                  <span><strong>Reserva Já:</strong> Começas logo com 10% e podes chegar aos 30%.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span>👉</span>
                  <span><strong>Habilita-te:</strong> Entras no sorteio da Escapadinha e nos próximos.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span>👉</span>
                  <span><strong>Segue-nos:</strong> Os vencedores saem sempre no Instagram e Facebook.</span>
                </p>
              </div>
              <div className="text-center">
                <a href="/reserva">
                  <Button className="bg-gold hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-full">
                    Fazer Reserva Agora
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 md:py-24 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">Uma Década a Voar Consigo</h2>
            <div className="w-16 md:w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2016 - Abertura */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-3xl font-bold text-gold">2016</span>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(218,165,32,0.8)] flex-shrink-0"></div>
                <div className="flex-1 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl text-gray-800 font-medium mb-2">A Revolução do Estacionamento em Lisboa</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Nasce a Airpark (Multi Park S.A.) com um desafio claro à concorrência: provar que o Valet Parking no Aeroporto de Lisboa podia ser um serviço premium a preços Low Cost. Começámos com uma missão: a sua viagem começa quando nos entrega a chave.
                  </p>
                </div>
              </div>

              {/* 2017 - Segundo Parque */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-3xl font-bold text-gold">2017</span>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(218,165,32,0.8)] flex-shrink-0"></div>
                <div className="flex-1 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl text-gray-800 font-medium mb-2">Mais Espaço, A Mesma Confiança</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A procura disparou. Para responder aos viajantes frequentes, inaugurámos o segundo parque, reforçando a segurança e a capacidade de resposta. O conceito de "Vá Descansado" começa a ganhar fama entre os passageiros.
                  </p>
                </div>
              </div>

              {/* 2019 - Terceiro Parque Lisboa */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-3xl font-bold text-gold">2019</span>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(218,165,32,0.8)] flex-shrink-0"></div>
                <div className="flex-1 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl text-gray-800 font-medium mb-2">Liderança no Aeroporto Humberto Delgado</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Abertura do terceiro parque em Lisboa. Consolidámos a nossa posição como a alternativa nº1 aos parques oficiais, oferecendo serviços extra como lavagens e carregamento elétrico, essenciais para quem viaja em negócios ou lazer.
                  </p>
                </div>
              </div>

              {/* 2020 - Pandemia */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-3xl font-bold text-gold">2020</span>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(218,165,32,0.8)] flex-shrink-0"></div>
                <div className="flex-1 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl text-gray-800 font-medium mb-2">Resiliência e Segurança</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Num ano em que o mundo parou, a Airpark manteve-se firme. Reforçámos protocolos de higiene e mantivemos o serviço ativo para quem não podia deixar de viajar. A nossa garantia de segurança provou ser à prova de crises.
                  </p>
                </div>
              </div>

              {/* 2022 - Faro */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-3xl font-bold text-gold">2022</span>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(218,165,32,0.8)] flex-shrink-0"></div>
                <div className="flex-1 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl text-gray-800 font-medium mb-2">Chegámos ao Algarve (Aeroporto de Faro)</h4>
                  <p className="text-gray-600 leading-relaxed">
                    O Sul chamou por nós. Expandimos a operação para o Aeroporto de Faro, trazendo o nosso famoso serviço de recolha no terminal para os milhares de turistas e residentes que voam a partir do Algarve.
                  </p>
                </div>
              </div>

              {/* 2024 - Porto */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-3xl font-bold text-gold">2024</span>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(218,165,32,0.8)] flex-shrink-0"></div>
                <div className="flex-1 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl text-gray-800 font-medium mb-2">Conquista do Norte (Aeroporto do Porto)</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A peça que faltava. Chegámos ao Aeroporto Francisco Sá Carneiro. Com a abertura no Porto, a Airpark tornou-se uma referência nacional, cobrindo os três principais aeroportos de Portugal com a mesma qualidade e preços competitivos.
                  </p>
                </div>
              </div>

              {/* 2026 - 10 Anos + Madrid */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0 w-24 text-center">
                  <span className="text-3xl font-bold text-gold">2026</span>
                </div>
                <div className="hidden md:block w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(218,165,32,0.8)] flex-shrink-0"></div>
                <div className="flex-1 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm border border-gold/30">
                  <h4 className="text-xl text-gray-800 font-medium mb-2 flex items-center gap-2">
                    10 Anos e o Salto Internacional: ¡Hola, Madrid!
                    <span className="text-2xl">🇵🇹🇪🇸</span>
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Celebramos uma década com mais de 100.000 clientes satisfeitos. E o melhor presente? A internacionalização. Em março, levamos a qualidade portuguesa além-fronteiras com a abertura do nosso primeiro parque no Aeroporto de Madrid. A viagem está apenas a começar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ofertas Mensais Section */}
      <section id="materiais" className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">Ofertas Mensais</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Todos os meses temos prémios especiais para si. Descubra o que pode ganhar!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Janeiro */}
            <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img src="/images/post_instagram_10anos.png" alt="Oferta Janeiro" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-gray-800 font-bold text-lg">Janeiro</h3>
                <a href="/ofertas/janeiro" className="text-gold hover:text-yellow-600 text-sm font-medium inline-flex items-center gap-1 mt-1">
                  Veja o que pode ganhar <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Fevereiro */}
            <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img src="/images/banner_facebook_10anos.png" alt="Oferta Fevereiro" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-gray-800 font-bold text-lg">Fevereiro</h3>
                <a href="/ofertas/fevereiro" className="text-gold hover:text-yellow-600 text-sm font-medium inline-flex items-center gap-1 mt-1">
                  Veja o que pode ganhar <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Março */}
            <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img src="/images/story_instagram_10anos.png" alt="Oferta Março" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-gray-800 font-bold text-lg">Março</h3>
                <a href="/ofertas/marco" className="text-gold hover:text-yellow-600 text-sm font-medium inline-flex items-center gap-1 mt-1">
                  Veja o que pode ganhar <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Abril */}
            <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img src="/images/email_header_10anos.png" alt="Oferta Abril" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-gray-800 font-bold text-lg">Abril</h3>
                <a href="/ofertas/abril" className="text-gold hover:text-yellow-600 text-sm font-medium inline-flex items-center gap-1 mt-1">
                  Veja o que pode ganhar <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Maio */}
            <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img src="/images/post_linkedin_10anos.png" alt="Oferta Maio" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-gray-800 font-bold text-lg">Maio</h3>
                <a href="/ofertas/maio" className="text-gold hover:text-yellow-600 text-sm font-medium inline-flex items-center gap-1 mt-1">
                  Veja o que pode ganhar <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Junho */}
            <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img src="/images/selo_comemorativo.png" alt="Oferta Junho" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-gray-800 font-bold text-lg">Junho</h3>
                <a href="/ofertas/junho" className="text-gold hover:text-yellow-600 text-sm font-medium inline-flex items-center gap-1 mt-1">
                  Veja o que pode ganhar <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="ofertas" className="py-16 md:py-24 relative overflow-hidden bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">12 Meses, 12 Ofertas</span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">Calendário de Prémios</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto px-4">
              Todos os meses temos uma surpresa especial para si.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Janeiro - 10% */}
            <Card className="bg-gold/10 border-gold/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-black text-xs font-bold px-2 py-1 rounded-bl-lg">
                ATIVO
              </div>
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                  <Gift size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Janeiro</h3>
                <p className="text-gold font-medium text-sm mb-3">Desconto de Aniversário</p>
                <p className="text-gray-600 text-sm mb-5">
                  10% de desconto em todas as reservas de Janeiro.
                </p>
                <a href="/reserva">
                  <Button className="w-full bg-gold hover:bg-yellow-600 text-black font-bold text-sm">
                    Aproveitar Agora
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Fevereiro - 5% */}
            <Card className="bg-gold/10 border-gold/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-black text-xs font-bold px-2 py-1 rounded-bl-lg">
                ATIVO
              </div>
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Fevereiro</h3>
                <p className="text-gold font-medium text-sm mb-3">Mês do Romance</p>
                <p className="text-gray-600 text-sm mb-5">
                  5% de desconto extra em todas as reservas de Fevereiro.
                </p>
                <a href="/reserva">
                  <Button className="w-full bg-gold hover:bg-yellow-600 text-black font-bold text-sm">
                    Aproveitar Agora
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Future Month Teaser */}
            <Card className="bg-gray-50 border-gray-200 relative overflow-hidden sm:col-span-2 lg:col-span-1">
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                  <Trophy size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Março</h3>
                <p className="text-gray-500 font-medium text-sm mb-3">Sorteio Premium</p>
                <p className="text-gray-500 text-sm mb-5">
                  Habilite-se a ganhar uma viagem para dois.
                </p>
                <Button variant="outline" className="w-full border-gray-300 text-gray-400 text-sm" disabled>
                  Em Breve
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pronto para a Próxima Viagem?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto mb-8 px-4">
            Reserve o seu lugar com a Airpark e viaje descansado.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <a href="/reserva">
              <Button className="bg-gold hover:bg-yellow-600 text-black font-bold text-base px-8 py-3 rounded-full">
                Fazer Reserva
              </Button>
            </a>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-gold" />
                <span>Cancelamento Gratuito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-gold" />
                <span>Melhor Preço Garantido</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
