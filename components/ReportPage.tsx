
import React from 'react';
import { TeamMember, RiskFactor, ReportContent } from '../types';
import { 
  ShieldCheck, 
  ListOrdered, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  Hammer,
  Building2,
  Award,
  ShieldAlert
} from 'lucide-react';

interface ReportPageProps {
  teamMembers: TeamMember[];
  riskFactors: RiskFactor[];
  content: ReportContent;
  groupPhoto: string | null;
}

const ReportPage: React.FC<ReportPageProps> = ({ teamMembers, riskFactors, content, groupPhoto }) => {
  // Firmas simuladas basadas en los nombres
  const signatures: Record<string, string> = {
    'Briant Alexis': 'B. Alexis 23',
    'Nikaury Reyes': 'N. Reyes 17',
    'Yinariry Moreno': 'Y. Moreno 14'
  };

  return (
    <div className="report-wrapper bg-white">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/tahoma');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        .report-wrapper {
          font-family: 'Tahoma', sans-serif !important;
          color: #000;
          background: #fff;
        }

        .page-container {
          width: 8.5in;
          height: 10.96in;
          padding: 0.6in 0.85in;
          box-sizing: border-box;
          position: relative;
          display: flex;
          flex-direction: column;
          background: white;
          overflow: hidden;
          page-break-after: always;
        }

        .bold-title {
          font-weight: bold !important;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .text-body {
          font-size: 12pt !important;
          line-height: 1.5 !important;
          text-align: justify;
          font-weight: normal;
          margin: 0;
        }

        .section-header {
          border-bottom: 2px solid #b91c1c; 
          padding-bottom: 4px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .finding-image-container {
          width: 100%;
          border: 1.2px solid #000;
          margin-bottom: 15px;
          padding: 3px;
          background: #fff;
        }

        .finding-image {
          width: 100%;
          height: 3.4in;
          object-fit: cover;
          filter: grayscale(100%);
        }

        .header-logo-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          border-bottom: 1px solid #000;
          padding-bottom: 8px;
        }

        .footer-info {
          margin-top: auto;
          font-size: 8.5pt;
          border-top: 1px solid #000;
          padding-top: 6px;
          display: flex;
          justify-content: space-between;
          text-transform: uppercase;
          font-weight: bold;
        }

        .signature-line {
          border-top: 1px solid #000;
          margin-top: 15px;
          padding-top: 4px;
          text-align: center;
          font-size: 8.5pt;
          position: relative;
        }

        .handwritten-signature {
          font-family: 'Dancing Script', cursive;
          font-size: 18pt;
          color: #1e3a8a; /* Azul tinta */
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%) rotate(-3deg);
          white-space: nowrap;
        }

        .conformity-stamp {
          border: 3px double #b91c1c;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #b91c1c;
          font-weight: bold;
          font-size: 8pt;
          text-align: center;
          transform: rotate(-15deg);
          opacity: 0.8;
          padding: 10px;
          position: absolute;
          bottom: 150px;
          right: 80px;
        }

        @media print {
          .page-container {
            border: none;
            box-shadow: none;
          }
        }
      `}</style>

      {/* PÁGINA 1: PORTADA */}
      <div className="page-container">
        <div className="header-logo-box">
          <div className="flex flex-col">
            <span className="bold-title text-[12pt]">Politécnico Hermana Rosario Torres</span>
            <span className="bold-title text-[9pt] text-red-700">Fe y Alegría Dominicana</span>
          </div>
          <img 
            src="https://yt3.googleusercontent.com/WS0ba58el0tmoVeTMMh5mJfcjwDbbsmg_6n1a084UivG7sDjKePiNhedMYJ8FQjP4LLGujQHhg=s900-c-k-c0x00ffffff-no-rj" 
            alt="Logo" 
            className="w-14 h-14 object-contain"
          />
        </div>

        <div className="text-center flex-grow flex flex-col justify-center">
          <div className="mb-8">
            <span className="bold-title text-[20pt] block mb-2">INFORME TÉCNICO PROFESIONAL</span>
            <span className="bold-title text-[14pt] border-y-2 border-black py-4 block">
              IDENTIFICACIÓN DE FACTORES DE RIESGO LABORAL
            </span>
          </div>

          <div className="finding-image-container">
            {groupPhoto ? (
              <img src={groupPhoto} className="w-full h-[4in] object-cover grayscale" alt="Equipo" />
            ) : (
              <div className="h-[4in] bg-gray-100 flex items-center justify-center font-bold text-gray-300">REGISTRO FOTOGRÁFICO</div>
            )}
          </div>

          <div className="mt-6 space-y-2 max-w-sm mx-auto text-left">
             <span className="bold-title text-[11pt] underline block mb-2">Sustentado por:</span>
             {teamMembers.map(m => (
               <div key={m.number} className="flex justify-between border-b border-gray-100 text-body">
                 <span>{m.name}</span>
                 <span className="bold-title">{m.number}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <span className="bold-title text-[9pt]">SANTO DOMINGO, REPÚBLICA DOMINICANA | 2026</span>
        </div>
      </div>

      {/* PÁGINA 2: PRESENTACIÓN */}
      <div className="page-container">
        <div className="header-logo-box">
          <span className="bold-title text-[8pt]">Gestión de Riesgos Laborales</span>
          <span className="bold-title text-[8pt]">Folio 02</span>
        </div>
        
        <div className="section-header">
          <Building2 size={18} className="text-red-700" />
          <span className="bold-title text-[12pt]">I. Presentación del Proyecto</span>
        </div>
        
        <div className="space-y-8 mt-4 flex-grow">
          {[
            { l: "Centro Educativo", v: "Politécnico Hermana Rosario Torres" },
            { l: "Red de Centros", v: "Fe y Alegría Dominicana" },
            { l: "Asignatura", v: "Higiene y Seguridad Industrial" },
            { l: "Módulo Técnico", v: "Salud Ocupacional en el Entorno Laboral" },
            { l: "Nivel Académico", v: "Quinto Grado de Secundaria (5to)" },
            { l: "Entorno de Estudio", v: "Laboratorios de Informática y Electrónica" }
          ].map((item, i) => (
            <div key={i} className="flex border-b border-gray-200 pb-1">
              <span className="bold-title w-64 text-[11pt]">{item.l}:</span>
              <span className="text-body flex-grow italic">{item.v}</span>
            </div>
          ))}

          <div className="mt-10 p-8 border-2 border-black bg-gray-50">
            <span className="bold-title text-[11pt] block mb-4 underline">Objetivo de la Inspección:</span>
            <p className="text-body">
              Realizar un levantamiento técnico exhaustivo de las condiciones de trabajo, analizando riesgos potenciales que afecten la salud y seguridad de los operarios. Este documento sirve como guía para la implementación de medidas preventivas urgentes.
            </p>
          </div>
        </div>
      </div>

      {/* PÁGINA 3: ÍNDICE */}
      <div className="page-container">
        <div className="section-header">
          <ListOrdered size={18} className="text-red-700" />
          <span className="bold-title text-[12pt]">II. Índice General</span>
        </div>

        <div className="space-y-7 mt-5">
          {[
            { t: "1. Portada y Registro de Equipo", p: "01" },
            { t: "2. Presentación y Objetivos del Peritaje", p: "02" },
            { t: "3. Índice de Materias", p: "03" },
            { t: "4. Introducción y Marco Teórico", p: "04" },
            { t: "5. Desarrollo de la Auditoría Visual", p: "04" },
            { t: "6. Análisis de Hallazgos (Factores 1 al 6)", p: "05-10" },
            { t: "7. Conclusiones y Propuestas Técnicas", p: "11" },
            { t: "8. Firmas de Validación", p: "11" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center border-b border-gray-300 pb-1">
              <span className="text-body uppercase">{item.t}</span>
              <div className="flex-grow border-b border-dotted border-gray-400 mx-2 h-4"></div>
              <span className="bold-title text-red-700">{item.p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PÁGINA 4: INTRODUCCIÓN Y DESARROLLO */}
      <div className="page-container">
        <div className="section-header">
          <FileText size={18} className="text-red-700" />
          <span className="bold-title text-[12pt]">III. Introducción</span>
        </div>
        <p className="text-body mb-8">{content.introduction}</p>

        <div className="section-header">
          <Hammer size={18} className="text-red-700" />
          <span className="bold-title text-[12pt]">IV. Desarrollo del Trabajo</span>
        </div>
        <p className="text-body">{content.development}</p>
      </div>

      {/* PÁGINAS 5-10: HALLAZGOS */}
      {riskFactors.map((risk, index) => (
        <div className="page-container" key={risk.id}>
          <div className="section-header">
            <AlertTriangle size={18} className="text-amber-600" />
            <span className="bold-title text-[12pt]">Factor #{index + 1}: {risk.title}</span>
          </div>

          <div className="finding-image-container">
            <img src={risk.image} className="finding-image" alt="Evidencia" />
          </div>

          <div className="space-y-4">
            <div className="text-body">
              <span className="bold-title text-[11pt] block">Explicación del Riesgo:</span>
              {risk.whyIsDanger}
            </div>
            
            <div className="text-body p-4 bg-gray-50 border-l-4 border-gray-300 italic">
              <span className="bold-title text-[11pt] block">Impacto en el Personal:</span>
              "{risk.anonymousExample}"
            </div>

            <div className="text-body bg-black text-white p-5">
              <span className="bold-title text-[11pt] block text-red-500 underline">Medida Sugerida:</span>
              {risk.correctState}
            </div>
          </div>

          <div className="footer-info">
            <span>Factor de Riesgo {index + 1} / 6</span>
            <span>Informe Técnico 2026</span>
          </div>
        </div>
      ))}

      {/* PÁGINA 11: CONCLUSIONES Y FIRMAS */}
      <div className="page-container">
        <div className="section-header">
          <CheckCircle2 size={18} className="text-green-700" />
          <span className="bold-title text-[12pt]">V. Conclusiones y Recomendaciones</span>
        </div>
        
        <div className="text-body p-6 border-2 border-black italic bg-gray-50 mb-6">
          {content.conclusions}
        </div>

        {/* Sección adicional para rellenar el espacio vacío */}
        <div className="space-y-6 flex-grow">
          <div className="bg-red-50 p-6 border border-red-200 rounded-sm">
            <span className="bold-title text-[10pt] text-red-700 flex items-center gap-2 mb-2">
              <ShieldAlert size={16} /> Nota de Prioridad Técnica
            </span>
            <p className="text-[10pt] text-justify leading-relaxed">
              Basándonos en la inspección realizada, se recomienda establecer un <b>Comité Estudiantil de Seguridad</b> que vigile mensualmente el cumplimiento de las normas de canalización eléctrica y limpieza técnica. El riesgo eléctrico fue identificado como la prioridad número uno (1) debido a la antigüedad de algunas conexiones en el área norte del laboratorio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-300 p-4">
              <span className="bold-title text-[9pt] block mb-2 underline">Normativa Aplicada</span>
              <ul className="text-[9pt] list-disc pl-5 space-y-1">
                <li>Reglamento 522-06 (Seguridad y Salud)</li>
                <li>Normas ISO 45001:2018 (Gestión)</li>
                <li>Protocolos Internos Fe y Alegría</li>
              </ul>
            </div>
            <div className="border border-gray-300 p-4 flex flex-col justify-center items-center text-center">
               <Award size={30} className="text-red-700 mb-2" />
               <span className="bold-title text-[9pt]">Informe Validado</span>
               <span className="text-[8pt] text-gray-500">Documento apto para revisión administrativa</span>
            </div>
          </div>
        </div>

        {/* Sello de Conformidad */}
        <div className="conformity-stamp">
          AUDITORÍA<br/>SUPERVISADA<br/>2026<br/><b>OK</b>
        </div>

        <div className="mt-10">
          <div className="text-center mb-10">
            <span className="bold-title text-[10pt] border-b border-black pb-1">Certificación de Autoría Estudiantil</span>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {teamMembers.map(m => (
              <div key={m.number} className="signature-line">
                {/* Firma artística simulada */}
                <span className="handwritten-signature">{signatures[m.name] || m.name}</span>
                <span className="bold-title block text-[10pt]">{m.number}</span>
                <span className="uppercase font-bold text-[8pt]">{m.name}</span>
                <div className="mt-1 text-[7pt] italic text-gray-600">Firma del Estudiante</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
