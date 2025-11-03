import { Phone, MessageCircle } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function Hero() {
  const whatsappNumber = '5561981537276';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-blue-100 pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Manutenção e Instalação de Ar-Condicionado e Câmara Fria
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Atendimento rápido e profissional para residências e empresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Solicitar Orçamento
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Fale no WhatsApp
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
