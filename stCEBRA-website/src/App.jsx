import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function CebraHomePage() {
  const services = [
    {
      title: 'Accesorios de Tecnología',
      description: 'Equipos y accesorios para mejorar tu experiencia.',
      icon: '🎧',
    },
    {
      title: 'Repuestos Informáticos',
      description: 'Componentes originales y compatibles.',
      icon: '🖥️',
    },
    {
      title: 'Reparación de Computadoras',
      description: 'Optimización y mantenimiento profesional.',
      icon: '💻',
    },
    {
      title: 'Desarrollo Web',
      description: 'Páginas modernas, rápidas y responsive.',
      icon: '🌐',
    },
    {
      title: 'Cámaras de Seguridad',
      description: 'Instalación y monitoreo profesional.',
      icon: '📹',
    },
    {
      title: 'Cableado Estructurado',
      description: 'Redes organizadas y eficientes.',
      icon: '🔌',
    },
  ];

  const benefits = [
    'Buenas prácticas profesionales',
    'Tecnología actualizada',
    'Atención personalizada',
    'Garantía en nuestros servicios',
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.15),transparent_30%)]" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-wide">
              <span className="text-red-500">CE</span>
              <span className="text-yellow-400">BRA</span>
            </h1>
            <p className="text-xs text-gray-400">
              Servicios Tecnológicos
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-400 transition">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-blue-400 transition">
              Servicios
            </a>
            <a href="#nosotros" className="hover:text-blue-400 transition">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-blue-400 transition">
              Contacto
            </a>
          </nav>

          <button className="bg-red-600 hover:bg-red-500 transition px-5 py-3 rounded-xl font-semibold shadow-lg shadow-red-600/20">
            WhatsApp
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <span className="text-blue-400 font-semibold tracking-widest uppercase text-sm">
            Servicios Tecnológicos
          </span>

          <h2 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
            <span className="text-red-500">CEBRA</span>
            <br />
            <span className="text-white text-4xl md:text-5xl">
              Soluciones tecnológicas
            </span>
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
            Impulsamos tu negocio con soluciones tecnológicas modernas,
            soporte profesional y productos de alta calidad.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-2xl font-bold shadow-xl shadow-red-600/30">
              Contactar
            </button>

            <button className="border border-white/20 hover:border-blue-400 hover:bg-blue-500/10 transition px-8 py-4 rounded-2xl font-semibold">
              Nuestros servicios
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              'Seguridad',
              'Confiabilidad',
              'Rapidez',
              'Soporte',
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
              >
                <p className="font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />

          <div className="relative bg-gradient-to-br from-blue-500/20 to-red-500/20 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
            <div className="w-80 h-80 rounded-full border-[18px] border-white/10 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-t-[18px] border-red-500 animate-spin" />

              <div className="w-44 h-44 rounded-full bg-black flex items-center justify-center border border-white/10">
                <h3 className="text-5xl font-black tracking-wide">
                  <span className="text-red-500">CE</span>
                  <span className="text-yellow-400">BRA</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="servicios"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="mb-12">
          <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
            Nuestros servicios
          </span>

          <h3 className="text-4xl md:text-5xl font-black mt-4">
            Tenemos la solución
            <span className="text-blue-400"> que necesitas</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 hover:-translate-y-2 transition duration-300 backdrop-blur-sm"
            >
              <div className="text-5xl mb-6">{service.icon}</div>

              <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                {service.title}
              </h4>

              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="nosotros"
        className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center"
      >
        <div>
          <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
            ¿Por qué elegirnos?
          </span>

          <h3 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
            Más que soporte,
            <span className="text-blue-400"> ofrecemos confianza</span>
          </h3>

          <p className="text-gray-300 mt-6 leading-relaxed text-lg">
            Trabajamos con soluciones modernas, garantizando seguridad,
            rendimiento y atención personalizada para cada cliente.
          </p>

          <div className="space-y-4 mt-8">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4"
              >
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full" />

          <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              alt="Tecnología"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contacto"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-950 to-black p-12 md:p-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 blur-[120px]" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
              Contáctanos
            </span>

            <h3 className="text-4xl md:text-6xl font-black mt-4 leading-tight">
              Estamos listos para ayudarte
            </h3>

            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              Nuestro equipo está preparado para brindarte soporte,
              asesoramiento y soluciones tecnológicas profesionales.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-2xl font-bold shadow-xl shadow-red-600/30">
                WhatsApp
              </button>

              <button className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-semibold">
                Solicitar cotización
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        © 2025 CEBRA Servicios Tecnológicos. Todos los derechos reservados.
      </footer>
    </div>
  );
}

