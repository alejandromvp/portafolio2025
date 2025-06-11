import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import AnimatedText from './AnimatedText';
import { GraduationCap, Lightbulb, Briefcase } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile'; // Ajusta la ruta a tu hook

// 1. Centralizar textos para i18n y datos de la trayectoria
const aboutMeContent = {
  es: {
    title: 'Sobre Mí',
    greeting: '¡Hola! Soy Alejandro Villagrán, Full Stack Developer con más de 4 años de experiencia desarrollando soluciones digitales innovadoras. Ingeniero Civil Informático graduado de la Universidad Católica de Temuco, he tenido la oportunidad de trabajar en sectores críticos como salud, fintech y retail, transformando ideas en experiencias digitales que impactan la vida de miles de usuarios. Mi pasión por la tecnología me impulsa a mantenerme en constante aprendizaje, aplicando las mejores prácticas para entregar código limpio y mantenible.',
    program: '',
    passion: '',
    experienceIntro: 'Durante mi trayectoria profesional como Full Stack Developer, he adquirido sólida experiencia trabajando con tecnologías del ecosistema JavaScript/TypeScript, incluyendo ',
    coreTech: 'Angular, React. ',
    modernTechIntro: 'En el backend, he trabajado con ',
    modernTech: 'PHP, Laravel, Node.js, NestJS y bases de datos relacionales usando SQL y no relacionales como MongoDB. ',
    dbIntro: 'También tengo experiencia en herramientas de DevOps como ',
    dbTech: 'Docker, CI/CD, Git y cloud computing ',
    dbTechContent: 'habiendo desarrollado desde sistemas hospitalarios críticos hasta aplicaciones fintech y wallets digitales en empresas como Hospital Hernán Henríquez Aravena, Banco Ripley y Cencosud',
    personality: 'Me considero una persona creativa, curiosa y en constante evolución. Disfruto resolviendo problemas, experimentando con nuevas tecnologías y colaborando en proyectos reales que me permitan seguir aprendiendo. ',
    goal: 'Mi objetivo es fusionar creatividad y tecnología para crear soluciones digitales innovadoras que impacten positivamente en las personas y en las empresas. Si quieres saber más sobre mí, ',
    projectsLinkText: 'no dudes ',
    goalContinuation: 'en ponerte en contacto conmigo. ',
    journeyTitle: '📅 Mi Trayectoria ',
    journey: [
      {
        id: 1,
        type: 'education', // Tipo de hito
        title: 'Ingeniero Civil Informatico',
        period: '2013 - 2019',
        institution: 'Universidad Catolica de Temuco',
        description: 'Ingeniero Civil en Informática de la UC Temuco, profesional formado en Ciencias de la Ingeniería y Ciencias de la Computación, capaz de enfrentar proyectos de Desarrollo de Software o de Gestión en Tecnologías de Información.',
      },
      {
        id: 4, // Nuevo ID, asegúrate de que sea único y secuencial si importa el orden
        type: 'work', // Tipo de hito: experiencia laboral
        title: 'Desarrollador FullStack',
        period: 'Diciembre 2020 - Junio 2022',
        institution: 'Hospital Hernan Henriquez Aravena - Temuco',
        description: `Lideré el desarrollo e implementación de módulos críticos para el sistema de información hospitalario, optimizando la atención médica y la gestión administrativa: 
             • Ficha Clínica Digital: Desarrollé un sistema integral de registro cronológico para documentación clínica que permitió centralizar anamnesis, evoluciones médicas, indicaciones, diagnósticos, intervenciones quirúrgicas, resultados de exámenes y epicrisis, mejorando la trazabilidad y accesibilidad de la información del paciente.
             • Módulo de Electrofisiología: Diseñé e implementé una solución especializada para el monitoreo y seguimiento de pacientes con dispositivos cardíacos implantables, incluyendo gestión de configuraciones técnicas, agendamiento automatizado de controles y generación de informes analíticos.
             • Sistema de Gestión de Camas: Desarrollé un sistema de administración en tiempo real de la capacidad hospitalaria, optimizando la asignación de recursos, reduciendo tiempos de espera y mejorando la eficiencia operativa de toda la red de camas del hospital.
             
             Aptitudes: Laravel · Vue.js · Git · PL/SQL · Bootstrap · TypeScript · PHP`
      },
      {
        id: 2,
        type: 'work', 
        title: 'Desarrollador FullStack',
        period: 'Junio 2022 - Agosto 2023',
        institution: 'Banco Ripley',
        description: `Desarrollador Full Stack para la Wallet Chek de Banco Ripley, encargado de implementar desarrollos con enfoque en aumentar el uso de la aplicación Chek y atraer nuevos usuarios.
            Algunos desarrollos realizados:
              • Renovación del look & feel de la app, con un diseño fresco, moderno y fácil de usar, también se reorganizaron las funcionalidades para darle mayor escalabilidad y aumentar la visibilidad de los productos principales de la App.
              • Desarrollo de transferencia a terceros como nueva funcionalidad para la App Chek
              
              Aptitudes: Angular · Google Cloud · Ionic Framework · Firebase · NestJS · TypeScript · Git · Node.js · JIRA`
      },
      {
        id: 3,
        type: 'work', // Tipo de hito
        title: 'Desarrollador IOS',
        period: 'Agosto 2023 - Mayo 2025',
        institution: 'Cencosud',
        description: `Formé parte del equipo de la plataforma de pagos, donde contribuí al desarrollo y optimización de la wallet digital CencoPay:
          • Desarrollo completo del flujo de copagos con puntos, mejorando la experiencia de usuario y aumentando la adopción de la funcionalidad por parte de los clientes.
          • Colaboré estrechamente con el equipo de UX/UI para implementar actualizaciones de diseño, mejorando la usabilidad y la estética de la aplicación.
          • Optimicé componentes existentes para mejorar el rendimiento y la estabilidad de la aplicación en diferentes dispositivos iOS.
          • Implementé integraciones entre la aplicación móvil y los sistemas de backend para garantizar transacciones seguras y en tiempo real.

          Aptitudes: iOS · Modelo–vista–modelo de vista (MVVM) · Git · SwiftUI · Swift (lenguaje de programación) · JIRA`
      },
    ],
  },
  en: {
    title: 'Sobre Mí',
    greeting: `Hello! I'm Alejandro Villagrán, a full-stack developer with over four years of experience developing innovative digital solutions. A computer science engineer from the Catholic University of Temuco, I've had the opportunity to work in critical sectors such as healthcare, fintech, and retail, transforming ideas into digital experiences that impact the lives of thousands of users. My passion for technology drives me to constantly learn, applying best practices to deliver clean and maintainable code.`,
    program: '',
    passion: '',
    experienceIntro: 'During my professional career as a Full Stack Developer, I have gained solid experience working with technologies from the JavaScript/TypeScript ecosystem, including ',
    coreTech: 'Angular, React. ',
    modernTechIntro: 'On the backend, I have worked with ',
    modernTech: 'PHP, Laravel, Node.js, NestJS and relational databases using SQL and non-relational ones like MongoDB. ',
    dbIntro: 'I also have experience in DevOps tools such as ',
    dbTech: 'Docker, CI/CD, Git and cloud computing ',
    dbTechContent: 'Having developed everything from critical hospital systems to fintech applications and digital wallets in companies such as Hospital Hernán Henríquez Aravena, Banco Ripley and Cencosud',
    personality: 'I consider myself a creative, curious, and constantly evolving person. I enjoy solving problems, experimenting with new technologies, and collaborating on real-life projects that allow me to continue learning. ',
    goal: 'My goal is to merge creativity and technology to create innovative digital solutions that positively impact people and businesses. If you d like to know more about me, ',
    projectsLinkText: 'don t hesitate ',
    goalContinuation: 'in contacting me. ',
    journeyTitle: '📅 My Journey ',
    journey: [
      {
        id: 1,
        type: 'education', // Milestone type
        title: 'Computer Science Engineer',
        period: '2013 - 2019',
        institution: 'Universidad Catolica de Temuco',
        description: 'Computer Science Engineer from UC Temuco, a professional trained in Engineering and Computer Science, capable of handling Software Development or Information Technology Management projects.'
        },
        {
          id: 4, // New ID, make sure it's unique and sequential if order matters
          type: 'work', // Milestone type: Work experience
          title: 'FullStack Developer',
          period: 'December 2020 - June 2022',
          institution: 'Hernan Henriquez Aravena Hospital - Temuco',
          description: `I led the development and implementation of critical modules for the hospital information system, optimizing medical care and administrative management:
          • Digital Medical Record: I developed a comprehensive chronological registration system for clinical documentation that allowed for the centralization of medical history, medical progress, indications, diagnoses, surgical interventions, exam results, and epicrisis, improving the traceability and accessibility of patient information.
          • Electrophysiology Module: I designed and implemented a specialized solution for monitoring and tracking patients with implantable cardiac devices, including technical configuration management, automated appointment scheduling, and analytical report generation.
          • Bed Management System: I developed a real-time hospital capacity management system, optimizing resource allocation, reducing wait times, and improving the operational efficiency of the hospital's entire bed network.
          
          Skills: Laravel, Vue.js, Git, PL/SQL, Bootstrap, TypeScript, PHP`
          },
          {
            id: 2,
            type: 'work',
            title: 'Full Stack Developer',
            period: 'June 2022 - August 2023',
            institution: 'Banco Ripley',
            description: `Full Stack Developer for Banco Ripley's Chek Wallet, responsible for implementing developments focused on increasing the use of the Chek app and attracting new users.
            Some developments completed:
            • Renewed the app's look & feel, with a fresh, modern, and easy-to-use design. Functionalities were also reorganized to provide greater scalability and increase the visibility of the app's core products.
            • Third-party transfer development as a new feature for the Chek app.
            
            Skills: Angular, Google Cloud, Ionic Framework, Firebase, NestJS, TypeScript, Git, Node.js, JIRA`
            },
            {
              id: 3,
              type: 'work', // Milestone type
              title: 'iOS Developer',
              period: 'August 2023 - May 2025',
              institution: 'Cencosud',
              description: `I was part of the payments platform team, where I contributed to the development and optimization of the CencoPay digital wallet:
              • Complete development of the points co-payment flow, improving the user experience and increasing customer adoption of the feature.
              • Collaborated closely with the UX/UI team to implement design updates, improving the app's usability and aesthetics.
              • Optimized existing components to improve the app's performance and stability on different iOS devices.
              • Implemented integrations between the mobile app and backend systems to ensure secure, real-time transactions.
              
              Skills: iOS · Model–View–View Model (MVVM) · Git · SwiftUI · Swift (programming language) · JIRA`
              },
    ],
  },
};

