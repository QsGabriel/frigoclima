import { Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '5561999999999';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Frigoclima</h3>
            <p className="text-gray-600 mb-4">
              Especialistas em refrigeração e climatização
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contatos</h4>
            <div className="space-y-3">
              <a
                href="tel:+5561981537276"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone size={18} />
                (61) 98153-7276
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="mailto:contato@frigoclima.com.br"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
                frigoclimabsb@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Links Rápidos</h4>
            <div className="space-y-2 mb-6">
              <a href="#inicio" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Início
              </a>
              <a href="#servicos" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#contato" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Contato
              </a>
            </div>
            <div className="flex gap-4">

              <a
                href="https://instagram.com/frigoclimabsb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram size={24} /> @frigoclimabsb
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 text-center text-gray-600">
          <p>&copy; {currentYear} Frigoclima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
