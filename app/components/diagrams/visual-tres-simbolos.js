import React from 'react';
import { Info } from 'lucide-react';
import PDFExportButton from '../PDFExportButton';

const TresSimbolos = () => {
  const symbols = [
    {
      id: 'levadura',
      emoji: '🍞',
      titulo: 'LA LEVADURA',
      subtitulo: 'Corrupción que Permea Todo',
      color: 'amber',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-700',
      accentColor: 'bg-amber-500',
      versiculo: '1 Corintios 5:6-8',
      caracteristicas: [
        {
          titulo: 'Contamina Toda la Masa',
          descripcion: 'La levadura no se queda localizada—sino que contamina y es parte de todo el pan',
          aplicacion: 'El pecado corrompe toda nuestra naturaleza, no se trata de únicamente actos aislados (Hebreos 4:11-13).'
        },
        {
          titulo: 'Es una Corrupción',
          descripcion: 'La levadura descompone y transforma la masa desde dentro',
          aplicacion: 'El pecado es una corrupción interna de nuestro ser. Los actos pecaminosos se originan del mal interior (Mr. 7:21).'
        },
        {
          titulo: 'Debe Ser Eliminada',
          descripcion: 'En la Pascua, toda levadura debía ser removida completamente de las casas',
          aplicacion: 'No se puede "perfeccionar" la levadura—se tiene que ELIMINAR completamente (Ex. 12:15).'
        }
      ],
      cristoEs: 'Pan SIN Levadura (Juan 6:35)',
      nosotrosSomos: 'Masa Leudada que necesita ser DECLARADA "sin levadura" (1 Cor 5:7)',
      tugError: 'Intenta perfeccionar la levadura en lugar de ser declarados sin levadura en Cristo',
      cita: '"Un poco de levadura leuda toda la masa" (Ga. 5:9) - C.H. Spurgeon: "El pecado se vuelve completamente depravado, corrupto de punta a punta, por la influencia leudante."'
    },
    {
      id: 'lepra',
      emoji: '🦠',
      titulo: 'LA LEPRA',
      subtitulo: 'Estado de Impureza Legal',
      color: 'red',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      textColor: 'text-red-700',
      accentColor: 'bg-red-500',
      versiculo: 'Levítico 13-14',
      caracteristicas: [
        {
          titulo: 'O Eres Limpio o Eres Inmundo',
          descripcion: 'Estado binario—no hay términos medios',
          aplicacion: 'El pecado es una posición legal, no se puede tener naturaleza pecaminosa y a la vez ser limpio'
        },
        {
          titulo: 'Excluye de la Comunidad',
          descripcion: 'El leproso debía vivir "fuera del campamento"',
          aplicacion: 'El pecado nos separa de Dios—posición legal de exclusión (Is. 59:2)'
        },
        {
          titulo: 'Solo el Sacerdote Declara Limpio',
          descripcion: 'El leproso no podía limpiarse a sí mismo',
          aplicacion: 'Solo Cristo como Sumo Sacerdote puede cambiar nuestro estado legal de inmundo a limpio'
        }
      ],
      cristoEs: 'El que LIMPIA a los leprosos (Mateo 8:2-3)',
      nosotrosSomos: 'Leprosos que necesitan ser limpiados por Cristo',
      tugError: 'Intenta auto-limpiarse mediante la obediencia estricta a la ley y a las tradiciones humanas',
      cita: 'El hombre no puede limpiarse a sí mismo de la mancha de pecado (Jer. 2:22). Matthew Henry: "La lepra es la lepra del alma, contaminante para la conciencia, y de la cual solo Cristo puede limpiarnos."'
    },
    {
      id: 'esclavitud',
      emoji: '⛓️',
      titulo: 'LA ESCLAVITUD',
      subtitulo: 'Posición Legal Heredada',
      color: 'slate',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-600',
      textColor: 'text-slate-700',
      accentColor: 'bg-slate-600',
      versiculo: 'Juan 8:34; Romanos 6:16-20',
      caracteristicas: [
        {
          titulo: 'La esclavitud no es un acto, es un Estado Legal ante una Ley',
          descripcion: 'Esclavo o libre—posición jurídica, no tiene nada que ver con las acciones del individuo',
          aplicacion: 'El pecado es una posición legal de servidumbre'
        },
        {
          titulo: 'La Posición Legal se Hereda por Nacimiento',
          descripcion: 'Éxodo 21:4—hijos de esclavos nacen esclavos',
          aplicacion: 'Heredamos el estado de esclavitud de Adán caído en pecado'
        },
        {
          titulo: 'Solo Puede Ser Libertado por Otro',
          descripcion: 'Un esclavo no puede liberarse a sí mismo, y un esclavo no libera a otro esclavo',
          aplicacion: 'Solo Cristo (quien nació libre) puede libertarnos'
        }
      ],
      cristoEs: 'El HIJO que nos liberta (Juan 8:36)',
      nosotrosSomos: 'Esclavos simiente de Adán que necesitan liberación',
      tugError: 'Si Cristo tuvo nuestra misma naturaleza exacta, heredó esclavitud (Éx 21:4) y no puede libertarnos. Él mismo necesitaría liberación.',
      cita: 'Éxodo 21:4: "Los hijos [del esclavo] serán de su amo" - Este es el argumento devastador contra la TUG'
    }
  ];

  return (
    <div id="visual-tres-simbolos" className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">
          Tres Símbolos Bíblicos del Pecado
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Cada símbolo revela que el pecado es una <strong>naturaleza/estado</strong>, 
          no solo actos consumados
        </p>
      </div>

      {symbols.map((symbol) => {
        const colorClasses = {
          amber: 'from-amber-500 to-amber-600',
          red: 'from-red-500 to-red-600',
          slate: 'from-slate-600 to-slate-700'
        };

        return (
          <div 
            key={symbol.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${colorClasses[symbol.color]} text-white p-6`}>
              <div className="flex items-center gap-4">
                <div className="text-6xl flex-shrink-0">{symbol.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold">{symbol.titulo}</h3>
                  <p className="text-lg opacity-90">{symbol.subtitulo}</p>
                  <p className="text-sm opacity-75 mt-1">{symbol.versiculo}</p>
                </div>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="p-6 bg-slate-50 border-b">
              <div className="grid md:grid-cols-3 gap-4">
                <div className={`${symbol.bgColor} p-4 rounded-lg border-l-4 ${symbol.borderColor}`}>
                  <div className={`text-xs font-bold ${symbol.textColor} mb-1`}>CRISTO ES:</div>
                  <div className="text-sm text-slate-700">{symbol.cristoEs}</div>
                </div>
                <div className={`${symbol.bgColor} p-4 rounded-lg border-l-4 ${symbol.borderColor}`}>
                  <div className={`text-xs font-bold ${symbol.textColor} mb-1`}>NOSOTROS SOMOS:</div>
                  <div className="text-sm text-slate-700">{symbol.nosotrosSomos}</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <div className="text-xs font-bold text-red-700 mb-1">ERROR DE LA TUG:</div>
                  <div className="text-sm text-slate-700">{symbol.tugError}</div>
                </div>
              </div>
            </div>

            {/* Full Details - Always Visible */}
            <div className="p-6 space-y-6">
              {/* Características */}
              <div>
                <h4 className={`text-xl font-bold ${symbol.textColor} mb-4 flex items-center gap-2`}>
                  <div className={`w-1 h-6 ${symbol.accentColor} rounded`} />
                  Características del Símbolo
                </h4>
                <div className="space-y-4">
                  {symbol.caracteristicas.map((car, idx) => (
                    <div key={idx} className={`${symbol.bgColor} p-4 rounded-lg`}>
                      <h5 className="font-bold text-slate-800 mb-2">
                        {idx + 1}. {car.titulo}
                      </h5>
                      <p className="text-slate-600 mb-2">
                        <strong>Símbolo:</strong> {car.descripcion}
                      </p>
                      <p className={`${symbol.textColor} font-medium`}>
                        <strong>Aplicación:</strong> {car.aplicacion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cita de Reformadores */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex gap-3">
                  <Info className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div className="text-sm text-slate-700 italic">
                    {symbol.cita}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold mb-4 text-center">
          El Patrón Unificado
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🍞</div>
            <div className="font-semibold mb-2">Levadura</div>
            <div className="text-sm text-blue-100">
              Permea TODO el ser → No se puede perfeccionar, se tiene que ELIMINAR
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🦠</div>
            <div className="font-semibold mb-2">Lepra</div>
            <div className="text-sm text-blue-100">
              Estado de impureza → No se puede simplemente limpiar, necesita una DECLARACIÓN LEGAL
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">⛓️</div>
            <div className="font-semibold mb-2">Esclavitud</div>
            <div className="text-sm text-blue-100">
              Posición legal heredada → El esclavo no tiene poder ni autoridad para liberarse a sí mismo, necesita un LIBERTADOR con AUTORIDAD LEGAL
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-lg">
          <strong>Conclusión:</strong> En cada caso, necesitamos una INTERVENCIÓN DIVINA, no perfeccionamiento humano
        </div>
      </div>
      <PDFExportButton 
        className="flex items-center gap-2 mb-2"
        elementId="visual-tres-simbolos"
        filename="3-simbolos-pecado.pdf"
        position="top"
      />
    </div>
  );
};

export default TresSimbolos;
