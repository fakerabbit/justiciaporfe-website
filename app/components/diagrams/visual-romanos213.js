import React, { useState } from 'react';
import { Scale, AlertTriangle, CheckCircle, Heart, Zap, ArrowRight, Info } from 'lucide-react';
import PDFExportButton from '../PDFExportButton';

const Romanos213Contexto = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div id="visual-romanos213" className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
          <h2 className="text-3xl font-bold text-center mb-2">
            Romanos 2:13 en Contexto
          </h2>
          <p className="text-center text-purple-100 text-lg">
            La Norma Imposible que Nos Lleva a Cristo
          </p>
        </div>

        {/* Key Verse Display */}
        <div className="bg-indigo-50 border-b-2 border-indigo-200 p-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-lg text-slate-700 mb-3">
              <strong className="text-indigo-900">Romanos 2:13 —</strong>
            </p>
            <p className="text-center text-xl text-slate-800 italic font-semibold">
              "Porque no son los oidores de la ley los justos ante Dios, 
              sino los <span className="bg-yellow-200 px-2 py-1 rounded">hacedores de la ley</span> serán justificados."
            </p>
          </div>
        </div>

        <div className="p-8">
          {/* The Question */}
          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  La Pregunta Obvia
                </h3>
                <p className="text-slate-700 text-lg mb-3">
                  Este versículo parece decir que somos justificados por <strong>HACER</strong> la ley, 
                  no por fe. ¿Contradice esto la justificación por fe?
                </p>
                <p className="text-amber-900 font-bold text-lg">
                  ¡NO! Pero solo se entiende cuando leemos el argumento COMPLETO de Pablo...
                </p>
              </div>
            </div>
          </div>

          {/* Paul's Legal Argument - Flow */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              El Argumento Legal de Pablo (Romanos 1-8)
            </h3>

            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-300" />

              {/* Step 1: Gentiles Condemned */}
              <div className="flex items-center mb-12">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-red-500 text-white p-5 rounded-xl inline-block shadow-lg">
                    <p className="font-bold text-lg mb-2">Romanos 1:18-32</p>
                    <p className="text-sm">Los gentiles son CULPABLES</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-slate-700">
                      Tienen conciencia, pero la ignoran. Sin excusa ante Dios.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2: Jews Condemned */}
              <div className="flex items-center mb-12">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-red-50 p-4 rounded-lg border-r-4 border-red-500 inline-block">
                    <p className="text-sm text-slate-700">
                      Tienen la Ley, pero no la obedecen. También culpables.
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-red-500 text-white p-5 rounded-xl shadow-lg inline-block">
                    <p className="font-bold text-lg mb-2">Romanos 2:17-29</p>
                    <p className="text-sm">Los judíos son CULPABLES</p>
                  </div>
                </div>
              </div>

              {/* Step 3: THE STANDARD - Romans 2:13 */}
              <div 
                className="flex items-center mb-12"
                onMouseEnter={() => setActiveSection('standard')}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className={`bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 p-6 rounded-xl inline-block shadow-xl border-4 transition-all ${
                    activeSection === 'standard' ? 'border-amber-700 scale-105' : 'border-amber-600'
                  }`}>
                    <p className="font-bold text-xl mb-2">⚖️ LA NORMA</p>
                    <p className="font-bold text-lg mb-3">Romanos 2:13</p>
                    <p className="text-sm bg-amber-700 text-white p-3 rounded-lg font-semibold border border-amber-900">
                      "Los <strong>HACEDORES</strong> de la ley serán justificados"
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-slate-900 font-bold">
                  ⚖️
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Pablo establece el estándar:</strong>
                    </p>
                    <p className="text-sm text-slate-700 font-semibold">
                      SI pudieras obedecer PERFECTAMENTE, serías justificado.
                    </p>
                    <p className="text-xs text-amber-800 mt-2 italic">
                      (Esto es CONDICIONAL - "si... entonces")
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: ALL Condemned */}
              <div className="flex items-center mb-12">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-red-50 p-4 rounded-lg border-r-4 border-red-600 inline-block">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>"No hay justo, ni aun uno"</strong>
                    </p>
                    <p className="text-xs text-slate-600">
                      Judíos y gentiles, TODOS bajo pecado
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-red-700 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                  ❌
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-red-600 text-white p-5 rounded-xl shadow-lg inline-block">
                    <p className="font-bold text-lg mb-2">Romanos 3:9-20</p>
                    <p className="text-sm">TODOS son CULPABLES</p>
                  </div>
                </div>
              </div>

              {/* Step 5: The Verdict */}
              <div className="flex items-center mb-12">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-slate-900 text-white p-5 rounded-xl shadow-xl inline-block">
                    <p className="font-bold text-lg mb-2">Romanos 3:20</p>
                    <p className="text-sm mb-3">EL VEREDICTO</p>
                    <p className="text-sm bg-red-800 p-3 rounded font-semibold border border-red-500">
                      "Por las obras de la ley NINGÚN ser humano será justificado"
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-slate-100 p-4 rounded-lg border-l-4 border-slate-700">
                    <p className="text-sm text-slate-700 font-semibold">
                      La norma de Rom 2:13 es IMPOSIBLE de cumplir.
                    </p>
                    <p className="text-xs text-slate-600 mt-2">
                      Nadie puede ser "hacedor perfecto de la ley"
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6: BUT NOW - The Solution */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500 inline-block">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>"Pero AHORA"</strong> - La solución de Dios
                    </p>
                    <p className="text-xs text-green-800 font-semibold">
                      Justicia de Dios por FE en Cristo
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-5 rounded-xl shadow-lg inline-block">
                    <p className="font-bold text-lg mb-2">Romanos 3:21-28</p>
                    <p className="text-sm mb-3">JUSTIFICACIÓN POR FE</p>
                    <p className="text-sm bg-green-900 bg-opacity-80 p-3 rounded font-semibold border border-green-400">
                      "Justificados gratuitamente... mediante la fe en Cristo"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Logic Breakdown */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">
              🧠 La Lógica de Pablo
            </h3>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="bg-indigo-800 p-5 rounded-lg shadow-lg border-2 border-indigo-400">
                <p className="font-bold mb-2 text-lg text-indigo-200">PREMISA 1 (Rom 2:13):</p>
                <p className="text-base text-white">
                  Los hacedores perfectos de la ley serán justificados
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowRight size={32} className="transform rotate-90 text-yellow-300" />
              </div>

              <div className="bg-purple-800 p-5 rounded-lg shadow-lg border-2 border-purple-400">
                <p className="font-bold mb-2 text-lg text-purple-200">PREMISA 2 (Rom 3:10-18):</p>
                <p className="text-base text-white">
                  PERO... no hay ni un solo hacedor perfecto de la ley
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowRight size={32} className="transform rotate-90 text-yellow-300" />
              </div>

              <div className="bg-red-700 p-5 rounded-lg shadow-lg border-2 border-red-400">
                <p className="font-bold mb-2 text-lg text-red-200">CONCLUSIÓN (Rom 3:20):</p>
                <p className="text-base text-white">
                  Por tanto, NADIE será justificado por obras de la ley
                </p>
              </div>

              <div className="flex justify-center">
                <ArrowRight size={32} className="transform rotate-90 text-yellow-300" />
              </div>

              <div className="bg-yellow-400 text-slate-900 p-5 rounded-lg font-bold text-center shadow-xl border-2 border-yellow-600">
                <p className="text-xl">
                  SOLUCIÓN (Rom 3:21-28):
                </p>
                <p className="text-base mt-2">
                  Justicia de Dios mediante la FE en Jesucristo
                </p>
              </div>
            </div>
          </div>

          {/* Like a Court Case */}
          <div className="bg-slate-100 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              ⚖️ Como un Caso Legal en Corte
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* The Standard */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-amber-500">
                <div className="text-center mb-4">
                  <Scale size={40} className="mx-auto text-amber-600 mb-3" />
                  <h4 className="font-bold text-lg text-amber-900">
                    1. LA NORMA
                  </h4>
                </div>
                <p className="text-sm text-slate-700 italic mb-3 text-center">
                  "Su Señoría, la ley es clara:"
                </p>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <p className="text-sm text-slate-800 font-semibold">
                    "Los hacedores de la ley serán justificados" (Rom 2:13)
                  </p>
                  <p className="text-xs text-amber-800 mt-2">
                    Este es el requisito: obediencia PERFECTA
                  </p>
                </div>
              </div>

              {/* The Verdict */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                <div className="text-center mb-4">
                  <AlertTriangle size={40} className="mx-auto text-red-600 mb-3" />
                  <h4 className="font-bold text-lg text-red-900">
                    2. EL VEREDICTO
                  </h4>
                </div>
                <p className="text-sm text-slate-700 italic mb-3 text-center">
                  "Pero TODOS ustedes han fallado:"
                </p>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm text-slate-800 font-semibold mb-2">
                    "No hay justo, ni aun uno" (Rom 3:10)
                  </p>
                  <p className="text-sm text-slate-800 font-semibold">
                    "Todos pecaron" (Rom 3:23)
                  </p>
                  <p className="text-xs text-red-800 mt-2 font-bold">
                    ¡TODOS CULPABLES!
                  </p>
                </div>
              </div>

              {/* The Solution */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                <div className="text-center mb-4">
                  <Heart size={40} className="mx-auto text-green-600 mb-3" />
                  <h4 className="font-bold text-lg text-green-900">
                    3. LA SOLUCIÓN
                  </h4>
                </div>
                <p className="text-sm text-slate-700 italic mb-3 text-center">
                  "Nadie cumple el estándar..."
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-slate-800 font-semibold mb-2">
                    "Pero AHORA, aparte de la ley, se ha manifestado la justicia de Dios" (Rom 3:21)
                  </p>
                  <p className="text-xs text-green-800 mt-2 font-bold">
                    ¡POR FE EN CRISTO!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-xl text-center">
              <p className="font-bold text-lg mb-2">
                📜 Pablo como Fiscal
              </p>
              <p className="text-sm">
                Establece la norma imposible (Rom 2:13) → Prueba que todos fallan (Rom 3:9-20) → 
                Presenta la única solución: Fe en Cristo (Rom 3:21-28)
              </p>
            </div>
          </div>

          {/* Key Supporting Verses */}
          <div className="bg-indigo-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-indigo-900 mb-8">
              📖 Versículos Clave que Clarifican
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-900 mb-2">Romanos 3:20</p>
                <p className="text-sm text-slate-700 italic mb-2">
                  "Ya que por las obras de la ley ningún ser humano será justificado delante de él; 
                  porque por medio de la ley es el conocimiento del pecado."
                </p>
                <p className="text-xs text-indigo-800 font-semibold">
                  💡 La ley EXPONE nuestro pecado, no nos justifica
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-900 mb-2">Santiago 2:10</p>
                <p className="text-sm text-slate-700 italic mb-2">
                  "Porque cualquiera que guardare toda la ley, pero ofendiere en un punto, 
                  se hace culpable de todos."
                </p>
                <p className="text-xs text-indigo-800 font-semibold">
                  💡 El estándar es PERFECCIÓN ABSOLUTA - un fallo = culpable de todo
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-900 mb-2">Gálatas 3:10</p>
                <p className="text-sm text-slate-700 italic mb-2">
                  "Porque todos los que dependen de las obras de la ley están bajo maldición, 
                  pues escrito está: Maldito todo aquel que no permaneciere en todas las cosas 
                  escritas en el libro de la ley, para hacerlas."
                </p>
                <p className="text-xs text-indigo-800 font-semibold">
                  💡 Confiar en obras de ley = maldición (porque NADIE las cumple todas)
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
                <p className="font-bold text-green-900 mb-2">Romanos 3:28</p>
                <p className="text-sm text-slate-700 italic mb-2">
                  "Concluimos, pues, que el hombre es justificado por fe sin las obras de la ley."
                </p>
                <p className="text-xs text-green-800 font-semibold">
                  ✅ La conclusión de Pablo: FE, no obras
                </p>
              </div>
            </div>
          </div>

          {/* Connection to Sanctuary */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-purple-900 mb-8">
              🕯️ Conexión con el Santuario
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-xl text-purple-900 mb-4 text-center">
                  Orden del Santuario
                </h4>
                <div className="space-y-3">
                  <div className="bg-amber-100 p-3 rounded-lg border-l-4 border-amber-600">
                    <p className="font-bold text-amber-900 mb-1">1º INCIENSO</p>
                    <p className="text-sm text-slate-700">
                      Méritos de Cristo nos hacen aceptables
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight size={24} className="text-purple-600 transform rotate-90" />
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-600">
                    <p className="font-bold text-blue-900 mb-1">2º ACEITE</p>
                    <p className="text-sm text-slate-700">
                      Espíritu Santo nos transforma
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-xl text-purple-900 mb-4 text-center">
                  Orden en Romanos
                </h4>
                <div className="space-y-3">
                  <div className="bg-amber-100 p-3 rounded-lg border-l-4 border-amber-600">
                    <p className="font-bold text-amber-900 mb-1">Rom 3:21-28</p>
                    <p className="text-sm text-slate-700">
                      Justicia de Cristo por FE (incienso)
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight size={24} className="text-purple-600 transform rotate-90" />
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-600">
                    <p className="font-bold text-blue-900 mb-1">Rom 6-8</p>
                    <p className="text-sm text-slate-700">
                      Poder del Espíritu para vivir (aceite)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-600 text-white p-5 rounded-xl text-center">
              <p className="font-bold text-lg">
                💡 El mismo orden: Aceptación por Cristo PRIMERO → Transformación por Espíritu DESPUÉS
              </p>
            </div>
          </div>

          {/* Application Against LGT */}
          <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6 text-center flex items-center justify-center gap-2">
              <AlertTriangle size={28} />
              Aplicación Contra la TUG
            </h3>

            <div className="space-y-6">
              {/* LGT's Error */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-red-900 mb-4">
                  ❌ Error de la TUG con Romanos 2:13
                </h4>
                <div className="space-y-3">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <p className="font-semibold text-red-900 mb-2">La TUG dice:</p>
                    <p className="text-sm text-slate-700">
                      "La última generación LOGRARÁ ser 'hacedores perfectos de la ley' 
                      (Rom 2:13) y así serán justificados."
                    </p>
                  </div>
                  
                  <div className="bg-red-900 text-white p-4 rounded-lg">
                    <p className="font-bold mb-2">⚠️ Pero esto ignora:</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Rom 3:10 - "No hay justo, ni aun uno"</li>
                      <li>• Rom 3:20 - "Por obras de ley NINGUNO será justificado"</li>
                      <li>• Rom 3:23 - "TODOS pecaron"</li>
                      <li>• Santiago 2:10 - Un fallo = culpable de TODO</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Biblical Truth */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                <h4 className="font-bold text-xl text-green-900 mb-4">
                  ✅ Verdad Bíblica
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <p className="font-semibold text-green-900 mb-2">Pablo enseña:</p>
                    <p className="text-sm text-slate-700 mb-3">
                      Rom 2:13 establece un estándar IMPOSIBLE (perfección absoluta) 
                      para mostrarnos que NECESITAMOS otra vía.
                    </p>
                    <p className="text-sm text-slate-700 font-bold">
                      Esa otra vía es: JUSTICIA DE CRISTO POR FE (Rom 3:21-28)
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-slate-700">
                      <strong>Romanos 8:3-4:</strong> Somos "hacedores de la ley" EN CRISTO 
                      (porque Él cumplió por nosotros), no por nuestro propio logro.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Key Question */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-4 text-center">
                  💥 La Pregunta Devastadora para la TUG
                </h4>
                <p className="text-center text-lg mb-4">
                  Si Pablo dice que los "hacedores de la ley serán justificados" (Rom 2:13)
                </p>
                <p className="text-center text-lg mb-4">
                  Pero luego dice "por obras de ley NINGUNO será justificado" (Rom 3:20)
                </p>
                <p className="text-center text-xl font-bold text-yellow-300">
                  ¿Por qué la TUG insiste en que la última generación LOGRARÁ lo que Pablo 
                  declara IMPOSIBLE para TODOS?
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-slate-900 text-white p-6 rounded-xl">
                <p className="font-bold text-lg mb-3 text-center">📋 Resumen</p>
                <div className="space-y-2 text-sm">
                  <p>✓ Rom 2:13 NO contradice justificación por fe</p>
                  <p>✓ Establece el estándar IMPOSIBLE (perfección total)</p>
                  <p>✓ Para mostrarnos que TODOS fallamos (Rom 3:9-20)</p>
                  <p>✓ Y necesitamos justicia de CRISTO por fe (Rom 3:21-28)</p>
                  <p className="text-yellow-300 font-bold mt-4">
                    ✓ La TUG yerra al pensar que la última generación LOGRARÁ el estándar 
                    que Pablo declara inalcanzable para TODOS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Box */}
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <div className="flex items-start gap-3">
              <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-blue-900 mb-2 text-lg">
                  Conclusión Final
                </p>
                <p className="text-slate-700 mb-3">
                  Romanos 2:13 no es una contradicción con la justificación por fe. Es parte 
                  del argumento legal de Pablo que demuestra que TODOS necesitamos la justicia 
                  de Cristo porque NADIE puede cumplir el estándar perfectamente.
                </p>
                <p className="text-slate-700 font-semibold">
                  El versículo establece la norma (obediencia perfecta) para luego demostrar 
                  que esa norma es inalcanzable, llevándonos a la única solución: 
                  <span className="text-green-700"> fe en Cristo.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PDFExportButton 
        className="flex items-center gap-2 mb-2"
        elementId="visual-romanos213"
        filename="romanos-2-13.pdf"
        position="top"
      />
    </div>
  );
};

export default Romanos213Contexto;