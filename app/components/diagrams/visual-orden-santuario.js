import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';

const OrdenSantuario = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 md:p-6 rounded-xl shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          El Orden del Santuario
        </h2>
        <p className="text-sm md:text-base text-center text-purple-100">
          Éxodo 30:7-8 - Incienso ANTES de Aceite
        </p>
      </div>

      {/* Biblical Order Section */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-green-600 text-white p-4">
          <h3 className="text-2xl font-bold text-center">
            ✓ Orden Bíblico Correcto
          </h3>
        </div>
        {/* Biblical Order */}
        <div className="p-8 space-y-8">(
          <div className="p-8 space-y-8 animate-fadeIn">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-green-600" size={28} />
                <h3 className="text-2xl font-bold text-green-800">
                  Orden Correcto: Incienso → Aceite
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                <strong>Éxodo 30:7-8:</strong> "Y Aarón quemará incienso aromático sobre él cada mañana; 
                <span className="bg-yellow-200 px-1">cuando aliste las lámparas</span> lo quemará."
              </p>
            </div>

            {/* Flow Diagram */}
            <div className="relative">
              {/* Step 1: Blood */}
              <div className="mb-8">
                <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🩸</div>
                    <h4 className="text-2xl font-bold mb-2">FUNDAMENTO</h4>
                    <h5 className="text-xl mb-2">La Sangre (Sacrificio Diario)</h5>
                    <p className="text-red-100">Expiación por el pecado</p>
                  </div>
                </div>
                <div className="flex justify-center my-4">
                  <ArrowRight className="text-red-600 transform rotate-90" size={40} />
                </div>
              </div>

              {/* Step 2: Incense - FIRST */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 rounded-xl shadow-lg border-4 border-amber-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-amber-900 text-2xl font-black px-4 py-2 rounded-lg">
                      PASO 1
                    </div>
                    <div className="text-4xl">🔥</div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">INCIENSO (Méritos de Cristo)</h4>
                  <p className="text-white mb-4">
                    <strong>Representa:</strong> La justicia de Cristo que cubre nuestras imperfecciones
                  </p>
                  <div className="bg-amber-900 bg-opacity-30 p-4 rounded-lg border-2 border-amber-800">
                    <p className="font-semibold mb-2 text-white">📖 Significado Teológico:</p>
                    <p className="text-sm text-white">JUSTIFICACIÓN - Somos declarados justos por los méritos de Cristo</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                    <div className="bg-amber-900 bg-opacity-40 p-2 rounded text-center border border-amber-800">
                      🍞 Declarados "Sin levadura" en Cristo
                    </div>
                    <div className="bg-amber-900 bg-opacity-40 p-2 rounded text-center border border-amber-800">
                      🦠 Declarados "Limpios" en Cristo
                    </div>
                    <div className="bg-amber-900 bg-opacity-40 p-2 rounded text-center border border-amber-800">
                      ⛓️ Declarados "Libres" en Cristo
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-4">
                  <ArrowRight className="text-amber-600 transform rotate-90" size={40} />
                </div>
              </div>

              {/* Step 3: Oil - SECOND */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg border-4 border-blue-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-900 text-2xl font-black px-4 py-2 rounded-lg">
                      PASO 2
                    </div>
                    <div className="text-4xl">💧</div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">ACEITE (Poder del Espíritu Santo)</h4>
                  <p className="text-white mb-4">
                    <strong>Representa:</strong> El Espíritu Santo que nos transforma progresivamente
                  </p>
                  <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg border-2 border-blue-800">
                    <p className="font-semibold mb-2 text-white">📖 Significado Teológico:</p>
                    <p className="text-sm text-white">SANTIFICACIÓN - Somos transformados por el poder del Espíritu</p>
                  </div>
                  <div className="mt-4 bg-blue-900 bg-opacity-40 p-3 rounded-lg border-2 border-blue-800">
                    <p className="text-sm text-white">
                      <strong>CRUCIAL:</strong> El aceite viene DESPUÉS porque la transformación 
                      fluye DE la aceptación, no HACIA la aceptación. Progresivamente, diariamente, mientras permanecemos en Cristo y por el poder del Espíritu Santo somos purificados de todo pecado y defecto de carácter.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center my-4">
                  <ArrowRight className="text-blue-600 transform rotate-90" size={40} />
                </div>
              </div>

              {/* Result: Light */}
              <div>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-800 p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💡</div>
                    <h4 className="text-2xl font-bold mb-2">RESULTADO: LUZ</h4>
                    <h5 className="text-xl mb-2">Testimonio y Gloria a Dios</h5>
                    <p>Reflejamos a Cristo al mundo - pero TODO es por Su gracia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Principle */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h4 className="font-bold text-lg text-blue-900 mb-2">
                💡 Principio Clave:
              </h4>
              <p className="text-slate-700">
                El orden es teológicamente significativo: <strong>somos aceptados por los méritos de Cristo 
                (incienso) PRIMERO</strong>, y <strong>LUEGO</strong> el Espíritu Santo (aceite) nos transforma. 
                La santificación fluye DE la justificación, no HACIA ella.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TUG Reversal Section */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-red-600 text-white p-4">
          <h3 className="text-2xl font-bold text-center">
            ✗ Inversión de la TUG
          </h3>
        </div>
        {/* TUG Reversal */}
        <div className="p-8 space-y-8">
          <div className="p-8 space-y-8 animate-fadeIn">
            <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-600" size={28} />
                <h3 className="text-2xl font-bold text-red-800">
                  Error de la TUG: Aceite → Incienso (INVERTIDO)
                </h3>
              </div>
              <p className="text-slate-700">
                La TUG hace que nuestro desarrollo de carácter (aceite) sea la BASE para 
                la aceptación de Dios (incienso), invirtiendo el orden divino.
              </p>
            </div>

            {/* Reversed Flow */}
            <div className="relative opacity-90">
              {/* Step 1: Oil FIRST (Wrong!) */}
              <div className="mb-8">
                <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg border-4 border-red-600">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-red-900 text-2xl font-black px-4 py-2 rounded-lg">
                      ✗ PASO 1
                    </div>
                    <div className="text-4xl">💧</div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">ACEITE PRIMERO (Error)</h4>
                  <p className="text-white mb-4">
                    <strong>TUG dice:</strong> Debemos desarrollar carácter perfecto
                  </p>
                  <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg border-2 border-red-700">
                    <p className="font-semibold mb-2 text-white">⚠️ Problema Teológico:</p>
                    <p className="text-sm text-white">Hace nuestra SANTIFICACIÓN la base de nuestra justificación</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                    <div className="bg-red-900 bg-opacity-70 p-2 rounded text-center border border-red-800">
                      🍞 Purgar levadura propia
                    </div>
                    <div className="bg-red-900 bg-opacity-70 p-2 rounded text-center border border-red-800">
                      🦠 Auto-limpiarse
                    </div>
                    <div className="bg-red-900 bg-opacity-70 p-2 rounded text-center border border-red-800">
                      ⛓️ Auto-libertarse
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-4">
                  <ArrowRight className="text-red-600 transform rotate-90" size={40} />
                </div>
              </div>

              {/* Step 2: Incense SECOND (Wrong!) */}
              <div className="mb-8">
                <div className="bg-amber-500 text-white p-6 rounded-xl shadow-lg border-4 border-red-600">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-red-900 text-2xl font-black px-4 py-2 rounded-lg">
                      ✗ PASO 2
                    </div>
                    <div className="text-4xl">🔥</div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">INCIENSO SEGUNDO (Error)</h4>
                  <p className="text-white mb-4">
                    <strong>TUG dice:</strong> Dios nos acepta por nuestro carácter perfecto
                  </p>
                  <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg border-2 border-red-700">
                    <p className="font-semibold mb-2 text-white">⚠️ Problema Teológico:</p>
                    <p className="text-sm text-white">Hace nuestra ACEPTACIÓN dependiente de nuestro LOGRO</p>
                  </div>
                </div>
                <div className="flex justify-center my-4">
                  <ArrowRight className="text-red-600 transform rotate-90" size={40} />
                </div>
              </div>

              {/* Result: Wrong Foundation */}
              <div>
                <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚠️</div>
                    <h4 className="text-2xl font-bold mb-2">RESULTADO: ANSIEDAD</h4>
                    <p>Nunca estar seguro de "estar listo" - Perfeccionismo - Miedo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why This Is Wrong */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-red-800">
                Por Qué Este Orden Invertido Es Imposible:
              </h4>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <p className="font-semibold text-red-900 mb-2">🍞 Levadura:</p>
                <p className="text-slate-700">
                  No puedes "perfeccionar" masa leudada. La levadura debe ser ELIMINADA, 
                  no perfeccionada. Intentar desarrollar carácter en naturaleza leudada es como 
                  intentar hacer pan sin levadura... ¡sin quitar la levadura!
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <p className="font-semibold text-red-900 mb-2">🦠 Lepra:</p>
                <p className="text-slate-700">
                  Un leproso no puede auto-limpiarse. Está EXCLUIDO hasta que el sacerdote lo declare limpio. 
                  Intentar "desarrollar carácter" mientras estás en estado de lepra es como intentar 
                  entrar al campamento... ¡mientras aún eres leproso!
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <p className="font-semibold text-red-900 mb-2">⛓️ Esclavitud:</p>
                <p className="text-slate-700">
                  Un esclavo no puede auto-libertarse. No tiene autoridad legal para cambiar su estado. 
                  Intentar "perfeccionar carácter" mientras eres esclavo es como intentar actuar como libre... 
                  ¡mientras aún estás en cadenas!
                </p>
              </div>
            </div>

            {/* Parallel with Council of Trent */}
            <div className="bg-slate-100 p-6 rounded-xl border-2 border-slate-300">
              <h4 className="font-bold text-lg text-slate-900 mb-3">
                📜 Paralelo Histórico: Concilio de Trento
              </h4>
              <p className="text-slate-700 mb-3">
                El Concilio de Trento (1547) hizo el mismo error: fusionó justificación y santificación, 
                enseñando que somos justificados POR el proceso de hacernos inherentemente justos.
              </p>
              <p className="text-slate-700">
                Los Reformadores Protestantes rechazaron esto, insistiendo en que la justificación 
                (declaración de justicia) viene ANTES de la santificación (proceso de hacerse justo).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdenSantuario;