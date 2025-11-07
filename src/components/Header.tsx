import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <img
          src="/logo-horizontal.png"
          alt="Frigoclima Logo"
          className="h-24 object-contain"
        />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white font-medium hover:text-blue-100 transition-colors duration-300 text-sm uppercase tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700 border-t border-blue-600">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white font-medium hover:text-blue-100 transition-colors duration-300 text-left py-2 uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
