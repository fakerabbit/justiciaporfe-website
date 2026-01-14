'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, Mail, ArrowRight, CheckCircle, Heart, Users, BarChart3, Lightbulb, Scale, Link2, Home, Menu, X } from 'lucide-react';

// Note: In production, these would be separate imported components
// For now, we'll create placeholder components that you'll replace with the actual diagram files

const ComparacionMaestra = () => <div className="p-8 bg-purple-50 rounded-xl"><p className="text-center text-purple-900 font-bold text-xl">Diagrama: Comparación Maestra TUG vs. Biblia</p><p className="text-center text-sm mt-2 text-slate-600">Componente desde: visual-comparacion-maestra.tsx</p></div>;
const TresSimbolos = () => <div className="p-8 bg-blue-50 rounded-xl"><p className="text-center text-blue-900 font-bold text-xl">Diagrama: Tres Símbolos (Levadura, Lepra, Esclavitud)</p><p className="text-center text-sm mt-2 text-slate-600">Componente desde: visual-tres-simbolos.tsx</p></div>;
const OrdenSantuario = () => <div className="p-8 bg-indigo-50 rounded-xl"><p className="text-center text-indigo-900 font-bold text-xl">Diagrama: Orden del Santuario (Incienso → Aceite)</p><p className="text-center text-sm mt-2 text-slate-600">Componente desde: visual-orden-santuario.tsx</p></div>;
const Exodo21Argumento = () => <div className="p-8 bg-amber-50 rounded-xl"><p className="text-center text-amber-900 font-bold text-xl">Diagrama: Éxodo 21:4 - Herencia de Esclavitud</p><p className="text-center text-sm mt-2 text-slate-600">Componente desde: visual-exodo21-argumento.tsx</p></div>;
const Romanos5Diagram = () => <div className="p-8 bg-green-50 rounded-xl"><p className="text-center text-green-900 font-bold text-xl">Diagrama: Romanos 5:12-19 - Dos Adanes</p><p className="text-center text-sm mt-2 text-slate-600">Componente desde: visual-romanos5-diagram.tsx</p></div>;
const Corintios15Diagram = () => <div className="p-8 bg-teal-50 rounded-xl"><p className="text-center text-teal-900 font-bold text-xl">Diagrama: 1 Corintios 15:22 - En Adán vs. En Cristo</p><p className="text-center text-sm mt-2 text-slate-600">Componente desde: visual-corintios15-diagram.tsx</p></div>;

