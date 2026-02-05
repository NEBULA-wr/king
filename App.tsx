
  import React, { useState, useCallback } from 'react';
  import { 
    FileDown, ShieldAlert, FileText, 
    CheckCircle, Target, AlertTriangle, 
    ShieldCheck, Zap, X, Hammer, Layout, MapPin
  } from 'lucide-react';
  import { TeamMember, RiskFactor, ReportContent } from './types';
  import ReportPage from './components/ReportPage';

  const imgGrupo = 'grupo.jpeg';
  const img1 = '1.jpeg';
  const img2 = '2.jpeg';
  const img3 = '3.jpeg';
  const img4 = '4.jpeg';
  const img5 = '5.jpeg';
  const img6 = '6.jpeg';

  const teamMembers: TeamMember[] = [
    { name: 'Briant Alexis', number: '3053' },
    { name: 'Nikaury Reyes', number: '3256' },
    { name: 'Yinariry Moreno', number: '3077' }
  ];

  const STATIC_GROUP_PHOTO = imgGrupo; 

  const initialRiskFactors: RiskFactor[] = [
    {
      id: '1',
      title: 'Deficiencias en Canalización Eléctrica',
      category: 'Riesgo Eléctrico',
      image: img1,
      description: 'Se identificaron conductores de alimentación fuera de sus canaletas protectoras en áreas de tránsito.',
      whyIsDanger: 'La falta de protección mecánica en los cables facilita cortes accidentales. Esto representa un peligro inminente de descarga eléctrica directa para el personal e incendios por cortocircuitos en superficies combustibles.',
      anonymousExample: 'Si un trabajador roza un cable pelado durante las labores de mantenimiento, recibirá una descarga que puede causar quemaduras graves o paros cardíacos.',
      correctState: 'Todo el cableado debe estar confinado en tuberías conduit o canaletas de PVC debidamente selladas y fijadas a la estructura.'
    },
    {
      id: '2',
      title: 'Sobrecarga de Circuitos en Cascada',
      category: 'Riesgo Térmico',
      image: img2,
      description: 'Uso inadecuado de múltiples regletas conectadas entre sí para alimentar estaciones de trabajo.',
      whyIsDanger: 'Esta práctica supera la capacidad de diseño del tomacorriente de pared. El calor generado por la resistencia eléctrica funde el aislamiento del cable, originando fuegos eléctricos de difícil control.',
      anonymousExample: 'Al operar todos los equipos a plena carga, el enchufe principal colapsa térmicamente, generando humo y llamas en el área de conexiones.',
      correctState: 'Cada estación debe contar con tomacorrientes fijos independientes dimensionados para la carga del equipo.'
    },
    {
      id: '3',
      title: 'Acumulación Crítica de Polvo Industrial',
      category: 'Riesgo Biológico y Técnico',
      image: img3,
      description: 'Depósitos de polvo denso sobre componentes activos y áreas de almacenamiento de repuestos.',
      whyIsDanger: 'Para los equipos, el polvo actúa como aislante térmico provocando sobrecalentamiento. Para el personal, la inhalación de estas partículas causa rinitis, asma ocupacional y reacciones alérgicas severas.',
      anonymousExample: 'Un operario con predisposición respiratoria sufre una crisis de asma aguda al manipular componentes con alta carga de polvo acumulado.',
      correctState: 'Implementar un programa de limpieza técnica neumática y almacenar repuestos en contenedores herméticos.'
    },
    {
      id: '4',
      title: 'Inestabilidad en Apilamiento Vertical',
      category: 'Riesgo Mecánico',
      image: img4,
      description: 'Equipos de cómputo apilados de forma precaria en estanterías sin rebordes de seguridad.',
      whyIsDanger: 'La falta de estabilidad mecánica permite que vibraciones o movimientos accidentales provoquen el colapso de la pila. Esto genera lesiones por impacto en el personal y daños irreparables en el hardware.',
      anonymousExample: 'Al intentar extraer un equipo, la carga superior se desploma golpeando las extremidades inferiores del trabajador, resultando en contusiones óseas.',
      correctState: 'Uso de racks especializados con ranuras individuales o estanterías con topes frontales de seguridad.'
    },
    {
      id: '5',
      title: 'Obstrucción de Rutas de Evacuación',
      category: 'Riesgo Locativo',
      image: img5,
      description: 'Presencia de chasis y material de desecho bloqueando los pasillos de tránsito principal.',
      whyIsDanger: 'Reduce el ancho efectivo de los pasillos necesarios para una evacuación rápida. En caso de siniestro, estos objetos se convierten en trampas que causan caídas masivas y retrasan el egreso seguro.',
      anonymousExample: 'Durante un simulacro de evacuación, el personal tropieza con equipos en el suelo, generando un cuello de botella que impide la salida rápida.',
      correctState: 'Las vías de evacuación deben estar permanentemente despejadas y señalizadas según la normativa vigente.'
    },
    {
      id: '6',
      title: 'Manejo Inseguro de Celdas de Litio',
      category: 'Riesgo Químico e Incendio',
      image: img6,
      description: 'Baterías con deformación física depositadas en contenedores de residuos comunes inflamables.',
      whyIsDanger: 'Una celda inflada indica una falla química interna volátil. Si la membrana se rompe, libera gases tóxicos inflamables que causan incendios de clase D de combustión violenta.',
      anonymousExample: 'Una batería perforada accidentalmente en el zafacón inicia una reacción exotérmica que incendia el mobiliario de oficina cercano.',
      correctState: 'Almacenar baterías dañadas en recipientes ignífugos de seguridad para su disposición final técnica.'
    }
  ];

  const reportContent: ReportContent = {
    introduction: 'Este informe técnico documenta el reconocimiento sistemático de factores de riesgo realizado durante nuestra visita de campo al centro de trabajo seleccionado. El propósito de esta auditoría es identificar condiciones inseguras que vulneren la integridad física de los colaboradores, evaluando el entorno desde una perspectiva de higiene y prevención industrial. La seguridad laboral constituye la base fundamental para la productividad y el bienestar humano en cualquier entorno operativo.',
    development: 'El desarrollo de este estudio se fundamentó en una inspección ocular profunda de los sistemas eléctricos, mecánicos y ambientales del área. El proceso incluyó la toma de evidencias fotográficas in situ, la evaluación de las condiciones de almacenamiento y el análisis de la infraestructura de conexiones. Se identificaron seis hallazgo críticos que comprometen la salud respiratoria por polvo, la integridad física por colapso de materiales y la seguridad contra incendios. Cada factor ha sido analizado para determinar su origen, impacto y la solución técnica requerida para alcanzar los estándares de seguridad industrial vigentes.',
    conclusions: 'Se concluye que el centro de trabajo presenta vulnerabilidades importantes derivadas de la falta de orden y mantenimiento técnico preventivo. Es imperativo regularizar el cableado eléctrico, despejar las rutas de evacuación y establecer un protocolo de limpieza técnica para mitigar riesgos biológicos. La implementación de las medidas correctivas sugeridas reducirá significativamente la tasa de accidentabilidad, garantizando un entorno de trabajo profesional, seguro y alineado con los principios de Fe y Alegría sobre el trabajo digno.',
  };

  const MAP_URL = "https://www.google.com/maps/@18.4927594,-69.8812202,3a,48.9y,158.95h,76.25t/data=!3m7!1e1!3m5!1sy5S4Db_rCgYyBwqpEY4fDw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.75232403087486%26panoid%3Dy5S4Db_rCgYyBwqpEY4fDw%26yaw%3D158.95060394791741!7i13312!8i6656";

  const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'web' | 'preview'>('web');
    const [focusedRiskIndex, setFocusedRiskIndex] = useState<number | null>(null);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    const handlePrint = useCallback(() => {
      window.print();
    }, []);

    return (
      <div className="min-h-screen flex flex-col bg-[#fdfdfd] relative selection:bg-indigo-100">
        
        {zoomedImage && (
          <div 
            className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out no-print"
            onClick={() => setZoomedImage(null)}
          >
            <img src={zoomedImage} className="max-w-full max-h-full object-contain" alt="Zoom" />
            <button className="absolute top-10 right-10 text-white"><X size={32} /></button>
          </div>
        )}

        {focusedRiskIndex !== null && (
          <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col no-print">
            <div className="bg-slate-900 px-8 py-5 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-6">
                <ShieldAlert className="w-5 h-5 text-indigo-400" />
                <span className="text-white font-bold text-sm uppercase tracking-widest">Análisis de Riesgo</span>
              </div>
              <button onClick={() => setFocusedRiskIndex(null)} className="text-white hover:text-red-500 transition-colors"><X size={28} /></button>
            </div>

            <div className="flex flex-col lg:flex-row flex-grow overflow-hidden">
              <div className="lg:w-1/2 h-full bg-black flex items-center justify-center">
                <img src={initialRiskFactors[focusedRiskIndex].image} className="w-full h-full object-contain" alt="Hallazgo" />
              </div>
              <div className="lg:w-1/2 h-full bg-white overflow-y-auto p-12 space-y-12">
                <h2 className="text-4xl font-black text-slate-900 uppercase">{initialRiskFactors[focusedRiskIndex].title}</h2>
                <div className="space-y-8">
                  <ModalSection title="Peligro Identificado" icon={<AlertTriangle className="text-amber-500" />} content={initialRiskFactors[focusedRiskIndex].whyIsDanger} large />
                  <ModalSection title="Consecuencia Probable" icon={<Zap className="text-red-500" />} content={initialRiskFactors[focusedRiskIndex].anonymousExample} large italic />
                  <ModalSection title="Acción Correctiva" icon={<ShieldCheck className="text-emerald-500" />} content={initialRiskFactors[focusedRiskIndex].correctState} large />
                </div>
              </div>
            </div>
          </div>
        )}

        <nav className="no-print sticky top-0 z-50 bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-4">
            <ShieldAlert className="text-slate-900 w-6 h-6" />
            <div>
              <h1 className="text-lg font-black text-slate-900 uppercase">Sistema de Auditoría</h1>
              <p className="text-[10px] text-red-700 font-bold uppercase tracking-widest">Desarrollo de Aplicaciones</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex bg-slate-100 p-1 border border-slate-200 rounded-lg">
              <NavTab active={activeTab === 'web'} onClick={() => setActiveTab('web')} label="VISTA WEB" />
              <NavTab active={activeTab === 'preview'} onClick={() => setActiveTab('preview')} label="PREVIA PDF" />
            </div>
            <button 
              onClick={handlePrint} 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-[11px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center gap-2 rounded-lg"
            >
              <FileDown size={16} /> Descargar PDF
            </button>
          </div>
        </nav>

        <main className="flex-grow no-print">
          {activeTab === 'web' ? (
            <div className="max-w-[1400px] mx-auto p-8 lg:p-16 space-y-28 fade-in">
              <section className="bg-white border-y border-slate-200 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                  <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-none uppercase tracking-tighter">
                    ESTUDIO DE <br/><span className="text-red-700">RIESGOS</span>
                  </h2>
                  <div className="grid grid-cols-1 gap-4 max-w-sm">
                    {teamMembers.map((m) => (
                      <div key={m.number} className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <span className="font-bold text-slate-900 uppercase text-xs tracking-widest">{m.name}</span>
                        <span className="text-slate-300 font-black text-2xl">#{m.number}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 h-[500px] relative overflow-hidden border border-slate-200 shadow-2xl flex items-center justify-center rounded-2xl group">
                  <img src={STATIC_GROUP_PHOTO} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Foto del Equipo" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute bottom-6 left-6 text-white text-[10px] font-bold uppercase tracking-[0.3em] bg-black/40 px-4 py-2 backdrop-blur-md">Evidencia Física de Campo</div>
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <section className="bg-slate-900 p-16 text-white border-l-[12px] border-red-700 shadow-2xl rounded-tr-3xl">
                  <Target className="w-14 h-14 text-red-500 mb-8" />
                  <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">Ubicación del Local</h3>
                  <div className="space-y-6">
                    <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group transition-colors hover:text-red-400">
                      <MapPin className="text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="text-slate-300 font-bold leading-relaxed text-xl">
                        Calle 70 C. 1ra, Santo Domingo, Distrito Nacional. Edificio de Fachada Verde.
                      </p>
                    </a>
                    <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden h-48 border border-white/10 group relative">
                      <img 
                        src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=13.75&panoid=y5S4Db_rCgYyBwqpEY4fDw&yaw=158.95" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt="Mapa" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="bg-red-700 text-white px-4 py-2 text-xs font-black uppercase tracking-widest rounded shadow-xl">Ver en Google Maps</span>
                      </div>
                    </a>
                  </div>
                </section>

                <section className="bg-white p-12 border border-slate-100 flex flex-col justify-center space-y-8">
                  <div>
                    <h4 className="text-3xl font-black uppercase border-b border-slate-100 pb-4 mb-4 flex items-center gap-3">
                      <FileText className="text-indigo-600" /> Introducción
                    </h4>
                    <p className="text-slate-500 leading-relaxed text-lg text-justify">{reportContent.introduction}</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black uppercase border-b border-slate-100 pb-4 mb-4 flex items-center gap-3">
                      <Hammer className="text-indigo-600" /> Desarrollo
                    </h4>
                    <p className="text-slate-500 leading-relaxed text-lg text-justify">{reportContent.development}</p>
                  </div>
                </section>
              </div>

              <section className="space-y-12">
                <h3 className="text-5xl font-black uppercase tracking-tighter border-b-2 border-slate-100 pb-12">Hallazgos Registrados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {initialRiskFactors.map((risk, idx) => (
                    <div 
                      key={risk.id} 
                      onClick={() => setFocusedRiskIndex(idx)}
                      className="group bg-white border border-slate-200 hover:border-red-700 transition-all cursor-pointer overflow-hidden p-8 flex flex-col shadow-sm hover:shadow-xl rounded-xl"
                    >
                      <div className="h-64 mb-10 overflow-hidden bg-slate-100 grayscale group-hover:grayscale-0 transition-all rounded-lg">
                        <img src={risk.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={risk.title} />
                      </div>
                      <div className="space-y-6">
                        <span className="text-red-700 font-bold text-[10px] uppercase tracking-widest bg-red-50 px-3 py-1">{risk.category}</span>
                        <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">{risk.title}</h4>
                        <p className="text-slate-500 text-sm line-clamp-2">{risk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-100 p-16 border-l-[12px] border-indigo-600 shadow-inner rounded-br-3xl">
                <h3 className="text-4xl font-black uppercase mb-8 flex items-center gap-4">
                  <CheckCircle className="text-indigo-600 w-10 h-10" /> Conclusiones Finales
                </h3>
                <p className="text-slate-700 text-2xl font-medium leading-relaxed text-justify italic">
                  {reportContent.conclusions}
                </p>
              </section>
            </div>
          ) : (
            <div className="flex flex-col items-center py-16 bg-slate-200 min-h-screen">
              <div className="bg-white shadow-2xl border border-slate-400">
                <ReportPage teamMembers={teamMembers} riskFactors={initialRiskFactors} content={reportContent} groupPhoto={STATIC_GROUP_PHOTO} />
              </div>
              <p className="text-slate-500 mt-8 text-sm uppercase font-bold tracking-widest flex items-center gap-2">
                <Layout size={16} /> Vista de Maqueta Formal 8.5" x 11"
              </p>
            </div>
          )}
        </main>

        <div className="hidden print:block">
          <ReportPage teamMembers={teamMembers} riskFactors={initialRiskFactors} content={reportContent} groupPhoto={STATIC_GROUP_PHOTO} />
        </div>
      </div>
    );
  };

  const NavTab: React.FC<{ active: boolean, onClick: () => void, label: string }> = ({ active, onClick, label }) => (
    <button onClick={onClick} className={`px-6 py-2 text-[10px] font-black tracking-widest transition-all rounded-md ${active ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:text-slate-900'}`}>
      {label}
    </button>
  );

  const ModalSection: React.FC<{ title: string, icon: React.ReactNode, content: string, large?: boolean, italic?: boolean }> = ({ title, icon, content, large, italic }) => (
    <div className="space-y-4">
      <div className="flex items-center gap-4 text-slate-900 font-black text-xs uppercase border-b pb-2">
        {icon} {title}
      </div>
      <p className={`text-slate-600 leading-relaxed text-justify ${large ? 'text-xl' : 'text-base'} ${italic ? 'italic font-bold text-slate-800 border-l-4 border-slate-200 pl-4' : ''}`}>{content}</p>
    </div>
  );

  export default App;
