import React, { useState } from 'react';
import { Scale, ArrowRight, AlertTriangle, CheckCircle, Heart, Zap } from 'lucide-react';
import PDFExportButton from '../PDFExportButton';

const DosPerfecciones = () => {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div id="visual-two-perfections" className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
          <h2 className="text-3xl font-bold text-center mb-2">
            Las Dos Perfecciones de Pablo
          </h2>
          <p className="text-center text-purple-100 text-lg">
            Filipenses 3:12 vs. 3:15 - Justificación vs. Santificación
          </p>
        </div>

        {/* Key Question */}
        <div className="bg-amber-50 border-b-2 border-amber-200 p-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-amber-900 mb-3 text-center">
              ❓ La Aparente Contradicción
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-900 mb-2">Filipenses 3:15</p>
                <p className="text-sm text-slate-700 italic">
                  "Así que, todos los que somos <span className="bg-green-200 px-1 rounded font-bold">perfectos</span>, 
                  esto mismo sintamos"
                </p>
                <p className="text-xs text-green-800 mt-2 font-semibold">
                  Pablo dice: "SOY perfecto"
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-2">Filipenses 3:12</p>
                <p className="text-sm text-slate-700 italic">
                  "No que lo haya alcanzado ya, ni que ya sea <span className="bg-red-200 px-1 rounded font-bold">perfecto</span>"
                </p>
                <p className="text-xs text-red-800 mt-2 font-semibold">
                  Pablo dice: "NO soy perfecto"
                </p>
              </div>
            </div>
            <p className="text-center text-slate-700 mt-4 font-semibold">
              ¿Cómo puede Pablo ser Y no ser perfecto al mismo tiempo?
            </p>
          </div>
        </div>

        <div className="p-8">
          {/* The Two Models */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              Dos Modelos de "Perfección"
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* LGT's ONE Perfection */}
              <div 
                className={`transition-all duration-300 ${
                  hoveredSide === 'lgt' ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredSide('lgt')}
                onMouseLeave={() => setHoveredSide(null)}
              >
                <div className="bg-gradient-to-br from-red-500 to-red-700 text-white rounded-2xl p-8 shadow-2xl h-full">
                  <div className="text-center mb-6">
                    <AlertTriangle size={48} className="mx-auto mb-3" />
                    <h4 className="text-2xl font-bold mb-2">✗ ERROR DE LA TUG</h4>
                    <p className="text-red-100">Una Sola "Perfección"</p>
                  </div>

                  {/* Visual: One merged circle */}
                  <div className="bg-red-900 bg-opacity-50 p-6 rounded-xl mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-32 h-32 bg-red-300 rounded-full flex items-center justify-center border-4 border-red-100">
                        <span className="text-red-900 font-bold text-center text-sm">
                          PERFECCIÓN<br/>ÚNICA<br/>(Confusa)
                        </span>
                      </div>
                    </div>
                    <p className="text-center text-sm">
                      Mezcla justificación y santificación en UNA sola "perfección"
                    </p>
                  </div>

                  {/* Characteristics */}
                  <div className="space-y-3">
                    <div className="bg-red-800 bg-opacity-60 p-4 rounded-lg">
                      <p className="font-bold mb-2 text-sm">Naturaleza:</p>
                      <p className="text-sm">Una meta de IMPECABILIDAD que debemos LOGRAR</p>
                    </div>

                    <div className="bg-red-800 bg-opacity-60 p-4 rounded-lg">
                      <p className="font-bold mb-2 text-sm">Cuándo:</p>
                      <p className="text-sm">Al FINAL (antes del cierre de probación)</p>
                    </div>

                    <div className="bg-red-800 bg-opacity-60 p-4 rounded-lg">
                      <p className="font-bold mb-2 text-sm">Cómo:</p>
                      <p className="text-sm">Por DESARROLLO de carácter perfecto</p>
                    </div>

                    <div className="bg-red-800 bg-opacity-60 p-4 rounded-lg">
                      <p className="font-bold mb-2 text-sm">Problema:</p>
                      <p className="text-sm">
                        ¡Confunde la POSICIÓN (justificación) con el PROCESO (santificación)!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paul's TWO Perfections */}
              <div 
                className={`transition-all duration-300 ${
                  hoveredSide === 'pablo' ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredSide('pablo')}
                onMouseLeave={() => setHoveredSide(null)}
              >
                <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl p-8 shadow-2xl h-full">
                  <div className="text-center mb-6">
                    <CheckCircle size={48} className="mx-auto mb-3" />
                    <h4 className="text-2xl font-bold mb-2">✓ ENSEÑANZA DE PABLO</h4>
                    <p className="text-green-100">Dos Perfecciones Distintas</p>
                  </div>

                  {/* Visual: Two separate circles */}
                  <div className="bg-green-900 bg-opacity-50 p-6 rounded-xl mb-6">
                    <div className="flex justify-center gap-4 mb-4">
                      <div className="w-24 h-24 bg-amber-300 rounded-full flex items-center justify-center border-4 border-amber-100">
                        <span className="text-amber-900 font-bold text-center text-xs">
                          1ª<br/>JUSTIF.
                        </span>
                      </div>
                      <div className="flex items-center">
                        <ArrowRight className="text-white" size={24} />
                      </div>
                      <div className="w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center border-4 border-blue-100">
                        <span className="text-blue-900 font-bold text-center text-xs">
                          2ª<br/>SANTIF.
                        </span>
                      </div>
                    </div>
                    <p className="text-center text-sm">
                      Dos perfecciones DISTINTAS en el orden correcto
                    </p>
                  </div>

                  {/* First Perfection */}
                  <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg mb-3">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="bg-amber-400 text-amber-900 px-2 py-1 rounded font-bold text-xs">
                        1ª
                      </span>
                      <div>
                        <p className="font-bold text-sm">PERFECCIÓN EN CRISTO</p>
                        <p className="text-xs text-green-100">Filipenses 3:15</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm pl-8">
                      <p>• <strong>Qué:</strong> Justificación - Declarados justos</p>
                      <p>• <strong>Cuándo:</strong> Instantánea al creer</p>
                      <p>• <strong>Base:</strong> Obra de Cristo, recibida por fe</p>
                    </div>
                  </div>

                  {/* Second Perfection */}
                  <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="bg-blue-400 text-blue-900 px-2 py-1 rounded font-bold text-xs">
                        2ª
                      </span>
                      <div>
                        <p className="font-bold text-sm">PERFECCIÓN EN MADUREZ</p>
                        <p className="text-xs text-green-100">Filipenses 3:12</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm pl-8">
                      <p>• <strong>Qué:</strong> Santificación - Crecimiento</p>
                      <p>• <strong>Cuándo:</strong> Progresiva toda la vida</p>
                      <p>• <strong>Base:</strong> Obra del Espíritu en nosotros</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Resolution - FIXED CONTRAST */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">
              💡 La Resolución de la "Contradicción"
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-purple-900 bg-opacity-60 p-5 rounded-lg border-2 border-purple-400">
                <p className="font-bold mb-2 text-lg text-white">Filipenses 3:15 - "Somos perfectos"</p>
                <p className="text-white">
                  Pablo habla de la <strong>PRIMERA perfección</strong> (justificación):
                  Perfectos EN CRISTO, declarados justos, posición legal completa.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-lg font-bold">
                  ≠ NO ES CONTRADICCIÓN ≠
                </div>
              </div>

              <div className="bg-purple-900 bg-opacity-60 p-5 rounded-lg border-2 border-purple-400">
                <p className="font-bold mb-2 text-lg text-white">Filipenses 3:12 - "No soy perfecto"</p>
                <p className="text-white">
                  Pablo habla de la <strong>SEGUNDA perfección</strong> (santificación):
                  Aún creciendo en madurez práctica, no he llegado a la meta final.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center text-xl font-bold text-white">
              Pablo está hablando de DOS cosas DIFERENTES
            </div>
          </div>

          {/* Connection to Sanctuary */}
          <div className="bg-slate-100 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              🕯️ Paralelo con el Orden del Santuario
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sanctuary Order */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-xl text-center text-purple-900 mb-4">
                  Orden del Santuario
                </h4>
                <div className="space-y-3">
                  <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-600">
                    <p className="font-bold text-amber-900 mb-1">1º INCIENSO</p>
                    <p className="text-sm text-slate-700">
                      Méritos de Cristo nos hacen aceptables
                    </p>
                    <p className="text-xs text-amber-800 mt-1 font-semibold">
                      = JUSTIFICACIÓN
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="text-purple-600 transform rotate-90" size={24} />
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="font-bold text-blue-900 mb-1">2º ACEITE</p>
                    <p className="text-sm text-slate-700">
                      Espíritu Santo nos transforma
                    </p>
                    <p className="text-xs text-blue-800 mt-1 font-semibold">
                      = SANTIFICACIÓN
                    </p>
                  </div>
                </div>
              </div>

              {/* Paul's Order */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-xl text-center text-purple-900 mb-4">
                  Orden de Pablo
                </h4>
                <div className="space-y-3">
                  <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-600">
                    <p className="font-bold text-amber-900 mb-1">1º PERFECTO EN CRISTO</p>
                    <p className="text-sm text-slate-700">
                      Filipenses 3:15 - Declarados justos
                    </p>
                    <p className="text-xs text-amber-800 mt-1 font-semibold">
                      = JUSTIFICACIÓN
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="text-purple-600 transform rotate-90" size={24} />
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="font-bold text-blue-900 mb-1">2º CRECIENDO EN MADUREZ</p>
                    <p className="text-sm text-slate-700">
                      Filipenses 3:12 - Siendo transformados
                    </p>
                    <p className="text-xs text-blue-800 mt-1 font-semibold">
                      = SANTIFICACIÓN
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-600 text-white p-5 rounded-xl text-center">
              <p className="font-bold text-lg mb-2">
                ⚖️ EL MISMO ORDEN EN AMBOS
              </p>
              <p>
                Aceptación/Justificación PRIMERO → Transformación/Santificación DESPUÉS
              </p>
            </div>
          </div>

          {/* Comparison Table - FIXED CONTRAST */}
          <div className="bg-slate-100 p-8 rounded-2xl border-2 border-slate-300 mb-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-6">
              📊 Comparación Detallada
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left border-2 border-slate-400 bg-yellow-400 text-slate-800 font-bold">Aspecto</th>
                    <th className="p-4 text-center border-2 border-slate-400 bg-red-400 text-slate-800 font-bold">
                      ✗ TUG (Una Perfección)
                    </th>
                    <th className="p-4 text-center border-2 border-slate-400 bg-green-400 text-slate-800 font-bold">
                      ✅ Pablo (Dos Perfecciones)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-2 border-slate-400 font-bold bg-slate-200 text-slate-800">Número</td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-red-100 text-slate-800">
                      UNA sola "perfección" confusa
                    </td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-green-100 text-slate-800">
                      DOS perfecciones distintas
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-slate-400 font-bold bg-slate-200 text-slate-800">Naturaleza</td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-red-100 text-slate-800">
                      Impecabilidad que logramos
                    </td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-green-100 text-slate-800">
                      1) Justicia EN CRISTO<br/>2) Madurez progresiva
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-slate-400 font-bold bg-slate-200 text-slate-800">Tiempo</td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-red-100 text-slate-800">
                      Al final (cierre probación)
                    </td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-green-100 text-slate-800">
                      1) Instantánea al creer<br/>2) Progresiva toda la vida
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-slate-400 font-bold bg-slate-200 text-slate-800">Base</td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-red-100 text-slate-800">
                      Nuestro logro
                    </td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-green-100 text-slate-800">
                      1) Fe en Cristo<br/>2) Obra del Espíritu
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-slate-400 font-bold bg-slate-200 text-slate-800">Orden</td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-red-100 text-slate-800">
                      Santificación → Justificación<br/>
                      (Aceite → Incienso) ✗
                    </td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-green-100 text-slate-800">
                      Justificación → Santificación<br/>
                      (Incienso → Aceite) ✅
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-slate-400 font-bold bg-slate-200 text-slate-800">Resultado</td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-red-100 text-slate-800">
                      Ansiedad, incertidumbre
                    </td>
                    <td className="p-4 border-2 border-slate-400 text-center bg-green-100 text-slate-800">
                      Paz, seguridad, descanso
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Supporting Verses */}
          <div className="bg-indigo-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-indigo-900 mb-8">
              📖 Otros Textos que Muestran las Dos Perfecciones
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow border-l-4 border-amber-500">
                <p className="font-bold text-amber-900 mb-2">Hebreos 10:14</p>
                <p className="text-sm text-slate-700 italic mb-2">
                  "Porque con una sola ofrenda hizo <span className="bg-amber-200 px-1 rounded font-bold">perfectos para siempre</span> a los que <span className="bg-blue-200 px-1 rounded font-bold">son santificados</span>."
                </p>
                <p className="text-xs text-indigo-800 font-semibold">
                  💡 ¡Las DOS perfecciones en UN versículo!<br/>
                  • "Perfectos para siempre" = Justificación (completa)<br/>
                  • "Son santificados" = Santificación (progresiva)
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
                <p className="font-bold text-green-900 mb-2">Colosenses 1:28</p>
                <p className="text-sm text-slate-700 italic mb-2">
                  "A fin de presentar perfecto <span className="bg-green-200 px-1 rounded font-bold">en Cristo Jesús</span> a todo hombre"
                </p>
                <p className="text-xs text-indigo-800 font-semibold">
                  💡 Perfecto EN CRISTO = Justificación (primera perfección)
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-500">
                <p className="font-bold text-blue-900 mb-2">Mateo 5:48</p>
                <p className="text-sm text-slate-700 italic mb-2">
                  "Sed, pues, vosotros perfectos (τέλειοι - maduros), como vuestro Padre que está en los cielos es perfecto"
                </p>
                <p className="text-xs text-indigo-800 font-semibold">
                  💡 "Sed" (imperativo presente) = Proceso continuo de maduración (segunda perfección)
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border-l-4 border-purple-500">
                <p className="font-bold text-purple-900 mb-2">Santiago 1:4</p>
                <p className="text-sm text-slate-700 italic mb-2">
                  "Mas tenga la paciencia su obra completa, para que seáis perfectos y cabales, sin que os falte cosa alguna"
                </p>
                <p className="text-xs text-indigo-800 font-semibold">
                  💡 Proceso de crecimiento hacia madurez (segunda perfección)
                </p>
              </div>
            </div>
          </div>

          {/* Application Against LGT */}
          <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6 text-center flex items-center justify-center gap-2">
              <AlertTriangle size={28} />
              Por Qué Esto Refuta la TUG
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2 text-lg">
                  1. La TUG Confunde las Dos Perfecciones
                </h4>
                <p className="text-slate-700">
                  Al fusionar justificación y santificación en UNA "perfección" que debemos lograr,
                  la TUG comete el mismo error que el Concilio de Trento: hace que nuestra ACEPTACIÓN
                  dependa de nuestro DESARROLLO.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2 text-lg">
                  2. Invierte el Orden Divino
                </h4>
                <p className="text-slate-700 mb-2">
                  <strong>Orden de la TUG:</strong> Santificación → Justificación
                  (debemos desarrollar carácter perfecto para ser aceptados)
                </p>
                <p className="text-slate-700">
                  <strong>Orden de Pablo:</strong> Justificación → Santificación
                  (somos aceptados en Cristo, luego crecemos)
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2 text-lg">
                  3. Destruye la Seguridad de Salvación
                </h4>
                <p className="text-slate-700">
                  Si la "perfección" es UNA sola meta que debemos alcanzar al final, nunca podemos
                  estar seguros. Pero si reconocemos las DOS perfecciones, tenemos seguridad AHORA
                  en Cristo (1ª perfección) mientras crecemos en madurez (2ª perfección).
                </p>
              </div>

              <div className="bg-red-900 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3">
                  💥 La Pregunta Devastadora:
                </h4>
                <p className="mb-3">
                  Si Pablo dice "somos perfectos" (Fil 3:15) Y "no soy perfecto" (Fil 3:12),
                  y la TUG insiste en que hay UNA sola perfección...
                </p>
                <p className="text-yellow-300 font-bold text-lg">
                  ¿Está Pablo contradiciéndose, o la TUG malinterpreta la Escritura?
                </p>
                <p className="mt-3 text-sm">
                  La respuesta es obvia: Pablo habla de DOS perfecciones distintas,
                  y fusionarlas en una es torcer la Palabra de Dios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PDFExportButton 
        className="flex items-center gap-2 mb-2"
        elementId="visual-two-perfections"
        filename="dos-perfecciones.pdf"
        position="top"
      />
    </div>
  );
};

export default DosPerfecciones;