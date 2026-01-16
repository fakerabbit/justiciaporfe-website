import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Heart, Lightbulb } from 'lucide-react';

// Store animation state outside component to survive re-renders
const animationState = {
  counterDiagrams: { hasAnimated: false, currentValue: 0 },
  counter15: { hasAnimated: false, currentValue: 0 },
  counter100: { hasAnimated: false, currentValue: 0 }
};

const AnimatedCounter = ({ end, duration = 2000, suffix = '', counterId }) => {
  const [count, setCount] = useState(animationState[counterId].currentValue);
  const counterRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    // If already animated, just set the final value and return
    if (animationState[counterId].hasAnimated) {
      setCount(animationState[counterId].currentValue);
      return;
    }

    const currentRef = counterRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationState[counterId].hasAnimated) {
          animationState[counterId].hasAnimated = true;
          
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const newCount = Math.floor(progress * end);
            
            animationState[counterId].currentValue = newCount;
            setCount(newCount);
            
            if (progress < 1) {
              animationFrameId.current = requestAnimationFrame(animate);
            }
          };
          
          animationFrameId.current = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [end, duration, counterId]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

// Import all your diagrams here - add new ones as you create them
import VisualComparacionMaestra from './diagrams/visual-comparacion-maestra';
import VisualTresSimbolos from './diagrams/visual-tres-simbolos';
import VisualOrdenSantuario from './diagrams/visual-orden-santuario';
import VisualExodo21Argumento from './diagrams/visual-exodo21-argumento';
import VisualRomanos5Diagram from './diagrams/visual-romanos5-diagram';
import VisualCorintios15Diagram from './diagrams/visual-corintios15-diagram';
import VisualRomanos213 from './diagrams/visual-romanos213';
import VisualTwoPerfections from './diagrams/visual-two-perfections';
import VisualTelosTeleios from './diagrams/visual-telos-teleios';
import VisualTeleiosComprehensive from './diagrams/visual-teleios-comprehensive';
import VisualEzequielDiagram from './diagrams/visual-ezekiel18-diagram';

// Array of all diagram components
const DIAGRAMS = [
  VisualComparacionMaestra,
  VisualTresSimbolos,
  VisualOrdenSantuario,
  VisualExodo21Argumento,
  VisualRomanos5Diagram,
  VisualCorintios15Diagram,
  VisualRomanos213,
  VisualTwoPerfections,
  VisualTelosTeleios,
  VisualTeleiosComprehensive,
  VisualEzequielDiagram
];

const StatsSection = () => {
  // Automatically get the count from the DIAGRAMS array
  const diagramCount = DIAGRAMS.length;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 space-y-2 transform hover:scale-105 transition-all">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto" />
            <div className="text-4xl font-bold text-gray-800">
              <AnimatedCounter end={diagramCount} counterId="counterDiagrams" />
            </div>
            <p className="text-gray-600">Diagramas Interactivos</p>
          </div>
          <div className="p-6 space-y-2 transform hover:scale-105 transition-all">
            <Lightbulb className="w-12 h-12 text-blue-600 mx-auto" />
            <div className="text-4xl font-bold text-gray-800">
              <AnimatedCounter end={15} suffix="+" counterId="counter15" />
            </div>
            <p className="text-gray-600">Argumentos Bíblicos</p>
          </div>
          <div className="p-6 space-y-2 transform hover:scale-105 transition-all">
            <Heart className="w-12 h-12 text-blue-600 mx-auto" />
            <div className="text-4xl font-bold text-gray-800">
              <AnimatedCounter end={100} suffix="%" counterId="counter100" />
            </div>
            <p className="text-gray-600">Basado en la Escritura</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(StatsSection);