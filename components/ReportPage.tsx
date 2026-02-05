
import React from 'react';
import { TeamMember, RiskFactor, ReportContent } from '../types';
import { 
  ShieldAlert, Target, AlertTriangle, 
  ShieldCheck, Zap, FileText, CheckCircle, MapPin
} from 'lucide-react';

interface ReportPageProps {
  teamMembers: TeamMember[];
  riskFactors: RiskFactor[];
  content: ReportContent;
  groupPhoto: string | null;
}

const MAP_URL = "https://www.google.com/maps/@18.4927594,-69.8812202,3a,48.9y,158.95h,76.25t/data=!3m7!1e1!3m5!1sy5S4Db_rCgYyBwqpEY4fDw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.75232403087486%26panoid%3Dy5S4Db_rCgYyBwqpEY4fDw%26yaw%3D158.95060394791741!7i13312!8i6656";

const ReportPage: React.FC<ReportPageProps> = ({ teamMembers, riskFactors, content, groupPhoto }) => {
  return (
    <div className="report-wrapper bg-white shadow-xl mx-auto">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/tahoma');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

        /* CONFIGURACIÓN GLOBAL: TAHOMA 12PT */
        .report-wrapper {
          font-family: 'Tahoma', sans-serif !important;
          color: #000;
          background: #fff;
          font-size: 12pt;
        }

        .page-container {
          width: 8.5in;
          height: 11in;
          padding: 0.8in 1in;
          box-sizing: border-box;
          position: relative;
          display: flex;
          flex-direction: column;
          background: white;
          page-break-after: always;
          overflow: hidden;
        }

        .text-body {
          font-size: 12pt !important;
          line-height: 1.5 !important;
          text-align: justify;
          font-weight: normal;
          margin-bottom: 1rem;
          color: #000;
        }

        .bold-title {
          font-weight: bold !important;
        }

        /* Portada */
        .creative-cover {
          height: 100%;
          border: 1px solid #e5e7eb;
          padding: 0.6in;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          background: #fff;
          position: relative;
        }

        .cover-top-border {
          width: 100%;
          height: 14px;
          background: linear-gradient(90deg, #1e3a8a 0%, #dc2626 100%);
          position: absolute;
          top: 0;
          left: 0;
        }

        .cover-photo-frame {
          width: 100%;
          height: 3.5in;
          padding: 4px;
          background: white;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          margin: 1rem 0;
        }

        .cover-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Secciones */
        .section-title {
          font-weight: bold;
          font-size: 14pt;
          text-transform: uppercase;
          margin-top: 1rem;
          margin-bottom: 0.8rem;
          border-bottom: 2px solid #b91c1c;
          padding-bottom: 5px;
          color: #b91c1c;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .finding-image-box {
          width: 100%;
          height: 4in;
          border: 1px solid #f1f5f9;
          margin-bottom: 1.2rem;
          overflow: hidden;
          background: #f8fafc;
        }

        .finding-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .student-table {
          margin: 1rem auto;
          width: 90%;
          text-align: left;
          border-collapse: collapse;
          font-size: 12pt;
        }

        .student-table th {
          font-weight: bold;
          padding: 8px;
          border-bottom: 2px solid #000;
        }

        .student-table td {
          padding: 6px 8px;
        }

        /* ÁREA DE FIRMAS */
        .signature-area {
          margin-top: auto;
          padding-top: 1.5rem;
          width: 100%;
        }

        .signature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: end;
        }

        .signature-block {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 0;
        }

        .handwritten-signature {
          font-family: 'Dancing Script', cursive;
          font-size: 18pt;
          color: #1e293b;
          height: 50px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-bottom: 0;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .signature-line {
          width: 100%;
          border-top: 1.5px solid #000;
          margin-top: 0;
          margin-bottom: 8px;
        }

        .signature-name {
          font-weight: bold;
          font-size: 10pt;
          text-transform: uppercase;
          line-height: 1.2;
          margin-bottom: 2px;
        }

        .signature-id {
          font-size: 9pt;
          margin-bottom: 2px;
        }

        .signature-role {
          font-size: 8pt;
          color: #475569;
          text-transform: uppercase;
          font-weight: bold;
        }

        .map-container {
          width: 100%;
          height: 2.2in;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          margin-top: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .map-link {
          text-decoration: none;
          color: inherit;
        }

        .map-link:hover strong {
          color: #b91c1c;
        }

        @media print {
          .page-container {
            margin: 0;
            border: none;
            box-shadow: none;
            page-break-after: always;
          }
          .report-wrapper {
            background: white !important;
            box-shadow: none !important;
          }
          a {
              text-decoration: none !important;
              color: black !important;
          }
        }
      `}</style>

      {/* PÁGINA 1: PORTADA */}
      <div className="page-container">
        <div className="creative-cover">
          <div className="cover-top-border"></div>
          
          <div className="mt-4">
            <h1 className="bold-title text-[26pt] text-slate-900 tracking-tighter leading-tight">INFORME TÉCNICO PROFESIONAL</h1>
            <p className="text-[12pt] text-indigo-800 font-bold uppercase tracking-[0.3em] mt-2 border-b-2 border-slate-100 inline-block pb-1">Seguridad e Higiene Industrial</p>
          </div>

          <div className="cover-photo-frame">
            {groupPhoto ? (
              <img src={groupPhoto} alt="Personal Auditor" />
            ) : (
              <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-300 italic">Evidencia del Equipo Auditor</div>
            )}
          </div>

          <div className="space-y-3">
            <h2 className="bold-title text-[20pt] text-red-700 uppercase">Seguridad Y Salud En El Trabajo</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-slate-300"></div>
              <p className="text-[12pt] font-bold text-slate-800 uppercase tracking-widest">Politécnico Rosario Torres</p>
              <div className="h-[1px] w-12 bg-slate-300"></div>
            </div>
          </div>

          <div className="w-full flex justify-between items-end border-t border-slate-100 pt-6 mb-2">
            <div className="text-left">
              <p className="text-[9pt] font-black text-slate-400 uppercase tracking-widest">Especialidad Académica:</p>
              <p className="text-[12pt] font-bold text-slate-950">Desarrollo de Aplicaciones</p>
            </div>
            <div className="text-right">
              <p className="text-[12pt] font-black uppercase tracking-widest text-indigo-900">5to Año - A</p>
              <p className="text-[9pt] font-bold text-slate-500">Santo Domingo, D.N.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 2: PRESENTACIÓN FORMAL */}
      <div className="page-container">
        <div className="flex flex-col h-full text-center">
          <div className="space-y-1 mb-10">
            <div className="bold-title text-[14pt]">Politécnico Hermana Rosario Torres Fe y Alegría</div>
            <div className="text-[12pt]">Especialidad en Desarrollo de Aplicaciones e Informática</div>
          </div>

          <div className="flex-grow flex flex-col justify-center space-y-8">
            <div>
              <div className="bold-title text-[16pt] uppercase mb-1">Seguridad Y Salud En El Trabajo</div>
              <div className="text-[12pt] font-bold">Grado 5to, Sección A</div>
            </div>

            <div className="w-48 h-[1px] bg-black mx-auto"></div>

            <div className="text-[12pt]">
              <span className="font-bold">Maestro:</span> Edgar King
            </div>

            <div className="text-[12pt] px-10">
              <span className="bold-title uppercase block mb-2">Proyecto Académico:</span>
              <span className="leading-relaxed">Identificación de Peligros y Medidas de Prevención en Centros de Cómputo.</span>
            </div>
          </div>

          <table className="student-table">
            <thead>
              <tr>
                <th className="text-left">Nombres y Apellidos:</th>
                <th className="text-right">Matrícula:</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((m, idx) => (
                <tr key={idx}>
                  <td>{m.name}</td>
                  <td className="text-right">{m.number}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-10 text-[12pt]">
            <span>Santo Domingo, República Dominicana</span>
            <br />
            <span>{new Date().toLocaleDateString('es-DO', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* PÁGINA 3: INTRODUCCIÓN Y UBICACIÓN */}
      <div className="page-container">
        <h2 className="section-title">
          <FileText size={18} /> III. INTRODUCCIÓN
        </h2>
        <div className="text-body">
          {content.introduction}
        </div>
        
        <h2 className="section-title" style={{ marginTop: '2rem' }}>
          <MapPin size={18} /> IV. UBICACIÓN DEL CENTRO DE TRABAJO
        </h2>
        <div className="text-body">
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="map-link">
            El centro de trabajo auditado se encuentra ubicado en la <strong>Calle 70 C. 1ra, Santo Domingo, Distrito Nacional</strong>. La infraestructura corresponde a un edificio de uso mixto caracterizado por su fachada de color verde, donde se identificaron los puntos críticos de riesgo analizados en este reporte.
          </a>
        </div>
        
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="map-container block">
          <img 
            src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=13.75&panoid=y5S4Db_rCgYyBwqpEY4fDw&yaw=158.95" 
            className="w-full h-full object-cover"
            alt="Ubicación Google Street View" 
          />
          <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-[8pt] font-bold border border-slate-200 shadow-sm">Haz clic para ver en Google Maps</div>
        </a>

        <div className="mt-auto p-4 bg-slate-50 border-l-4 border-red-700">
           <p className="text-[10pt] font-bold uppercase text-slate-800">Coordenadas de Referencia:</p>
           <p className="text-[10pt] italic">Latitud: 18.4927594, Longitud: -69.8812202</p>
        </div>
      </div>

      {/* PÁGINA 4: DESARROLLO */}
      <div className="page-container">
        <h2 className="section-title">
          <ShieldAlert size={18} /> V. DESARROLLO DEL TRABAJO
        </h2>
        <div className="text-body">
          {content.development}
        </div>
        
        <div className="flex-grow flex items-center justify-center p-8 bg-slate-50 border border-slate-100 mt-4 rounded-lg">
           <div className="text-center space-y-3">
              <ShieldCheck size={40} className="mx-auto text-indigo-600" />
              <p className="text-[11pt] font-bold uppercase tracking-widest">Metodología Aplicada</p>
              <p className="text-[10pt] text-slate-600 italic leading-relaxed max-w-sm">
                Inspección ocular directa, categorización técnica de riesgos laborales y registro fotográfico de evidencias críticas in situ.
              </p>
           </div>
        </div>
      </div>

      {/* HALLAZGOS */}
      {riskFactors.map((risk, index) => (
        <div className="page-container" key={risk.id}>
          <h2 className="section-title">
            <AlertTriangle size={18} /> HALLAZGO #{index + 1}
          </h2>
          
          <div className="flex-grow flex flex-col">
            <div className="bold-title text-[14pt] mb-4 text-slate-900 border-l-4 border-red-700 pl-4 uppercase">
              {risk.title}
            </div>
            
            <div className="finding-image-box rounded shadow-sm">
              <img src={risk.image} alt={risk.title} />
            </div>

            <div className="space-y-4">
              <div>
                <span className="bold-title text-[11pt] flex items-center gap-2 mb-1 text-red-900 uppercase">
                  <Zap size={14} /> Riesgo Detectado:
                </span>
                <p className="text-body">{risk.whyIsDanger}</p>
              </div>
              
              <div>
                <span className="bold-title text-[11pt] flex items-center gap-2 mb-1 text-amber-900 uppercase">
                  <Zap size={14} /> Probable Consecuencia:
                </span>
                <p className="text-body italic bg-slate-50 p-3 rounded border-l-2 border-amber-200">
                  {risk.anonymousExample}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <span className="bold-title text-[11pt] flex items-center gap-2 mb-1 text-indigo-900 uppercase">
                  <ShieldCheck size={16} /> Acción Correctiva:
                </span>
                <p className="text-body mb-0">{risk.correctState}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* PÁGINA FINAL: CONCLUSIONES Y FIRMAS */}
      <div className="page-container">
        <h2 className="section-title">
          <CheckCircle size={18} /> VI. CONCLUSIONES
        </h2>
        <div className="text-body">
          {content.conclusions}
        </div>
        
        <div className="signature-area">
          <div className="text-center mb-10">
            <p className="bold-title text-[12pt] uppercase tracking-[0.2em] text-slate-950">Validación de Autoría</p>
            <div className="w-16 h-0.5 bg-red-700 mx-auto mt-1"></div>
          </div>
          
          <div className="signature-grid">
            {teamMembers.map((m) => (
              <div key={m.number} className="signature-block">
                <div className="handwritten-signature">
                  {m.name.split(' ')[0]} {m.name.split(' ')[1] || ''}
                </div>
                <div className="signature-line"></div>
                <div className="signature-name">{m.name}</div>
                <div className="signature-id">Matrícula: {m.number}</div>
                <div className="signature-role">Auditor de Desarrollo</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-auto text-center text-[9pt] text-slate-400 font-bold uppercase tracking-[0.4em]">
           POLITÉCNICO ROSARIO TORRES - SECCIÓN 5A
        </div>
        
        <div className="absolute bottom-4 right-4 text-[7pt] text-slate-300 font-bold tracking-widest">
          INFORME TÉCNICO OFICIAL v1.0
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