const JusticiaPorFeIntegrated = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentDiagram, setCurrentDiagram] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Diagram data
  const diagrams = [
    {
      id: 'comparacion',
      title: 'Comparación: TUG vs. Verdad Bíblica',
      description: 'Tabla maestra comparando 7 aspectos teológicos entre la Teología de la Última Generación y la enseñanza bíblica',
      category: 'Síntesis',
      icon: <Scale size={24} />,
      component: ComparacionMaestra,
      color: 'from-purple-500 to-purple-700',
      textColor: 'text-purple-600'
    },
    {
      id: 'tres-simbolos',
      title: 'Tres Símbolos del Pecado Como Estado',
      description: 'Levadura, Lepra y Esclavitud revelan que el pecado es un estado heredado, no solo actos',
      category: 'Símbolos Bíblicos',
      icon: <Lightbulb size={24} />,
      component: TresSimbolos,
      color: 'from-blue-500 to-blue-700',
      textColor: 'text-blue-600'
    },
    {
      id: 'orden-santuario',
      title: 'El Orden del Santuario',
      description: 'Incienso antes de Aceite prueba: Justificación → Santificación (no al revés)',
      category: 'Doctrina del Santuario',
      icon: <BookOpen size={24} />,
      component: OrdenSantuario,
      color: 'from-indigo-500 to-indigo-700',
      textColor: 'text-indigo-600'
    },
    {
      id: 'exodo21',
      title: 'Éxodo 21:4 - Herencia de Esclavitud',
      description: 'El argumento devastador: los hijos de esclavos heredan el estado de esclavitud',
      category: 'Análisis Textual',
      icon: <Link2 size={24} />,
      component: Exodo21Argumento,
      color: 'from-amber-500 to-amber-700',
      textColor: 'text-amber-600'
    },
    {
      id: 'romanos5',
      title: 'Romanos 5:12-19 - Dos Adanes',
      description: 'Constituidos pecadores en Adán, constituidos justos en Cristo (no desarrollados)',
      category: 'Teología Paulina',
      icon: <Users size={24} />,
      component: Romanos5Diagram,
      color: 'from-green-500 to-green-700',
      textColor: 'text-green-600'
    },
    {
      id: 'corintios15',
      title: '1 Corintios 15:22 - En Adán vs. En Cristo',
      description: 'La unión representativa: Muerte en Adán, Vida en Cristo. Cambio de estado, no perfeccionamiento',
      category: 'Teología Paulina',
      icon: <BarChart3 size={24} />,
      component: Corintios15Diagram,
      color: 'from-teal-500 to-teal-700',
      textColor: 'text-teal-600'
    }
  ];

  const handleSubscribe = async () => {
    if (!email) return;
    
    try {
      const CONVERTKIT_FORM_ID = 'YOUR_FORM_ID';
      const CONVERTKIT_API_KEY = 'YOUR_API_KEY';
      
      const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email: email,
          tags: [5678901],
        }),
      });

      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail('');
          setSubscribed(false);
        }, 5000);
      } else {
        alert('Hubo un error. Por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Hubo un error. Por favor intenta de nuevo.');
    }
  };

  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setCurrentPage('home');
              setCurrentDiagram(null);
            }}
            className="text-blue-600 font-bold text-xl hover:text-blue-700 flex items-center gap-2"
          >
            <Home size={24} />
            Justicia Por Fe
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => document.getElementById('diagrams')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
            >
              Diagramas
            </button>
            <button
              onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Suscribirse
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-600 hover:text-blue-600 font-semibold py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => {
                document.getElementById('diagrams')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-600 hover:text-blue-600 font-semibold py-2"
            >
              Diagramas
            </button>
            <button
              onClick={() => {
                document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 text-center"
            >
              Suscribirse
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Justicia Por Fe
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Defendiendo el Evangelio de Cristo, la justificación bíblica por fe y la doctrina del Santuario
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                onClick={() => document.getElementById('diagrams')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Ver Diagramas <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 space-y-2 transform hover:scale-105 transition-all">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto" />
              <div className="text-4xl font-bold text-gray-800">
                <AnimatedCounter end={6} />
              </div>
              <p className="text-gray-600">Diagramas Interactivos</p>
            </div>
            <div className="p-6 space-y-2 transform hover:scale-105 transition-all">
              <Lightbulb className="w-12 h-12 text-blue-600 mx-auto" />
              <div className="text-4xl font-bold text-gray-800">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-gray-600">Argumentos Bíblicos</p>
            </div>
            <div className="p-6 space-y-2 transform hover:scale-105 transition-all">
              <Heart className="w-12 h-12 text-blue-600 mx-auto" />
              <div className="text-4xl font-bold text-gray-800">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-gray-600">Basado en la Escritura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Qué es la Teología de la Última Generación?
          </h2>
          <p className="text-xl text-slate-200 mb-4">
            La TUG enseña que la última generación puede alcanzar perfección en sí mismos 
            para ser justificados, vindicar a Dios ante el universo y permitir que Cristo regrese.
          </p>
          <p className="text-lg text-slate-300">
            Estos diagramas demuestran, usando símbolos bíblicos y doctrina del santuario, 
            que la TUG <strong>invierte el evangelio</strong> al hacer del mérito humano 
            la base de la justificación en lugar del resultado.
          </p>
        </div>
      </section>

      {/* Diagrams Section */}
      <section id="diagrams" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Diagramas Interactivos
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Explora estos recursos visuales que refutan la TUG usando la Escritura, 
            símbolos bíblicos y la doctrina del Santuario
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagrams.map((diagram) => (
              <div
                key={diagram.id}
                onClick={() => {
                  setCurrentDiagram(diagram.id);
                  setCurrentPage('diagram');
                  window.scrollTo(0, 0);
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${diagram.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {diagram.icon}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <span className={`text-sm ${diagram.textColor} font-semibold`}>
                    {diagram.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {diagram.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {diagram.description}
                  </p>
                  <button className={`${diagram.textColor} font-semibold flex items-center gap-2 hover:gap-3 transition-all`}>
                    Ver diagrama <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recibe Nuevos Estudios en tu Email
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Suscríbete para recibir notificaciones cuando publiquemos nuevos artículos y diagramas
          </p>
          
          {!subscribed ? (
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all whitespace-nowrap"
                >
                  Suscribirse
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-green-500 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-3">
              <CheckCircle size={24} />
              <span className="font-semibold">¡Gracias por suscribirte!</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Justicia Por Fe</h3>
          <p className="mb-6">Defendiendo la Justicia de Cristo</p>
          <p className="text-sm text-gray-500">© 2026 justiciaporfe.com - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );

  // Diagram Page
  const DiagramPage = () => {
    const diagram = diagrams.find(d => d.id === currentDiagram);
    if (!diagram) return <HomePage />;

    const DiagramComponent = diagram.component;
    const currentIndex = diagrams.findIndex(d => d.id === currentDiagram);
    const prevDiagram = diagrams[currentIndex - 1];
    const nextDiagram = diagrams[currentIndex + 1];

    return (
      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Diagram Header */}
        <header className={`bg-gradient-to-r ${diagram.color} text-white py-16`}>
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-white text-sm font-semibold opacity-90">{diagram.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              {diagram.title}
            </h1>
            <p className="text-xl text-white opacity-90">
              {diagram.description}
            </p>
          </div>
        </header>

        {/* Diagram Content */}
        <article className="max-w-6xl mx-auto px-6 py-12">
          <DiagramComponent />

          {/* Navigation Between Diagrams */}
          <div className="mt-12 pt-8 border-t-2 border-slate-200">
            <h3 className="text-xl font-bold text-center mb-6 text-slate-800">
              Explorar Más Diagramas
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {prevDiagram && (
                <button
                  onClick={() => {
                    setCurrentDiagram(prevDiagram.id);
                    window.scrollTo(0, 0);
                  }}
                  className="bg-slate-50 hover:bg-slate-100 p-6 rounded-xl text-left transition-all border-2 border-slate-200 hover:border-blue-500"
                >
                  <p className="text-sm text-slate-600 mb-2">← Anterior</p>
                  <p className="font-bold text-slate-800">{prevDiagram.title}</p>
                </button>
              )}
              {nextDiagram && (
                <button
                  onClick={() => {
                    setCurrentDiagram(nextDiagram.id);
                    window.scrollTo(0, 0);
                  }}
                  className="bg-slate-50 hover:bg-slate-100 p-6 rounded-xl text-left transition-all border-2 border-slate-200 hover:border-blue-500"
                >
                  <p className="text-sm text-slate-600 mb-2">Siguiente →</p>
                  <p className="font-bold text-slate-800">{nextDiagram.title}</p>
                </button>
              )}
            </div>
          </div>

          {/* Subscribe CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">¿Te gustó este diagrama?</h3>
            <p className="mb-6">Suscríbete para recibir notificaciones de nuevos recursos</p>
            <button
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Suscribirse Ahora
            </button>
          </div>
        </article>
      </div>
    );
  };

  return currentPage === 'home' ? <HomePage /> : <DiagramPage />;
};

export default JusticiaPorFeIntegrated;