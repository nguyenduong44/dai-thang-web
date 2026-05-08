import { companyInfo } from "../data";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Đội ngũ Đại Thắng luôn sẵn sàng lắng nghe và tư vấn giải pháp tối ưu cho công trình của bạn.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">THÔNG TIN LIÊN HỆ</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl shrink-0 text-green-700">📍</div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1 uppercase tracking-widest text-xs">Văn phòng & Nhà máy</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl shrink-0 text-blue-700">📞</div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1 uppercase tracking-widest text-xs">Hotline tư vấn</h4>
                  <a href={`tel:${companyInfo.phone}`} className="text-2xl font-black text-slate-900 hover:text-green-700 transition-colors">
                    {companyInfo.phone}
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Hỗ trợ 24/7 (Cả ngày lễ và Chủ nhật)</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl shrink-0 text-orange-700">✉️</div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1 uppercase tracking-widest text-xs">Email báo giá</h4>
                  <a href={`mailto:${companyInfo.email}`} className="text-lg font-bold text-slate-900 hover:text-green-700 transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-red-400 rounded-[2.5rem] text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <h4 className="text-xl font-bold mb-4 relative z-10 !text-white">Thời gian làm việc</h4>
               <ul className="space-y-2 text-slate-400 relative z-10">
                  <li className="flex justify-between !text-white"><span>Thứ 2 - Thứ 7:</span> <span className="text-white font-bold">07:00 - 18:00</span></li>
                  <li className="flex justify-between !text-white"><span>Chủ nhật:</span> <span className="text-white font-bold">08:00 - 12:00</span></li>
               </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white border border-gray-100 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">GỬI TIN NHẮN</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Họ tên *</label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-slate-50 border border-transparent rounded-2xl p-4 focus:bg-white focus:border-green-600 outline-none transition-all font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Số điện thoại *</label>
                  <input
                    type="tel"
                    placeholder="09xx xxx xxx"
                    className="w-full bg-slate-50 border border-transparent rounded-2xl p-4 focus:bg-white focus:border-green-600 outline-none transition-all font-medium"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email (nếu có)</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-transparent rounded-2xl p-4 focus:bg-white focus:border-green-600 outline-none transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Nội dung cần tư vấn</label>
                <textarea
                  placeholder="Tôi muốn nhận báo giá gạch Terrazzo..."
                  rows="5"
                  className="w-full bg-slate-50 border border-transparent rounded-2xl p-4 focus:bg-white focus:border-green-600 outline-none transition-all font-medium resize-none"
                />
              </div>
              <button className="bg-green-700 text-white px-10 py-5 rounded-2xl font-black w-full shadow-xl shadow-green-100 hover:bg-green-800 hover:scale-[1.02] active:scale-95 transition-all">
                GỬI YÊU CẦU NGAY
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 pb-24 max-w-7xl mx-auto">
         <div className="w-full h-[450px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-inner relative flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1600" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
              alt="Map Placeholder"
            />
            <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl text-center max-w-xs">
               <div className="text-3xl mb-2">📍</div>
               <p className="font-bold text-slate-800">Vị trí nhà máy trên Google Maps</p>
               <p className="text-xs text-slate-500 mt-1">Hòa Thành, Tây Ninh</p>
               <button className="mt-4 text-green-700 font-bold text-sm">Xem bản đồ lớn →</button>
            </div>
         </div>
      </section>
    </div>
  );
}
