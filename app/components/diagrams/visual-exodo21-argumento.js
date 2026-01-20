import React from 'react';
import { AlertOctagon, Users, Baby } from 'lucide-react';

const ArgumentoExodo21 = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-4 md:p-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <AlertOctagon size={28} className="md:hidden" />
            <AlertOctagon size={32} className="hidden md:block" />
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              El Argumento Devastador
            </h2>
          </div>
          <p className="text-center text-slate-200 text-base md:text-lg">
            Éxodo 21:4 + Juan 8:34 = La TUG Colapsa
          </p>
        </div>

        <div className="p-4 md:p-8 space-y-6 md:space-y-8">
          {/* The Biblical Law */}
          <div className="bg-amber-50 border-2 border-amber-500 rounded-xl p-6">
            <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <span className="text-2xl md:text-3xl">📜</span>
              La Ley Civil de Dios sobre Esclavitud
            </h3>
            <div className="bg-white p-5 rounded-lg border-l-4 border-amber-600">
              <p className="text-lg mb-2">
                <strong className="text-amber-900">Éxodo 21:4:</strong>
              </p>
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "Si su amo le hubiere dado mujer, y ella le diere hijos o hijas, 
                <span className="bg-yellow-200 px-2 py-1 rounded font-bold not-italic mx-1">
                  la mujer y sus hijos serán de su amo
                </span>, y él saldrá solo."
              </p>
            </div>
            <div className="mt-4 bg-amber-100 p-4 rounded-lg">
              <p className="font-bold text-amber-900 mb-2">⚖️ Principio Legal:</p>
              <p className="text-slate-700">
                Los hijos de un esclavo <strong>HEREDAN</strong> la posición legal de esclavitud de su padre esclavo. 
                No son esclavos legalmente por haber cometido un acto—sino que <strong>son esclavos desde su engendramiento y nacimiento</strong>.
              </p>
            </div>
          </div>

          {/* The Logical Chain */}
          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 text-center">
              La Cadena Lógica Irrefutable
            </h3>

            <div className="space-y-4">
              {/* Premise 1 */}
              <div className="bg-white border-l-4 border-blue-600 p-4 md:p-5 rounded-r-lg shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded text-sm self-start">
                    PREMISA 1
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 mb-2 text-sm md:text-base">
                      El pecado es esclavitud (estado legal)
                    </p>
                    <p className="text-xs md:text-sm text-slate-600">
                      <strong>Juan 8:34:</strong> "Todo aquel que hace pecado, esclavo es del pecado"
                    </p>
                  </div>
                </div>
              </div>

              {/* Premise 2 */}
              <div className="bg-white border-l-4 border-blue-600 p-4 md:p-5 rounded-r-lg shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded text-sm self-start">
                    PREMISA 2
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 mb-2 text-sm md:text-base">
                      Adán se convirtió en esclavo del pecado al caer
                    </p>
                    <p className="text-xs md:text-sm text-slate-600">
                      <strong>Romanos 5:12:</strong> "Por un hombre el pecado entró en el mundo, 
                      y por el pecado la muerte"
                    </p>
                  </div>
                </div>
              </div>

              {/* Premise 3 */}
              <div className="bg-white border-l-4 border-amber-600 p-4 md:p-5 rounded-r-lg shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="bg-amber-600 text-white font-bold px-3 py-1 rounded text-sm self-start">
                    PREMISA 3
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 mb-2 text-sm md:text-base">
                      Los hijos de esclavos heredan posición legal de esclavitud
                    </p>
                    <p className="text-xs md:text-sm text-slate-600">
                      <strong>Éxodo 21:4:</strong> "Los hijos serán de su amo" (heredan esclavitud)
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 md:p-5 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="bg-white text-purple-700 font-bold px-3 py-1 rounded text-sm self-start">
                    CONCLUSIÓN
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg md:text-xl mb-2">
                      Heredamos el estado / la posición legal / la condenación de esclavitud de Adán caído en pecado
                    </p>
                    <p className="text-xs md:text-sm text-purple-100">
                      Nacemos como "hijos del esclavo" (Adán) → Heredamos esclavitud al pecado → 
                      Posición legal desde engendramiento y nacimiento, no por actos personales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Diagram */}
          <div className="bg-slate-100 p-6 rounded-xl">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6 text-center">
              Representación Visual
            </h3>
            
            <div className="space-y-6">
              {/* Adam */}
              <div className="flex items-center justify-center gap-4">
                <div className="bg-red-600 text-white p-6 rounded-xl shadow-lg text-center min-w-[200px]">
                  <Users size={40} className="mx-auto mb-2" />
                  <div className="font-bold text-xl mb-2">ADÁN</div>
                  <div className="text-sm">Estado: LIBRE</div>
                  <div className="mt-3 text-xs bg-red-700 p-2 rounded">
                    ↓ Pecó (Génesis 3) ↓
                  </div>
                  <div className="text-sm mt-3 font-bold">Estado: ESCLAVO</div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="text-center">
                <div className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg font-bold">
                  ⬇️ HERENCIA (Éxodo 21:4)
                </div>
              </div>

              {/* Descendants */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-500 text-white p-4 rounded-lg text-center shadow">
                  <Baby size={30} className="mx-auto mb-2" />
                  <div className="font-semibold">NOSOTROS</div>
                  <div className="text-xs mt-2 bg-red-700 p-2 rounded">
                    Nacemos ESCLAVOS
                  </div>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg text-center shadow">
                  <Baby size={30} className="mx-auto mb-2" />
                  <div className="font-semibold">TODA LA</div>
                  <div className="font-semibold">HUMANIDAD</div>
                  <div className="text-xs mt-2 bg-red-700 p-2 rounded">
                    Heredan esclavitud
                  </div>
                </div>
                <div className="bg-green-600 text-white p-4 rounded-lg text-center shadow border-4 border-yellow-400">
                  <Baby size={30} className="mx-auto mb-2" />
                  <div className="font-semibold">CRISTO</div>
                  <div className="text-xs mt-2 bg-green-700 p-2 rounded">
                    Naturaleza humana engendrada por Espíritu Santo (Mt. 1:20)
                  </div>
                  <div className="text-xs mt-1 font-bold">
                    No hereda posición legal del primer Adán
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Dilemma for LGT */}
          <div className="bg-red-50 border-2 border-red-600 rounded-xl p-6">
            <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertOctagon className="text-red-600 w-6 h-6 md:w-7 md:h-7" />
              El Dilema Inescapable de la TUG
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-red-600">
                <p className="font-bold text-red-900 mb-2">
                  La TUG afirma: Cristo tuvo EXACTAMENTE nuestra naturaleza caída
                </p>
                <p className="text-slate-700">
                  "Cristo tomó nuestra naturaleza humana tal como la tenemos nosotros, con todas 
                  sus debilidades y tendencias al pecado."
                </p>
              </div>

              <div className="bg-red-100 p-5 rounded-lg">
                <p className="font-bold text-red-900 mb-3">
                  ⚠️ Pero si esto es cierto + Éxodo 21:4...
                </p>
                <div className="space-y-2 text-slate-700">
                  <p>✓ Cristo descendió de Adán (línea de José legalmente, línea de María biológicamente)</p>
                  <p>✓ Adán era esclavo del pecado</p>
                  <p>✓ Por Éxodo 21:4, los hijos de esclavos heredan esclavitud</p>
                  <p className="text-lg font-bold text-red-900 mt-3">
                    → Por tanto, Cristo nació ESCLAVO del pecado
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 text-white p-5 rounded-lg">
                <p className="font-bold mb-3 text-lg">
                  🔗 Consecuencias si Cristo nació esclavo:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>❌ Está bajo condenación legal (Romanos 6:23)</li>
                  <li>❌ No puede libertar a otros (Juan 8:36 - solo el libre liberta)</li>
                  <li>❌ No es Cordero sin mancha (Éxodo 12:5)</li>
                  <li>❌ Su sacrificio no es aceptable</li>
                  <li className="text-red-400 font-bold text-base mt-2">
                    ❌ NO PUEDE SALVARNOS
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Only Solution */}
          <div className="bg-green-50 border-2 border-green-600 rounded-xl p-6">
            <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-4">
              ✓ La Única Solución Bíblica
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-green-600">
                <p className="font-bold text-green-900 mb-2">
                  Cristo NO tuvo nuestra naturaleza caída exacta
                </p>
                <p className="text-slate-700">
                  Nació de mujer virgen, y fue engendrado por Dios Espíritu Santo (Lc. 1:35). No heredó el 
                  estado de esclavitud porque no fue "hijo del esclavo" en sentido legal.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-2">📖 Hebreos 4:15</p>
                  <p className="text-sm text-slate-700">
                    "Tentado en todo según nuestra semejanza, <strong>pero sin pecado</strong>"
                  </p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-2">📖 Juan 8:36</p>
                  <p className="text-sm text-slate-700">
                    "Si el Hijo os libertare, seréis verdaderamente libres" 
                    <span className="block mt-1 font-semibold">(Él es LIBRE, por eso puede libertar)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-center">
              Resumen del Argumento
            </h3>
            <div className="text-center space-y-2 text-sm md:text-base">
              <p>Si <strong>Éxodo 21:4</strong> (hijos heredan esclavitud) es ley de Dios</p>
              <p>Y <strong>Juan 8:34</strong> (pecado = esclavitud) es verdad</p>
              <p>Y <strong>TUG</strong> dice (Cristo = nuestra naturaleza exacta)</p>
              <p className="text-xl md:text-2xl font-bold mt-4 text-yellow-300">
                → Entonces Cristo fue esclavo y NO PUEDE SALVARNOS
              </p>
              <p className="mt-4 text-purple-100 text-xs md:text-sm">
                Por tanto, la TUG es FALSA. Cristo NO tuvo nuestra naturaleza caída exacta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArgumentoExodo21;