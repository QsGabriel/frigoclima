import { Award, Clock, Shield, Wrench, FileText } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: 'Técnicos Certificados',
      description: 'Profissionais qualificados e experientes',
    },
    {
      icon: <Clock size={40} className="text-blue-600" />,
      title: 'Atendimento Rápido',
      description: 'Resposta ágil para suas necessidades',
    },
    {
      icon: <Shield size={40} className="text-blue-600" />,
      title: 'Garantia de Serviço',
      description: 'Compromisso com qualidade e segurança',
    },
    {
      icon: <Wrench size={40} className="text-blue-600" />,
      title: 'Peças Originais',
      description: 'Somente componentes de qualidade',
    },
    {
      icon: <FileText size={40} className="text-blue-600" />,
      title: 'Orçamento Sem Compromisso',
      description: 'Transparência em todos os serviços',
    },
  ];

  return (
    <section id="diferenciais" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Nossos Diferenciais
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
