import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-700/10 rounded-full blur-[150px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-zinc-800 bg-black/20">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <div>
            <h1 className="font-bold">Stanley Castillo</h1>
            <span className="text-xs text-zinc-500">Powered by TotyTech</span>
          </div>
          <div className="hidden md:flex gap-8 text-zinc-400">
            <a href="#about">Sobre mí</a>
            <a href="#experience">Experiencia</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Proyectos</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-medium">IT Support Specialist</span>
            <h1 className="text-6xl md:text-8xl font-bold mt-4 leading-tight">
              Stanley<br />Castillo
            </h1>
            <p className="mt-8 max-w-3xl text-xl text-zinc-400 leading-relaxed">
              Profesional de soporte TI con más de 4 años de experiencia en Microsoft 365,
              Active Directory, SharePoint, soporte N1/N2 e infraestructura tecnológica.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://wa.me/51949581463"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl flex items-center gap-2 font-medium"
              >
                Contactar <ArrowRight size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/stanley-castillo-canchari-895b16238"
                target="_blank"
                rel="noreferrer"
                className="border border-zinc-700 hover:border-orange-500 transition px-6 py-3 rounded-xl flex items-center gap-2"
              >
                LinkedIn
              </a>
               <a
                  href="/cv-stanley-castillo.pdf"
                  download
                  className="border border-zinc-700 hover:border-orange-500 transition px-6 py-3 rounded-xl">
                  Descargar CV
                </a>
            </div>

            {/* QUICK INFO */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-orange-500 text-sm mb-2">EXPERIENCIA</h3>
                <p className="text-3xl font-bold">+4 años</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-orange-500 text-sm mb-2">ESPECIALIDAD</h3>
                <p className="font-semibold">Microsoft 365</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-orange-500 text-sm mb-2">UBICACIÓN</h3>
                <p className="font-semibold">Lima, Perú</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500">Sobre mí</span>
              <h2 className="text-5xl font-bold mt-4 mb-8">
                Tecnología, soporte e infraestructura.
              </h2>
            </div>
            <div>
              <p className="text-zinc-400 text-lg leading-8">
                Soy Stanley Castillo, profesional de soporte TI con experiencia en
                Microsoft 365, Active Directory, SharePoint, Teams e infraestructura tecnológica.
              </p>
              <p className="text-zinc-400 text-lg leading-8 mt-6">
                Durante mi trayectoria he participado en soporte N1/N2, gestión de usuarios,
                configuración de equipos corporativos, administración de servicios Microsoft
                y atención de incidencias en entornos empresariales.
              </p>
              <p className="text-zinc-400 text-lg leading-8 mt-6">
                Actualmente continúo fortaleciendo mis conocimientos en infraestructura,
                cloud computing, automatización y desarrollo de soluciones digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-32">
        <span className="text-orange-500">Experiencia</span>
        <h2 className="text-5xl font-bold mt-4 mb-16">Trayectoria profesional.</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <ExperienceCard
            year="2026 - Actualidad"
            company="Grupo Aurica"
            role="Asistente TI"
            skills={["Microsoft 365", "Infraestructura", "Soporte", "Inventario TI"]}
          />
          <ExperienceCard
            year="2026"
            company="Canvia"
            role="Especialista Help Desk"
            skills={["Interbank", "Despliegue", "Trellix", "Equipos"]}
          />
          <ExperienceCard
            year="2022 - 2025"
            company="CTIC"
            role="Asistente de Soporte TI"
            skills={["Microsoft 365", "SharePoint", "Teams", "Active Directory"]}
          />
          <ExperienceCard
            year="2019"
            company="Netcorporate"
            role="Practicante de Soporte"
            skills={["Hardware", "Software", "Redes", "Soporte"]}
          />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-32">
        <span className="text-orange-500">Skills</span>
        <h2 className="text-5xl font-bold mt-4 mb-16">Tecnologías y herramientas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillBar title="Microsoft 365" value={95} />
          <SkillBar title="Active Directory" value={90} />
          <SkillBar title="SharePoint" value={85} />
          <SkillBar title="Teams" value={90} />
          <SkillBar title="Windows 10/11" value={95} />
          <SkillBar title="Redes" value={80} />
          <SkillBar title="Azure" value={65} />
          <SkillBar title="React" value={70} />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
        <span className="text-orange-500">Proyectos</span>
        <h2 className="text-5xl font-bold mt-4 mb-16">Soluciones desarrolladas.</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">Sistema de Gestión de Tickets</h3>
            <p className="text-zinc-400 mt-4">
              Plataforma web para registro, seguimiento y control de incidencias TI.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-zinc-800 px-3 py-1 rounded-full">React</span>
              <span className="bg-zinc-800 px-3 py-1 rounded-full">Firebase</span>
              <span className="bg-zinc-800 px-3 py-1 rounded-full">Tailwind</span>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">Portal de Inventario TI</h3>
            <p className="text-zinc-400 mt-4">
              Control de activos tecnológicos, asignaciones y seguimiento de equipos.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-zinc-800 px-3 py-1 rounded-full">React</span>
              <span className="bg-zinc-800 px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-zinc-800 px-3 py-1 rounded-full">CSS</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function ExperienceCard({ year, company, role, skills }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <p className="text-zinc-500 mb-6">{year}</p>
      <h3 className="text-2xl font-bold">{role}</h3>
      <p className="text-orange-500 mt-2">{company}</p>
      <div className="flex flex-wrap gap-2 mt-6">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 rounded-full bg-zinc-800 text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillBar({ title, value }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <div className="flex justify-between mb-4">
        <span>{title}</span>
        <span className="text-orange-500">{value}%</span>
      </div>
      <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}