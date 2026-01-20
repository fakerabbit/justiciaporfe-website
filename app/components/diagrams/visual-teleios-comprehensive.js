import React, { useState, useEffect } from 'react';
import { BookOpen, Filter, BarChart3, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import PDFExportButton from '../PDFExportButton';

const TeleiosComprehensive = () => {
  // Initialize state from sessionStorage if available
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('teleios-comprehensive-tab');
      return saved || 'all';
    }
    return 'all';
  });

  const [selectedCategory, setSelectedCategory] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('teleios-comprehensive-category');
      return saved || 'all';
    }
    return 'all';
  });

  // Persist activeTab to sessionStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('teleios-comprehensive-tab', activeTab);
    }
  }, [activeTab]);

  // Persist selectedCategory to sessionStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('teleios-comprehensive-category', selectedCategory);
    }
  }, [selectedCategory]);

  const verses = [
    // Category 1: Complete/Whole
    {
      reference: 'Romanos 12:2',
      greek: 'τέλειον',
      text: '"transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta"',
      category: 'complete',
      meaning: 'Completa, no parcial - la voluntad de Dios es completa/entera',
      application: 'NO significa "sin pecado" sino "completa, nada falta"'
    },
    {
      reference: 'Santiago 1:4',
      greek: 'τέλειον / τέλειοι',
      text: '"Mas tenga la paciencia su obra completa, para que seáis perfectos y cabales, sin que os falte cosa alguna"',
      category: 'complete',
      meaning: 'Completos, sin que falte nada - madurez completa',
      application: 'Proceso hacia completitud, no impecabilidad instantánea'
    },
    {
      reference: 'Santiago 1:17',
      greek: 'τέλειον',
      text: '"Toda buena dádiva y todo don perfecto desciende de lo alto"',
      category: 'complete',
      meaning: 'Completo, nada deficiente - don completo de Dios',
      application: 'Los dones de Dios son completos, no tienen deficiencias'
    },
    {
      reference: 'Santiago 1:25',
      greek: 'τέλειον',
      text: '"Mas el que mira atentamente en la perfecta ley, la de la libertad"',
      category: 'complete',
      meaning: 'Completa, entera - la ley es completa/perfecta',
      application: 'La ley de Dios es completa, no parcial'
    },
    {
      reference: 'Santiago 3:2',
      greek: 'τέλειος',
      text: '"Si alguno no ofende en palabra, éste es varón perfecto, capaz también de refrenar todo el cuerpo"',
      category: 'complete',
      meaning: 'Maduro/completo en autocontrol',
      application: 'Madurez en dominio propio, no impecabilidad absoluta'
    },
    {
      reference: '1 Juan 4:18',
      greek: 'τελεία',
      text: '"En el amor no hay temor, sino que el perfecto amor echa fuera el temor"',
      category: 'complete',
      meaning: 'Amor completo/maduro que elimina el miedo',
      application: 'Amor que ha alcanzado madurez, no amor sin imperfecciones'
    },
    {
      reference: '2 Timoteo 3:17',
      greek: 'ἄρτιος',
      text: '"a fin de que el hombre de Dios sea perfecto, enteramente preparado"',
      category: 'complete',
      meaning: 'Completamente equipado - tiene todo lo necesario',
      application: 'Equipado para toda buena obra, no moralmente impecable'
    },

    // Category 2: Mature/Grown
    {
      reference: '1 Corintios 2:6',
      greek: 'τελείοις',
      text: '"Sin embargo, hablamos sabiduría entre los que han alcanzado madurez"',
      category: 'mature',
      meaning: 'Maduros espiritualmente - capaces de alimento sólido',
      application: 'Contrasta con "niños" - significa madurez, no impecabilidad'
    },
    {
      reference: '1 Corintios 14:20',
      greek: 'τέλειοι',
      text: '"Hermanos, no seáis niños en el modo de pensar, sino sed niños en la malicia, pero maduros en el modo de pensar"',
      category: 'mature',
      meaning: 'Maduros en pensamiento - contrasta directamente con "niños"',
      application: 'Claramente significa madurez mental, no perfección moral'
    },
    {
      reference: 'Efesios 4:13',
      greek: 'τέλειον',
      text: '"hasta que todos lleguemos a la unidad de la fe... a un varón perfecto, a la medida de la estatura de la plenitud de Cristo"',
      category: 'mature',
      meaning: 'Madurez corporativa de la iglesia - plenitud en Cristo',
      application: 'Meta de crecimiento hacia madurez, no impecabilidad individual'
    },
    {
      reference: 'Hebreos 5:14',
      greek: 'τελείων',
      text: '"pero el alimento sólido es para los que han alcanzado madurez, para los que por el uso tienen los sentidos ejercitados"',
      category: 'mature',
      meaning: 'Maduros - los que pueden manejar doctrina profunda',
      application: 'Madurez espiritual para discernir, no impecabilidad'
    },
    {
      reference: 'Mateo 5:48',
      greek: 'τέλειοι',
      text: '"Sed, pues, vosotros perfectos, como vuestro Padre que está en los cielos es perfecto"',
      category: 'mature',
      meaning: 'Maduros en cumplir propósito como Dios cumple el Suyo',
      application: 'Cumplir NUESTRO propósito (τέλος), no alcanzar impecabilidad de Dios'
    },

    // Category 3: Perfect IN CHRIST
    {
      reference: 'Filipenses 3:15',
      greek: 'τέλειοι',
      text: '"Así que, todos los que somos perfectos, esto mismo sintamos"',
      category: 'in-christ',
      meaning: 'Perfectos EN CRISTO - justificación completa',
      application: 'Posición legal perfecta en Cristo, no estado moral perfecto'
    },
    {
      reference: 'Colosenses 1:28',
      greek: 'τέλειον',
      text: '"a quien anunciamos, amonestando a todo hombre... a fin de presentar perfecto en Cristo Jesús a todo hombre"',
      category: 'in-christ',
      meaning: 'Perfecto EN Cristo - completitud en Él',
      application: 'Nuestra perfección está EN Cristo, no en nosotros mismos'
    },
    {
      reference: 'Colosenses 4:12',
      greek: 'τέλειοι',
      text: '"Epafras... rogando siempre por vosotros, para que estéis firmes, perfectos y completos en toda la voluntad de Dios"',
      category: 'in-christ',
      meaning: 'Completos en hacer la voluntad de Dios',
      application: 'Cumplir el propósito de Dios para cada uno, no impecabilidad universal'
    },
    {
      reference: 'Hebreos 10:14',
      greek: 'τετελείωκεν',
      text: '"porque con una sola ofrenda hizo perfectos para siempre a los santificados"',
      category: 'in-christ',
      meaning: 'Perfectos PARA SIEMPRE por la obra de Cristo',
      application: 'Justificación completa e irreversible - no por nuestro desarrollo'
    },
    {
      reference: 'Hebreos 13:21',
      greek: 'καταρτίσαι',
      text: '"os haga aptos en toda obra buena para que hagáis su voluntad"',
      category: 'in-christ',
      meaning: 'Equipados/capacitados por Dios',
      application: 'Dios nos hace aptos, no nosotros mismos'
    },

    // Category 4: Process/Growth
    {
      reference: 'Filipenses 3:12',
      greek: 'τετελείωμαι',
      text: '"No que lo haya alcanzado ya, ni que ya sea perfecto; sino que prosigo, por ver si logro asir aquello para lo cual fui también asido por Cristo Jesús"',
      category: 'process',
      meaning: 'Proceso continuo hacia la meta',
      application: 'Pablo admite NO ser perfecto en sentido progresivo - refuta impecabilidad'
    },
    {
      reference: 'Hebreos 6:1',
      greek: 'τελειότητα',
      text: '"Por tanto, dejando ya los rudimentos de la doctrina de Cristo, vamos adelante a la perfección"',
      category: 'process',
      meaning: 'Avanzar hacia madurez - proceso continuo',
      application: 'La perfección es una META hacia la cual avanzamos, no un estado ya logrado'
    }
  ];

  const categories = {
    all: { 
      name: 'Todos los Versículos', 
      color: 'slate',
      count: verses.length 
    },
    complete: { 
      name: 'Completo/Entero', 
      color: 'blue',
      count: verses.filter(v => v.category === 'complete').length 
    },
    mature: { 
      name: 'Maduro/Crecido', 
      color: 'green',
      count: verses.filter(v => v.category === 'mature').length 
    },
    'in-christ': { 
      name: 'Perfecto EN CRISTO', 
      color: 'amber',
      count: verses.filter(v => v.category === 'in-christ').length 
    },
    process: { 
      name: 'Proceso/Crecimiento', 
      color: 'purple',
      count: verses.filter(v => v.category === 'process').length 
    }
  };

  const filteredVerses = selectedCategory === 'all' 
    ? verses 
    : verses.filter(v => v.category === selectedCategory);

  const getCategoryColor = (category) => {
    switch(category) {
      case 'complete': return 'blue';
      case 'mature': return 'green';
      case 'in-christ': return 'amber';
      case 'process': return 'purple';
      default: return 'slate';
    }
  };

  const getCategoryName = (category) => {
    switch(category) {
      case 'complete': return 'Completo/Entero';
      case 'mature': return 'Maduro/Crecido';
      case 'in-christ': return 'Perfecto EN CRISTO';
      case 'process': return 'Proceso/Crecimiento';
      default: return '';
    }
  };

  return (
    <div id="visual-teleios-comprehensive" className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
          <h2 className="text-3xl font-bold text-center mb-2">
            Análisis Exhaustivo: Τέλειος en el Nuevo Testamento
          </h2>
          <p className="text-center text-green-100 text-lg">
            Las 19 Ocurrencias: 0 Significan Impecabilidad
          </p>
        </div>

        {/* Statistics Banner */}
        <div className="bg-emerald-50 border-b-2 border-emerald-200 p-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">
              📊 Resumen Estadístico
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-green-600">19</div>
                <div className="text-sm text-slate-600">Usos Totales</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-red-600">0</div>
                <div className="text-sm text-slate-600">= Impecabilidad</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-blue-600">7</div>
                <div className="text-sm text-slate-600">= Completo/Entero</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-green-600">5+5+2</div>
                <div className="text-sm text-slate-600">= Madurez/Proceso</div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5 rounded-xl text-center">
              <p className="text-xl font-bold">
                ⚠️ CONCLUSIÓN CRÍTICA
              </p>
              <p className="mt-2">
                En NINGUNO de los 19 usos significa "sin pecado" o "impecabilidad moral absoluta".
                <br/>
                TODOS significan: completo, maduro, cumpliendo propósito, o perfecto EN CRISTO.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Category Filters */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Filter size={24} />
              Filtrar por Categoría
            </h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(categories).map(([key, cat]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === key
                      ? `bg-${cat.color}-600 text-white shadow-lg`
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Category 1 */}
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <BookOpen className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-blue-900">
                    Categoría 1: Completo/Entero
                  </h4>
                  <p className="text-sm text-blue-700">7 usos</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm">
                Énfasis en <strong>completitud</strong>, nada falta, nada deficiente.
                NO significa "sin pecado" sino "completo, integral, no parcial".
              </p>
            </div>

            {/* Category 2 */}
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-green-900">
                    Categoría 2: Maduro/Crecido
                  </h4>
                  <p className="text-sm text-green-700">5 usos</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm">
                Énfasis en <strong>madurez espiritual</strong>. Contrasta con "niños".
                Capaces de alimento sólido, pensamiento maduro.
              </p>
            </div>

            {/* Category 3 */}
            <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-amber-900">
                    Categoría 3: Perfecto EN CRISTO
                  </h4>
                  <p className="text-sm text-amber-700">5 usos</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm">
                Énfasis en <strong>perfección posicional</strong>. Completos EN ÉL.
                Justificación - obra completa de Cristo por nosotros.
              </p>
            </div>

            {/* Category 4 */}
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-purple-900">
                    Categoría 4: Proceso de Maduración
                  </h4>
                  <p className="text-sm text-purple-700">2 usos</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm">
                Énfasis en <strong>crecimiento progresivo</strong>.
                Santificación - proceso continuo hacia madurez.
              </p>
            </div>
          </div>

          {/* Verse List */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              📖 {selectedCategory === 'all' ? 'Todos los Versículos Analizados' : `Categoría: ${getCategoryName(selectedCategory)}`}
            </h3>

            <div className="space-y-4">
              {filteredVerses.map((verse, idx) => {
                const color = getCategoryColor(verse.category);
                return (
                  <div 
                    key={idx} 
                    className={`bg-white p-6 rounded-xl shadow-lg border-l-4 border-${color}-500`}
                  >
                    {/* Reference and Greek */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className={`font-bold text-lg text-${color}-900`}>
                          {verse.reference}
                        </h4>
                        <p className="text-sm text-slate-500 font-mono">
                          Griego: {verse.greek}
                        </p>
                      </div>
                      <div className={`bg-${color}-100 px-3 py-1 rounded-full`}>
                        <span className={`text-xs font-semibold text-${color}-800`}>
                          {getCategoryName(verse.category)}
                        </span>
                      </div>
                    </div>

                    {/* Verse Text */}
                    <p className="text-slate-700 italic mb-4 pl-4 border-l-2 border-slate-200">
                      {verse.text}
                    </p>

                    {/* Meaning */}
                    <div className={`bg-${color}-50 p-4 rounded-lg mb-3`}>
                      <p className="font-semibold text-slate-800 mb-1">
                        📌 Significado:
                      </p>
                      <p className="text-sm text-slate-700">
                        {verse.meaning}
                      </p>
                    </div>

                    {/* Application */}
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-semibold text-slate-800 mb-1">
                        💡 Aplicación:
                      </p>
                      <p className="text-sm text-slate-700">
                        {verse.application}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final Conclusion */}
          <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6 text-center flex items-center justify-center gap-2">
              <AlertTriangle size={28} />
              Conclusión Devastadora Contra la TUG
            </h3>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-xl text-red-900 mb-4">
                  🎯 El Veredicto del Análisis Exhaustivo
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <p className="text-slate-700">
                      <strong>0 de 19 usos</strong> de τέλειος significan "impecabilidad moral absoluta" o "sin pecado"
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <p className="text-slate-700">
                      <strong>Cada uso</strong> se refiere a: completitud, madurez, perfección EN CRISTO, o proceso de crecimiento
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <p className="text-slate-700">
                      La TUG basa su doctrina en una interpretación de τέλειος que <strong>NO tiene soporte bíblico</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900 text-white p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-3 text-center">
                  💥 La Pregunta Que Destruye la TUG
                </h4>
                <p className="text-center text-lg mb-3">
                  Si en NINGUNO de los 19 usos del Nuevo Testamento τέλειος significa "impecabilidad"...
                </p>
                <p className="text-center text-2xl font-bold text-yellow-300">
                  ¿Por qué la TUG insiste en que Mateo 5:48 significa "sin pecado"?
                </p>
                <p className="text-center text-sm text-red-200 mt-4">
                  La TUG está construyendo una doctrina sobre un significado que la palabra NUNCA tiene en la Escritura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PDFExportButton 
        className="flex items-center gap-2 mb-2"
        elementId="visual-teleios-comprehensive"
        filename="perfeccion-nt.pdf"
        position="top"
      />
    </div>
  );
};

export default TeleiosComprehensive;