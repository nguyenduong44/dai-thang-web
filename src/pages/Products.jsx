import { productCategories, featuredProducts } from "../data";

export default function Products() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
            DANH MỤC SẢN PHẨM
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Khám phá các dòng gạch không nung và Terrazzo chất lượng cao, đa dạng về kích thước và hoa văn cho mọi nhu cầu xây dựng.
          </p>
        </div>
      </section>

      {/* Product List */}
      <div className="max-w-7xl mx-auto py-24 px-4">
        {productCategories.map((cat, idx) => (
          <section key={cat.slug} className={`mb-32 ${idx !== 0 ? 'pt-16 border-t border-gray-50' : ''}`}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="text-left">
                <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Phân loại</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
                  {cat.name}
                </h2>
                <p className="text-slate-500 mt-2 max-w-xl">{cat.desc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts
                .filter((p) => p.category.includes(cat.name) || (cat.slug === 'gach-terrazzo' && p.category.includes('vỉa hè')))
                .map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                        {product.desc}
                      </p>
                      <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-gray-200">
                        NHẬN BÁO GIÁ
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* Support Section */}
      <section className="bg-slate-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm">
             <div className="text-3xl mb-4">📐</div>
             <h4 className="text-xl font-bold text-slate-800 mb-2">Tư vấn kỹ thuật</h4>
             <p className="text-slate-500 text-sm">Hỗ trợ tính toán khối lượng và lựa chọn loại gạch phù hợp với công trình.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm">
             <div className="text-3xl mb-4">🎨</div>
             <h4 className="text-xl font-bold text-slate-800 mb-2">Mẫu mã tùy chỉnh</h4>
             <p className="text-slate-500 text-sm">Sản xuất màu sắc và hoa văn riêng cho các đơn hàng dự án quy mô lớn.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm">
             <div className="text-3xl mb-4">🚛</div>
             <h4 className="text-xl font-bold text-slate-800 mb-2">Giao hàng tận nơi</h4>
             <p className="text-slate-500 text-sm">Đội ngũ xe tải cẩu chuyên nghiệp, vận chuyển an toàn đến chân công trình.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
