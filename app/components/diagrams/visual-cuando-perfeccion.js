import React from 'react';
import { Calendar, Shield, Flame, Crown, AlertCircle, CheckCircle, X } from 'lucide-react';

const CuandoPerfeccionDiagram = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          ¿Cuándo Alcanzamos la Perfección?
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          La pregunta crítica sobre vivir sin mediador y el momento de la perfección
        </p>
      </div>

      {/* SECTION 1: COMPARACIÓN */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-lg">
            <span className="text-3xl">📊</span>
            <h3 className="text-2xl font-bold text-purple-800">Comparación</h3>
          </div>
        </div>
        
        {/* COMPARACIÓN CONTENT */}
        <div className="space-y-8">(
          <div className="space-y-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">
                La Pregunta Fundamental
              </h3>
              <div className="bg-purple-100 p-4 rounded-lg inline-block">
                <p className="text-lg font-semibold text-purple-900">
                  Si Cristo deja de ser mediador al cierre de la probación,<br/>
                  ¿cómo pueden los redimidos vivir sin Él?
                </p>
              </div>
            </div>

            {/* Side by Side Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* LGT Answer */}
              <div className="border-4 border-red-300 rounded-xl p-6 bg-red-50">
                <div className="flex items-center gap-3 mb-4">
                  <X className="w-8 h-8 text-red-600" />
                  <h4 className="text-xl font-bold text-red-800">Respuesta TUG</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <p className="font-semibold text-red-900 mb-2">Su Lógica:</p>
                    <ol className="text-sm space-y-2 text-red-800">
                      <li>1. Cristo deja de mediar</li>
                      <li>2. → Ya no tenemos sus méritos</li>
                      <li>3. → Debemos ser perfectos ANTES</li>
                      <li>4. → Logramos carácter sin pecado</li>
                      <li>5. → Vivimos por nuestra perfección</li>
                    </ol>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                    <p className="text-sm font-semibold text-red-900 mb-2">
                      El Problema:
                    </p>
                    <p className="text-sm text-red-800">
                      Confunde DOS tipos de perfección y pone nuestra justicia 
                      LOGRADA como base para estar sin mediador
                    </p>
                  </div>
                </div>
              </div>

              {/* Biblical Answer */}
              <div className="border-4 border-green-300 rounded-xl p-6 bg-green-50">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h4 className="text-xl font-bold text-green-800">Respuesta Bíblica</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <p className="font-semibold text-green-900 mb-2">La Lógica Correcta:</p>
                    <ol className="text-sm space-y-2 text-green-800">
                      <li>1. Cristo completa su mediación</li>
                      <li>2. → Sus méritos YA aplicados</li>
                      <li>3. → Nuestra posición YA perfecta</li>
                      <li>4. → El Espíritu sigue obrando</li>
                      <li>5. → Vivimos por SU perfección</li>
                    </ol>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                    <p className="text-sm font-semibold text-green-900 mb-2">
                      La Solución:
                    </p>
                    <p className="text-sm text-green-800">
                      Distingue DOS perfecciones: legal (completa) y práctica (progresiva). 
                      Vivimos sin mediador porque Su obra YA está completa en nosotros.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Comparison */}
            <div className="mt-8 pt-6 border-t-2 border-slate-200">
              <h4 className="text-xl font-bold text-center text-slate-800 mb-6">
                Línea de Tiempo Comparativa
              </h4>
              
              <div className="space-y-8">
                {/* LGT Timeline */}
                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-300">
                  <p className="font-bold text-red-900 mb-4 text-center">❌ Modelo TUG</p>
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <div className="bg-red-200 p-3 rounded-lg mb-2">
                        <p className="font-semibold text-sm text-red-800">Conversión</p>
                      </div>
                      <p className="text-xs text-red-800">Justificación inicial</p>
                    </div>
                    <div className="text-red-600 text-2xl">→</div>
                    <div className="text-center flex-1">
                      <div className="bg-red-300 p-3 rounded-lg mb-2">
                        <p className="font-semibold text-sm text-red-800">Vida Cristiana</p>
                      </div>
                      <p className="text-xs text-red-800">Luchando por perfección</p>
                    </div>
                    <div className="text-red-600 text-2xl">→</div>
                    <div className="text-center flex-1">
                      <div className="bg-red-400 text-white p-3 rounded-lg mb-2">
                        <p className="font-semibold text-sm">Cierre Probación</p>
                      </div>
                      <p className="text-xs text-red-800 font-bold">¡LOGRO perfección!</p>
                    </div>
                    <div className="text-red-600 text-2xl">→</div>
                    <div className="text-center flex-1">
                      <div className="bg-red-500 text-white p-3 rounded-lg mb-2">
                        <p className="font-semibold text-sm">Sin Mediador</p>
                      </div>
                      <p className="text-xs text-red-800 font-bold">Por MI perfección</p>
                    </div>
                  </div>
                </div>

                {/* Biblical Timeline */}
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
                  <p className="font-bold text-green-900 mb-4 text-center">✅ Modelo Bíblico</p>
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <div className="bg-green-400 text-white p-3 rounded-lg mb-2">
                        <p className="font-semibold text-sm text-green-900">Conversión</p>
                      </div>
                      <p className="text-xs text-green-800 font-bold">Perfección LEGAL</p>
                      <p className="text-xs text-green-700">(en Cristo)</p>
                    </div>
                    <div className="text-green-600 text-2xl">→</div>
                    <div className="text-center flex-1">
                      <div className="bg-green-300 p-3 rounded-lg mb-2">
                        <p className="font-semibold text-sm text-green-900">Vida Cristiana</p>
                      </div>
                      <p className="text-xs text-green-800">Crecimiento continuo</p>
                      <p className="text-xs text-green-700">(santificación)</p>
                    </div>
                    <div className="text-green-600 text-2xl">→</div>
                    <div className="text-center flex-1">
                      <div className="bg-green-400 text-white p-3 rounded-lg mb-2">
                        <p className="font-semibold text-sm">Cierre Probación</p>
                      </div>
                      <p className="text-xs text-green-800">Mediación completa</p>
                      <p className="text-xs text-green-700">(obra sellada)</p>
                    </div>
                    <div className="text-green-600 text-2xl">→</div>
                    <div className="text-center flex-1">
                      <div className="bg-green-500 text-white p-3 rounded-lg mb-2">
                        <p className="font-semibold text-sm">Sin Mediador</p>
                      </div>
                      <p className="text-xs text-green-800 font-bold">Por SU perfección</p>
                      <p className="text-xs text-green-700">(ya aplicada)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: LGT ERROR */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-red-100 px-6 py-3 rounded-lg">
            <span className="text-3xl">❌</span>
            <h3 className="text-2xl font-bold text-red-800">Error de la TUG</h3>
          </div>
        </div>
        
        {/* LGT ERROR CONTENT */}
        <div className="space-y-6">(
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="inline-block bg-red-100 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-red-800 mb-2">
                  El Error Fundamental de la TUG
                </h3>
                <p className="text-red-700">
                  Confunde cuándo y cómo alcanzamos la perfección
                </p>
              </div>
            </div>

            {/* The False Assumption */}
            <div className="bg-red-50 border-4 border-red-400 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-red-900 mb-2">
                    La Suposición Falsa
                  </h4>
                  <p className="text-red-800 text-lg">
                    "Si Cristo deja de ser mediador, entonces ya no tenemos acceso a Sus méritos, 
                    por lo tanto debemos ser perfectos ANTES del cierre de la probación"
                  </p>
                </div>
              </div>
            </div>

            {/* The Logical Chain */}
            <div className="bg-white border-2 border-red-300 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-900 mb-4">
                La Cadena Lógica de la TUG:
              </h4>
              
              <div className="space-y-3">
                {[
                  { num: 1, text: "Cristo dejará de ser mediador al cierre de la probación" },
                  { num: 2, text: "Sin mediador = sin acceso a los méritos de Cristo" },
                  { num: 3, text: "Por lo tanto, debemos lograr carácter perfecto ANTES" },
                  { num: 4, text: "Esa perfección debe ser sin pecado (impecabilidad)" },
                  { num: 5, text: "Entonces viviremos por NUESTRA justicia lograda" }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg flex-1">
                      <p className="text-red-900">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Problems */}
            <div className="bg-red-100 border-2 border-red-400 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                <X className="w-6 h-6" />
                Los Problemas con Esta Lógica:
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-900 mb-2">
                    ❌ Problema #1: Confunde Dos Tipos de Perfección
                  </p>
                  <p className="text-sm text-red-800">
                    Mezcla la perfección LEGAL (justificación - completa al creer) con la 
                    perfección PRÁCTICA (santificación - progresiva toda la vida)
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-900 mb-2">
                    ❌ Problema #2: Malinterpreta "Sin Mediador"
                  </p>
                  <p className="text-sm text-red-800">
                    Asume que "sin mediador" significa sin los méritos de Cristo, cuando 
                    realmente significa que Su obra mediadora está COMPLETA y SELLADA
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-900 mb-2">
                    ❌ Problema #3: Contradice el Orden del Santuario
                  </p>
                  <p className="text-sm text-red-800">
                    El incienso (méritos de Cristo) siempre PRIMERO, el aceite (Espíritu Santo) 
                    SEGUNDO. Ambos son DIARIOS - nunca dejamos de necesitarlos.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-red-900 mb-2">
                    ❌ Problema #4: Crea Justificación por Obras
                  </p>
                  <p className="text-sm text-red-800">
                    Si nuestra perfección lograda nos permite estar sin mediador, entonces 
                    nuestra salvación depende de nuestras obras, no solo de Cristo
                  </p>
                </div>
              </div>
            </div>

            {/* What It Leads To */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-3">
                Resultado de Este Error:
              </h4>
              <ul className="space-y-2 text-red-100">
                <li>• Ansiedad constante: "¿He alcanzado suficiente perfección?"</li>
                <li>• Pérdida de la seguridad de salvación</li>
                <li>• Enfoque en el YO en lugar de en Cristo</li>
                <li>• Retorno al sistema católico: justificación + santificación</li>
                <li>• Contradice Sola Fide y Sola Gratia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: BIBLICAL VIEW */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-3 rounded-lg">
            <span className="text-3xl">✅</span>
            <h3 className="text-2xl font-bold text-green-800">Respuesta Bíblica</h3>
          </div>
        </div>
        
        {/* BIBLICAL VIEW CONTENT */}
        <div className="space-y-6">(
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="inline-block bg-green-100 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  La Respuesta Bíblica y Protestante
                </h3>
                <p className="text-green-700">
                  Distinguiendo dos perfecciones y el verdadero significado de "sin mediador"
                </p>
              </div>
            </div>

            {/* Two Perfections */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              
              {/* Legal Perfection */}
              <div className="bg-blue-50 border-4 border-blue-400 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-10 h-10 text-blue-600" />
                  <h4 className="text-xl font-bold text-blue-900">
                    Perfección LEGAL
                  </h4>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Qué es:</p>
                    <p className="text-sm text-blue-800">
                      Justificación - La justicia de Cristo IMPUTADA a nosotros
                    </p>
                  </div>

                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Cuándo:</p>
                    <p className="text-sm text-blue-800">
                      INSTANTÁNEA al momento de creer en Cristo
                    </p>
                  </div>

                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Estado:</p>
                    <p className="text-sm text-blue-800">
                      COMPLETA - 100% perfecta desde el primer momento
                    </p>
                  </div>

                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Base:</p>
                    <p className="text-sm text-blue-800">
                      Los méritos de CRISTO, no los nuestros
                    </p>
                  </div>

                  <div className="bg-blue-600 text-white p-3 rounded-lg text-center font-bold">
                    Esta nos permite estar sin mediador
                  </div>
                </div>
              </div>

              {/* Practical Perfection */}
              <div className="bg-green-50 border-4 border-green-400 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="w-10 h-10 text-green-600" />
                  <h4 className="text-xl font-bold text-green-900">
                    Perfección PRÁCTICA
                  </h4>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-900 mb-1">Qué es:</p>
                    <p className="text-sm text-green-800">
                      Santificación - La transformación real por el Espíritu
                    </p>
                  </div>

                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-900 mb-1">Cuándo:</p>
                    <p className="text-sm text-green-800">
                      PROGRESIVA toda la vida cristiana
                    </p>
                  </div>

                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-900 mb-1">Estado:</p>
                    <p className="text-sm text-green-800">
                      INCOMPLETA en esta vida - crecimiento continuo
                    </p>
                  </div>

                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-900 mb-1">Completada:</p>
                    <p className="text-sm text-green-800">
                      En la GLORIFICACIÓN como don de Dios
                    </p>
                  </div>

                  <div className="bg-green-600 text-white p-3 rounded-lg text-center font-bold">
                    Esta fluye DE estar aceptos en Cristo
                  </div>
                </div>
              </div>
            </div>

            {/* The Key Insight */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-purple-900 p-3 rounded-full flex-shrink-0">
                  <Crown className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">
                    La Clave para Entender "Sin Mediador"
                  </h4>
                  <p className="text-purple-100 text-lg leading-relaxed">
                    Cristo deja de ser mediador NO porque ya no necesitamos Sus méritos, 
                    sino porque Su obra mediadora está <span className="font-bold text-yellow-300">COMPLETA y PERMANENTEMENTE APLICADA</span> a nosotros. 
                    El caso legal está cerrado. El veredicto es final. La transacción está sellada.
                  </p>
                </div>
              </div>
            </div>

            {/* The Correct Logic */}
            <div className="bg-white border-4 border-green-500 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-900 mb-4">
                La Lógica Bíblica Correcta:
              </h4>
              
              <div className="space-y-3">
                {[
                  { 
                    num: 1, 
                    text: "Al creer, recibimos la perfección LEGAL instantánea",
                    subtext: "Justificados por fe - declarados perfectos en Cristo"
                  },
                  { 
                    num: 2, 
                    text: "Durante la vida, crecemos en santificación práctica",
                    subtext: "El Espíritu transforma nuestro carácter progresivamente"
                  },
                  { 
                    num: 3, 
                    text: "Al cierre de probación, la mediación está COMPLETA",
                    subtext: "Los méritos de Cristo están permanentemente aplicados"
                  },
                  { 
                    num: 4, 
                    text: "Vivimos 'sin mediador' basados en Su obra YA TERMINADA",
                    subtext: "No en nuestra perfección lograda, sino en la Suya imputada"
                  },
                  { 
                    num: 5, 
                    text: "El Espíritu sigue obrando, dando poder continuo",
                    subtext: "El aceite sigue fluyendo del olivo hacia las lámparas"
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg flex-1">
                      <p className="text-green-900 font-semibold">{step.text}</p>
                      <p className="text-green-700 text-sm mt-1">{step.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sanctuary Order Confirmation */}
            <div className="bg-amber-50 border-4 border-amber-400 rounded-xl p-6">
              <h4 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Confirmación del Orden del Santuario:
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-amber-900 mb-2">
                    🔥 Incienso PRIMERO (Éxodo 30:7)
                  </p>
                  <p className="text-sm text-amber-800 mb-2">
                    Los méritos de Cristo hacen nuestras oraciones aceptables
                  </p>
                  <p className="text-xs text-amber-700 italic">
                    = Perfección legal (justificación)
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-amber-900 mb-2">
                    💡 Aceite SEGUNDO (Éxodo 30:8)
                  </p>
                  <p className="text-sm text-amber-800 mb-2">
                    El Espíritu Santo nos capacita para brillar
                  </p>
                  <p className="text-xs text-amber-700 italic">
                    = Perfección práctica (santificación)
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-amber-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-amber-900 mb-2">
                  Ambos son DIARIOS:
                </p>
                <p className="text-sm text-amber-800">
                  "Perpetuo... por vuestras generaciones" - Nunca dejamos de necesitar el 
                  incienso (méritos de Cristo) ni el aceite (poder del Espíritu). La dependencia 
                  es CONTINUA, no algo de lo cual "graduamos".
                </p>
              </div>
            </div>

            {/* Reformers Agreed */}
            <div className="bg-slate-100 border-2 border-slate-400 rounded-xl p-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4">
                Los Reformadores Entendieron Esto:
              </h4>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Martín Lutero:</p>
                  <p className="text-sm text-slate-700 italic">
                    "Somos siempre justos y pecadores a la vez (simul justus et peccator). 
                    Nuestra justicia es siempre 'justicia ajena' - la de Cristo imputada a nosotros."
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Juan Calvino:</p>
                  <p className="text-sm text-slate-700 italic">
                    "La santificación nunca alcanza la perfección sin pecado en esta vida. 
                    Nuestra aceptación se basa siempre en la justicia imputada."
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-1">Ellen G. White:</p>
                  <p className="text-sm text-slate-700 italic">
                    "En la obra de Dios, la humanidad no puede originar nada... Cada día 
                    Cristo realiza la obra de la cual esto era un tipo."
                  </p>
                </div>
              </div>
            </div>

            {/* Final Summary */}
            <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3 text-center">
                Resumen: La Respuesta a la Pregunta Original
              </h4>
              <div className="bg-green-900 bg-opacity-50 p-5 rounded-lg">
                <p className="text-lg mb-4 text-center font-semibold text-green-100">
                  "¿Cuándo alcanzamos la perfección para vivir sin mediador?"
                </p>
                <p className="text-green-100 leading-relaxed">
                  <span className="font-bold text-yellow-300">Respuesta:</span> La perfección LEGAL 
                  (justificación) es alcanzada INSTANTÁNEAMENTE al creer en Cristo. Esta perfección 
                  es completa y es la que nos permite estar "sin mediador" - no porque dejemos de 
                  necesitar Sus méritos, sino porque Su obra mediadora está completamente aplicada 
                  y sellada en nosotros en el Juicio. Cuando nuestro caso fue determinado en el Juicio Investigador nuestro caso fue sellado. 
                  La perfección PRÁCTICA (santificación) es progresiva toda 
                  la vida y será completada instantáneamente en la glorificación como don de Dios en ocasión de la Segunda Venida (1 Co. 15:50-57). 
                  Durante el tiempo que la última generación vive en la tierra sin mediador, sigue dependiendo del Espíritu Santo (aceite) 
                  mientras reposa en la justicia de Cristo ya aplicada (incienso) en el Libro de la Vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center">
        <div className="inline-block bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-slate-600">
            <span className="font-semibold">Principio Clave:</span> El orden del santuario (incienso → aceite) 
            revela el orden de la salvación (justificación → santificación).
          </p>
          <p className="text-xs text-slate-500 mt-2">
            La TUG invierte este orden divino, regresando a la justificación por obras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CuandoPerfeccionDiagram;