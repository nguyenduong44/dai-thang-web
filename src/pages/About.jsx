import { companyInfo } from "../data";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          alt="Factory"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black !text-white tracking-tighter mb-4">VỀ CHÚNG TÔI</h1>
          <p className="text-green-400 font-bold uppercase tracking-widest text-lg">Hơn 15 năm kiến tạo những giá trị vững bền</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-700/10 rounded-full blur-3xl"></div>
            <img
              src="https://gachmaika.com/wp-content/uploads/2023/10/gach-FD61233-VIEW.jpg"
              alt="Nhà máy Đại Thắng"
              className="rounded-[3rem] shadow-2xl relative z-10 aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl z-20 hidden md:block">
               <span className="block text-4xl font-black text-green-500 mb-1">15.000m²</span>
               <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Diện tích nhà máy</span>
            </div>
          </div>
          <div>
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Câu chuyện Đại Thắng</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              TIÊN PHONG TRONG LĨNH VỰC VẬT LIỆU XÂY DỰNG XANH
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              {companyInfo.intro}
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
               <div>
                  <h4 className="font-bold text-slate-800 mb-2">Tầm nhìn</h4>
                  <p className="text-sm text-slate-500">Trở thành đơn vị sản xuất gạch không nung hàng đầu khu vực miền Nam.</p>
               </div>
               <div>
                  <h4 className="font-bold text-slate-800 mb-2">Sứ mệnh</h4>
                  <p className="text-sm text-slate-500">Cung cấp giải pháp xây dựng bền vững, tiết kiệm chi phí cho khách hàng.</p>
               </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-gray-100">
               <h4 className="font-bold text-slate-800 mb-6 uppercase tracking-widest text-xs">Thông tin pháp lý</h4>
               <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-slate-500 font-medium">Tên công ty</span>
                  <span className="text-slate-800 font-bold text-right">{companyInfo.name}</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-slate-500 font-medium">Địa chỉ</span>
                  <span className="text-slate-800 font-bold text-right max-w-[250px]">{companyInfo.address}</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-slate-500 font-medium">Mã số thuế</span>
                  <span className="text-slate-800 font-bold">{companyInfo.taxCode}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500 font-medium">Người đại diện</span>
                  <span className="text-slate-800 font-bold">{companyInfo.director}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-900 py-24 text-white">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-16 tracking-tighter">GIÁ TRỊ CỐT LÕI</h2>
            <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 {title: "CHẤT LƯỢNG", desc: "Mọi sản phẩm đều đạt chuẩn TCVN và kiểm định khắt khe.", icon: "💎"},
                 {title: "TRÁCH NHIỆM", desc: "Cam kết bảo vệ môi trường thông qua công nghệ gạch không nung.", icon: "🌍"},
                 {title: "SÁNG TẠO", desc: "Luôn cập nhật mẫu mã và công nghệ sản xuất hiện đại nhất.", icon: "🚀"}
               ].map((item, i) => (
                 <div key={i} className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-green-700 transition-all cursor-default">
                    <div className="text-5xl mb-6">{item.icon}</div>
                    <h4 className="!text-white text-2xl font-bold mb-4">{item.title}</h4>
                    <p className="text-slate-400 group-hover:text-white transition-colors">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
