import React, { useState } from 'react';
import { Users, Skull, Heart, ArrowRight, Circle, Info } from 'lucide-react';

const Corintios15Diagram = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            1 Corintios 15:22
          </h2>
          <p className="text-center text-slate-200 text-lg md:text-xl italic">
            "Porque así como en Adán todos mueren,
            <br />
            también en Cristo todos serán vivificados."
          </p>
        </div>

        {/* Key Concept Banner */}
        <div className="bg-blue-50 border-b-2 border-blue-200 p-4 md:p-6">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <Info className="text-blue-600 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-bold text-blue-900 mb-2 text-base md:text-lg">
                Concepto Clave: Unión Representativa
              </h3>
              <p className="text-sm md:text-base text-slate-700">
                Las palabras <strong>"en Adán"</strong> y <strong>"en Cristo"</strong> no son 
                meramente descriptivas—representan <strong>unión legal y vital</strong> con un 
                representante. Estar "en" alguien significa estar bajo su representación, heredar 
                su estado, y participar de su destino.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8">
          {/* The Two Unions - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* IN ADAM */}
            <div 
              className={`relative transition-all duration-300 ${
                hoveredSection === 'adam' ? 'scale-105 z-10' : ''
              }`}
              onMouseEnter={() => setHoveredSection('adam')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-2xl p-8 shadow-2xl h-full">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-block bg-red-600 p-4 rounded-full mb-4">
                    <Skull size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">EN ADÁN</h3>
                  <p className="text-gray-300 text-lg">Unión por Nacimiento Natural</p>
                </div>

                {/* Status Badge */}
                <div className="bg-red-900 bg-opacity-70 p-4 rounded-xl mb-6 text-center border-2 border-red-600">
                  <p className="text-sm uppercase tracking-wide mb-1">Estado Heredado:</p>
                  <p className="text-2xl font-bold">MUERTE</p>
                </div>

                {/* Characteristics */}
                <div className="space-y-3">
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Circle size={8} className="fill-current" />
                      Cómo Entramos
                    </h4>
                    <p className="text-sm text-gray-200">
                      Por <strong>nacimiento físico</strong> - descendencia de Adán
                    </p>
                  </div>

                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Circle size={8} className="fill-current" />
                      Qué Heredamos
                    </h4>
                    <p className="text-sm text-gray-200">
                      Su <strong>naturaleza caída</strong>, su <strong>condenación legal</strong>, 
                      su <strong>separación de Dios</strong>
                    </p>
                  </div>

                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Circle size={8} className="fill-current" />
                      El Destino
                    </h4>
                    <p className="text-sm text-gray-200">
                      <strong>"Todos mueren"</strong> - muerte física y espiritual
                    </p>
                  </div>

                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Circle size={8} className="fill-current" />
                      Alcance
                    </h4>
                    <p className="text-sm text-gray-200">
                      <strong>"TODOS"</strong> los descendientes de Adán
                    </p>
                  </div>

                  <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold mb-2 text-red-200">⚠️ No Es Opcional</h4>
                    <p className="text-sm">
                      No elegimos estar "en Adán" - nacimos en esa unión. 
                      Es un estado <strong>automático</strong> por descendencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* IN CHRIST */}
            <div 
              className={`relative transition-all duration-300 ${
                hoveredSection === 'christ' ? 'scale-105 z-10' : ''
              }`}
              onMouseEnter={() => setHoveredSection('christ')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl p-8 shadow-2xl h-full">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-block bg-yellow-400 p-4 rounded-full mb-4">
                    <Heart size={48} className="text-green-800" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">EN CRISTO</h3>
                  <p className="text-green-100 text-lg">Unión por Fe</p>
                </div>

                {/* Status Badge */}
                <div className="bg-green-900 bg-opacity-70 p-4 rounded-xl mb-6 text-center border-2 border-yellow-400">
                  <p className="text-sm uppercase tracking-wide mb-1">Estado Recibido:</p>
                  <p className="text-2xl font-bold">VIDA</p>
                </div>

                {/* Characteristics */}
                <div className="space-y-3">
                  <div className="bg-green-900 bg-opacity-40 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Circle size={8} className="fill-current" />
                      Cómo Entramos
                    </h4>
                    <p className="text-sm text-green-50">
                      Por <strong>fe</strong> - nuevo nacimiento espiritual (Juan 3:3-7)
                    </p>
                  </div>

                  <div className="bg-green-900 bg-opacity-40 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Circle size={8} className="fill-current" />
                      Qué Recibimos
                    </h4>
                    <p className="text-sm text-green-50">
                      Su <strong>justicia perfecta</strong>, su <strong>justificación legal</strong>, 
                      su <strong>comunión con Dios</strong>
                    </p>
                  </div>

                  <div className="bg-green-900 bg-opacity-40 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Circle size={8} className="fill-current" />
                      El Destino
                    </h4>
                    <p className="text-sm text-green-50">
                      <strong>"Todos serán vivificados"</strong> - vida eterna con Dios
                    </p>
                  </div>

                  <div className="bg-green-900 bg-opacity-40 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Circle size={8} className="fill-current" />
                      Alcance
                    </h4>
                    <p className="text-sm text-green-50">
                      <strong>"TODOS"</strong> los que creen en Cristo
                    </p>
                  </div>

                  <div className="bg-yellow-400 bg-opacity-90 p-4 rounded-lg border-l-4 border-yellow-600 text-green-900">
                    <h4 className="font-bold mb-2">✓ Requiere Fe</h4>
                    <p className="text-sm">
                      Debemos <strong>elegir</strong> estar "en Cristo" por fe. 
                      Es una unión <strong>voluntaria</strong> que Dios ofrece.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Transfer Diagram */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-purple-900 mb-8">
              La Transferencia de Uniones
            </h3>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* Starting Point */}
              <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg min-w-[200px] text-center">
                <Skull size={32} className="mx-auto mb-2" />
                <p className="font-bold text-lg mb-1">Nacemos</p>
                <p className="text-sm text-gray-300">"EN ADÁN"</p>
                <p className="text-xs mt-2 bg-red-900 bg-opacity-70 p-2 rounded">
                  Estado: MUERTE
                </p>
              </div>

              {/* Arrow with Faith */}
              <div className="flex flex-col items-center gap-2">
                <ArrowRight size={48} className="text-purple-600" />
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  FE
                </div>
                <p className="text-xs text-slate-600 max-w-[120px] text-center">
                  2 Corintios 5:17
                </p>
              </div>

              {/* Ending Point */}
              <div className="bg-green-700 text-white p-6 rounded-xl shadow-lg min-w-[200px] text-center">
                <Heart size={32} className="mx-auto mb-2" />
                <p className="font-bold text-lg mb-1">Renacemos</p>
                <p className="text-sm text-green-200">"EN CRISTO"</p>
                <p className="text-xs mt-2 bg-yellow-400 text-green-900 p-2 rounded font-bold">
                  Estado: VIDA
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white p-5 rounded-lg shadow-inner">
              <p className="text-center text-slate-700">
                <strong className="text-purple-900">2 Corintios 5:17 —</strong> "De modo que si 
                alguno está <span className="bg-green-200 px-1 rounded font-semibold">en Cristo</span>, 
                nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas."
              </p>
            </div>
          </div>

          {/* What "IN" Means - Detailed Breakdown */}
          <div className="bg-slate-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              ¿Qué Significa Estar "EN" Alguien?
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Union */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-100 p-3 rounded-full">
                    <Users size={32} className="text-blue-600" />
                  </div>
                </div>
                <h4 className="font-bold text-lg text-center mb-3 text-blue-900">
                  1. UNIÓN
                </h4>
                <p className="text-sm text-slate-600 text-center mb-3">
                  Estar identificado legalmente con esa persona
                </p>
                <div className="bg-blue-50 p-3 rounded-lg text-xs">
                  <p className="font-semibold text-blue-900 mb-2">Ejemplos:</p>
                  <p className="text-slate-700">
                    • "En Adán" = Identificados con su caída
                    <br />
                    • "En Cristo" = Identificados con su victoria
                  </p>
                </div>
              </div>

              {/* Representation */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-600">
                <div className="text-center mb-4">
                  <div className="inline-block bg-purple-100 p-3 rounded-full">
                    <Circle size={32} className="text-purple-600 fill-current" />
                  </div>
                </div>
                <h4 className="font-bold text-lg text-center mb-3 text-purple-900">
                  2. REPRESENTACIÓN
                </h4>
                <p className="text-sm text-slate-600 text-center mb-3">
                  Esa persona actúa por nosotros como nuestro representante
                </p>
                <div className="bg-purple-50 p-3 rounded-lg text-xs">
                  <p className="font-semibold text-purple-900 mb-2">Ejemplos:</p>
                  <p className="text-slate-700">
                    • Adán pecó <strong>por</strong> toda la humanidad
                    <br />
                    • Cristo obedeció <strong>por</strong> todos los creyentes
                  </p>
                </div>
              </div>

              {/* Inheritance */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-amber-600">
                <div className="text-center mb-4">
                  <div className="inline-block bg-amber-100 p-3 rounded-full">
                    <ArrowRight size={32} className="text-amber-600" />
                  </div>
                </div>
                <h4 className="font-bold text-lg text-center mb-3 text-amber-900">
                  3. HERENCIA/RECEPCIÓN
                </h4>
                <p className="text-sm text-slate-600 text-center mb-3">
                  Recibimos el estado y destino de esa persona
                </p>
                <div className="bg-amber-50 p-3 rounded-lg text-xs">
                  <p className="font-semibold text-amber-900 mb-2">Ejemplos:</p>
                  <p className="text-slate-700">
                    • En Adán heredamos <strong>muerte</strong>
                    <br />
                    • En Cristo recibimos <strong>vida</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-xl">
              <p className="text-center font-semibold">
                💡 "EN" no es solo una preposición—es una <strong>posición teológica</strong> 
                que determina nuestro estado ante Dios
              </p>
            </div>
          </div>

          {/* Biblical Support */}
          <div className="bg-indigo-50 p-4 md:p-8 rounded-2xl mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-center text-indigo-900 mb-6 md:mb-8">
              📖 Otros Textos Sobre "En Adán" / "En Cristo"
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-4 md:p-5 rounded-xl shadow border-l-4 border-red-500">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="bg-red-500 text-white px-3 py-1 rounded font-bold text-sm self-start">
                    EN ADÁN
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 mb-2 text-sm md:text-base">
                      Romanos 5:12
                    </p>
                    <p className="text-xs md:text-sm text-slate-600 italic mb-2">
                      "Por tanto, como el pecado entró en el mundo por un hombre, y por el 
                      pecado la muerte, así la muerte pasó a todos los hombres, por cuanto 
                      todos pecaron"
                    </p>
                    <p className="text-xs md:text-sm text-red-800 font-semibold">
                      → Todos pecaron "en Adán" (tiempo aoristo - acción puntual pasada)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-5 rounded-xl shadow border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="bg-green-500 text-white px-3 py-1 rounded font-bold text-sm self-start">
                    EN CRISTO
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 mb-2 text-sm md:text-base">
                      2 Corintios 5:17
                    </p>
                    <p className="text-xs md:text-sm text-slate-600 italic mb-2">
                      "De modo que si alguno está en Cristo, nueva criatura es; las cosas 
                      viejas pasaron; he aquí todas son hechas nuevas"
                    </p>
                    <p className="text-xs md:text-sm text-green-800 font-semibold">
                      → Estar "en Cristo" = transformación total de estado
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-5 rounded-xl shadow border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="bg-green-500 text-white px-3 py-1 rounded font-bold text-sm self-start">
                    EN CRISTO
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 mb-2 text-sm md:text-base">
                      Efesios 1:3-4
                    </p>
                    <p className="text-xs md:text-sm text-slate-600 italic mb-2">
                      "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, que nos 
                      bendijo con toda bendición espiritual en los lugares celestiales en Cristo, 
                      según nos escogió en él antes de la fundación del mundo"
                    </p>
                    <p className="text-xs md:text-sm text-green-800 font-semibold">
                      → Todas las bendiciones vienen por estar "en Cristo"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-5 rounded-xl shadow border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="bg-green-500 text-white px-3 py-1 rounded font-bold text-sm self-start">
                    EN CRISTO
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 mb-2 text-sm md:text-base">
                      Romanos 8:1
                    </p>
                    <p className="text-xs md:text-sm text-slate-600 italic mb-2">
                      "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús"
                    </p>
                    <p className="text-xs md:text-sm text-green-800 font-semibold">
                      → Estar "en Cristo" = liberación de condenación
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-5 rounded-xl shadow border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="bg-green-500 text-white px-3 py-1 rounded font-bold text-sm self-start">
                    EN CRISTO
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 mb-2 text-sm md:text-base">
                      Gálatas 3:28
                    </p>
                    <p className="text-xs md:text-sm text-slate-600 italic mb-2">
                      "Ya no hay judío ni griego; no hay esclavo ni libre; no hay varón ni 
                      mujer; porque todos vosotros sois uno en Cristo Jesús"
                    </p>
                    <p className="text-xs md:text-sm text-green-800 font-semibold">
                      → Estar "en Cristo" = nueva identidad que trasciende todas las divisiones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application to LGT */}
          <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
              Aplicación Contra la TUG
            </h3>

            <div className="space-y-6">
              {/* Point 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-red-900 mb-3">
                  1. Nacemos con Estado Heredado "En Adán"
                </h4>
                <p className="text-slate-700 mb-3">
                  <strong>1 Corintios 15:22 dice:</strong> "En Adán todos mueren"
                </p>
                <p className="text-slate-600 mb-3">
                  No dice "todos morirán eventualmente cuando pequen". Dice "mueren" - presente, 
                  ya están en estado de muerte por estar "en Adán".
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-red-900">
                    ⚠️ Esto prueba que heredamos un ESTADO LEGAL de Adán, no solo tendencias. 
                    Estar "en Adán" = estar en estado de muerte desde nacimiento.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-red-900 mb-3">
                  2. La Salvación Es Por Cambio de Unión, No Perfección
                </h4>
                <p className="text-slate-700 mb-3">
                  <strong>El evangelio no es:</strong> "Perfecciona tu carácter mientras estás en Adán"
                </p>
                <p className="text-slate-700 mb-3">
                  <strong>El evangelio es:</strong> "Sal de Adán, entra en Cristo por fe"
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <p className="text-sm font-semibold text-green-900">
                    ✓ Estar "en Cristo" nos da VIDA (v. 22) - no por desarrollo, sino por unión con Él
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-red-900 mb-3">
                  3. Si Cristo Tuvo Nuestra Naturaleza Exacta...
                </h4>
                <p className="text-slate-700 mb-3">
                  <strong>La TUG dice:</strong> Cristo tuvo exactamente nuestra naturaleza caída
                </p>
                <p className="text-slate-700 mb-3">
                  <strong>Pero si esto fuera cierto:</strong>
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-sm">Cristo estaría "en Adán" (como descendiente)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-sm">Por tanto estaría en estado de "muerte" (v. 22)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-sm">No podría vivificar a nadie (los muertos no dan vida)</span>
                  </li>
                </ul>
                <div className="bg-red-900 text-white p-4 rounded-lg">
                  <p className="text-sm font-bold">
                    💥 Conclusión: Cristo NO estuvo "en Adán" (no heredó su naturaleza caída). 
                    Nació fuera de esa unión para poder ser el Segundo Adán que nos da vida.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <h4 className="font-bold text-xl text-red-900 mb-3">
                  4. La TUG Confunde Unión Con Perfección
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="font-bold text-red-900 mb-2">❌ Error de la TUG:</p>
                    <p className="text-sm text-slate-700">
                      "Debemos perfeccionar nuestro carácter para ser aceptados"
                    </p>
                    <p className="text-xs text-slate-600 mt-2">
                      (Trata de mejorar mientras están "en Adán")
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-900 mb-2">✓ Verdad Bíblica:</p>
                    <p className="text-sm text-slate-700">
                      "Somos aceptados por estar 'en Cristo' por fe"
                    </p>
                    <p className="text-xs text-slate-600 mt-2">
                      (Cambiamos de unión: de Adán a Cristo)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Visual */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-6">
              Resumen Visual
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-gray-900 p-6 rounded-xl mb-4">
                  <Skull size={48} className="mx-auto mb-3" />
                  <p className="font-bold text-2xl mb-2">EN ADÁN</p>
                  <p className="text-sm text-gray-300">Por nacimiento natural</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>→ Estado: MUERTE</p>
                  <p>→ Heredamos: Naturaleza caída</p>
                  <p>→ Posición: Condenados</p>
                  <p>→ Destino: Muerte eterna</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-700 p-6 rounded-xl mb-4">
                  <Heart size={48} className="mx-auto mb-3" />
                  <p className="font-bold text-2xl mb-2">EN CRISTO</p>
                  <p className="text-sm text-green-200">Por fe (nuevo nacimiento)</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>→ Estado: VIDA</p>
                  <p>→ Recibimos: Justicia de Cristo</p>
                  <p>→ Posición: Justificados</p>
                  <p>→ Destino: Vida eterna</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-lg font-semibold">
              La pregunta no es "¿Qué tan perfecto eres?" <br />
              La pregunta es "¿EN QUIÉN estás?"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corintios15Diagram;