import { Link } from "react-router-dom";
import { productCategories } from "../data";

export default function ProductCategories() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">
          Danh mục
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-16">
          GIẢI PHÁP XÂY DỰNG TOÀN DIỆN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/san-pham?cat=${cat.slug}`}
              className="group relative bg-white rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-200/40 transition-all duration-500 overflow-hidden p-8 border border-gray-100 flex flex-col items-center hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-16 -mt-16 group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>

              <div className="relative z-10 w-full mb-6 overflow-hidden rounded-2xl aspect-video">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-green-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <span className="inline-flex items-center text-green-700 font-bold gap-2">
                  Khám phá
                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
