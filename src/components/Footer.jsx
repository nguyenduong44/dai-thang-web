import { companyInfo } from "../data";
import logo from "../assets/dai-thang-logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          <div className="md:col-span-4">
            <div className="mb-6">
              <img
                src={logo}
                alt="Đại Thắng"
                className="h-[100px] w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 pr-4">
              Chuyên sản xuất và cung cấp gạch không nung, gạch Terrazzo cao cấp
              đạt chuẩn TCVN. Giải pháp xây dựng xanh cho mọi công trình.
            </p>
            <div className="flex gap-4">
              {["FB", "YT", "Zalo"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold hover:bg-green-600 hover:text-white transition-all cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="!text-white font-bold mb-6 uppercase text-sm tracking-widest">
              Liên hệ
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">📍</span>
                {companyInfo.address}
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">📞</span>
                {companyInfo.phone}
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✉️</span>
                {companyInfo.email}
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="!text-white font-bold mb-6 uppercase text-sm tracking-widest">
              Sản phẩm
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Gạch không nung
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Gạch Terrazzo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Gạch lát 30x60
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Báo giá mới nhất
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="!text-white font-bold mb-6 uppercase text-sm tracking-widest">
              Nhận thông tin
            </h4>
            <p className="text-xs mb-4">
              Đăng ký để nhận báo giá và tư vấn miễn phí.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="bg-slate-900 border border-slate-800 rounded-l-xl px-4 py-3 w-full focus:outline-none focus:border-green-600 text-sm"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-r-xl font-bold transition-all">
                Gửi
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-4 text-xs font-medium uppercase tracking-widest">
          <p>© 2025 Công ty TNHH SX VLXD Đại Thắng.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Bảo mật
            </a>
            <a href="#" className="hover:text-white">
              Điều khoản
            </a>
            <a href="#" className="hover:text-white">
              Sơ đồ web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
