import { projects } from "../data";

export default function Projects() {
  return (
    <div className="pb-24">
      {/* Header Section */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover" 
            alt="Background"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="!text-green-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Thành quả</span>
          <h1 className="text-5xl md:text-7xl font-black !text-white mb-6 tracking-tighter">
            DỰ ÁN TIÊU BIỂU
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi tự hào là đối tác cung cấp vật liệu xây dựng cho hàng trăm công trình trọng điểm, góp phần kiến tạo diện mạo đô thị bền vững.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-gray-100 pb-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Tất cả dự án</h2>
            <p className="text-slate-500 mt-1">Hiển thị {projects.length} công trình mới nhất</p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
             {['Tất cả', 'Vỉa hè', 'Dân dụng', 'Công nghiệp'].map(filter => (
               <button 
                key={filter}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === 'Tất cả' 
                  ? "bg-green-700 text-white shadow-lg shadow-green-200" 
                  : "bg-white text-slate-600 border border-gray-200 hover:border-green-600 hover:text-green-700"
                }`}
               >
                 {filter}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl mb-8">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-600 w-3 h-3 rounded-full animate-pulse"></span>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{project.location}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold !text-white leading-tight group-hover:text-green-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
              </div>
              
              <div className="px-4">
                <p className="text-slate-500 leading-relaxed mb-6 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex items-center text-green-700 font-bold group-hover:translate-x-2 transition-transform">
                  Chi tiết dự án <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-green-700 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-green-200">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">BẠN CÓ DỰ ÁN CẦN TƯ VẤN?</h2>
              <p className="text-green-50 max-w-xl mx-auto text-lg mb-12">
                Hãy để Đại Thắng đồng hành cùng công trình của bạn với những giải pháp vật liệu tối ưu và giá thành trực tiếp tại nhà máy.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="/lien-he" className="bg-white text-green-700 px-10 py-5 rounded-2xl font-black shadow-xl hover:scale-105 transition-all">
                   LIÊN HỆ BÁO GIÁ
                </a>
                <a href="tel:0944709999" className="bg-green-800 text-white border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-green-900 transition-all">
                   HOTLINE: 094 470 9999
                </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
