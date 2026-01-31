import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Crown, Scale, Shield, Clock, User, Sparkles, BookOpen, ArrowRight, Gavel, Heart } from 'lucide-react';
import PDFExportButton from '../PDFExportButton';

const Mediador144000Diagram = () => {
  const [activeView, setActiveView] = useState(null);

  const timelineEvents = [
    {
      label: 'Ahora',
      sublabel: 'Santificación Progresiva',
      color: 'bg-blue-500'
    },
    {
      label: 'Cierre de Gracia',
      sublabel: 'Apoc. 22:11 • Santuario Limpiado',
      color: 'bg-red-500',
      critical: true
    },
    {
      label: 'Tiempo Sin Mediador',
      sublabel: 'El Período Crítico',
      color: 'bg-orange-500',
      critical: true
    },
    {
      label: 'Segunda Venida',
      sublabel: '1 Cor. 15:51-52',
      color: 'bg-purple-500'
    },
    {
      label: 'Glorificación',
      sublabel: 'Transformación Completa',
      color: 'bg-green-500'
    }
  ];

  const scriptures = [
    {
      ref: 'Romanos 8:33-34',
      text: '"¿Quién acusará a los escogidos de Dios? Dios es el que justifica. ¿Quién es el que condenará? Cristo es el que murió; más aun, el que también resucitó, el que además está a la diestra de Dios, el que también intercede por nosotros."',
      application: 'Una vez que Dios pronuncia Su veredicto, no se pueden presentar cargos. El caso está cerrado.',
      icon: <Gavel className="text-blue-600" size={32} />
    },
    {
      ref: '1 Corintios 15:51-52',
      text: '"No todos dormiremos; pero todos seremos transformados, en un momento, en un abrir y cerrar de ojos... Porque es necesario que esto corruptible se vista de incorrupción."',
      application: 'La transformación ocurre EN la venida de Cristo, no antes. Los que estén vivos todavía tendrán su naturaleza "corruptible" hasta ese momento.',
      icon: <Sparkles className="text-purple-600" size={32} />
    },
    {
      ref: 'Filipenses 3:12-14',
      text: '"No que lo haya alcanzado ya, ni que ya sea perfecto; sino que prosigo... olvidando ciertamente lo que queda atrás, y extendiéndome a lo que está delante."',
      application: 'Incluso Pablo, cerca del final de su vida, reconoció que no había "alcanzado ya" la perfección. La santificación dura toda la vida.',
      icon: <ArrowRight className="text-green-600" size={32} />
    },
    {
      ref: 'Génesis 32 (Jacob)',
      text: 'Jacob luchó con Dios, batalló con miedo, duda, y las consecuencias de sus engaños pasados - pero Dios ya lo había escogido y su posición del pacto era segura.',
      application: '"La angustia de Jacob" es el paralelo perfecto - la seguridad viene de la fidelidad del pacto de Dios, no de la perfección humana.',
      icon: <Shield className="text-amber-600" size={32} />
    }
  ];

  return (
    <div id="visual-144000-mediador" className="w-full max-w-7xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-purple-50">

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-2xl mb-6">
          <h1 className="text-4xl font-bold">Por Qué los 144,000</h1>
          <h2 className="text-2xl mt-2">No Necesitarán un Mediador</h2>
        </div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Una Comprensión Centrada en el Evangelio vs. Teología de la Última Generación
        </p>
      </div>

      {/* Main Question Box */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-8 border-blue-500 p-8 rounded-xl shadow-lg mb-12">
        <div className="flex items-start gap-4">
          <AlertTriangle className="text-blue-600 flex-shrink-0" size={32} />
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">La Pregunta Teológica</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Cuando Cristo termine Su obra en el Santuario Celestial y se cierre la gracia (Apoc. 22:11),
              habrá un período de tiempo donde los redimidos vivirán en la tierra sin Cristo trabajando como
              su Mediador. <span className="font-bold text-blue-700">¿Cómo pueden los redimidos sobrevivir este tiempo?</span>
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">Línea de Tiempo de Eventos</h3>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative py-12">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-green-400 transform -translate-y-1/2" />

          {/* Events */}
          <div className="relative flex justify-between items-center">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="flex flex-col items-center" style={{ flex: 1 }}>
                <div className={`w-6 h-6 rounded-full ${event.color} border-4 border-white shadow-lg mb-4 z-10 ${event.critical ? 'w-8 h-8' : ''}`} />
                <div className="bg-white p-4 rounded-lg shadow-md text-center max-w-[150px]">
                  <div className="font-bold text-slate-800 text-sm mb-1">{event.label}</div>
                  <div className="text-xs text-slate-600">{event.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-4">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-full ${event.color} border-4 border-white shadow-lg flex-shrink-0 ${event.critical ? 'w-8 h-8' : ''}`} />
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <div className="font-bold text-slate-800">{event.label}</div>
                <div className="text-sm text-slate-600">{event.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">Dos Respuestas Diferentes</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LGT View */}
          <div
            className={`rounded-2xl shadow-xl transition-all duration-300 ${
              activeView === 'lgt' ? 'scale-105 shadow-2xl' : ''
            }`}
            onMouseEnter={() => setActiveView('lgt')}
            onMouseLeave={() => setActiveView(null)}
          >
            <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-t-2xl border-4 border-red-400">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="text-red-700" size={32} />
                <h4 className="text-2xl font-bold text-red-900">Teología de la Última Generación (TUG)</h4>
              </div>
            </div>

            <div className="bg-white p-6 space-y-4 rounded-b-2xl">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h5 className="font-bold text-red-900 mb-2">Su Lógica:</h5>
                <p className="text-slate-700">
                  Sin Mediador + Posibilidad de Pecar = Desastre
                </p>
                <p className="text-slate-700 mt-2 font-semibold">
                  Por lo tanto: Los redimidos deben alcanzar perfección sin pecado ANTES del cierre de gracia
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-bold text-red-900 mb-2">Su Respuesta:</h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Los 144,000 alcanzan perfección sin pecado completa antes de que Cristo regrese</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Viven sin pecar ni siquiera en pensamiento durante la angustia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Su perfección vindica el carácter de Dios ante el universo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Seguridad basada en justicia alcanzada</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-100 p-4 rounded-lg border-2 border-red-600">
                <h5 className="font-bold text-red-900 mb-2">El Problema:</h5>
                <p className="text-slate-800 font-semibold">
                  Esto <span className="text-red-700">contradice el Evangelio.</span> Hace que la salvación
                  dependa en última instancia del logro humano en lugar de los méritos de Cristo solamente.
                </p>
                <div className="mt-3 inline-block bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ❌ Contradice la Justificación por Fe
                </div>
              </div>
            </div>
          </div>

          {/* Gospel View */}
          <div
            className={`rounded-2xl shadow-xl transition-all duration-300 ${
              activeView === 'gospel' ? 'scale-105 shadow-2xl' : ''
            }`}
            onMouseEnter={() => setActiveView('gospel')}
            onMouseLeave={() => setActiveView(null)}
          >
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-t-2xl border-4 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="text-green-700" size={32} />
                <h4 className="text-2xl font-bold text-green-900">Vista Centrada en el Evangelio</h4>
              </div>
            </div>

            <div className="bg-white p-6 space-y-4 rounded-b-2xl">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h5 className="font-bold text-green-900 mb-2">La Mejor Respuesta:</h5>
                <p className="text-slate-700">
                  Los redimidos han recibido <span className="font-bold text-green-700">justificación definitiva y final</span> -
                  un veredicto que no puede deshacerse.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-bold text-green-900 mb-2">Puntos Clave:</h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span>La justificación es <strong>final e irrevocable</strong> (Rom. 8:33-34)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span>Los redimidos siguen siendo pecadores por naturaleza hasta la transformación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span>Experimentan dudas, temores y luchas (angustia de Jacob)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span>Seguridad basada en la <strong>obra terminada de Cristo</strong>, no en perfección personal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span>La transformación ocurre en la glorificación, no antes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-2 border-green-600">
                <h5 className="font-bold text-green-900 mb-2">¿Por Qué No Se Necesita Mediador?</h5>
                <p className="text-slate-800 font-semibold">
                  No porque no pequen, sino porque <span className="text-green-700">la mediación está completa</span>.
                  El juicio ha terminado, el veredicto ha sido pronunciado, el caso está cerrado.
                </p>
                <div className="mt-3 inline-block bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ✓ Preserva el Evangelio
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-4 border-amber-400 p-8 rounded-2xl shadow-2xl mb-12 text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="text-amber-600" size={48} />
        </div>
        <h3 className="text-3xl font-bold text-amber-900 mb-6">💡 La Revelación Clave</h3>
        <p className="text-2xl text-slate-800 leading-relaxed">
          El cierre de gracia finaliza la <span className="font-bold text-amber-700">JUSTIFICACIÓN</span> (el veredicto de Dios)<br/>
          pero NO requiere una <span className="font-bold text-amber-700">SANTIFICACIÓN</span> completada (perfección sin pecado).
        </p>
        <p className="text-xl text-slate-700 mt-4 font-semibold">
          ¡Estas son dos cosas diferentes!
        </p>
      </div>

      {/* Ellen White Evidence */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-4 border-purple-400 p-8 rounded-2xl shadow-xl mb-12">
        <div className="flex items-start gap-4 mb-6">
          <BookOpen className="text-purple-600 flex-shrink-0" size={40} />
          <div>
            <h3 className="text-2xl font-bold text-purple-900 mb-3">Evidencia de Ellen G. White</h3>
            <p className="text-slate-700 mb-4">
              En <span className="font-semibold italic">El Conflicto de los Siglos</span>, Ellen White describe
              a los redimidos durante "la angustia de Jacob" como experimentando:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <ArrowRight className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                <span>Dudas sobre su salvación</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                <span>Miedo y angustia de alma</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                <span>Preguntándose si han sido engañados</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                <span>Clamando a Dios en su aflicción</span>
              </li>
            </ul>
            <div className="bg-purple-200 p-4 rounded-lg mt-6 border-l-4 border-purple-700">
              <p className="font-bold text-purple-900 text-lg">
                ¡Esta descripción es incompatible con la perfección sin pecado!
              </p>
              <p className="text-slate-800 mt-2">
                Si hubieran alcanzado santidad perfecta, ¿por qué dudarían? ¿Por qué temerían?
                El hecho de que luchan muestra que todavía tienen su naturaleza humana pecaminosa -
                pero su justificación es segura.
              </p>
            </div>
          </div>
        </div>
        <p className="text-right text-purple-700 font-semibold italic">
          — El Conflicto de los Siglos, describiendo la Angustia de Jacob
        </p>
      </div>

      {/* Biblical Support */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-4 border-blue-400 p-8 rounded-2xl shadow-xl mb-12">
        <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">Apoyo Bíblico para la Justificación Definitiva</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {scriptures.map((scripture, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                {scripture.icon}
                <h4 className="font-bold text-blue-900 text-lg">{scripture.ref}</h4>
              </div>
              <p className="text-slate-700 italic mb-4 text-sm leading-relaxed">
                {scripture.text}
              </p>
              <div className="bg-blue-50 p-3 rounded-lg border-t-2 border-blue-300">
                <p className="text-xs text-slate-700">
                  <span className="font-bold text-blue-800">Aplicación:</span> {scripture.application}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leviticus 16 Typology */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-purple-400 p-8 rounded-2xl shadow-xl mb-12">
        <div className="flex items-start gap-4">
          <Scale className="text-purple-600 flex-shrink-0" size={48} />
          <div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">La Tipología de Levítico 16</h3>
            <h4 className="text-xl font-semibold text-purple-800 mb-3">El Patrón del Día de la Expiación:</h4>
            <ol className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">1.</span>
                <span>El Sumo Sacerdote completa la purificación del santuario</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">2.</span>
                <span>Sale del Lugar Santísimo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">3.</span>
                <span>Coloca los pecados sobre el macho cabrío expiatorio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">4.</span>
                <span className="font-bold">La expiación del pueblo está completa</span>
              </li>
            </ol>
            <div className="bg-purple-100 p-4 rounded-lg mt-6 border-l-4 border-purple-700">
              <p className="font-bold text-purple-900 mb-2">Punto Crítico:</p>
              <p className="text-slate-800">
                El pueblo NO alcanzó perfección sin pecado durante la ceremonia del Día de la Expiación.
                Recibieron <span className="italic font-semibold">expiación completada</span>. El ritual
                cumplió su propósito independientemente de su perfección.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Court Analogy */}
      <div className="bg-gradient-to-r from-teal-100 to-cyan-100 border-4 border-teal-500 p-8 rounded-2xl shadow-2xl mb-12 text-center">
        <div className="flex justify-center mb-4">
          <Gavel className="text-teal-700" size={56} />
        </div>
        <h3 className="text-3xl font-bold text-teal-900 mb-6">⚖️ La Analogía de la Corte</h3>
        <p className="text-xl text-slate-800 leading-relaxed max-w-3xl mx-auto">
          Piénselo como un caso judicial:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6 max-w-2xl mx-auto text-left">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-slate-700"><CheckCircle className="inline text-teal-600 mr-2" size={20} />El juicio ha terminado</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-slate-700"><CheckCircle className="inline text-teal-600 mr-2" size={20} />El veredicto ha sido leído</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-slate-700"><CheckCircle className="inline text-teal-600 mr-2" size={20} />El juez ha dictado la decisión final</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-slate-700"><CheckCircle className="inline text-teal-600 mr-2" size={20} />El trabajo del abogado defensor está hecho</p>
          </div>
        </div>
        <div className="bg-teal-700 text-white p-6 rounded-xl mt-6 max-w-3xl mx-auto">
          <p className="text-xl font-semibold">
            No porque el acusado se volvió perfecto,<br/>
            sino porque el <span className="font-bold text-yellow-300">CASO ESTÁ CERRADO</span>
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-8 rounded-2xl shadow-xl text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Resumen</h3>
        <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
          La TUG hace una pregunta legítima pero llega a una respuesta que contradice el evangelio.
          Los redimidos sobreviven el tiempo sin un Mediador no porque alcanzaron perfección,
          sino porque su caso está cerrado, su justificación es final, y están seguros
          <span className="font-bold text-blue-700"> solamente en la obra terminada de Cristo</span>.
        </p>
      </div>

      {/* PDF Export Button */}
      <div className="mt-12 flex justify-center">
        <PDFExportButton
          elementId="visual-144000-mediador"
          filename="144000-sin-mediador-diagrama.pdf"
        />
      </div>
    </div>
  );
};

export default Mediador144000Diagram;