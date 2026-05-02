import React from 'react';

const Salmo127Reformadores = () => {
  const reformadores = [
    {
      nombre: 'Martín Lutero',
      color: 'purple',
      bgHeader: 'bg-purple-700',
      bgLeft: 'bg-purple-50',
      bgRight: 'bg-green-50',
      borderLeft: 'border-purple-300',
      borderRight: 'border-green-300',
      textLeft: 'text-purple-900',
      textRight: 'text-green-900',
      error: {
        titulo: 'El error que Lutero vio',
        cita: '"El hombre cree que su industria y esfuerzo producen lo que solo Dios puede otorgar. Se levanta temprano y se acuesta tarde — pero come el pan de la ansiedad, no el pan del don."',
        aplicacion: 'La justificación por obras invierte el orden: pone el esfuerzo humano donde debería estar la gracia divina.',
      },
      verdad: {
        titulo: 'La respuesta del evangelio',
        cita: '"Las buenas obras no hacen a un hombre bueno, sino que un hombre bueno hace buenas obras."',
        aplicacion: 'La obediencia fluye DE la justificación. Nunca contribuye A ella. El amado recibe mientras descansa en Cristo.',
      },
    },
    {
      nombre: 'Juan Calvino',
      color: 'indigo',
      bgHeader: 'bg-indigo-700',
      bgLeft: 'bg-purple-50',
      bgRight: 'bg-green-50',
      borderLeft: 'border-indigo-300',
      borderRight: 'border-green-300',
      textLeft: 'text-indigo-900',
      textRight: 'text-green-900',
      error: {
        titulo: 'El error que Calvino identificó',
        cita: '"La industria humana pretende ser el fundamento de la bendición. Sin el favor divino, ningún esfuerzo produce fruto verdadero."',
        aplicacion: 'La causa eficiente del favor de Dios nunca puede ser el esfuerzo humano — solo la gracia, recibida por la fe sola.',
      },
      verdad: {
        titulo: 'La enseñanza reformada',
        cita: '"Cristo no justifica a nadie a quien no santifique también… Sin embargo, las dos cosas, siendo distintas, deben considerarse por separado."',
        aplicacion: '(Institución 3.11.11) — Justificación y santificación son inseparables pero distintas. Nunca pueden fundirse.',
      },
    },
    {
      nombre: 'Charles Spurgeon',
      color: 'blue',
      bgHeader: 'bg-blue-700',
      bgLeft: 'bg-purple-50',
      bgRight: 'bg-green-50',
      borderLeft: 'border-blue-300',
      borderRight: 'border-green-300',
      textLeft: 'text-blue-900',
      textRight: 'text-green-900',
      error: {
        titulo: 'El diagnóstico de Spurgeon',
        cita: '"El que se levanta temprano y se acuesta tarde se comporta como quien cree que se le deben salarios por su esfuerzo. Pero Dios no da como un patrón — da como un Padre."',
        aplicacion: 'El espíritu de obras convierte los dones de Dios en recompensas por méritos. Esto corrompe el evangelio.',
      },
      verdad: {
        titulo: 'El don al amado',
        cita: '"Los dones de Dios no llegan como salarios al industrioso, sino como regalos al amado — gracia evangélica pura."',
        aplicacion: '(Tesoro de David, Sal. 127) — El descanso no es pasividad; es confianza activa en que Cristo ya hizo lo que ningún esfuerzo puede hacer.',
      },
    },
    {
      nombre: 'John Owen',
      color: 'slate',
      bgHeader: 'bg-slate-700',
      bgLeft: 'bg-purple-50',
      bgRight: 'bg-green-50',
      borderLeft: 'border-slate-300',
      borderRight: 'border-green-300',
      textLeft: 'text-slate-900',
      textRight: 'text-green-900',
      error: {
        titulo: 'El "trabajo de justificación"',
        cita: '"El trabajo de justificación es imposible y presuntuoso. Es el hombre que come el pan del trabajo angustioso — intenta obtener por sus obras lo que solo Cristo puede dar."',
        aplicacion: '(La Doctrina de la Justificación por Fe) — Confundir la labor de obediencia con la labor de justificación es el error fundamental del legalismo.',
      },
      verdad: {
        titulo: 'El "trabajo de obediencia"',
        cita: '"El trabajo de obediencia es legítimo y necesario — pero fluye de la justificación, nunca contribuye a ella."',
        aplicacion: 'La distinción de Owen es precisa: trabajamos porque somos amados, no para llegar a serlo. El orden es inviolable.',
      },
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            Salmo 127:2 y la Reforma Protestante
          </h2>
          <p className="text-center text-amber-100 text-lg">
            El pan de la angustia vs. el don al amado
          </p>
        </div>

        {/* Psalm Text */}
        <div className="bg-amber-50 border-b-2 border-amber-200 p-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">
              Salmo 127:2
            </p>
            <blockquote className="text-xl font-serif text-amber-900 italic leading-relaxed mb-4">
              "Por demás es que os levantéis de madrugada, y vayáis tarde a reposar,
              y que comáis pan de dolores; pues que a su amado dará Dios el sueño."
            </blockquote>
            <p className="text-sm text-amber-700">
              Reina-Valera 1960
            </p>
          </div>
        </div>

        {/* Two Columns: The Contrast */}
        <div className="grid md:grid-cols-2 gap-0 border-b-2 border-slate-200">
          <div className="bg-red-50 p-6 border-r border-red-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✗</div>
              <h3 className="text-lg font-bold text-red-900">El hombre que se levanta temprano</h3>
            </div>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">→</span>
                <span>Come el <strong>pan de la angustia</strong> (esfuerzo ansioso)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">→</span>
                <span>Cree que su esfuerzo <strong>produce</strong> lo que Dios da</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">→</span>
                <span>Su descanso depende de <strong>lo que logra</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">→</span>
                <span>Imagen de la <strong>justificación por obras</strong></span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
              <h3 className="text-lg font-bold text-green-900">El amado de Dios</h3>
            </div>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">→</span>
                <span>Recibe el <strong>don mientras descansa</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">→</span>
                <span>Dios le da lo que el esfuerzo nunca puede obtener</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">→</span>
                <span>Su aceptación depende de <strong>quién es su Padre</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">→</span>
                <span>Imagen de la <strong>justificación por fe sola</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Reformers Section */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-2">
            Cómo leyeron este salmo los Reformadores
          </h3>
          <p className="text-center text-slate-500 text-sm mb-8">
            Cada reformador identificó el mismo error que la TUG repite hoy
          </p>

          <div className="space-y-8">
            {reformadores.map((ref) => (
              <div key={ref.nombre} className="border border-slate-200 rounded-xl overflow-hidden">
                {/* Reformer Header */}
                <div className={`${ref.bgHeader} text-white px-6 py-4`}>
                  <h4 className="text-xl font-bold">{ref.nombre}</h4>
                </div>

                {/* Two columns */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Error column */}
                  <div className={`${ref.bgLeft} p-5 border-r border-slate-200`}>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${ref.textLeft}`}>
                      ✗ {ref.error.titulo}
                    </p>
                    <blockquote className={`text-sm italic ${ref.textLeft} mb-3 leading-relaxed border-l-4 ${ref.borderLeft} pl-3`}>
                      {ref.error.cita}
                    </blockquote>
                    <p className={`text-xs ${ref.textLeft} leading-relaxed`}>
                      {ref.error.aplicacion}
                    </p>
                  </div>

                  {/* Truth column */}
                  <div className={`${ref.bgRight} p-5`}>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${ref.textRight}`}>
                      ✓ {ref.verdad.titulo}
                    </p>
                    <blockquote className={`text-sm italic ${ref.textRight} mb-3 leading-relaxed border-l-4 ${ref.borderRight} pl-3`}>
                      {ref.verdad.cita}
                    </blockquote>
                    <p className={`text-xs ${ref.textRight} leading-relaxed`}>
                      {ref.verdad.aplicacion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LGT Connection */}
        <div className="bg-red-50 border-t-2 border-red-200 p-6">
          <h3 className="text-xl font-bold text-red-900 mb-4 text-center">
            La TUG repite el error del Salmo 127:2
          </h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">El hombre del salmo</p>
              <p className="text-sm text-slate-700">Se levanta temprano y se acuesta tarde, creyendo que su esfuerzo obtendrá lo que solo Dios da.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">La TUG / LGT</p>
              <p className="text-sm text-slate-700">La última generación debe perfeccionar su carácter antes de que Dios pueda aceptarla y cerrar el tiempo de gracia.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">El error compartido</p>
              <p className="text-sm text-slate-700">Ambos colocan el esfuerzo humano donde solo debe ir la gracia de Cristo. Comen pan de angustia en vez de recibir el don al amado.</p>
            </div>
          </div>
        </div>

        {/* Sanctuary Connection */}
        <div className="bg-amber-50 border-t-2 border-amber-200 p-6">
          <h3 className="text-xl font-bold text-amber-900 mb-3 text-center">
            Conexión con el orden del santuario
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="text-2xl mb-2">😴</p>
                <p className="font-bold text-amber-900 mb-1">El amado duerme</p>
                <p className="text-amber-700">Cristo intercede por nosotros mientras descansamos en su mérito</p>
              </div>
              <div className="flex items-center justify-center text-amber-400 text-2xl">→</div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="text-2xl mb-2">🕯️</p>
                <p className="font-bold text-amber-900 mb-1">Incienso primero</p>
                <p className="text-amber-700">El mérito de Cristo (incienso) precede y funda toda obra del Espíritu (aceite)</p>
              </div>
            </div>
            <p className="text-center text-xs text-amber-700 mt-4 italic">
              "No con ejército, ni con fuerza, sino con mi Espíritu, ha dicho Jehová de los ejércitos." — Zacarías 4:6
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-800 text-white text-center p-4">
          <p className="text-sm text-slate-300">
            justiciaporfe.com · Salmo 127:2 y la Reforma Protestante
          </p>
        </div>
      </div>
    </div>
  );
};

export default Salmo127Reformadores;
