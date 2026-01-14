import React, { useState } from 'react';
import { Users, TrendingDown, TrendingUp, Scale, AlertCircle } from 'lucide-react';

const Romanos5Diagram = () => {
  const [selectedSide, setSelectedSide] = useState(null); // 'adam' or 'christ'

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <h2 className="text-3xl font-bold text-center mb-2">
            Romanos 5:12-19
          </h2>
          <p className="text-center text-indigo-100 text-lg">
            Dos Adanes, Dos Representaciones, Dos Destinos
          </p>
        </div>

        {/* Key Verse Banner */}
        <div className="bg-purple-50 border-b-2 border-purple-200 p-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg text-slate-700 italic">
              <strong className="text-purple-900">Romanos 5:19 —</strong> "Porque así como por la 
              desobediencia de un hombre los muchos fueron <span className="bg-red-200 px-1 rounded">constituidos pecadores</span>, 
              así también por la obediencia de uno, los muchos serán <span className="bg-green-200 px-1 rounded">constituidos justos</span>."
            </p>
          </div>
        </div>

        <div className="p-8">
          {/* The Parallel Structure */}
          <div className="mb-8">
            <div className="bg-slate-100 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-4 flex items-center justify-center gap-2">
                <Scale size={28} className="text-purple-600" />
                El Paralelo Bíblico
              </h3>
              <p className="text-center text-slate-600 max-w-3xl mx-auto">
                Pablo establece un paralelo exacto entre Adán y Cristo. Lo que Adán hizo para condenarnos, 
                Cristo lo deshizo para salvarnos. <strong>Ambos actúan como representantes</strong> de aquellos 
                que están "en" ellos.
              </p>
            </div>
          </div>

          {/* Two Columns Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* ADAM COLUMN */}
            <div 
              className={`transition-all duration-300 ${
                selectedSide === 'adam' ? 'ring-4 ring-red-500 scale-105' : ''
              }`}
              onMouseEnter={() => setSelectedSide('adam')}
              onMouseLeave={() => setSelectedSide(null)}
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 text-white rounded-xl p-6 shadow-xl h-full">
                <div className="text-center mb-4">
                  <Users size={48} className="mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">PRIMER ADÁN</h3>
                  <p className="text-red-100">Representante de la Humanidad Caída</p>
                </div>

                <div className="space-y-4">
                  {/* The Act */}
                  <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <TrendingDown size={20} />
                      EL ACTO
                    </h4>
                    <p className="text-sm text-red-100 mb-2">
                      <strong>v. 19:</strong> "La desobediencia de un hombre"
                    </p>
                    <p className="text-sm">
                      Un acto de transgresión en el Edén (Génesis 3)
                    </p>
                  </div>

                  {/* The Result */}
                  <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">EL RESULTADO</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>v. 12:</strong> "El pecado entró en el mundo"</p>
                      <p><strong>v. 12:</strong> "Por el pecado la muerte"</p>
                      <p><strong>v. 18:</strong> "Por una transgresión vino la condenación"</p>
                    </div>
                  </div>

                  {/* The Inheritance */}
                  <div className="bg-red-900 bg-opacity-70 p-4 rounded-lg border-2 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <AlertCircle size={20} className="text-yellow-400" />
                      LO CRUCIAL
                    </h4>
                    <p className="text-sm mb-2">
                      <strong>v. 19:</strong> "Los muchos fueron <span className="bg-yellow-400 text-red-900 px-2 py-1 rounded font-bold">CONSTITUIDOS</span> pecadores"
                    </p>
                    <p className="text-xs text-red-100 mt-2">
                      No dice "se hicieron" o "llegaron a ser" gradualmente. 
                      Fueron CONSTITUIDOS (declarados, establecidos) pecadores.
                    </p>
                  </div>

                  {/* Who Is Affected */}
                  <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">¿QUIÉNES?</h4>
                    <p className="text-sm mb-2">
                      <strong>v. 12:</strong> "La muerte pasó a <span className="font-bold">TODOS</span> los hombres"
                    </p>
                    <p className="text-sm">
                      <strong>v. 19:</strong> "Los <span className="font-bold">MUCHOS</span> fueron constituidos pecadores"
                    </p>
                    <div className="mt-3 text-xs bg-red-800 p-2 rounded">
                      Universal - todos los descendientes de Adán
                    </div>
                  </div>

                  {/* The Mechanism */}
                  <div className="bg-white text-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-red-800">⚙️ MECANISMO:</h4>
                    <p className="text-sm mb-2">
                      <strong>v. 12:</strong> "Por cuanto todos pecaron"
                    </p>
                    <p className="text-xs">
                      Griego: tiempo aoristo (acción puntual en el pasado)
                      <br />
                      = "Todos pecaron [en Adán]" (pecado representativo)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CHRIST COLUMN */}
            <div 
              className={`transition-all duration-300 ${
                selectedSide === 'christ' ? 'ring-4 ring-green-500 scale-105' : ''
              }`}
              onMouseEnter={() => setSelectedSide('christ')}
              onMouseLeave={() => setSelectedSide(null)}
            >
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl p-6 shadow-xl h-full">
                <div className="text-center mb-4">
                  <Users size={48} className="mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">SEGUNDO ADÁN</h3>
                  <p className="text-green-100">Representante de la Humanidad Redimida</p>
                </div>

                <div className="space-y-4">
                  {/* The Act */}
                  <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <TrendingUp size={20} />
                      EL ACTO
                    </h4>
                    <p className="text-sm text-green-100 mb-2">
                      <strong>v. 19:</strong> "La obediencia de uno"
                    </p>
                    <p className="text-sm">
                      Vida de obediencia perfecta + muerte expiatoria
                    </p>
                  </div>

                  {/* The Result */}
                  <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">EL RESULTADO</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>v. 15:</strong> "La gracia... abundó para muchos"</p>
                      <p><strong>v. 17:</strong> "Los que reciben... reinarán en vida"</p>
                      <p><strong>v. 18:</strong> "Vino a todos... la justificación de vida"</p>
                    </div>
                  </div>

                  {/* The Inheritance */}
                  <div className="bg-green-900 bg-opacity-70 p-4 rounded-lg border-2 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <AlertCircle size={20} className="text-yellow-400" />
                      LO CRUCIAL
                    </h4>
                    <p className="text-sm mb-2">
                      <strong>v. 19:</strong> "Los muchos serán <span className="bg-yellow-400 text-green-900 px-2 py-1 rounded font-bold">CONSTITUIDOS</span> justos"
                    </p>
                    <p className="text-xs text-green-100 mt-2">
                      Mismo verbo que con Adán. Somos CONSTITUIDOS (declarados, establecidos) 
                      justos por la obra de Cristo.
                    </p>
                  </div>

                  {/* Who Is Affected */}
                  <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">¿QUIÉNES?</h4>
                    <p className="text-sm mb-2">
                      <strong>v. 17:</strong> "Los que <span className="font-bold">RECIBEN</span> la abundancia de la gracia"
                    </p>
                    <p className="text-sm">
                      <strong>v. 19:</strong> "Los <span className="font-bold">MUCHOS</span> serán constituidos justos"
                    </p>
                    <div className="mt-3 text-xs bg-green-800 p-2 rounded">
                      Todos los que están "en Cristo" por fe
                    </div>
                  </div>

                  {/* The Mechanism */}
                  <div className="bg-white text-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-green-800">⚙️ MECANISMO:</h4>
                    <p className="text-sm mb-2">
                      <strong>v. 17:</strong> "Los que reciben la abundancia de la gracia 
                      y del don de la justicia"
                    </p>
                    <p className="text-xs">
                      Por FE recibimos lo que Cristo hizo representativamente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Theological Point - FIXED CONTRAST */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-xl mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              🔑 El Punto Teológico Crucial
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-900 bg-opacity-60 p-6 rounded-lg border-2 border-purple-400">
                <h4 className="font-bold text-xl mb-3 text-white">
                  ¿Cómo Fuimos Constituidos Pecadores?
                </h4>
                <div className="space-y-2 text-sm text-white">
                  <p>✗ NO por nuestros actos individuales</p>
                  <p>✗ NO gradualmente conforme crecemos</p>
                  <p>✗ NO cuando cometemos nuestro primer pecado</p>
                  <p className="text-yellow-300 font-bold mt-4">
                    ✓ Por estar "EN ADÁN" (unión representativa)
                  </p>
                  <p className="text-yellow-300 font-bold">
                    ✓ Por HERENCIA de su estado caído
                  </p>
                </div>
              </div>

              <div className="bg-purple-900 bg-opacity-60 p-6 rounded-lg border-2 border-purple-400">
                <h4 className="font-bold text-xl mb-3 text-white">
                  ¿Cómo Somos Constituidos Justos?
                </h4>
                <div className="space-y-2 text-sm text-white">
                  <p>✗ NO por nuestros actos de justicia</p>
                  <p>✗ NO gradualmente por desarrollo de carácter</p>
                  <p>✗ NO cuando alcanzamos perfección</p>
                  <p className="text-yellow-300 font-bold mt-4">
                    ✓ Por estar "EN CRISTO" (unión por fe)
                  </p>
                  <p className="text-yellow-300 font-bold">
                    ✓ Por RECIBIR su justicia perfecta
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-900 bg-opacity-60 p-4 rounded-lg border-2 border-yellow-400">
              <p className="text-center font-bold text-lg text-white">
                ⚖️ EL PARALELO ES EXACTO ⚖️
              </p>
              <p className="text-center text-sm mt-2 text-white">
                Si heredamos CONDENACIÓN por estar en Adán (no por actos),
                <br />
                también recibimos JUSTIFICACIÓN por estar en Cristo (no por actos).
              </p>
            </div>
          </div>

          {/* Visual Timeline - FIXED CONTRAST */}
          <div className="bg-slate-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-6">
              La Línea de Tiempo Teológica
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-300" />

              {/* Adam's Sin */}
              <div className="flex items-center mb-12">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-red-500 text-white p-4 rounded-lg inline-block shadow-lg">
                    <p className="font-bold text-lg">Caída de Adán</p>
                    <p className="text-sm">Génesis 3</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-slate-700">
                      <strong>Resultado inmediato:</strong> Todos sus descendientes 
                      constituidos pecadores (v. 19)
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Birth */}
              <div className="flex items-center mb-12">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-red-100 p-4 rounded-lg border-r-4 border-red-500 inline-block">
                    <p className="text-sm text-slate-700">
                      <strong>Nacemos:</strong> Ya constituidos pecadores, heredamos 
                      estado de Adán (Salmo 51:5)
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-red-400 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-slate-800 text-white p-4 rounded-lg shadow-lg border-2 border-slate-600">
                    <p className="font-bold text-lg">NOSOTROS</p>
                    <p className="text-sm">En estado caído "en Adán"</p>
                  </div>
                </div>
              </div>

              {/* Christ's Work */}
              <div className="flex items-center mb-12">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg inline-block border-2 border-blue-400">
                    <p className="font-bold text-lg">Fe en Cristo</p>
                    <p className="text-sm">Unión con el Segundo Adán</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg inline-block">
                    <p className="font-bold text-lg">Obra de Cristo</p>
                    <p className="text-sm">Obediencia perfecta + Muerte expiatoria</p>
                  </div>
                </div>
              </div>

              {/* Justification */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-green-100 p-4 rounded-lg border-r-4 border-green-500 inline-block">
                    <p className="text-sm text-slate-700">
                      <strong>Por fe:</strong> Recibimos justicia de Cristo, 
                      constituidos justos (v. 19)
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-400 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm text-slate-700">
                      <strong>Resultado:</strong> Justificación de vida, reinarán en vida (v. 17-18)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application to LGT */}
          <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertCircle className="text-red-600" />
              Aplicación Contra la TUG
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2">
                  1. Heredamos el Estado de Adán
                </h4>
                <p className="text-slate-700 mb-2">
                  <strong>v. 19:</strong> "Fueron constituidos pecadores" - No por actos, sino por estar en Adán
                </p>
                <p className="text-sm text-slate-600">
                  Esto prueba que tenemos un <strong>estado legal heredado</strong>, no solo tendencias que 
                  se manifiestan. Nacemos condenados, no neutrales.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2">
                  2. La Justificación Es Por Imputación
                </h4>
                <p className="text-slate-700 mb-2">
                  <strong>v. 19:</strong> "Serán constituidos justos" - No por desarrollo, sino por estar en Cristo
                </p>
                <p className="text-sm text-slate-600">
                  Si fuimos "constituidos pecadores" sin actos personales, somos "constituidos justos" sin 
                  desarrollo personal. <strong>Es declaración, no transformación gradual.</strong>
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-red-900 mb-2">
                  3. El Paralelo Destruye la TUG
                </h4>
                <p className="text-slate-700 mb-2">
                  La TUG dice: "Debemos desarrollar carácter perfecto para ser justificados"
                </p>
                <p className="text-sm text-slate-600">
                  Pero Pablo dice: Así como heredamos condenación <strong>sin desarrollar</strong> pecado perfecto, 
                  recibimos justificación <strong>sin desarrollar</strong> carácter perfecto. 
                  <span className="font-bold text-red-800"> El paralelo es exacto.</span>
                </p>
              </div>

              <div className="bg-red-900 text-white p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-2">
                  💥 La Pregunta Devastadora:
                </h4>
                <p className="text-sm">
                  Si la TUG insiste en que debemos <strong>desarrollar carácter perfecto</strong> para 
                  ser justificados, ¿por qué Pablo no dice "los muchos desarrollarán justicia perfecta 
                  y entonces serán constituidos justos"?
                </p>
                <p className="text-sm mt-3 text-yellow-300 font-bold">
                  Porque la justificación NO es por desarrollo, sino por IMPUTACIÓN. 
                  Somos constituidos justos por la obra de Cristo, no la nuestra.
                </p>
              </div>
            </div>
          </div>

          {/* Key Verses Breakdown */}
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
              📖 Desglose de Versículos Clave
            </h3>

            <div className="space-y-4">
              {[
                {
                  verse: 'v. 12',
                  text: 'Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron',
                  point: 'Universal - la muerte (consecuencia del pecado) pasó a TODOS'
                },
                {
                  verse: 'v. 15',
                  text: 'Pero el don no fue como la transgresión; porque si por la transgresión de aquel uno murieron los muchos, abundaron mucho más para los muchos la gracia y el don de Dios por la gracia de un hombre, Jesucristo',
                  point: 'Paralelo - UN hombre trajo muerte, UN hombre trajo gracia'
                },
                {
                  verse: 'v. 17',
                  text: 'Pues si por la transgresión de uno solo reinó la muerte, mucho más reinarán en vida por uno solo, Jesucristo, los que reciben la abundancia de la gracia y del don de la justicia',
                  point: 'Recibimos el don - no lo desarrollamos'
                },
                {
                  verse: 'v. 18',
                  text: 'Así que, como por la transgresión de uno vino la condenación a todos los hombres, de la misma manera por la justicia de uno vino a todos los hombres la justificación de vida',
                  point: 'Condenación vino a todos = Justificación viene a todos (mismo mecanismo)'
                },
                {
                  verse: 'v. 19',
                  text: 'Porque así como por la desobediencia de un hombre los muchos fueron constituidos pecadores, así también por la obediencia de uno, los muchos serán constituidos justos',
                  point: 'CONSTITUIDOS - declarados, establecidos (no gradualmente desarrollados)'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg shadow border-l-4 border-indigo-500">
                  <div className="flex gap-3">
                    <div className="bg-indigo-600 text-white px-3 py-1 rounded font-bold text-sm h-fit">
                      {item.verse}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 italic mb-2">{item.text}</p>
                      <p className="text-sm font-semibold text-indigo-900">
                        💡 {item.point}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Romanos5Diagram;
