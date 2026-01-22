import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="text-gray-700 leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs: FAQItemProps[] = [
    {
      question: "1. A que sorteios é que eu fico habilitado?",
      answer: (
        <>
          A regra é simples: quanto mais cedo reservares, a mais sorteios vais concorrer. Ficas automaticamente habilitado a todos os sorteios mensais que acontecerem desde a data em que fazes a reserva até à data da tua viagem.
          <br /><br />
          <strong>Exemplo:</strong> Se reservares em Janeiro para viajar em Agosto, entras nos sorteios de Janeiro, Fevereiro, Março... até chegares cá. É sempre a acumular oportunidades!
        </>
      ),
    },
    {
      question: "2. E qual é o brinde (mimo) que eu recebo?",
      answer: (
        <>
          O brinde físico (aquele que te entregamos na mão) corresponde sempre ao mês em que nos visitas (quando levantas o carro do parque).
          <br /><br />
          <strong>Exemplo:</strong> Se reservaste em Janeiro (aproveitando o desconto desse mês), mas só viajas em Maio, recebes o brinde exclusivo que estivermos a oferecer em Maio.
        </>
      ),
    },
    {
      question: "3. O que é o \"Grande Prémio Final\" de Dezembro?",
      answer: (
        <>
          É a joia da coroa. Vamos sortear <strong>1 Ano Inteiro de Estacionamento Grátis</strong>. Fizemos as contas e este prémio tem um valor comercial estimado de <strong className="text-[#D4A574]">2.300€</strong>. Sim, é esse o valor que podes poupar se o ganhares.
          <br /><br />
          Todas as reservas válidas da campanha entram neste pote final.
        </>
      ),
    },
    {
      question: "4. Sou Parceiro ou Agência de Viagens. Posso participar?",
      answer: (
        <>
          Podes participar nos Sorteios, sim! Mas atenção aos descontos. Se és nosso parceiro, já tens condições especiais habituais. Para entrares nesta campanha, deves reservar através do <strong>Link Oficial dos 10 Anos</strong>.
          <br /><br />
          Ao fazeres isso, aplicam-se os descontos da campanha (e não o teu desconto de parceiro acumulado).
          <br /><br />
          <strong>Resumo:</strong> Entras nos sorteios como qualquer outro cliente, mas tens de usar o link da festa!
        </>
      ),
    },
    {
      question: "5. Posso reservar pelo vosso site normal ou telefone?",
      answer: (
        <>
          <strong className="text-red-600">NÃO.</strong> Atenção a isto: para entrares nos sorteios e teres os descontos dos 10 Anos, tens de reservar obrigatoriamente pelos <strong>links especiais</strong> ou botões que enviamos por e-mail, redes sociais ou na página <strong>airpark-aniversario.pt</strong>.
          <br /><br />
          Se reservares pelo motor de busca "genérico" do site, és muito bem-vindo, mas não entras no sorteio nem usufruis destas condições.
        </>
      ),
    },
    {
      question: "6. Se eu cancelar a reserva, mantenho os prémios? (Política de Fair Play)",
      answer: (
        <>
          Aqui jogamos limpo. A política funciona assim:
          <br /><br />
          <strong>Antes do Sorteio:</strong> Podes cancelar e receber o reembolso (conforme as regras gerais), mas sais da lista do sorteio.
          <br /><br />
          <strong>Depois do Sorteio:</strong> Se o sorteio do mês já aconteceu (e tu participaste nele), já não fazemos devolução em dinheiro. No entanto, como imprevistos acontecem, o valor fica em <strong>Crédito (Voucher)</strong> para usares numa futura viagem quando te der mais jeito.
          <br /><br />
          <strong>Nota:</strong> Não dá para "reservar só para entrar no sorteio" e depois cancelar.
        </>
      ),
    },
    {
      question: "7. Fui um dos vencedores, mas só viajo daqui a uns meses. Perco o prémio?",
      answer: (
        <>
          Claro que não! O prémio é teu. Se ganhaste o sorteio em Fevereiro, mas só viajas em Novembro, não te preocupes. O prémio fica guardado e será entregue (ou ativado) no momento do teu regresso, quando vieres levantar a viatura.
        </>
      ),
    },
    {
      question: "8. Onde é que eu vejo se ganhei?",
      answer: (
        <>
          No <strong>Instagram</strong> e no <strong>Facebook</strong> da Airpark. Para não encher a tua caixa de e-mail com spam, anunciamos os vencedores nas redes sociais.
          <br /><br />
          <strong className="text-[#D4A574]">Regra de Ouro:</strong> Tens de ser nosso seguidor para validar o prémio. Se o teu nome sair e não estiveres lá para ver, é uma chatice. Segue-nos já!
        </>
      ),
    },
    {
      question: "9. Se viajar mais do que uma vez, entro no sorteio várias vezes?",
      answer: (
        <>
          <strong>Sim!</strong> Cada reserva conta como uma participação. Quanto mais viajares, mais hipóteses tens.
          <br /><br />
          Se viajares 10 vezes até Dezembro, o teu nome entra 10 vezes no "chapéu" do Grande Prémio Final. Basicamente, as tuas probabilidades disparam! 😉
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-[#003D82] to-[#0052a8]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ❓ Perguntas Frequentes
          </h1>
          <p className="text-xl text-white/90">
            Campanha 10 Anos
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white text-lg mb-6">
            Ainda tens dúvidas? Manda-nos mensagem ou liga.<br />
            <strong>Mas despacha-te a reservar, que os prémios não esperam.</strong>
          </p>
          <Link href="/reserva">
            <Button className="bg-gold hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-full">
              RESERVAR AGORA PELO LINK CERTO
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
