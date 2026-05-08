import { projects } from "../data";

export default function Projects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm">
            Dự án
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">
            CÔNG TRÌNH TIÊU BIỂU
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 right-4 bg-green-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                {project.location}
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
                  {project.name}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-green-700 uppercase tracking-widest">
                    Xem dự án
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-slate-400 group-hover:bg-green-700 group-hover:text-white transition-all">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
