import { Wind, Package } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Wind size={48} className="text-blue-600" />,
      title: 'Ar-Condicionado',
      items: [
        'Manutenção preventiva e corretiva',
        'Limpeza e higienização',
        'Instalação e venda',
      ],
      brands: 'Fujitsu, Springer, Samsung, Midea, TCL, ELGIN, LG, Philco, Daikin, Hitachi',
    },
    {
      icon: <Package size={48} className="text-blue-600" />,
      title: 'Câmara Fria',
      items: [
        'Montagem e manutenção',
        'Assistência técnica especializada',
        'Peças e equipamentos',
      ],
      brands: 'Danfos, ELGIN, Bitez',
    },
  ];

  return (
    <section id="servicos" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                {service.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  <strong>Marcas:</strong> {service.brands}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
