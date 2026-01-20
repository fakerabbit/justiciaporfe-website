import React from 'react';
import { BookOpen, Scale, Skull, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import PDFExportButton from '../PDFExportButton';

const EzekielDiagram = () => {
  return (
    <div id="visual-ezekiel18-diagram" className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          Ezequiel 18:20 - Contexto Crucial
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Cómo la TUG malinterpreta este versículo al ignorar su contexto histórico y bíblico
        </p>
      </div>

      {/* LGT's Misuse Box */}
      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-red-800 mb-2">
              Malinterpretación de la TUG
            </h3>
            <p className="text-red-900 italic mb-2">
              "El hijo no llevará el pecado del padre" = no heredamos la culpa de Adán hasta que personalmente pequemos
            </p>
            <p className="text-red-700">
              <strong>Error:</strong> Ignoran completamente el contexto histórico y contradicen múltiples pasajes claros
            </p>
          </div>
        </div>
      </div>

      {/* True Context Section */}
      <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3 mb-6">
          <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              El Contexto Verdadero - Justicia Civil
            </h3>
            
            {/* Historical Context */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Contexto Inmediato
                </h4>
                <p className="text-sm text-blue-800 mb-2">
                  <strong>2 Crónicas 25:4 / 2 Reyes 14:6:</strong>
                </p>
                <p className="text-sm text-blue-700 italic">
                  "Mas no mató a los hijos de ellos, conforme a lo que está escrito en la ley... que dice: No morirán los padres por los hijos, ni los hijos por los padres"
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Práctica Pagana
                </h4>
                <p className="text-sm text-amber-800 mb-2">
                  <strong>Daniel 6:24:</strong>
                </p>
                <p className="text-sm text-amber-700">
                  Los persas ejecutaban familias enteras. Dios prohibió esta costumbre cruel entre Su pueblo.
                </p>
              </div>
            </div>

            {/* What Ezekiel 18:20 ACTUALLY Addresses */}
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Lo Que Ezequiel 18:20 REALMENTE Trata
              </h4>
              <div className="space-y-2 text-sm text-green-800">
                <p>✓ <strong>Tema:</strong> Justicia civil y castigo legal</p>
                <p>✓ <strong>Prohibición:</strong> No ejecutar niños por crímenes de sus padres</p>
                <p>✓ <strong>Principio:</strong> Responsabilidad personal ante la ley humana</p>
                <p>✓ <strong>Aplicación:</strong> Cortes de justicia, no herencia espiritual</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biblical Contradictions */}
      <div className="bg-white border-2 border-purple-300 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
          <Skull className="w-6 h-6" />
          Por Qué Falla la Interpretación de la TUG
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Romans 5:12 */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Romanos 5:12</h4>
            <p className="text-sm text-purple-800 italic mb-2">
              "Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron"
            </p>
            <div className="mt-3 pt-3 border-t border-purple-200">
              <p className="text-sm text-purple-700">
                <strong>Contradice la TUG:</strong> La muerte pasó a TODOS, no solo a los que personalmente pecaron después. El pecado de Adán afectó a toda la humanidad inmediatamente.
              </p>
            </div>
          </div>

          {/* Romans 3:23 */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Romanos 3:23</h4>
            <p className="text-sm text-purple-800 italic mb-2">
              "Por cuanto todos pecaron, y están destituidos de la gloria de Dios"
            </p>
            <div className="mt-3 pt-3 border-t border-purple-200">
              <p className="text-sm text-purple-700">
                <strong>Contradice la TUG:</strong> Todos están destituidos de la gloria antes de cualquier pecado personal. El estado caído es universal.
              </p>
            </div>
          </div>

          {/* 1 Corinthians 15:22 */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">1 Corintios 15:22</h4>
            <p className="text-sm text-purple-800 italic mb-2">
              "Porque así como en Adán todos mueren, también en Cristo todos serán vivificados"
            </p>
            <div className="mt-3 pt-3 border-t border-purple-200">
              <p className="text-sm text-purple-700">
                <strong>Contradice la TUG:</strong> "En Adán" todos mueren - es una condición heredada, no una elección personal. Paralelismo directo con "en Cristo".
              </p>
            </div>
          </div>

          {/* Psalm 51:5 */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Salmo 51:5</h4>
            <p className="text-sm text-purple-800 italic mb-2">
              "He aquí, en maldad he sido formado, y en pecado me concibió mi madre"
            </p>
            <div className="mt-3 pt-3 border-t border-purple-200">
              <p className="text-sm text-purple-700">
                <strong>Contradice la TUG:</strong> David reconoce una naturaleza pecaminosa desde la concepción, antes de cualquier acto personal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Critical Distinction */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">
          La Distinción Crucial
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Civil Justice */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-6 h-6" />
              <h4 className="text-xl font-semibold">Ezequiel 18:20</h4>
            </div>
            <p className="mb-2 font-medium">Justicia Civil:</p>
            <ul className="space-y-1 text-sm">
              <li>• No ejecutar niños por crímenes de padres</li>
              <li>• Responsabilidad legal personal</li>
              <li>• Aplicación en cortes humanas</li>
              <li>• Prohibición de costumbre pagana</li>
            </ul>
          </div>

          {/* Spiritual Reality */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Skull className="w-6 h-6" />
              <h4 className="text-xl font-semibold">Romanos 5</h4>
            </div>
            <p className="mb-2 font-medium">Realidad Espiritual:</p>
            <ul className="space-y-1 text-sm">
              <li>• Heredamos naturaleza caída de Adán</li>
              <li>• Status legal corrupto desde nacimiento</li>
              <li>• "En Adán" todos morimos</li>
              <li>• Necesitamos nuevo nacimiento en Cristo</li>
            </ul>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-6 pt-6 border-t border-white/30 text-center">
          <p className="text-lg font-semibold">
            Ezequiel 18 trata justicia civil. Romanos 5 trata realidad espiritual.
          </p>
          <p className="text-sm mt-2 opacity-90">
            Son temas diferentes que no se contradicen. La TUG confunde categorías bíblicas.
          </p>
        </div>
      </div>
      <PDFExportButton 
        className="flex items-center gap-2 mb-2"
        elementId="visual-ezekiel18-diagram"
        filename="ezequiel-18-20.pdf"
        position="top"
      />
    </div>
  );
};

export default EzekielDiagram;