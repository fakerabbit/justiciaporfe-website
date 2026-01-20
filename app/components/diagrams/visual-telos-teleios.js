import React from 'react';
import { Target, TrendingUp, Users, Award, Info, Zap } from 'lucide-react';
import PDFExportButton from '../PDFExportButton';

const TelosTeleios = () => {
  const concepts = [
    {
      id: 'telos',
      title: 'Τέλος (Telos)',
      subtitle: 'Meta, Fin, Propósito',
      icon: <Target size={40} />,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      accentColor: 'bg-blue-500',
      definition: 'La meta o propósito hacia el cual algo se dirige. El fin para el cual algo existe.',
      examples: [
        {
          title: 'Ejemplo 1: La Semilla de Bellota',
          description: 'El τέλος de una semilla de bellota es convertirse en un árbol de roble',
          application: 'No es "perfección" en el sentido de impecabilidad, sino cumplir su diseño'
        },
        {
          title: 'Ejemplo 2: El Atleta',
          description: 'El τέλος de un atleta es alcanzar la meta/premio',
          application: '1 Cor 9:24 - "Corred de tal manera que lo obtengáis" (el τέλος)'
        },
        {
          title: 'Ejemplo 3: La Ley',
          description: 'El τέλος de la ley es llevarnos a Cristo',
          application: 'Rom 10:4 - "Cristo es el fin (τέλος) de la ley"'
        }
      ],
      biblicalUse: 'Romanos 10:4 - "Cristo es el τέλος de la ley" = Cristo es la META/PROPÓSITO de la ley'
    },
    {
      id: 'teleios',
      title: 'Τέλειος (Teleios)',
      subtitle: 'Maduro, Completo, Que Ha Alcanzado Su Τέλος',
      icon: <Award size={40} />,
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      accentColor: 'bg-green-500',
      definition: 'Aquello que ha alcanzado su τέλος (propósito). Que está maduro, completo, funcional para su propósito.',
      examples: [
        {
          title: 'Ejemplo 1: El Roble Maduro',
          description: 'Un roble de 50 años es τέλειος - ha cumplido el τέλος de la bellota',
          application: 'No significa "sin defectos", sino "completamente desarrollado para su propósito"'
        },
        {
          title: 'Ejemplo 2: El Atleta que Gana',
          description: 'El que alcanza la meta es τέλειος respecto a esa carrera',
          application: 'Ha cumplido su propósito, alcanzado su τέλος'
        },
        {
          title: 'Ejemplo 3: El Creyente Maduro',
          description: 'El que ha crecido espiritualmente es τέλειος',
          application: '1 Cor 2:6 - "Hablamos sabiduría entre los que son τέλειοι (maduros)"'
        }
      ],
      biblicalUse: 'Mateo 5:48 - "Sed τέλειοι" = Sed maduros, cumplid vuestro propósito como Dios cumple el Suyo'
    },
    {
      id: 'connection',
      title: 'La Conexión',
      subtitle: 'Τέλος → Τέλειος',
      icon: <Zap size={40} />,
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
      accentColor: 'bg-purple-500',
      definition: 'Τέλειος es el adjetivo derivado de τέλος. Significa "perteneciente al τέλος" o "habiendo alcanzado el τέλος".',
      examples: [
        {
          title: 'Relación Lingüística',
          description: 'Τέλος (sustantivo) = meta/propósito → Τέλειος (adjetivo) = que ha alcanzado esa meta',
          application: 'Como: meta → completo, fin → final, propósito → cumplido'
        },
        {
          title: 'Implicación Teológica',
          description: 'Si τέλειος viene de τέλος (propósito), entonces significa "cumpliendo propósito", NO "sin pecado"',
          application: 'La perfección bíblica es teleológica (orientada a propósito), no moral absoluta'
        },
        {
          title: 'Diferentes Propósitos',
          description: 'Diferentes personas tienen diferentes τέλος, por tanto diferentes expresiones de ser τέλειος',
          application: 'Explica la parábola de los talentos (5, 2, 1) y las semillas (30, 60, 100)'
        }
      ],
      biblicalUse: 'Santiago 1:4 - "Tenga la paciencia su obra completa (τέλειος), para que seáis τέλειοι" = cumpliendo propósito'
    }
  ];

  return (
    <div id="visual-telos-teleios" className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
          <h2 className="text-3xl font-bold text-center mb-2">
            Τέλος y Τέλειος
          </h2>
          <p className="text-center text-blue-100 text-lg">
            El Fundamento Griego: Propósito y Cumplimiento
          </p>
        </div>

        {/* Key Insight Banner */}
        <div className="bg-cyan-50 border-b-2 border-cyan-200 p-6">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <Info className="text-cyan-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-cyan-900 mb-2 text-lg">
                💡 Concepto Clave
              </h3>
              <p className="text-slate-700 mb-2">
                La palabra griega <strong>τέλειος (teleios)</strong> que traducimos como "perfecto" 
                viene de <strong>τέλος (telos)</strong> que significa "meta, fin, propósito".
              </p>
              <p className="text-slate-700 font-semibold text-cyan-900">
                Por tanto, τέλειος NO significa "sin pecado" sino "que ha alcanzado su propósito/meta" 
                o "maduro/completo para su función".
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* The Three Concepts - Always Expanded */}
          <div className="space-y-6 mb-12">
            {concepts.map((concept) => {
              return (
                <div key={concept.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-200">
                  {/* Header */}
                  <div className={`${concept.accentColor} text-white p-6`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-opacity-20 p-3 rounded-full">
                        {concept.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{concept.title}</h3>
                        <p className="text-sm opacity-90">{concept.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Definition Summary */}
                  <div className={`${concept.bgColor} p-5 border-b-2 ${concept.borderColor}`}>
                    <p className="text-slate-700 font-semibold">
                      {concept.definition}
                    </p>
                  </div>

                  {/* Content - Always Visible */}
                  <div className="p-6 space-y-6">
                    {/* Examples */}
                    <div>
                      <h4 className={`text-xl font-bold mb-4 text-${concept.color}-900`}>
                        📚 Ejemplos para Entender
                      </h4>
                      <div className="space-y-4">
                        {concept.examples.map((example, idx) => (
                          <div key={idx} className={`${concept.bgColor} p-5 rounded-lg border-l-4 ${concept.borderColor}`}>
                            <h5 className="font-bold text-slate-800 mb-2">
                              {example.title}
                            </h5>
                            <p className="text-slate-700 mb-2">
                              <strong>Ejemplo:</strong> {example.description}
                            </p>
                            <p className={`text-sm text-${concept.color}-800 font-semibold`}>
                              💡 {example.application}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Biblical Use */}
                    <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-bold text-indigo-900 mb-2">
                        📖 Uso Bíblico
                      </h4>
                      <p className="text-slate-700">
                        {concept.biblicalUse}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Diagram of Relationship */}
          <div className="bg-gradient-to-r from-slate-100 to-blue-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              🎯 La Relación Visual
            </h3>

            <div className="max-w-4xl mx-auto">
              {/* Telos */}
              <div className="text-center mb-8">
                <div className="inline-block bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                  <Target size={48} className="mx-auto mb-3" />
                  <h4 className="text-3xl font-bold mb-2">Τέλος</h4>
                  <p className="text-blue-100 text-lg">Meta / Propósito / Fin</p>
                  <div className="mt-4 bg-blue-700 p-4 rounded-lg">
                    <p className="text-sm">
                      "¿Para qué fue diseñado?"<br/>
                      "¿Cuál es su propósito?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center mb-8">
                <div className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-xl font-bold shadow-lg">
                  Cuando algo alcanza su τέλος... ↓
                </div>
              </div>

              {/* Teleios */}
              <div className="text-center">
                <div className="inline-block bg-green-600 text-white p-8 rounded-2xl shadow-xl">
                  <Award size={48} className="mx-auto mb-3" />
                  <h4 className="text-3xl font-bold mb-2">Τέλειος</h4>
                  <p className="text-green-100 text-lg">Maduro / Completo / Cumplido</p>
                  <div className="mt-4 bg-green-700 p-4 rounded-lg">
                    <p className="text-sm">
                      "¡Ha cumplido su propósito!"<br/>
                      "¡Está maduro/completo!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
              <p className="text-center text-slate-700">
                <strong className="text-purple-900 text-lg">La Conexión Lingüística:</strong>
              </p>
              <p className="text-center text-slate-700 mt-2">
                Τέλειος es el ADJETIVO derivado del SUSTANTIVO τέλος.<br/>
                Significa: "perteneciente al τέλος" o "habiendo alcanzado el τέλος"
              </p>
            </div>
          </div>

          {/* Application to Key Verses */}
          <div className="bg-slate-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              📖 Aplicación a Versículos Clave
            </h3>

            <div className="space-y-6">
              {/* Matthew 5:48 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-xl text-blue-900 mb-3">
                  Mateo 5:48
                </h4>
                <p className="text-slate-700 italic mb-4">
                  "Sed, pues, vosotros <span className="bg-yellow-200 px-2 py-1 rounded font-bold">τέλειοι</span> (teleioi), 
                  como vuestro Padre que está en los cielos es <span className="bg-yellow-200 px-2 py-1 rounded font-bold">τέλειος</span> (teleios)"
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="font-bold text-red-900 mb-2">❌ Interpretación TUG:</p>
                    <p className="text-sm text-slate-700">
                      "Sed sin pecado como Dios es sin pecado"<br/>
                      (¡Meta imposible!)
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-bold text-green-900 mb-2">✅ Interpretación Correcta:</p>
                    <p className="text-sm text-slate-700">
                      "Cumplid vuestro propósito (τέλος) como Dios cumple el Suyo"<br/>
                      Dios es τέλειος = cumple perfectamente Su propósito (amor, justicia, misericordia)<br/>
                      Nosotros: cumplir NUESTRO propósito en NUESTRA esfera humana
                    </p>
                  </div>
                </div>
              </div>

              {/* Hebrews 5:14 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <h4 className="font-bold text-xl text-green-900 mb-3">
                  Hebreos 5:14
                </h4>
                <p className="text-slate-700 italic mb-4">
                  "Pero el alimento sólido es para los que han alcanzado madurez (<span className="bg-yellow-200 px-2 py-1 rounded font-bold">τελείων</span> - teleiōn)"
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-900 mb-2">💡 Claramente Significa Madurez:</p>
                  <p className="text-sm text-slate-700">
                    Contrasta "niños" vs "maduros (τέλειοι)"<br/>
                    Los τέλειοι = los que han alcanzado madurez espiritual suficiente para "alimento sólido"<br/>
                    No significa "sin pecado" - significa "espiritualmente desarrollados para su nivel"
                  </p>
                </div>
              </div>

              {/* James 1:4 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-xl text-purple-900 mb-3">
                  Santiago 1:4
                </h4>
                <p className="text-slate-700 italic mb-4">
                  "Mas tenga la paciencia su obra completa, para que seáis <span className="bg-yellow-200 px-2 py-1 rounded font-bold">τέλειοι</span> (teleioi) 
                  y cabales, sin que os falte cosa alguna"
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-bold text-purple-900 mb-2">💡 Proceso hacia el Τέλος:</p>
                  <p className="text-sm text-slate-700 mb-2">
                    "Tenga la paciencia su obra COMPLETA" - alcanzar su τέλος (propósito)<br/>
                    "Para que seáis τέλειοι" - para que alcancéis vuestro propósito/madurez<br/>
                    "Sin que os falte cosa alguna" - completos, no deficientes
                  </p>
                  <p className="text-xs text-purple-800 font-semibold mt-2">
                    Nota: Es un PROCESO ("tenga su obra completa") hacia ser τέλειος, no un estado instantáneo de impecabilidad
                  </p>
                </div>
              </div>

              {/* Philippians 3:15 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500">
                <h4 className="font-bold text-xl text-amber-900 mb-3">
                  Filipenses 3:15
                </h4>
                <p className="text-slate-700 italic mb-4">
                  "Así que, todos los que somos <span className="bg-yellow-200 px-2 py-1 rounded font-bold">τέλειοι</span> (teleioi), 
                  esto mismo sintamos"
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-bold text-amber-900 mb-2">💡 Maduros en Cristo:</p>
                  <p className="text-sm text-slate-700">
                    Pablo se incluye entre los τέλειοι (v. 15)<br/>
                    Pero tres versículos antes (v. 12) dice "NO que ya sea τέλειος"<br/>
                    Solución: Dos sentidos de τέλειος:<br/>
                    • v. 15 = Maduros EN CRISTO (justificación - completa)<br/>
                    • v. 12 = Maduros en PRÁCTICA (santificación - progresiva)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connection to Pastor Prieto */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-purple-900 mb-8">
              🔗 Conexión con las Enseñanzas de Cristo en Parábolas
            </h3>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-xl text-blue-900 mb-3">
                  Diferentes Propósitos (Τέλος) = Diferentes Expresiones de Τέλειος
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
                    <p className="text-center font-bold text-green-900 mb-2">30%</p>
                    <p className="text-sm text-slate-700 text-center">
                      Su τέλος (propósito) para HOY<br/>
                      Es τέλειος si alcanza SU 30%
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500">
                    <p className="text-center font-bold text-blue-900 mb-2">60%</p>
                    <p className="text-sm text-slate-700 text-center">
                      Su τέλος (propósito) para HOY<br/>
                      Es τέλειος si alcanza SU 60%
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-500">
                    <p className="text-center font-bold text-purple-900 mb-2">100%</p>
                    <p className="text-sm text-slate-700 text-center">
                      Su τέλος (propósito) para HOY<br/>
                      Es τέλειος si alcanza SU 100%
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                  <p className="text-slate-700 mb-2">
                    <strong>La Parábola de las Semillas (Mateo 13:23):</strong> Una semilla produce 30, otra 60, otra 100.
                  </p>
                  <p className="text-sm text-blue-900 font-semibold">
                    💡 Cada persona es juzgada según SU propio τέλος (capacidad dada por Dios), 
                    no el τέλος de otro. El que produce 30 es τέλειος si ESE es su propósito; el que produce 100 
                    es τέλειος si ESE es su propósito.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-xl text-purple-900 mb-3">
                  La Parábola de los Talentos
                </h4>
                
                <p className="text-slate-700 mb-4">
                  <strong>Mateo 25:14-30:</strong> A uno dio 5 talentos, a otro 2, a otro 1
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <p className="font-bold text-amber-900 text-2xl mb-2">5</p>
                    <p className="text-sm text-slate-700">
                      Su τέλος: Producir 5 más<br/>
                      Τέλειος = Lograr esos 5
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <p className="font-bold text-amber-900 text-2xl mb-2">2</p>
                    <p className="text-sm text-slate-700">
                      Su τέλος: Producir 2 más<br/>
                      Τέλειος = Lograr esos 2
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <p className="font-bold text-amber-900 text-2xl mb-2">1</p>
                    <p className="text-sm text-slate-700">
                      Su τέλος: Producir 1 más<br/>
                      Τέλειος = Lograr ese 1
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <p className="text-sm text-slate-700 font-semibold text-purple-900">
                    💡 Cada uno es juzgado según SU τέλος (propósito asignado) y según los talentos que Dios le ha dado, no según un estándar universal. Dios da diferentes talentos a las personas en función al propósito que le ha asignado. 
                    Ser τέλειος = cumplir el propósito que Dios te dio, no alcanzar el mismo nivel que otros, pues cada persona tiene un rol y un propósito divino distinto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Against LGT */}
          <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
              ⚠️ Por Qué Esto Refuta la TUG
            </h3>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-red-900 mb-4">
                  1. La TUG Malinterpreta Τέλειος
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <p className="font-bold text-red-900 mb-2">❌ TUG Piensa:</p>
                    <p className="text-sm text-slate-700">
                      Τέλειος = Impecabilidad moral absoluta<br/>
                      Un estándar ÚNICO para todos<br/>
                      Una META que debemos LOGRAR
                    </p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <p className="font-bold text-green-900 mb-2">✅ Significado Real:</p>
                    <p className="text-sm text-slate-700">
                      Τέλειος = Cumpliendo propósito (τέλος)<br/>
                      Diferentes τέλος para diferentes personas<br/>
                      Un PROCESO de crecimiento hacia madurez
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-red-900 mb-4">
                  2. La Conexión Τέλος → Τέλειος Muestra Propósito, No Impecabilidad
                </h4>
                <div className="bg-amber-50 p-5 rounded-lg mb-4">
                  <p className="font-bold text-amber-900 mb-2">La Pregunta Clave:</p>
                  <p className="text-slate-700 mb-2">
                    Si τέλειος significa "sin pecado", ¿por qué viene de τέλος (propósito/meta)?
                  </p>
                  <p className="text-sm text-amber-900 font-semibold">
                    Respuesta: Porque τέλειος NO significa "sin pecado" - significa "cumpliendo propósito", 
                    "alcanzando meta", "maduro para función".
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong>Analogía:</strong><br/>
                    • Un roble de 50 años es τέλειος (ha cumplido el τέλος de la bellota)<br/>
                    • Pero tiene ramas torcidas, corteza dañada, hojas marchitas<br/>
                    • Aún así ES τέλειος porque cumplió su PROPÓSITO (crecer, dar sombra, producir bellotas)<br/>
                    <br/>
                    <strong>Aplicación:</strong><br/>
                    • Somos τέλειοι cuando cumplimos NUESTRO propósito para nuestro nivel<br/>
                    • No cuando alcanzamos impecabilidad absoluta<br/>
                    • El enfoque está en FUNCIÓN y PROPÓSITO, no en perfección moral absoluta
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-red-900 mb-4">
                  3. Esto Explica Por Qué Hay Diferentes Niveles
                </h4>
                <p className="text-slate-700 mb-4">
                  Si τέλειος significara "impecabilidad absoluta", NO podría haber diferentes niveles (30%, 60%, 100%). 
                  La impecabilidad es binaria: o la tienes o no la tienes.
                </p>
                <div className="bg-green-50 p-5 rounded-lg">
                  <p className="font-bold text-green-900 mb-2">✅ Pero Como Τέλειος = Cumplir Τέλος:</p>
                  <p className="text-sm text-slate-700">
                    • Diferentes personas tienen diferentes τέλος (propósitos)<br/>
                    • Por tanto, hay diferentes expresiones de ser τέλειος<br/>
                    • Esto explica perfectamente Mateo 13:23 y 25:14-30<br/>
                    • Y explica por qué Pablo puede decir "somos τέλειοι" (3:15) mientras admite "no soy τέλειος" (3:12)
                  </p>
                </div>
              </div>

              <div className="bg-red-900 text-white p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-3 text-center">
                  💥 La Pregunta Devastadora
                </h4>
                <p className="text-center text-lg mb-3">
                  Si la palabra griega para "perfecto" (τέλειος) viene de la palabra para "propósito/meta" (τέλος)...
                </p>
                <p className="text-center text-xl font-bold text-yellow-300 mb-3">
                  ¿No está claro que significa "cumpliendo propósito" y NO "sin pecado"?
                </p>
                <p className="text-center text-sm text-red-200">
                  La TUG ignora completamente la etimología y el uso griego de estas palabras, 
                  imponiendo un significado de "impecabilidad" que el griego NO apoya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PDFExportButton 
        className="flex items-center gap-2 mb-2"
        elementId="visual-telos-teleios"
        filename="perfeccion-proposito-cumplimiento.pdf"
        position="top"
      />
    </div>
  );
};

export default TelosTeleios;