// Componente para cada item de la trayectoria
const JourneyItem = ({ item, isDarkMode }) => {
  let iconColor = '';
  let dotColorClass = '';
  let IconComponent;

  switch (item.type) {
    case 'education':
      IconComponent = GraduationCap;
      iconColor = isDarkMode ? 'text-blue-300' : 'text-blue-700';
      dotColorClass = isDarkMode ? 'bg-blue-400 border-gray-900' : 'bg-blue-600 border-gray-100';
      break;
    case 'project':
      IconComponent = Lightbulb;
      iconColor = isDarkMode ? 'text-green-300' : 'text-green-700';
      dotColorClass = isDarkMode ? 'bg-green-400 border-gray-900' : 'bg-green-600 border-gray-100';
      break;
    case 'work':
      IconComponent = Briefcase;
      iconColor = isDarkMode ? 'text-purple-300' : 'text-purple-700';
      dotColorClass = isDarkMode ? 'bg-purple-400 border-gray-900' : 'bg-purple-600 border-gray-100';
      break;
    default:
      IconComponent = null; // O un icono por defecto
      iconColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
      dotColorClass = isDarkMode ? 'bg-gray-400 border-gray-900' : 'bg-gray-600 border-gray-100';
  }

  return (
    <div className="relative pl-8">
      <div className={`absolute -left-[calc(0.5rem+2px)] top-1.5 w-4 h-4 rounded-full ${dotColorClass} border-2`}></div>
      <div className="flex items-center gap-2 mb-0.5">
        {IconComponent && <IconComponent className={`w-5 h-5 ${iconColor}`} />}
        <p className={`font-semibold text-md ${iconColor}`}>
          {item.title}
        </p>
      </div>
      <p className={`text-xs uppercase tracking-wider font-medium ml-7 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {item.period} {item.institution && `| ${item.institution}`}
      </p>
      {item.description && (
        <p className={`mt-1 text-sm ml-7 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ whiteSpace: 'pre-line' }}>
          {item.description}
        </p>
      )}
    </div>
  );
};


