import { blogPosts } from "../data";

export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Cẩm nang</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">
              TIN TỨC & KINH NGHIỆM
            </h2>
          </div>
          <button className="text-green-700 font-bold hover:underline">Xem tất cả bài viết →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-green-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  Kiến thức
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-700 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs">ĐT</div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Đại Thắng • 15/05/2025</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
