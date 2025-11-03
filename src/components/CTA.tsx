import { MessageCircle } from 'lucide-react';

export default function CTA() {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = 'Olá! Preciso de manutenção/instalação urgente.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Precisa de manutenção ou instalação hoje mesmo?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Entre em contato agora e receba um orçamento personalizado
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <MessageCircle size={24} />
          Solicitar Orçamento Agora
        </a>
      </div>
    </section>
  );
}
