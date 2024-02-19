import { useState } from "react";
import AboutCourse from "../components/Course/AboutCourse";
import CourseSchedule from "../components/Course/CourseSchedule";
import Teachers from "../components/Course/Teachers";

function Curso() {
  const [sobreCurso, setSobreCurso] = useState(false);
  const [gradeCurso, setGradeCurso] = useState(false);
  const [professores, setProfessores] = useState(false);

  return (
    <section className="p-6 w-full space-y-3 animation">
      <h2 className="font-medium text-3xl">Coordenação do curso</h2>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      <div className="flex flex-col">
        <span className="font-medium text-3xl">
          Wellington Gabriel Freitas de Oliveira
        </span>
        <span className="text-slate-400 font-normal">Coordenador do curso</span>
      </div>
      <h2 className="font-medium text-3xl">Sobre o curso</h2>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      <div className="flex gap-8 flex-col">
        <div className="flex gap-8 max-md:flex-col">
          <button
            onClick={() => setSobreCurso(!sobreCurso)}
            className="bg-slate-200 border border-slate-400 p-2 rounded-lg text-xl font-medium hover:bg-slate-400 hover:border-blue-950 transition focus-visible:bg-slate-400 focus-visible:border-blue-950 focus-visible:outline-none"
          >
            Sobre o curso
          </button>
          <button
            onClick={() => setGradeCurso(!gradeCurso)}
            className="bg-slate-200 border border-slate-400 p-2 rounded-lg text-xl font-medium hover:bg-slate-400 hover:border-blue-950 transition focus-visible:bg-slate-400 focus-visible:border-blue-950 focus-visible:outline-none"
          >
            Grade do curso
          </button>
          <button
            onClick={() => setProfessores(!professores)}
            className="bg-slate-200 border border-slate-400 p-2 rounded-lg text-xl font-medium hover:bg-slate-400 hover:border-blue-950 transition focus-visible:bg-slate-400 focus-visible:border-blue-950 focus-visible:outline-none"
          >
            Professores
          </button>
        </div>
        {sobreCurso && <AboutCourse />}
        {gradeCurso && <CourseSchedule />}
        {professores && <Teachers />}
      </div>
    </section>
  );
}

export default Curso;
