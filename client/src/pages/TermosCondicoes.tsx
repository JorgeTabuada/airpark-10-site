import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

const TermosCondicoes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar à página inicial
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Termos e Condições
          </h1>
          <p className="text-gray-300 text-lg">
            Campanha Promocional "10 Anos, 1 Ano de Prémios"
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          
          {/* Seção 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4 border-b-2 border-[#c9a961] pb-2">
              1. ENTIDADE PROMOTORA
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>1.1.</strong> A presente campanha promocional, doravante designada por "Campanha 10 Anos", é promovida, organizada e gerida pela sociedade comercial <strong>Multipark - Gestão e Exploração de Parqueamento Automóvel, S.A.</strong> (doravante designada abreviadamente por "Multipark").
              </li>
              <li>
                <strong>1.2.</strong> A Multipark tem sede na Azinhaga das Sousas, 2680-310 Apelação, e é titular do Número de Identificação de Pessoa Coletiva (NIPC) 514164778.
              </li>
              <li>
                <strong>1.3.</strong> A campanha visa celebrar o 10.º aniversário da marca comercial "Airpark", propriedade da Multipark.
              </li>
            </ul>
          </section>

          {/* Seção 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4 border-b-2 border-[#c9a961] pb-2">
              2. ÂMBITO TEMPORAL E TERRITORIAL
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>2.1.</strong> A campanha decorrerá entre as 00h00 do dia <strong>23 de Janeiro de 2026</strong> e as 23h59 do dia <strong>31 de Dezembro de 2026</strong> (hora de Portugal Continental).
              </li>
              <li>
                <strong>2.2.</strong> A campanha é válida para reservas efetuadas nos parques de estacionamento explorados pela Multipark, sob a marca Airpark, nos aeroportos de <strong>Lisboa, Porto e Faro</strong>, desde que cumpram os requisitos de participação estipulados na Cláusula 4.
              </li>
            </ul>
          </section>

          {/* Seção 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4 border-b-2 border-[#c9a961] pb-2">
              3. ELEGIBILIDADE E EXCLUSÕES
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>3.1.</strong> Podem participar na Campanha todos os indivíduos, maiores de 18 anos, residentes em Portugal ou no estrangeiro, que adquiram serviços de estacionamento à Multipark na qualidade de consumidor final (B2C).
              </li>
              <li>
                <strong>3.2. Exclusões de Participantes:</strong> Estão expressamente impedidos de participar e de receber prémios:
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>a)</strong> Colaboradores, administradores, gerentes ou detentores de participações sociais da Multipark;</li>
                  <li><strong>b)</strong> Cônjuges, unidos de facto e familiares diretos (1.º grau) dos colaboradores referidos na alínea anterior.</li>
                </ul>
              </li>
              <li>
                <strong>3.3. Exclusões de Canais de Reserva:</strong> Não serão consideradas válidas para efeitos de participação nesta campanha, sendo automaticamente excluídas, as reservas que:
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>a)</strong> Sejam efetuadas através de Agências de Viagens (físicas ou online);</li>
                  <li><strong>b)</strong> Sejam provenientes de plataformas agregadoras de preços ou parceiros externos (ex: Booking.com, Rentalcars, Ryanair Parking, comparadores de preços, etc.);</li>
                  <li><strong>c)</strong> Sejam efetuadas através do motor de busca genérico do website institucional, sem a utilização da Landing Page específica ou dos links oficiais da campanha enviados por e-mail/redes sociais;</li>
                  <li><strong>d)</strong> Respeitem a contratos corporativos (Empresas) com tabelas de preços pré-negociadas que não incluam adesão a campanhas promocionais.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Seção 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4 border-b-2 border-[#c9a961] pb-2">
              4. MECÂNICA DE PARTICIPAÇÃO E NATUREZA DA AÇÃO
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>4.1. Natureza Jurídica:</strong> A presente iniciativa configura-se como uma Campanha Promocional e Passatempo de Fidelização, visando premiar a recorrência e preferência dos clientes. Não se constitui como "Sorteio", "Lotaria" ou "Jogo de Fortuna ou Azar", uma vez que a atribuição dos prémios não depende exclusiva ou preponderantemente da sorte, mas sim da concretização efetiva de um contrato de prestação de serviços (reserva paga e gozada) e da aplicação de critérios de gestão interna definidos pela Promotora.
              </li>
              <li>
                <strong>4.2. Condições de Participação:</strong> Para se habilitar aos prémios, o Participante deve, cumulativamente:
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>a)</strong> Efetuar uma reserva válida através dos Links Oficiais da Campanha (disponibilizados na Newsletter, Redes Sociais ou Landing Page dedicada);</li>
                  <li><strong>b)</strong> Efetuar o pagamento integral do serviço;</li>
                  <li><strong>c)</strong> Concretizar a estadia (check-in e check-out da viatura).</li>
                </ul>
              </li>
              <li>
                <strong>4.3. Critério de Seleção dos Vencedores:</strong>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>a)</strong> A seleção dos vencedores mensais e do vencedor final será realizada pela Administração da Multipark com base em critérios objetivos de gestão de reservas, tais como, mas não limitados a: identificação de "Momentos Premiados" (ex: a 100.ª reserva do mês; a reserva efetuada no minuto exato do aniversário da empresa), volume de faturação ou antiguidade do cliente.</li>
                  <li><strong>b)</strong> A Multipark dispensa os participantes da obrigação de submeter frases criativas ou responder a inquéritos, assumindo a gestão automática das participações com base no ID de Reserva.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Seção 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4 border-b-2 border-[#c9a961] pb-2">
              5. PRÉMIOS
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>5.1. Prémios Mensais:</strong> A Multipark atribuirá mensalmente prémios de natureza variada (ex: estadias, tecnologia, vouchers de serviço), cuja descrição específica será comunicada antecipadamente via Newsletter e canais digitais oficiais.
              </li>
              <li>
                <strong>5.2. Grande Prémio Final:</strong>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>a)</strong> Consiste na atribuição de 1 (Um) Ano de Estacionamento Gratuito numa das infraestruturas Multipark (Lisboa, Porto ou Faro);</li>
                  <li><strong>b)</strong> O prémio inclui a modalidade de Estacionamento Coberto e/ou Serviço de Valet Parking, conforme disponibilidade;</li>
                  <li><strong>c)</strong> O valor comercial máximo estimado deste prémio é de 2.300,00€ (Dois mil e trezentos euros), IVA incluído.</li>
                </ul>
              </li>
              <li>
                <strong>5.3. Regime dos Prémios:</strong>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>a)</strong> Os prémios são pessoais e intransmissíveis;</li>
                  <li><strong>b)</strong> Em nenhuma circunstância os prémios poderão ser convertidos em dinheiro (numerário) ou trocados por outros serviços, salvo acordo expresso da Administração da Multipark em casos de força maior.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Seção 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4 border-b-2 border-[#c9a961] pb-2">
              6. ENTREGA, VALIDADE E POLÍTICA DE CANCELAMENTO
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>6.1. Comunicação:</strong> Os vencedores serão contactados exclusivamente através do endereço de e-mail e/ou contacto telefónico associados à reserva premiada.
              </li>
              <li>
                <strong>6.2. Reclamação do Prémio:</strong> O vencedor dispõe de um prazo de 30 (trinta) dias corridos, a contar da data da notificação, para reclamar o seu prémio. A ausência de resposta neste prazo implica a caducidade do direito ao prémio, reservando-se a Multipark o direito de o atribuir a um suplente ou de o declarar deserto.
              </li>
              <li>
                <strong>6.3. Política de Cancelamento (Fair Play):</strong>
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>a)</strong> Se o Participante cancelar a reserva antes do apuramento do vencedor, a sua participação é automaticamente anulada;</li>
                  <li><strong>b)</strong> Se o Participante for declarado vencedor e, posteriormente, cancelar a reserva que originou o prémio, perderá o direito ao mesmo;</li>
                  <li><strong>c)</strong> No caso referido na alínea b), o valor monetário da reserva cancelada não será reembolsado em numerário, sendo emitido um Voucher de Crédito com validade de 12 meses.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Seção 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4 border-b-2 border-[#c9a961] pb-2">
              7. PROTEÇÃO DE DADOS PESSOAIS (RGPD)
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>7.1.</strong> No âmbito da presente campanha, a Multipark atua como Responsável pelo Tratamento dos dados pessoais dos participantes.
              </li>
              <li>
                <strong>7.2. Finalidade:</strong> Os dados recolhidos (Nome, Email, Telefone, Matrícula) serão tratados estritamente para a gestão da campanha, processamento da reserva, apuramento de vencedores e entrega de prémios.
              </li>
              <li>
                <strong>7.3. Publicidade e Transparência:</strong> Ao participar, o cliente autoriza, a título gratuito, que o seu Primeiro Nome e a Inicial do seu Apelido (ex: "João S.") sejam divulgados no website e redes sociais da Multipark para efeitos de transparência e anúncio de vencedores.
              </li>
              <li>
                <strong>7.4.</strong> Os dados não serão transmitidos a terceiros, exceto quando necessário para a entrega física de prémios (ex: empresas de transporte) ou cumprimento de obrigações legais.
              </li>
            </ul>
          </section>

          {/* Seção 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4 border-b-2 border-[#c9a961] pb-2">
              8. DISPOSIÇÕES FINAIS
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>8.1.</strong> A Multipark reserva-se o direito de alterar, suspender ou cancelar a campanha, bem como o presente Regulamento, a qualquer momento, em caso de força maior, anomalias técnicas, fraude ou circunstâncias supervenientes que comprometam o normal funcionamento da ação.
              </li>
              <li>
                <strong>8.2.</strong> Qualquer tentativa de fraude, manipulação de dados ou utilização de reservas fictícias implicará a desclassificação imediata do participante e a eventual responsabilidade civil e/ou criminal.
              </li>
              <li>
                <strong>8.3.</strong> Os casos omissos no presente regulamento serão resolvidos pela Administração da Multipark.
              </li>
              <li>
                <strong>8.4.</strong> Para o esclarecimento de dúvidas, os participantes deverão contactar a promotora através do e-mail oficial: <a href="mailto:info@airpark.pt" className="text-[#c9a961] hover:underline font-semibold">info@airpark.pt</a>.
              </li>
            </ul>
          </section>

          {/* Rodapé do documento */}
          <div className="mt-12 pt-6 border-t-2 border-gray-200">
            <p className="text-sm text-gray-600 italic text-center">
              Documento revisto e aprovado pelo Departamento Jurídico da Multipark S.A.<br />
              Versão 2.0 - Janeiro 2026
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link 
              to="/reserva" 
              className="inline-block bg-gradient-to-r from-[#c9a961] to-[#b8964d] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Reservar Agora e Participar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosCondicoes;