function AboutMe({ isDarkMode, language }) {
  const isMobile = useIsMobile(); // Detecta si es móvil
  const currentContent = aboutMeContent[language];
  const techHighlightClass = isDarkMode ? 'text-sky-400' : 'text-sky-600';
  const titleColor = isDarkMode ? 'text-sky-400' : 'text-sky-600';
  const aboutMeBgClass = isDarkMode ? 'bg-slate-900' : 'bg-slate-100';
  const paragraphTextColor = isDarkMode ? 'text-slate-300' : 'text-slate-700';

  // Variantes condicionales para la animación de cambio de idioma
  const innerContentVariants = {
    hidden: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 },
  };

  const innerContentTransition = isMobile
    ? { duration: 0 }
    : { duration: 0.5, ease: 'easeInOut' };

  return (
    <section
      id="about"
      className={`py-20 px-6 md:px-16 transition-colors duration-500 ease-in-out ${aboutMeBgClass} ${paragraphTextColor}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl font-extrabold mb-12 ${titleColor}`}>
          {currentContent.title}
        </h2>

        {/* Usamos Reveal con la prop 'animationEnabled' para desactivar la animación en móvil */}
        <Reveal animationEnabled={!isMobile}>
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              variants={innerContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={innerContentTransition}
              className="space-y-6 text-left md:text-justify"
            >
              <p className="text-lg leading-relaxed">
                {currentContent.greeting}
                <span className={`font-semibold ${techHighlightClass}`}>{currentContent.program}</span>
                {currentContent.passion}
              </p>
              <p className="text-lg leading-relaxed">
                {currentContent.experienceIntro}
                <span className={`font-medium ${techHighlightClass}`}>{currentContent.coreTech}</span>
                {currentContent.modernTechIntro}
                <span className={`font-medium ${techHighlightClass}`}>{currentContent.modernTech}</span>
                {currentContent.dbIntro}
                <span className={`font-medium ${techHighlightClass}`}>{currentContent.dbTech}</span>.
                {currentContent.dbTechContent}
              </p>
              <p className="text-lg leading-relaxed">
                {currentContent.personality}
              </p>
              <p className="text-lg leading-relaxed">
                {currentContent.goal}
                <a href="#projects" className={`underline font-medium ${isDarkMode ? 'text-sky-400 hover:text-sky-300' : 'text-sky-600 hover:text-sky-500'}`}>
                  {currentContent.projectsLinkText}
                </a>
                {currentContent.goalContinuation}
              </p>
              <div className="pt-10">
                <h3 className={`text-3xl font-bold text-center mb-8 ${titleColor}`}>
                  {currentContent.journeyTitle}
                </h3>
                <div className={`relative border-l-4 pl-6 space-y-10 ${isDarkMode ? 'border-sky-700' : 'border-sky-300'}`}>
                  {currentContent.journey.map((item) => (
                    <JourneyItem key={item.id} item={item} isDarkMode={isDarkMode} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutMe;