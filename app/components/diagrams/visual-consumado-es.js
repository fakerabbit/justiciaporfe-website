import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Crown, Scale, Shield, Scroll, Hammer, Award, Heart, ArrowRight, BookOpen, Zap } from 'lucide-react';

const TetelestalDiagram = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-2xl mb-6">
          <h1 className="text-4xl font-bold mb-2">ΤΕΤΕΛΕΣΤΑΙ</h1>
          <p className="text-xl">(Tetelestai - Juan 19:30)</p>
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          "CONSUMADO ES" - La Obra Completa de Cristo
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Refutación bíblica de la doctrina TUG que enseña que la muerte de Cristo fue insuficiente 
          para vindicar la ley de Dios y que necesitamos agregar perfección humana
        </p>
      </div>

      {/* Main Statement */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl shadow-2xl mb-12">
        <div className="flex items-center gap-4 mb-6">
          <AlertTriangle size={48} className="flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-bold mb-2">El Argumento TUG:</h3>
            <p className="text-lg">
              "Si la muerte de Cristo fue suficiente para vindicar la ley de Dios, ¿por qué no fue 
              destruido Satanás inmediatamente después de la cruz? Por lo tanto, Dios está esperando 
              que la última generación complete la vindicación con su perfección de carácter."
            </p>
          </div>
        </div>
        <div className="bg-red-800 bg-opacity-50 p-4 rounded-lg">
          <p className="font-bold text-xl">
            🚨 Esta doctrina INSULTA la obra terminada de Cristo en la cruz
          </p>
        </div>
      </div>

      {/* Three Meanings of Tetelestai */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Los Tres Significados de ΤΕΤΕΛΕΣΤΑΙ
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Commercial/Legal */}
          <div 
            className={`bg-white p-6 rounded-xl shadow-lg border-4 transition-all cursor-pointer ${
              activeSection === 'commercial' ? 'border-green-500 scale-105' : 'border-green-200'
            }`}
            onMouseEnter={() => setActiveSection('commercial')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="text-center mb-4">
              <Scroll size={48} className="mx-auto text-green-600 mb-3" />
              <h4 className="text-xl font-bold text-green-900">
                1. Contexto Comercial/Legal
              </h4>
              <p className="text-lg font-bold text-green-700 mt-2">
                "PAGADO EN SU TOTALIDAD"
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-slate-700 font-semibold mb-2">
                  📜 Evidencia Arqueológica:
                </p>
                <p className="text-xs text-slate-600">
                  Este término exacto aparece en recibos de impuestos antiguos cuando una deuda 
                  estaba completamente satisfecha
                </p>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-slate-700 font-semibold mb-2">
                  ⏰ Tiempo Perfecto en Griego:
                </p>
                <p className="text-xs text-slate-600">
                  "Ha sido terminado y permanece terminado para siempre"
                </p>
              </div>

              <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-600">
                <p className="text-xs font-bold text-green-900">
                  💡 Implicación: La deuda del pecado está COMPLETAMENTE PAGADA, 
                  sin saldo pendiente
                </p>
              </div>
            </div>
          </div>

          {/* Military */}
          <div 
            className={`bg-white p-6 rounded-xl shadow-lg border-4 transition-all cursor-pointer ${
              activeSection === 'military' ? 'border-blue-500 scale-105' : 'border-blue-200'
            }`}
            onMouseEnter={() => setActiveSection('military')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="text-center mb-4">
              <Shield size={48} className="mx-auto text-blue-600 mb-3" />
              <h4 className="text-xl font-bold text-blue-900">
                2. Contexto Militar
              </h4>
              <p className="text-lg font-bold text-blue-700 mt-2">
                "MISIÓN CUMPLIDA"
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-slate-700 font-semibold mb-2">
                  ⚔️ Uso Militar:
                </p>
                <p className="text-xs text-slate-600">
                  Usado cuando los objetivos militares se completaban exitosamente
                </p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-slate-700 font-semibold mb-2">
                  🏆 No es "Hice mi mejor esfuerzo":
                </p>
                <p className="text-xs text-slate-600">
                  Es "Victoria total lograda"
                </p>
              </div>

              <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-600">
                <p className="text-xs font-bold text-blue-900">
                  💡 Implicación: La batalla contra el pecado y Satanás fue GANADA, 
                  no simplemente peleada
                </p>
              </div>
            </div>
          </div>

          {/* Theological */}
          <div 
            className={`bg-white p-6 rounded-xl shadow-lg border-4 transition-all cursor-pointer ${
              activeSection === 'theological' ? 'border-purple-500 scale-105' : 'border-purple-200'
            }`}
            onMouseEnter={() => setActiveSection('theological')}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="text-center mb-4">
              <Crown size={48} className="mx-auto text-purple-600 mb-3" />
              <h4 className="text-xl font-bold text-purple-900">
                3. Contexto Teológico
              </h4>
              <p className="text-lg font-bold text-purple-700 mt-2">
                "LA OBRA ESTÁ COMPLETA"
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-slate-700 font-semibold mb-2">
                  ✝️ La Expiación:
                </p>
                <p className="text-xs text-slate-600">
                  La expiación sustitutoria está terminada
                </p>
              </div>
              
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-slate-700 font-semibold mb-2">
                  📖 Las Demandas de la Ley:
                </p>
                <p className="text-xs text-slate-600">
                  Completamente satisfechas por Cristo
                </p>
              </div>

              <div className="bg-purple-100 p-3 rounded-lg border-l-4 border-purple-600">
                <p className="text-xs font-bold text-purple-900">
                  💡 Implicación: No se puede ni debe agregar NADA a la obra terminada de Cristo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colossians 2:13-15 */}
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-2xl mb-12">
        <h3 className="text-3xl font-bold text-center text-indigo-900 mb-8">
          📜 Colosenses 2:13-15 - La Victoria Completa EN LA CRUZ
        </h3>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <p className="text-slate-700 italic mb-4 leading-relaxed">
            "Y a vosotros, estando muertos en pecados y en la incircuncisión de vuestra carne, 
            os dio vida juntamente con él, <span className="bg-yellow-200 px-2 py-1 rounded font-bold">perdonándoos 
            todos los pecados</span>, <span className="bg-green-200 px-2 py-1 rounded font-bold">anulando el acta 
            de los decretos que había contra nosotros</span>, que nos era contraria, 
            <span className="bg-blue-200 px-2 py-1 rounded font-bold">quitándola de en medio y clavándola en la cruz</span>, 
            y <span className="bg-purple-200 px-2 py-1 rounded font-bold">despojando a los principados y a las potestades, 
            los exhibió públicamente, triunfando sobre ellos en la cruz</span>."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-xl text-indigo-900 mb-4 flex items-center gap-2">
              <Scroll className="text-indigo-600" />
              Términos Clave en Griego
            </h4>
            
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-900 mb-2">χειρόγραφον (cheirographon)</p>
                <p className="text-sm text-slate-700">
                  = Certificado de deuda, nuestro "pagaré" a Dios
                </p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-900 mb-2">ἐξαλείψας (exaleipsas)</p>
                <p className="text-sm text-slate-700">
                  = "Borró completamente" - tiempo aoristo: acción pasada COMPLETADA
                </p>
                <p className="text-xs text-indigo-800 mt-2 font-semibold">
                  No queda rastro, está completamente eliminado
                </p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="font-bold text-indigo-900 mb-2">"Clavándola en la cruz"</p>
                <p className="text-sm text-slate-700">
                  = Cancelación pública, desgarrada en pedazos
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-xl text-purple-900 mb-4 flex items-center gap-2">
              <BookOpen className="text-purple-600" />
              Interpretación Reformada
            </h4>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-900 mb-2">Juan Crisóstomo:</p>
                <p className="text-sm text-slate-700 italic">
                  "Cada clavo en la cruz hizo una incisión en este escrito... 
                  quedó tan rasgado y desgarrado que no tiene ninguna fuerza"
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-900 mb-2">La Imagen:</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>✓ Certificado de deuda = contra nosotros</li>
                  <li>✓ "Borrado" = no queda rastro</li>
                  <li>✓ "Clavado" = públicamente cancelado</li>
                  <li>✓ Tiempo perfecto = terminado para siempre</li>
                </ul>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                <p className="text-sm font-bold text-green-900">
                  ✅ La deuda fue "PAGADA EN SU TOTALIDAD" y los creyentes están "LIBRES"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Five Devastating Implications */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Las Cinco Implicaciones Devastadoras Contra TUG
        </h3>

        <div className="space-y-6">
          {/* 1. Makes Christ a Liar */}
          <div 
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                <XCircle size={32} className="text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-red-900 mb-3">
                  1. Esto Hace a Cristo un Mentiroso
                </h4>
                <div className="bg-red-50 p-4 rounded-lg mb-3">
                  <p className="text-slate-700 mb-2">
                    Si Cristo dijo "ΤΕΤΕΛΕΣΤΑΙ" (está terminado) pero en realidad NO estaba terminado:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 ml-4">
                    <li>❌ Mintió sobre completar Su misión</li>
                    <li>❌ El sello de "pagado en su totalidad" fue prematuro</li>
                    <li>❌ El grito de victoria militar fue falso</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-sm font-bold text-yellow-900 mb-2">
                    ⚠️ La TUG contradice las propias palabras de Cristo
                  </p>
                  <p className="text-xs text-slate-700">
                    Cuando el Hijo de Dios proclama que Su obra está terminada, 
                    ¿quiénes somos nosotros para decir que necesita ser completada por humanos?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Denies Sufficiency of Atonement */}
          <div 
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-600"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-orange-100 p-3 rounded-full">
                <AlertTriangle size={32} className="text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  2. Niega la Suficiencia de la Expiación
                </h4>
                <div className="bg-orange-50 p-4 rounded-lg mb-3">
                  <p className="text-slate-700 mb-3">
                    Decir que se necesita más pago insulta la obra terminada de Cristo:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border-l-2 border-orange-500">
                      <p className="text-xs font-bold text-orange-900 mb-1">Lo que dice la Biblia:</p>
                      <p className="text-xs text-slate-700">
                        "PAGADO EN SU TOTALIDAD" - sin saldo restante
                      </p>
                    </div>
                    <div className="bg-red-100 p-3 rounded border-l-2 border-red-500">
                      <p className="text-xs font-bold text-red-900 mb-1">Lo que dice TUG:</p>
                      <p className="text-xs text-slate-700">
                        Se necesita pago adicional de la última generación
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-sm font-bold text-yellow-900 mb-2">
                    ⚠️ Este es el mismo error del catolicismo
                  </p>
                  <p className="text-xs text-slate-700">
                    Roma enseña: Cristo + purgatorio + méritos humanos = salvación<br/>
                    TUG enseña: Cristo + perfección de la última generación = vindicación completa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Contradicts Colossians 2:15 */}
          <div 
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                <Shield size={32} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  3. Contradice Colosenses 2:15
                </h4>
                <div className="bg-purple-50 p-4 rounded-lg mb-3">
                  <p className="text-slate-700 italic mb-3">
                    "Y despojando a los principados y a las potestades, los exhibió públicamente, 
                    <span className="bg-purple-200 px-2 py-1 rounded font-bold">triunfando sobre ellos en la cruz</span>"
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-green-100 p-3 rounded border-l-2 border-green-600">
                      <p className="text-xs font-bold text-green-900 mb-1">✅ Tiempo pasado:</p>
                      <p className="text-xs text-slate-700">
                        Cristo YA despojó y YA triunfó sobre Satanás en la cruz hace 2000 años
                      </p>
                    </div>
                    <div className="bg-red-100 p-3 rounded border-l-2 border-red-500">
                      <p className="text-xs font-bold text-red-900 mb-1">❌ TUG dice:</p>
                      <p className="text-xs text-slate-700">
                        La victoria está pendiente del logro de una futura generación
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-sm font-bold text-yellow-900 mb-2">
                    📖 Otros textos que confirman la victoria EN la cruz:
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Juan 12:31 - "Ahora el príncipe de este mundo será echado fuera"</li>
                    <li>• Hebreos 2:14 - "Para destruir por medio de la muerte al que tenía el imperio de la muerte"</li>
                    <li>• 1 Juan 3:8 - "Para esto apareció el Hijo de Dios, para deshacer las obras del diablo"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Reverses Biblical Order */}
          <div 
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <ArrowRight size={32} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  4. Invierte el Orden Bíblico
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
                    <p className="text-sm font-bold text-green-900 mb-2">✅ ORDEN BÍBLICO:</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="bg-green-200 px-3 py-1 rounded font-bold text-sm text-green-900">1. Expiación completa de Cristo</span>
                      <ArrowRight size={20} className="text-green-700" />
                      <span className="bg-green-200 px-3 py-1 rounded font-bold text-sm text-green-900">2. Obra transformadora del Espíritu</span>
                      <ArrowRight size={20} className="text-green-700" />
                      <span className="bg-green-200 px-3 py-1 rounded font-bold text-sm text-green-900">3. Nuestra testimonio del poder de Dios</span>
                    </div>
                    <p className="text-xs text-green-800 mt-2">
                      (Incienso → Aceite → Luz en el Santuario)
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-500">
                    <p className="text-sm font-bold text-red-900 mb-2">❌ ORDEN TUG (INVERTIDO):</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="bg-red-200 px-3 py-1 rounded font-bold text-sm text-red-900">1. Nuestra perfección de carácter</span>
                      <ArrowRight size={20} className="text-red-700" />
                      <span className="bg-red-200 px-3 py-1 rounded font-bold text-sm text-red-900">2. Vindicamos la ley de Dios</span>
                      <ArrowRight size={20} className="text-red-700" />
                      <span className="bg-red-200 px-3 py-1 rounded font-bold text-sm text-red-900">3. Entonces Satanás puede ser destruido</span>
                    </div>
                    <p className="text-xs text-red-800 mt-2">
                      (Luz → Aceite → Incienso → ¡orden inverso al Santuario!)
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600 mt-3">
                  <p className="text-sm font-bold text-yellow-900 mb-2">
                    🕯️ El simbolismo del Santuario es claro:
                  </p>
                  <p className="text-xs text-slate-700">
                    Éxodo 30:7-8 ordena INCIENSO primero (méritos de Cristo nos hacen aceptables), 
                    LUEGO aceite (Espíritu Santo produce santidad). Invertir este orden es rechazar 
                    el evangelio de la Reforma y el fundamento del Adventismo histórico - la doctrina del Santuario.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Requires Human Works */}
          <div 
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-600"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                <Hammer size={32} className="text-indigo-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-indigo-900 mb-3">
                  5. Requiere Obras Humanas para Completar la Salvación
                </h4>
                <div className="bg-indigo-50 p-4 rounded-lg mb-3">
                  <p className="text-slate-700 mb-3 font-semibold">
                    Esta doctrina convierte la gracia en obras:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-2 border-indigo-500">
                      <p className="text-sm font-bold text-indigo-900 mb-1">Romanos 11:6</p>
                      <p className="text-xs text-slate-700 italic">
                        "Y si por gracia, ya no es por obras; de otra manera la gracia ya no es gracia"
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-2 border-indigo-500">
                      <p className="text-sm font-bold text-indigo-900 mb-1">Efesios 2:8-9</p>
                      <p className="text-xs text-slate-700 italic">
                        "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, 
                        pues es don de Dios; no por obras, para que nadie se gloríe"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-sm font-bold text-yellow-900 mb-2">
                    ⚠️ Lutero llamaría a esto BLASFEMIA:
                  </p>
                  <p className="text-xs text-slate-700 mb-2">
                    Agregar logro humano a "ΤΕΤΕΛΕΣΤΑΙ" es:
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Pisotear la sangre de Cristo (Hebreos 10:29)</li>
                    <li>• Hacer la cruz de ningún efecto (Gálatas 5:4)</li>
                    <li>• Confiar en trapos de inmundicia en lugar de justicia perfecta (Isaías 64:6)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Practical Argument: When Was Satan Defeated? */}
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-8 rounded-2xl mb-12">
        <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
          El Argumento Práctico: ¿Cuándo Fue Derrotado Satanás?
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* LGT Logic */}
          <div className="bg-red-50 p-6 rounded-xl shadow-lg border-2 border-red-400">
            <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <XCircle className="text-red-600" />
              Lógica TUG (Falsa)
            </h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-red-500">
                <p className="text-sm text-slate-700">
                  <span className="font-bold text-red-900">1.</span> Si la muerte de Cristo fue suficiente, 
                  ¿por qué no fue destruido Satanás inmediatamente?
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-red-600 transform rotate-90" />
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-red-500">
                <p className="text-sm text-slate-700">
                  <span className="font-bold text-red-900">2.</span> Por lo tanto, la muerte de Cristo fue incompleta
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight size={24} className="text-red-600 transform rotate-90" />
              </div>
              <div className="bg-red-200 p-3 rounded border-l-4 border-red-700">
                <p className="text-sm font-bold text-red-900">
                  3. Por lo tanto, necesitamos agregar nuestra perfección de carácter
                </p>
              </div>
            </div>
          </div>

          {/* Biblical Answer */}
          <div className="bg-green-50 p-6 rounded-xl shadow-lg border-2 border-green-400">
            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-600" />
              Respuesta Bíblica (Correcta)
            </h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-600">
                <p className="font-bold text-green-900 mb-2">A. Satanás FUE Derrotado en la Cruz</p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Juan 12:31: "Ahora el príncipe de este mundo será echado fuera"</li>
                  <li>• Colosenses 2:15: Tiempo pasado - YA triunfó</li>
                  <li>• Hebreos 2:14: Por la muerte DESTRUYÓ al que tenía el poder de la muerte</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-green-600">
                <p className="font-bold text-green-900 mb-2">B. Demora en la Ejecución ≠ Victoria Incompleta</p>
                <p className="text-xs text-slate-700 mb-2">
                  Un criminal condenado en el corredor de la muerte está legalmente derrotado 
                  incluso antes de la ejecución:
                </p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>✓ La sentencia está dictada</li>
                  <li>✓ La victoria está ganada</li>
                  <li>✓ Solo se retrasa la ejecución</li>
                </ul>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-700">
                <p className="font-bold text-green-900 mb-2">C. Esto Trata de la Misericordia de Dios</p>
                <p className="text-xs text-slate-700 italic mb-2">
                  "El Señor no retarda su promesa... sino que es paciente para con nosotros, 
                  no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento" 
                  (2 Pedro 3:9)
                </p>
                <p className="text-xs font-bold text-green-900">
                  Dios no espera porque NECESITE nuestra vindicación. Espera porque desea 
                  que todos vengan al arrepentimiento.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
          <p className="text-lg font-bold text-center">
            💡 La demora demuestra la PACIENCIA de Dios, no la INSUFICIENCIA de la expiación de Cristo
          </p>
        </div>
      </div>

      {/* Summary: The Insult to Christ */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl shadow-2xl">
        <h3 className="text-3xl font-bold text-center mb-8">
          RESUMEN: El Insulto a Cristo
        </h3>

        <div className="bg-red-800 bg-opacity-50 p-6 rounded-xl mb-6">
          <p className="text-xl font-bold text-center mb-4">
            Afirmar que "ΤΕΤΕΛΕΣΤΑΙ" no estaba realmente "terminado" es:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white text-slate-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="text-red-600" size={24} />
              <p className="font-bold">1. Hacer a Cristo un mentiroso</p>
            </div>
            <p className="text-xs">
              Dijo que estaba terminado cuando no lo estaba
            </p>
          </div>

          <div className="bg-white text-slate-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-orange-600" size={24} />
              <p className="font-bold">2. Negar la expiación sustitutoria</p>
            </div>
            <p className="text-xs">
              Su muerte no pagó realmente la deuda completa
            </p>
          </div>

          <div className="bg-white text-slate-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Hammer className="text-yellow-600" size={24} />
              <p className="font-bold">3. Requerir obras humanas</p>
            </div>
            <p className="text-xs">
              Debemos agregar nuestra perfección a Su imperfección
            </p>
          </div>

          <div className="bg-white text-slate-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="text-purple-600" size={24} />
              <p className="font-bold">4. Socavar la Reforma</p>
            </div>
            <p className="text-xs">
              Volvemos a Roma: Cristo + mérito humano
            </p>
          </div>

          <div className="bg-white text-slate-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="text-blue-600" size={24} />
              <p className="font-bold">5. Invertir el simbolismo del Santuario</p>
            </div>
            <p className="text-xs">
              Carácter (aceite) antes de aceptación (incienso)
            </p>
          </div>

          <div className="bg-white text-slate-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="text-green-600" size={24} />
              <p className="font-bold">6. Robar la gloria de Dios</p>
            </div>
            <p className="text-xs">
              Compartimos el crédito con Cristo por la vindicación
            </p>
          </div>
        </div>

        <div className="mt-8 bg-green-600 p-6 rounded-xl">
          <h4 className="text-2xl font-bold text-center mb-4">
            ✅ LA POSICIÓN REFORMADA:
          </h4>
          <p className="text-lg text-center mb-4">
            Cuando Cristo gritó "ΤΕΤΕΛΕΣΤΑΙ", quiso decir:
          </p>
          <div className="space-y-2">
            <p className="text-center font-bold">
              ✓ La deuda está PAGADA EN SU TOTALIDAD - sin saldo pendiente
            </p>
            <p className="text-center font-bold">
              ✓ La misión está CUMPLIDA - victoria total
            </p>
            <p className="text-center font-bold">
              ✓ La obra está COMPLETA - nada que agregar
            </p>
          </div>
        </div>
      </div>

      {/* Final Quote */}
      <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl">
        <div className="text-center">
          <Award size={64} className="mx-auto mb-4" />
          <p className="text-2xl font-bold mb-4">
            "Sugerir lo contrario no es solo error teológico—"
          </p>
          <p className="text-3xl font-bold">
            es un INSULTO a la obra terminada de Cristo
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-slate-600">
        <p className="text-sm">
          Diagrama creado para refutar la Teología de la Última Generación (TUG)
        </p>
        <p className="text-xs mt-2">
          JusticiaPorFe.com - Defendiendo la justificación por fe sola
        </p>
      </div>
    </div>
  );
};

export default TetelestalDiagram;