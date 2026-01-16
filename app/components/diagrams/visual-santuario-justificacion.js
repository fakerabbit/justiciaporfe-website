'use client';

import React, { useState } from 'react';
import { Building, Droplet, Flame, Book, User, Scale, Check, X, Info } from 'lucide-react';

const SanctaurioJustificacionDiagram = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-2xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Building className="w-10 h-10 text-amber-700" />
          <h2 className="text-3xl font-bold text-amber-900">
            LA DOCTRINA DEL SANTUARIO
          </h2>
        </div>
        <p className="text-xl text-amber-800 font-semibold">
          El Evangelio Visual de Dios: Justificación Solo por Fe
        </p>
      </div>

      {/* All Content - Sequential Sections */}
      <div className="space-y-12">
        
        {/* Section 1: El Patrón del Santuario */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-2">El Patrón del Santuario</h3>
            <p className="text-amber-700">Servicio Diario y Servicio Anual</p>
          </div>
          <PatronSection hoveredElement={hoveredElement} setHoveredElement={setHoveredElement} />
        </div>

        {/* Section 2: Dos Símbolos, Dos Realidades */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Dos Símbolos, Dos Realidades</h3>
            <p className="text-amber-700">Sangre e Incienso - Ambos Externos a Nosotros</p>
          </div>
          <SimbolosSection hoveredElement={hoveredElement} setHoveredElement={setHoveredElement} />
        </div>

        {/* Section 3: Errores de la TUG */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-2">Errores de la TUG</h3>
            <p className="text-amber-700">Cómo la TUG Malinterpreta el Santuario</p>
          </div>
          <LGTSection />
        </div>

        {/* Section 4: La Necesidad del Mediador */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-2">La Necesidad del Mediador</h3>
            <p className="text-amber-700">Ningún Israelita Podía Entrar</p>
          </div>
          <MediadorSection />
        </div>

      </div>

      {/* Footer Summary */}
      <div className="mt-12 bg-gradient-to-r from-amber-700 to-orange-700 text-white p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <Info className="w-6 h-6 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-2">Conclusión Clave:</h3>
            <p className="text-amber-50">
              El santuario enseña que desde el principio hasta el fin, somos justificados únicamente por los méritos de Cristo—nunca por nuestro carácter logrado. Tanto el servicio diario como el anual requirieron <strong>sangre</strong> (perdón) e <strong>incienso</strong> (aceptación), probando que la base de nuestra justificación nunca cambia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PatronSection = ({ hoveredElement, setHoveredElement }) => {
  return (
    <div className="space-y-6">
      {/* Comparison Table */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Daily Service */}
        <div 
          className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50/50 hover:shadow-lg transition-shadow"
          onMouseEnter={() => setHoveredElement('diario')}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
            <Droplet className="w-5 h-5" />
            SERVICIO DIARIO
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-blue-700 font-semibold">📖</span>
              <span className="text-blue-700 font-semibold">Levítico 4 - Dos veces al día</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-700 font-semibold">🩸</span>
              <span className="text-red-700 font-semibold"><strong>Sangre:</strong> Rociada delante del velo (Lev 4:6)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-700 font-semibold">🔥</span>
              <span className="text-yellow-700 font-semibold"><strong>Incienso:</strong> Quemado en el altar de oro (Éx 30:7-8)</span>
            </div>
            <div className="bg-blue-100 p-2 rounded mt-3 text-blue-700 font-semibold">
              <strong>Resultado:</strong> Pecado perdonado al individuo, transferido al santuario
            </div>
          </div>
        </div>

        {/* Annual Service */}
        <div 
          className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50/50 hover:shadow-lg transition-shadow"
          onMouseEnter={() => setHoveredElement('anual')}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <h3 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
            <Flame className="w-5 h-5" />
            SERVICIO ANUAL
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-purple-700 font-semibold">📖</span>
              <span className="text-blue-700 font-semibold">Levítico 16 - Día de Expiación</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-700 font-semibold">🩸</span>
              <span className="text-red-700 font-semibold"><strong>Sangre:</strong> Rociada sobre el propiciatorio (Lev 16:14-15)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-700 font-semibold">🔥</span>
              <span className="text-yellow-700 font-semibold"><strong>Incienso:</strong> Quemado encima del arca del pacto (Lev 16:12-13)</span>
            </div>
            <div className="bg-purple-100 p-2 rounded mt-3 text-blue-700 font-semibold">
              <strong>Resultado:</strong> Santuario purificado de pecados acumulados
            </div>
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-green-900 mb-2">Los Mismos Elementos en Ambos Servicios</h4>
            <p className="text-green-800">
              <strong>Servicio Diario:</strong> Sangre + Incienso = La obra perfecta de Cristo
              <br />
              <strong>Servicio Anual:</strong> Sangre + Incienso = La obra perfecta de Cristo
            </p>
            <p className="mt-2 text-green-900 font-semibold">
              → Los mismos elementos = La misma base para aceptación
              <br />
              → ¡La justificación NUNCA cambió de los méritos de Cristo al carácter humano!
            </p>
          </div>
        </div>
      </div>

      {/* What Was Cleansed */}
      <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4">
        <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
          <Book className="w-5 h-5" />
          ¿Qué Se Limpió en el Día de Expiación?
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-700">
              <Check className="w-5 h-5" />
              <span className="font-semibold">El Santuario (Lev 16:16-19)</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Los Registros/Libros (Dan 7:9-10)</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Los Pecados Transferidos</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-700">
              <X className="w-5 h-5" />
              <span className="font-semibold">NO las personas a perfección sin pecado</span>
            </div>
            <div className="flex items-center gap-2 text-red-700">
              <X className="w-5 h-5" />
              <span className="font-semibold">NO el carácter a perfección sin pecado</span>
            </div>
          </div>
        </div>
        <div className="mt-3 p-3 bg-amber-100 rounded">
          <p className="text-sm text-amber-900">
            <strong>Levítico 16:16:</strong> "Así purificará el santuario, a causa de las impurezas de los hijos de Israel... que <strong>permanecen entre ellos en medio de sus impurezas</strong>."
          </p>
          <p className="text-sm text-amber-900 mt-2">
            ¡El pueblo permaneció "en medio de sus impurezas" mientras el santuario era limpiado!
          </p>
        </div>
      </div>
    </div>
  );
};

const SimbolosSection = ({ hoveredElement, setHoveredElement }) => {
  return (
    <div className="space-y-6">
      {/* Two Symbols Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Dos Símbolos Diferentes = Dos Realidades Externas
        </h3>
        <p className="text-gray-600">
          Ambos representan la obra de Cristo, no nuestra obra
        </p>
      </div>

      {/* Symbols Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Blood */}
        <div 
          className="border-3 border-red-400 rounded-lg p-6 bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-xl transition-all"
          onMouseEnter={() => setHoveredElement('sangre')}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <div className="text-center mb-4">
            <Droplet className="w-12 h-12 text-red-600 mx-auto mb-2" />
            <h4 className="text-xl font-bold text-red-900">SANGRE</h4>
            <p className="text-sm text-red-700">La Muerte Expiatoria de Cristo</p>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded">
              <div className="font-semibold text-red-900 mb-1">Propósito:</div>
              <div className="text-red-800">PERDÓN de pecados</div>
            </div>
            
            <div className="bg-white p-3 rounded">
              <div className="font-semibold text-red-900 mb-1">Ubicación:</div>
              <div className="text-red-800">Fuera del creyente</div>
            </div>

            <div className="bg-white p-3 rounded">
              <div className="font-semibold text-red-900 mb-1">Versículos:</div>
              <div className="text-xs text-red-700 space-y-1">
                <div>• Levítico 4:6-7 (diario)</div>
                <div>• Levítico 16:14-15 (anual)</div>
                <div>• Hebreos 9:22 "sin derramamiento de sangre no hay perdón"</div>
              </div>
            </div>

            <div className="bg-red-100 p-3 rounded border border-red-300">
              <div className="font-bold text-red-900 mb-1">Lado NEGATIVO de Justificación:</div>
              <div className="text-sm text-red-800">Nuestros pecados NO son contados contra nosotros</div>
            </div>
          </div>
        </div>

        {/* Incense */}
        <div 
          className="border-3 border-amber-400 rounded-lg p-6 bg-gradient-to-br from-amber-50 to-yellow-50 hover:shadow-xl transition-all"
          onMouseEnter={() => setHoveredElement('incienso')}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <div className="text-center mb-4">
            <Flame className="w-12 h-12 text-amber-600 mx-auto mb-2" />
            <h4 className="text-xl font-bold text-amber-900">INCIENSO</h4>
            <p className="text-sm text-amber-700">La Perfecta Obediencia de Cristo</p>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded">
              <div className="font-semibold text-amber-900 mb-1">Propósito:</div>
              <div className="text-amber-800">ACEPTACIÓN delante de Dios</div>
            </div>
            
            <div className="bg-white p-3 rounded">
              <div className="font-semibold text-amber-900 mb-1">Ubicación:</div>
              <div className="text-amber-800">Fuera del creyente</div>
            </div>

            <div className="bg-white p-3 rounded">
              <div className="font-semibold text-amber-900 mb-1">Versículos:</div>
              <div className="text-xs text-amber-700 space-y-1">
                <div>• Éxodo 30:7-8 (diario)</div>
                <div>• Levítico 16:12-13 (anual)</div>
                <div>• Apocalipsis 8:3-4 "incienso... con las oraciones de los santos"</div>
              </div>
            </div>

            <div className="bg-amber-100 p-3 rounded border border-amber-300">
              <div className="font-bold text-amber-900 mb-1">Lado POSITIVO de Justificación:</div>
              <div className="text-sm text-amber-800">La justicia de Cristo ES contada a nuestro favor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hebrews 8:1-3 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-400 rounded-lg p-5">
        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
          <Book className="w-5 h-5" />
          Hebreos 8:1-3 - Cristo Debe Presentar Ambos
        </h4>
        <div className="bg-white p-4 rounded italic text-gray-700 mb-3">
          "Tenemos tal sumo sacerdote... ministro del santuario... Porque todo sumo sacerdote está constituido para presentar <strong className="text-blue-900">ofrendas y sacrificios</strong>; por lo cual es necesario que también éste tenga algo que ofrecer."
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-red-50 p-3 rounded border border-red-200">
            <div className="font-semibold text-red-900">Sacrificios = Sangre</div>
            <div className="text-sm text-red-700">Para nuestro perdón</div>
          </div>
          <div className="bg-amber-50 p-3 rounded border border-amber-200">
            <div className="font-semibold text-amber-900">Ofrendas = Incienso</div>
            <div className="text-sm text-amber-700">Para nuestra aceptación</div>
          </div>
        </div>
      </div>

      {/* Revelation 8:3-4 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 rounded-lg p-5">
        <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
          <Flame className="w-5 h-5" />
          Apocalipsis 8:3-4 - Esto Continúa en el Cielo
        </h4>
        <div className="bg-white p-4 rounded italic text-gray-700 mb-3">
          "Otro ángel... teniendo un incensario de oro, se le dio mucho <strong className="text-purple-900">incienso</strong> para añadirlo a las <strong className="text-purple-900">oraciones de todos los santos</strong>, sobre el altar de oro... Y de la mano del ángel subió a la presencia de Dios el humo del incienso con las oraciones de los santos."
        </div>
        <div className="bg-purple-100 p-4 rounded border border-purple-300">
          <div className="font-bold text-purple-900 mb-2">El Argumento Devastador:</div>
          <p className="text-purple-800">
            Si incluso nuestras oraciones <strong>santificadas</strong> necesitan que se les añada la justicia de Cristo (incienso), ¿cómo puede la TUG afirmar que logramos tal perfección que ya no necesitamos Su justicia imputada?
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5 rounded-lg">
        <h4 className="font-bold text-xl mb-3">Justificación = Ambos Lados del Mismo Acto</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/20 p-3 rounded">
            <div className="font-semibold mb-1">PERDÓN (Negativo)</div>
            <div className="text-sm">Nuestros pecados removidos por Su sangre</div>
          </div>
          <div className="bg-white/20 p-3 rounded">
            <div className="font-semibold mb-1">ACEPTACIÓN (Positivo)</div>
            <div className="text-sm">Su justicia imputada a nosotros por fe</div>
          </div>
        </div>
        <div className="mt-3 text-center font-bold text-lg">
          Ambos vienen de Cristo. Ambos son externos a nosotros. Ambos son por fe sola.
        </div>
      </div>
    </div>
  );
};

const LGTSection = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-red-900 mb-2">
          Los Errores Fatales de la TUG en la Interpretación del Santuario
        </h3>
        <p className="text-gray-600">
          Cómo la Teología de la Última Generación malinterpreta lo que Dios estaba enseñando
        </p>
      </div>

      {/* Error 1 */}
      <div className="border-2 border-red-300 rounded-lg p-5 bg-red-50">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
            1
          </div>
          <h4 className="font-bold text-red-900 text-lg">Confunde lo que Fue Limpiado</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-4 ml-11">
          <div>
            <div className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <X className="w-5 h-5" />
              La TUG Afirma:
            </div>
            <div className="bg-white p-3 rounded text-sm text-red-700 font-semibold">
              "La limpieza del santuario representa la limpieza de los creyentes a perfección sin pecado."
            </div>
          </div>
          <div>
            <div className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <Check className="w-5 h-5" />
              La Biblia Muestra:
            </div>
            <div className="bg-white p-3 rounded text-sm text-green-700 font-semibold">
              El santuario/libros fueron limpiados, no las personas. La gente permaneció "en medio de sus impurezas" (Lev 16:16).
            </div>
          </div>
        </div>
      </div>

      {/* Error 2 */}
      <div className="border-2 border-red-300 rounded-lg p-5 bg-red-50">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
            2
          </div>
          <h4 className="font-bold text-red-900 text-lg">Cambia la Base de Aceptación</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-4 ml-11">
          <div>
            <div className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <X className="w-5 h-5" />
              La TUG Enseña:
            </div>
            <div className="bg-white p-3 rounded text-sm space-y-2 text-red-700 font-semibold">
              <div>• Servicio diario = méritos de Cristo ✓</div>
              <div>• Servicio anual = perfección de carácter ✗</div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <Check className="w-5 h-5" />
              El Santuario Enseña:
            </div>
            <div className="bg-white p-3 rounded text-sm space-y-2 text-green-700 font-semibold">
              <div>• Servicio diario = Sangre + Incienso</div>
              <div>• Servicio anual = Sangre + Incienso</div>
              <div className="font-bold text-green-700">→ ¡Mismos elementos = misma base para aceptación!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Error 3 */}
      <div className="border-2 border-red-300 rounded-lg p-5 bg-red-50">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
            3
          </div>
          <h4 className="font-bold text-red-900 text-lg">Hace que la justicia propia manchada de pecado reemplace lo que la Sangre y el Incienso otorgan por gracia</h4>
        </div>
        <div className="ml-11">
          <table className="w-full bg-white rounded overflow-hidden">
            <thead className="bg-red-500">
              <tr>
                <th className="p-3 text-left">Elemento</th>
                <th className="p-3 text-left">Lo que Proporcionaba</th>
                <th className="p-3 text-left">Fuente</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t">
                <td className="p-3 font-semibold text-red-700">Sangre</td>
                <td className="p-3 text-red-700">Perdón</td>
                <td className="p-3 text-red-700">Muerte de Cristo</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-semibold text-amber-700">Incienso</td>
                <td className="p-3 text-red-700">Aceptación</td>
                <td className="p-3 text-red-700">Justicia de Cristo</td>
              </tr>
              <tr className="border-t bg-red-50">
                <td className="p-3 font-semibold text-gray-700">Carácter (según TUG)</td>
                <td className="p-3 text-red-700">❌ Intenta proporcionar aceptación</td>
                <td className="p-3 text-red-700">❌ Logro humano</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-3 p-3 bg-amber-100 rounded border border-amber-300">
            <p className="text-sm text-amber-900">
              <strong>El Error:</strong> La TUG hace que la <strong>santificación del creyente</strong> haga lo que el <strong>incienso</strong> fue diseñado para hacer: proporcionar la justicia que nos hace aceptables ante Dios.
            </p>
          </div>
        </div>
      </div>

      {/* Questions LGT Cannot Answer */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-6">
        <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
          <Scale className="w-6 h-6" />
          Preguntas que la TUG No Puede Responder
        </h4>
        <div className="space-y-3">
          <div className="bg-white/20 p-3 rounded">
            <div className="font-semibold mb-1">1. ¿Por qué sangre en el Día de Expiación?</div>
            <div className="text-sm">Si somos perfectos, ¿por qué todavía necesitamos el sacrificio de Cristo para el perdón?</div>
          </div>
          <div className="bg-white/20 p-3 rounded">
            <div className="font-semibold mb-1">2. ¿Por qué incienso en el Día de Expiación?</div>
            <div className="text-sm">Si nuestro carácter es perfecto, ¿por qué todavía necesitamos la justicia de Cristo para la aceptación?</div>
          </div>
          <div className="bg-white/20 p-3 rounded">
            <div className="font-semibold mb-1">3. ¿Por qué limpia el SANTUARIO, no la GENTE?</div>
            <div className="text-sm">El ritual limpia el lugar donde se registraron los pecados, no el carácter de las personas.</div>
          </div>
        </div>
      </div>

      {/* The Pattern */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 rounded-lg p-5">
        <h4 className="font-bold text-purple-900 mb-3">El Patrón del Mismo Error</h4>
        <p className="text-purple-800 mb-3">
          La TUG comete el mismo error con el santuario que comete con la justicia de Cristo:
        </p>
        <div className="bg-white p-4 rounded space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-purple-800"><strong>Confunde:</strong> Justicia imputada (externa) con justicia impartida (interna)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-purple-800"><strong>Confunde:</strong> Limpieza del santuario (registros) con limpieza de creyentes (perfección)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-purple-800"><strong>Resultado:</strong> La justificación depende del carácter logrado, no de la justicia imputada de Cristo</span>
          </div>
        </div>
        <div className="mt-3 p-3 bg-purple-200 rounded font-bold text-purple-900">
          = ¡La misma doctrina que salió del Concilio Católico de Trento (1545-1563)! Fusionar justificación y santificación.
        </div>
      </div>
    </div>
  );
};

const MediadorSection = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-2">
          Los Israelitas Nunca Entraron - El Patrón de Dependencia Perpetua
        </h3>
        <p className="text-gray-600">
          El argumento más simple y devastador contra la TUG
        </p>
      </div>

      {/* The Question */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-6">
        <div className="text-center">
          <h4 className="text-2xl font-bold mb-3">La Pregunta Clave:</h4>
          <p className="text-xl">
            ¿Quién podía entrar al Lugar Santísimo en el Día de Expiación?
          </p>
        </div>
      </div>

      {/* The Pattern */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Who Could Enter */}
        <div className="border-2 border-green-400 rounded-lg p-5 bg-green-50">
          <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
            <Check className="w-6 h-6" />
            PODÍA Entrar
          </h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded flex items-center gap-3">
              <User className="w-8 h-8 text-green-600" />
              <div>
                <div className="font-bold text-green-900">El Sumo Sacerdote</div>
                <div className="text-sm text-green-700">Solo él, una vez al año</div>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded text-sm text-green-600">
              <strong>Hebreos 9:7:</strong> "Pero en la segunda parte, <strong>sólo el sumo sacerdote</strong> una vez al año"
            </div>
          </div>
        </div>

        {/* Who Could NOT Enter */}
        <div className="border-2 border-red-400 rounded-lg p-5 bg-red-50">
          <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
            <X className="w-6 h-6" />
            NO PODÍAN Entrar
          </h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded flex items-center gap-2">
              <X className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-600">Ningún israelita ordinario</span>
            </div>
            <div className="bg-white p-3 rounded flex items-center gap-2">
              <X className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-600">Ni siquiera los hijos de Aarón</span>
            </div>
            <div className="bg-white p-3 rounded flex items-center gap-2">
              <X className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-600">Cualquier extraño debía morir</span>
            </div>
          </div>
        </div>
      </div>

      {/* Biblical Evidence */}
      <div className="space-y-3">
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
          <div className="font-bold text-blue-900 mb-2">Números 3:10</div>
          <div className="italic text-blue-800">
            "Y constituirás a Aarón y a sus hijos para que ejerzan el sacerdocio; y <strong>el extraño que se acercare, morirá</strong>."
          </div>
        </div>

        <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
          <div className="font-bold text-purple-900 mb-2">Levítico 16:17</div>
          <div className="italic text-purple-800">
            "Ningún hombre <strong>estará en el tabernáculo de reunión</strong> cuando él entre a hacer la expiación en el santuario, hasta que él salga."
          </div>
        </div>

        <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4">
          <div className="font-bold text-indigo-900 mb-2">Levítico 16:2</div>
          <div className="italic text-indigo-800">
            "Di a Aarón tu hermano, que no en todo tiempo entre en el santuario... <strong>para que no muera</strong>."
          </div>
        </div>
      </div>

      {/* The Theological Implication */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-400 rounded-lg p-5">
        <h4 className="font-bold text-amber-900 mb-3 text-lg">La Implicación Teológica Devastadora</h4>
        <div className="space-y-3 text-amber-900">
          <p>
            Si el Día de Expiación representaba que la generación final logra tal perfección sin pecado que vindica el carácter de Dios, <strong>esperaríamos que el patrón mostrara a los israelitas finalmente entrando al Lugar Santísimo ellos mismos</strong>.
          </p>
          <div className="bg-white p-4 rounded border-2 border-amber-300">
            <p className="font-bold mb-2">Pero el patrón enseña lo contrario:</p>
            <div className="space-y-1 text-sm">
              <div>✗ Nunca fueron lo suficientemente limpios para entrar</div>
              <div>✗ Nunca fueron lo suficientemente justos para acercarse a Dios directamente</div>
              <div>✗ Siempre necesitaron un mediador para entrar en su nombre</div>
              <div className="text-base font-bold text-amber-800 mt-2">
                ✓ Esto fue cierto en días ordinarios y en el Día de Juicio 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What This Teaches */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-6">
        <h4 className="font-bold text-xl mb-4">Lo que Esto Enseña:</h4>
        <div className="space-y-3">
          <div className="bg-white/20 p-3 rounded">
            <div className="font-semibold mb-1">1. Dependencia Perpetua del Mediador</div>
            <div className="text-sm">El patrón NO muestra que nos graduamos de la dependencia del mediador a menos que se produzca la reconciliación final del Día de Expiación</div>
          </div>
          <div className="bg-white/20 p-3 rounded">
            <div className="font-semibold mb-1">2. Nunca Lo Suficientemente Justos Por Nosotros Mismos</div>
            <div className="text-sm">Incluso en el día del Juicio, los israelitas necesitaban que el mediador entrara por ellos, pues no habían alcanzado la perfección requerida para pasar el juicio</div>
          </div>
          <div className="bg-white/20 p-3 rounded">
            <div className="font-semibold mb-1">3. El Día de Expiación Reforzó la Necesidad del Mediador</div>
            <div className="text-sm">Si acaso, enfatizó aún más dramáticamente la necesidad de un mediador perfecto</div>
          </div>
        </div>
      </div>

      {/* New Testament Confirmation */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-400 rounded-lg p-5">
        <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Book className="w-5 h-5" />
          Confirmación del Nuevo Testamento
        </h4>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded">
            <div className="font-semibold text-blue-900 mb-1">1 Timoteo 2:5</div>
            <div className="italic text-sm text-blue-800">
              "Porque hay un solo Dios, y <strong>un solo mediador</strong> entre Dios y los hombres, Jesucristo hombre."
            </div>
          </div>
          <div className="bg-white p-3 rounded">
            <div className="font-semibold text-blue-900 mb-1">Hebreos 7:25</div>
            <div className="italic text-sm text-blue-800">
              "Por lo cual puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo <strong>siempre para interceder</strong> por ellos."
            </div>
          </div>
          <div className="bg-white p-3 rounded">
            <div className="font-semibold text-blue-900 mb-1">Hebreos 10:19-22</div>
            <div className="italic text-sm text-blue-800">
              "Teniendo libertad para entrar en el Lugar Santísimo <strong>por la sangre de Jesucristo</strong>, por el camino nuevo y vivo que él nos abrió <strong>a través del velo, esto es, de su carne</strong>... acerquémonos con corazón sincero... <strong>purificados los corazones</strong>..."
            </div>
            <div className="mt-2 text-sm text-blue-900">
              <strong>Nota:</strong> Entramos <strong>por Su sangre</strong>, no por nuestra perfección. <strong>A través de Su carne sin pecado</strong>, no de nuestro carácter con mancha de pecado.
            </div>
          </div>
        </div>
      </div>

      {/* The Impossible Dilemma */}
      <div className="bg-gradient-to-r from-green-900 to-green-500 text-white rounded-lg p-6">
        <h4 className="font-bold text-2xl mb-4">El Dilema Imposible para la TUG</h4>
        <div className="bg-white/20 p-4 rounded mb-4">
          <p className="font-semibold mb-2">Si la generación final logra perfección sin pecado:</p>
          <p className="text-lg">¿Por qué el patrón del Día de Expiación les prohíbe entrar?</p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span>→</span>
            <span>Si lograron la justicia necesaria para estar ante Dios, deberían poder entrar</span>
          </div>
          <div className="flex items-start gap-2">
            <span>→</span>
            <span>Pero el patrón los mantiene AFUERA, dependiendo del mediador</span>
          </div>
          <div className="flex items-start gap-2">
            <span>→</span>
            <span>Esto enseña dependencia de los méritos de Cristo hasta en el Juicio mismo, no eventual independencia a través de la perfección lograda</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white/30 rounded font-bold text-center text-lg">
          El santuario enseña: Hasta pasar el Juicio siempre necesitamos un mediador.
        </div>
      </div>
    </div>
  );
};

export default SanctaurioJustificacionDiagram;