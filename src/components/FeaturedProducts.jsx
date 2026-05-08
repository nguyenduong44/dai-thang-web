import { featuredProducts } from "../data";

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Sản phẩm</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">
              SẢN PHẨM NỔI BẬT
            </h2>
          </div>
          <a
            href="/san-pham"
            className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-green-700 hover:shadow-lg active:scale-95"
          >
            Tất cả sản phẩm
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-green-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <button className="w-full py-3 bg-gray-50 text-gray-700 font-bold rounded-xl group-hover:bg-green-700 group-hover:text-white transition-all">
                  Chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
