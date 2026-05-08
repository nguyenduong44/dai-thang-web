import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://bizweb.dktcdn.net/100/371/883/files/123.jpg?v=1616746921277",
    title: "GẠCH KHÔNG NUNG CHẤT LƯỢNG CAO",
    subtitle: "Giải pháp xây dựng bền vững, tiết kiệm 20% chi phí vật liệu.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1600",
    title: "GẠCH TERRAZZO ĐA DẠNG MẪU MÃ",
    subtitle: "Nâng tầm không gian vỉa hè và sân vườn với độ bền vượt trội.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            idx === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl backdrop-blur-md bg-black/30 p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 !text-gray-100 tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 font-medium text-gray-100">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/san-pham"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-lg active:scale-95"
                >
                  XEM SẢN PHẨM
                </Link>
                <Link
                  to="/lien-he"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/50 px-8 py-4 rounded-xl font-bold transition-all hover:shadow-lg active:scale-95"
                >
                  LIÊN HỆ NGAY
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-green-500 w-16"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
