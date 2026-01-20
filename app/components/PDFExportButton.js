'use client';

import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

const PDFExportButton = ({ 
  elementId, 
  filename = 'diagram.pdf',
  buttonText = 'Exportar a PDF',
  position = 'top'
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const generatePDF = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      // Use html-to-image instead of html2canvas
      const htmlToImage = await import('html-to-image');
      const { jsPDF } = await import('jspdf');

      const element = document.getElementById(elementId);
      
      if (!element) {
        throw new Error(`Element with id "${elementId}" not found`);
      }

      // Generate PNG using html-to-image (handles modern CSS better)
      const dataUrl = await htmlToImage.toPng(element, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        cacheBust: true,
        // This library handles oklch/lab colors better
        skipFonts: false,
      });

      // Create image to get dimensions
      const img = new Image();
      img.src = dataUrl;
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      // Calculate PDF dimensions
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (img.height * imgWidth) / img.width;
      
      // Determine orientation
      const pageHeight = 297; // A4 height in mm
      const orientation = imgHeight > imgWidth ? 'portrait' : 'landscape';
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: orientation,
        unit: 'mm',
        format: 'a4'
      });

      // Handle multi-page if needed (with tolerance to avoid blank pages)
      const tolerance = 5; // 5mm tolerance to prevent extra blank pages
      
      if (imgHeight > (pageHeight - tolerance)) {
        let position = 0;
        let pageCount = 0;
        
        while (position < imgHeight) {
          if (pageCount > 0) {
            pdf.addPage();
          }
          
          pdf.addImage(
            dataUrl, 
            'PNG', 
            0, 
            -position, 
            imgWidth, 
            imgHeight
          );
          
          position += pageHeight;
          pageCount++;
          
          // Stop if we're within tolerance of the end
          if ((imgHeight - position) < tolerance) {
            break;
          }
        }
      } else {
        // Single page - fit to page
        pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
      }

      pdf.save(filename);
      
    } catch (err) {
      console.error('Error generating PDF:', err);
      setError('Error al generar el PDF. Por favor, intenta de nuevo.');
    } finally {
      setIsGenerating(false);
    }
  };

  const buttonClasses = `
    inline-flex items-center gap-2 px-6 py-3 
    bg-gradient-to-r from-blue-600 to-blue-700 
    hover:from-blue-700 hover:to-blue-800 
    text-white font-semibold rounded-lg 
    shadow-lg hover:shadow-xl 
    transition-all duration-200 
    disabled:opacity-50 disabled:cursor-not-allowed
    mt-8
  `;

  return (
    <div className={`flex flex-col items-center ${position === 'top' ? 'mb-6' : 'mt-12'}`}>
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className={buttonClasses}
        aria-label={buttonText}
      >
        {isGenerating ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            <span>Generando PDF...</span>
          </>
        ) : (
          <>
            <Download size={20} />
            <span>{buttonText}</span>
          </>
        )}
      </button>
      
      {error && (
        <div className="mt-3 text-red-600 text-sm bg-red-50 px-4 py-2 rounded-md">
          {error}
        </div>
      )}
      
      {!isGenerating && !error && (
        <p className="mt-2 text-sm text-slate-500 text-center">
          Descarga este diagrama como PDF para compartir o imprimir
        </p>
      )}
    </div>
  );
};

export default PDFExportButton;