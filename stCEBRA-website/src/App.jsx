import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
  const services = [
    {
      title: 'Accesorios de tecnología',
      desc: 'Los mejores accesorios para mejorar tu experiencia.',
      icon: '🎧',
    },
    {
      title: 'Repuestos de equipos informáticos',
      desc: 'Repuestos originales y compatibles con garantía.',
      icon: '🖥️',
    },
    {
      title: 'Repotenciación de computadoras',
      desc: 'Mejoramos el rendimiento de tu equipo.',
      icon: '💻',
    },
    {
      title: 'Problemas de TI e informática',
      desc: 'Solucionamos cualquier inconveniente técnico.',
      icon: '🛠️',
    },
    {
      title: 'Instalación de programas originales',
      desc: 'Software 100% original y licenciado.',
      icon: '🪟',
    },
    {
      title: 'Desarrollo web y sistemas',
      desc: 'Creamos soluciones web modernas y seguras.',
      icon: '</>',
    },
    {
      title: 'Instalación de cámaras',
      desc: 'Sistema de videovigilancia confiable.',
      icon: '📹',
    },
    {
      title: 'Cableado estructurado',
      desc: 'Redes estables y organizadas.',
      icon: '🔌',
    },
  ];

  const features = [
    {
      title: 'Seguridad',
      desc: 'Protegemos tu información.',
      icon: '🛡️',
    },
    {
      title: 'Confiabilidad',
      desc: 'Servicios garantizados y de calidad.',
      icon: '⚙️',
    },
    {
      title: 'Rapidez',
      desc: 'Soluciones eficientes y oportunas.',
      icon: '⚡',
    },
    {
      title: 'Soporte',
      desc: 'Atención personalizada y continua.',
      icon: '🎧',
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(239,68,68,0.18),transparent_25%)]" />

      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-xl font-black">
              ⟳
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-wide">
                <span className="text-red-500">CE</span>
                <span className="text-yellow-400">BRA</span>
              </h1>
              <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">
                Servicios Tecnológicos
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider">
            <a className="text-red-500 border-b-2 border-red-500 pb-1">Inicio</a>
            <a className="hover:text-blue-400 transition">Servicios</a>
            <a className="hover:text-blue-400 transition">¿Por qué elegirnos?</a>
            <a className="hover:text-blue-400 transition">Contacto</a>
          </nav>

          <button className="bg-red-600 hover:bg-red-500 transition px-6 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(239,68,68,0.5)]">
            +51 906 257 485
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.2em] font-semibold mb-4">
              Servicios Tecnológicos
            </p>

            <h2 className="text-6xl md:text-7xl font-black leading-none mb-6">
              <span className="text-red-500">CE</span>
              <span className="text-yellow-400">BRA</span>
            </h2>

            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 max-w-2xl">
              Soluciones tecnológicas que{' '}
              <span className="text-blue-400">impulsan</span> tu mundo.
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
              Resolvemos problemas de TI e informática con servicios y productos
              de calidad, garantizando seguridad, confiabilidad y el mejor
              rendimiento para tu negocio o hogar.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                WhatsApp
              </button>

              <button className="border border-white/20 bg-white/5 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-semibold text-lg">
                Nuestros servicios
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[420px] h-[420px] rounded-full border-[22px] border-white/90 animate-pulse" />
            <div className="absolute w-[500px] h-[500px] rounded-full border-[18px] border-red-500/70 border-dashed animate-spin [animation-duration:18s]" />
            <div className="absolute w-[320px] h-[320px] rounded-full border-[16px] border-blue-500/70 animate-ping opacity-20" />

            <div className="relative z-10 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-slate-900 via-black to-slate-800 border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.35)] flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">⟳</div>
                <h2 className="text-5xl font-black">
                  <span className="text-red-500">CE</span>
                  <span className="text-yellow-400">BRA</span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-5">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#0b1220] to-[#09101b] border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition shadow-xl"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="text-red-500 uppercase tracking-[0.2em] font-semibold mb-4">
              Nuestros servicios
            </p>

            <h3 className="text-5xl font-black mb-4">
              Tenemos la solución que{' '}
              <span className="text-blue-400">necesitas</span>
            </h3>

            <p className="text-gray-400 max-w-2xl text-lg">
              Ofrecemos productos de calidad y servicios tecnológicos integrales
              para personas y empresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-[#101827] to-[#0b1220] rounded-3xl border border-white/10 p-6 hover:border-blue-500/40 transition hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-3xl mb-6 shadow-lg">
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold mb-3 leading-snug group-hover:text-blue-400 transition">
                  {service.title}
                </h4>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-[0.2em] font-semibold mb-4">
              ¿Por qué elegir a Cebra?
            </p>

            <h3 className="text-5xl font-black leading-tight mb-8">
              Mejores que la <span className="text-blue-400">competencia</span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Brindamos el mejor servicio y asesoramiento usando buenas
              prácticas, tecnología actualizada y soporte personalizado.
            </p>

            <div className="space-y-4">
              {[
                'Buenas prácticas en cada proceso',
                'Tecnología actualizada y de calidad',
                'Atención personalizada',
                'Garantía en todos nuestros servicios',
                'Operamos en Piura y todo el Perú',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                  <span className="text-lg text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f172a] to-black p-10 shadow-2xl">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-black flex items-center justify-center text-center border border-white/10">
                <div>
                  <div className="text-7xl mb-4">💼</div>
                  <h4 className="text-3xl font-black mb-3">
                    Calidad, Seguridad y Confianza
                  </h4>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Atención especializada para empresas y clientes particulares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#0f172a] via-black to-[#111827] border border-white/10 p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div>
              <p className="text-red-500 uppercase tracking-[0.2em] font-semibold mb-4">
                Contáctanos
              </p>

              <h3 className="text-5xl font-black mb-6">
                Estamos para <span className="text-blue-400">ayudarte</span>
              </h3>

              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                Cuéntanos tu necesidad y nuestro equipo te brindará la mejor
                solución tecnológica.
              </p>
            </div>

            <div className="space-y-4 w-full max-w-md">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-3xl">
                  📱
                </div>

                <div>
                  <p className="text-3xl font-black">+51 906 257 485</p>
                  <p className="text-gray-400">Atención rápida por WhatsApp</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-2xl mb-2">📍</p>
                  <p className="font-semibold">Piura, Perú</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-2xl mb-2">🚀</p>
                  <p className="font-semibold">Atención nacional</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Servicios Tecnológicos Cebra. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 text-gray-400">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>WhatsApp</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

