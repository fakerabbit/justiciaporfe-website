'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Users, BarChart3, Lightbulb, Scale, Link2, Home, Menu, X } from 'lucide-react';

import StatsSection from './components/stats-section';
import SubscribeSection from './components/subscribe-section';

// Import diagram components
import ComparacionMaestra from './components/diagrams/visual-comparacion-maestra';
import TresSimbolos from './components/diagrams/visual-tres-simbolos';
import OrdenSantuario from './components/diagrams/visual-orden-santuario';
import Exodo21Argumento from './components/diagrams/visual-exodo21-argumento';
import Romanos5Diagram from './components/diagrams/visual-romanos5-diagram';
import Corintios15Diagram from './components/diagrams/visual-corintios15-diagram';
import Romanos213Contexto from './components/diagrams/visual-romanos213';
import DosPerfecciones from './components/diagrams/visual-two-perfections';
import TelosTeleios from './components/diagrams/visual-telos-teleios';
import TeleiosComprehensive from './components/diagrams/visual-teleios-comprehensive';

const JusticiaPorFeIntegrated = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentDiagram, setCurrentDiagram] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      title: 'Tres Símbolos del Pecado Como Posición Legal',
      description: 'Levadura, Lepra y Esclavitud revelan que el pecado es un estado heredado, no solo actos consumados',
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
    },
    {
      id: 'romanos213',
      title: 'Romanos 2:13 en Contexto',
      description: 'La norma imposible: Pablo establece el estándar de perfección para mostrarnos que necesitamos a Cristo',
      category: 'Teología Paulina',
      icon: <Scale size={24} />,
      component: Romanos213Contexto,
      color: 'from-purple-500 to-indigo-700',
      textColor: 'text-purple-600'
    },
    {
    id: 'two-perfections',
    title: 'Las Dos Perfecciones de Pablo',
    description: 'Filipenses 3:12 vs 3:15 - Perfecto EN CRISTO (justificación) vs. Creciendo en madurez (santificación)',
    category: 'Teología Paulina',
    icon: <Scale size={24} />,
    component: DosPerfecciones,
    color: 'from-purple-500 to-indigo-700',
    textColor: 'text-purple-600'
  },
  {
    id: 'telos-teleios',
    title: 'Τέλος y Τέλειος - Propósito y Cumplimiento',
    description: 'El fundamento griego filosófico: Teleios significa cumplir tu propósito, no alcanzar impecabilidad',
    category: 'Análisis Lingüístico',
    icon: <BookOpen size={24} />,
    component: TelosTeleios,
    color: 'from-blue-500 to-cyan-700',
    textColor: 'text-blue-600'
  },
  {
    id: 'teleios-comprehensive',
    title: 'Todos los Usos de Τέλειος en el NT',
    description: 'Análisis exhaustivo de las 19 ocurrencias: 0 significan impecabilidad, todas significan madurez/completitud',
    category: 'Análisis Textual',
    icon: <BarChart3 size={24} />,
    component: TeleiosComprehensive,
    color: 'from-green-500 to-emerald-700',
    textColor: 'text-green-600'
  }
  ];

  // Read URL parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const diagram = params.get('diagram');
    
    if (page === 'diagram' && diagram) {
      setCurrentPage('diagram');
      setCurrentDiagram(diagram);
    } else if (page) {
      setCurrentPage(page);
    }
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page') || 'home';
      const diagram = params.get('diagram');
      
      setCurrentPage(page);
      if (diagram) {
        setCurrentDiagram(diagram);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation function that updates URL
  const navigateToPage = (page, diagramId = null) => {
    setCurrentPage(page);
    if (diagramId) {
      setCurrentDiagram(diagramId);
    }
    
    // Update URL
    let newUrl = window.location.pathname;
    if (page === 'home') {
      newUrl = window.location.pathname;
    } else if (page === 'diagram' && diagramId) {
      newUrl = `${window.location.pathname}?page=diagram&diagram=${diagramId}`;
    } else {
      newUrl = `${window.location.pathname}?page=${page}`;
    }
    
    window.history.pushState({ page, diagram: diagramId }, '', newUrl);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigateToPage('home')}
            className="text-blue-600 font-bold text-xl hover:text-blue-700 flex items-center gap-2"
          >
            <Home size={24} />
            Justicia Por Fe
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigateToPage('home')}
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => {
                navigateToPage('home');
                setTimeout(() => {
                  document.getElementById('diagrams')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-slate-600 hover:text-blue-600 font-semibold transition-colors"
            >
              Diagramas
            </button>
            <button
              onClick={() => {
                navigateToPage('home');
                setTimeout(() => {
                  document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
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
                navigateToPage('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-slate-600 hover:text-blue-600 font-semibold py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => {
                navigateToPage('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('diagrams')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="block w-full text-left text-slate-600 hover:text-blue-600 font-semibold py-2"
            >
              Diagramas
            </button>
            <button
              onClick={() => {
                navigateToPage('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
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
      <StatsSection />

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
                onClick={() => navigateToPage('diagram', diagram.id)}
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
      <SubscribeSection />

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
    if (!diagram) {
      navigateToPage('home');
      return null;
    }

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
                  onClick={() => navigateToPage('diagram', prevDiagram.id)}
                  className="bg-slate-50 hover:bg-slate-100 p-6 rounded-xl text-left transition-all border-2 border-slate-200 hover:border-blue-500"
                >
                  <p className="text-sm text-slate-600 mb-2">← Anterior</p>
                  <p className="font-bold text-slate-800">{prevDiagram.title}</p>
                </button>
              )}
              {nextDiagram && (
                <button
                  onClick={() => navigateToPage('diagram', nextDiagram.id)}
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
                navigateToPage('home');
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