import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  number: number;
}

function FAQItem({ question, answer, number }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 md:p-6 text-left flex items-start gap-4 hover:bg-gray-50 transition-colors"
      >
        <span className="bg-gold text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
          {number}
        </span>
        <span className="flex-1 font-bold text-gray-800 text-lg">{question}</span>
        <ChevronDown
          size={24}
          className={`text-gray-400 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
          <div className="pl-12 text-gray-600 leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "A que sorteios é que eu fico habilitado?",
      answer: (
        <>
          <p className="mb-3">
            A regra é simples: <strong>quanto mais cedo reservares, a mais sorteios vais concorrer.</strong>
          </p>
          <p className="mb-3">
            Ficas automaticamente habilitado a todos os sorteios mensais que acontecerem desde a data em que fazes a reserva até à data da tua viagem.
          </p>
          <p className="bg-gray-50 p-4 rounded-lg">
            <strong>Exemplo:</strong> Se reservares em Janeiro para viajar em Agosto, entras nos sorteios de Janeiro, Fevereiro, Março... até chegares cá. É sempre a acumular.
          </p>
        </>
      ),
    },
    {
      question: "E qual é o brinde (mimo) que eu recebo?",
      answer: (
        <p>
          O brinde físico (aquele que te damos na mão) corresponde ao <strong>mês em que nos visitas</strong> (quando tiras o carro do parque). Se reservaste em Janeiro, mas só vens cá em Maio, recebes o brinde de Maio.
        </p>
      ),
    },
    {
      question: 'O que é o "Grande Prémio Final" de Dezembro?',
      answer: (
        <>
          <p className="mb-3">
            É a joia da coroa. Vamos sortear <strong>1 Ano Inteiro de Estacionamento Grátis</strong>.
          </p>
          <p className="mb-3">
            Fizemos as contas e este prémio tem um valor comercial de cerca de <span className="text-gold font-bold text-xl">2.300€</span>. Sim, é esse o valor que podes poupar se o ganhares.
          </p>
          <p>
            Todas as reservas da campanha entram neste pote final.
          </p>
        </>
      ),
    },
    {
      question: "Onde é que eu vejo se ganhei?",
      answer: (
        <>
          <p className="mb-3">
            No <strong>Instagram</strong> e no <strong>Facebook</strong> da Airpark.
          </p>
          <p className="mb-3">
            Não vamos encher a tua caixa de e-mail com anúncios de vencedores. Por isso, a regra é clara: <strong>tens de ser nosso seguidor nas redes sociais.</strong>
          </p>
          <p className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            Se o teu nome sair e não estiveres lá para ver, é uma chatice. Segue-nos já para não perderes a oportunidade.
          </p>
        </>
      ),
    },
    {
      question: "Posso reservar pelo vosso site normal (o da página principal)?",
      answer: (
        <>
          <p className="mb-3 text-red-600 font-bold">NÃO.</p>
          <p className="mb-3">
            Atenção a isto: para entrares nos sorteios e teres os descontos dos 10 Anos, tens de reservar obrigatoriamente pelos <strong>links especiais</strong> que enviamos por e-mail, que estão nas nossas redes sociais ou na página comemorativa dos 10 Anos.
          </p>
          <p className="bg-red-50 border border-red-200 p-4 rounded-lg">
            Se reservares pelo motor de busca "normal" do site, és muito bem-vindo, mas <strong>não entras no sorteio</strong>.
          </p>
        </>
      ),
    },
    {
      question: "E se eu cancelar a reserva, mantenho os prémios?",
      answer: (
        <>
          <p className="mb-3">
            <strong>Não.</strong> Se cancelares a reserva, sais automaticamente da lista de sorteios e perdes o direito aos descontos ou brindes.
          </p>
          <p>
            Não dá para "fazer a reserva para entrar no sorteio" e depois cancelar só para ver se ganhas. Aqui jogamos limpo!
          </p>
        </>
      ),
    },
    {
      question: "Se viajar mais do que uma vez, entro no sorteio várias vezes?",
      answer: (
        <>
          <p className="mb-3">
            <strong>Sim!</strong> Cada reserva que faças entra em todos os sorteios. Quanto mais viajares, mais vezes participas.
          </p>
          <p className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <strong>Exemplo:</strong> Se viajares 30 vezes e todas as reservas forem até Dezembro, entras nos 11 sorteios mensais... <strong>30 vezes cada!</strong> Basicamente, ganhas de certeza. 😉
          </p>
        </>
      ),
    },
    {
      question: "Posso acumular descontos?",
      answer: (
        <p>
          <strong>Sim.</strong> Se reservares agora com uma campanha e nós lançarmos um "extra" no mês seguinte que seja acumulável, tu ganhas essa vantagem. Premiamos quem confia em nós com antecedência.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            ❓ Perguntas Frequentes <span className="text-gold">(Sem Tretas)</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo o que precisas de saber sobre os 10 Anos Airpark
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg">
              Tens dúvidas sobre como ganhar os prémios, os descontos ou o ano de estacionamento grátis? Aqui tens as respostas, <strong>preto no branco</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                number={index + 1}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg mb-6">
            Ainda tens dúvidas? Manda-nos mensagem ou liga.<br />
            <strong>Mas despacha-te a reservar, que os prémios não esperam.</strong>
          </p>
          <Button className="bg-gold hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-full">
            RESERVAR AGORA PELO LINK CERTO
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
