import { commitments } from "../data";

export default function Commitments() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-green-500 font-bold uppercase tracking-widest text-sm">
            Cam kết
          </span>
          <h2 className="text-4xl font-extrabold text-white mt-2">
            CHẤT LƯỢNG LÀM NÊN THƯƠNG HIỆU
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {commitments.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300 shadow-xl border border-white/10">
                {c.icon}
              </div>
              <h4 className="font-bold text-xl mb-3 text-green-400">
                {c.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
