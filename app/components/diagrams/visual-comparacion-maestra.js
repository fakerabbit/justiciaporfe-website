import React from 'react';
import { AlertCircle, Check, X } from 'lucide-react';

const ComparacionMaestra = () => {
  const comparisons = [
    {
      categoria: "Naturaleza del Pecado",
      tug: "Pecado es dar rienda suelta a nuestra naturaleza pecaminosa",
      biblico: "El mal que existe en nuestra naturaleza infringe la Ley",
      simbolos: "🍞 Levadura | 🏥 Lepra | ⛓️ Esclavitud",
      errores: "La Ley no condena mi inclinación al mal"
    },
    {
      categoria: "¿Qué Condena la Ley?",
      tug: "Solo nuestros actos pecaminosos",
      biblico: "La Ley condena tanto el Estado / naturaleza que poseemos y no sólo actos consumados",
      simbolos: "Levadura permea TODO | Leproso ES inmundo | Esclavo por nacimiento",
      errores: "La Ley no condena nuestro estado de ser"
    },
    {
      categoria: "Solución al Pecado",
      tug: "Perfeccionar nuestro carácter",
      biblico: "Cambio de estado por Cristo (incienso → aceite)",
      simbolos: "Eliminar levadura | Ser limpiado | Ser libertado",
      errores: "La Ley pasa por alto el pecado que mora en mí"
    },
    {
      categoria: "Naturaleza de Cristo",
      tug: "Exactamente como la nuestra (caída y corrupta por el pecado)",
      biblico: "Humana con debilidades pero sin pecado",
      simbolos: "Pan SIN levadura | NO leproso | Nació LIBRE",
      errores: "TUG no hace distinción entre depravación y degeneración"
    },
    {
      categoria: "Base de Aceptación",
      tug: "Nuestra justicia, nuestra perfección, nuestros méritos",
      biblico: "Méritos de Cristo imputados al pecador",
      simbolos: "Incienso primero, Aceite resultado",
      errores: "TUG no necesita la justicia de Cristo para ser aceptado"
    },
    {
      categoria: "La Última Generación",
      tug: "Puede vivir sin mediador porque alcanzó la perfección",
      biblico: "Puede vivir sin mediador porque fue declarado justo en Cristo en el Juicio",
      simbolos: "Imposible alcanzar la justificación propia con una naturaleza leudada / leprosa / esclava. Necesitamos una justicia ajena: la de Cristo",
      errores: "Es posible alcanzar la perfección necesaria para justificación con una naturaleza leudada/leprosa/esclava del pecado"
    },
    {
      categoria: "Resultado Emocional",
      tug: "Ansiedad, miedo, legalismo, farisaísmo",
      biblico: "Paz, seguridad, crecimiento gradual",
      simbolos: "Lucha contra su naturaleza carnal y desarrollar un carácter semejante al de Cristo",
      errores: "Ocupado en buscar defectos y errores en los demás en lugar de remediar los defectos propios de carácter"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
          <h2 className="text-3xl font-bold text-center mb-2">
            Comparación Teológica Completa
          </h2>
          <p className="text-center text-red-100">
            TUG vs. Enseñanza Bíblica sobre el Pecado y la Salvación
          </p>
        </div>

        {/* Column Headers */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-slate-100 border-b-2 border-slate-300">
          <div className="font-bold text-center text-slate-700">
            Aspecto Teológico
          </div>
          <div className="font-bold text-center text-red-700 flex items-center justify-center gap-2">
            <X size={20} />
            Teología de la Última Generación
          </div>
          <div className="font-bold text-center text-green-700 flex items-center justify-center gap-2">
            <Check size={20} />
            Enseñanza Bíblica
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="divide-y divide-slate-200">
          {comparisons.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-50 transition-colors"
            >
              {/* Category */}
              <div className="font-semibold text-slate-800 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                {item.categoria}
              </div>
              
              {/* TUG Position */}
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-slate-700 mb-2">{item.tug}</p>
                <div className="text-xs text-red-600 font-medium">
                  {item.errores}
                </div>
              </div>
              
              {/* Biblical Position */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-slate-700 mb-2">{item.biblico}</p>
                <div className="text-xs text-green-600 font-medium">
                  {item.simbolos}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer with Key */}
        <div className="bg-slate-100 p-6 border-t-2 border-slate-300">
          <div className="flex items-start gap-2 text-sm text-slate-600">
            <AlertCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <strong>Símbolos Bíblicos:</strong> 🍞 Levadura (corrupción permeante) | 
              🏥 Lepra (estado de impureza) | ⛓️ Esclavitud (posición legal heredada)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparacionMaestra;
