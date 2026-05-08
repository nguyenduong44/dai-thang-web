import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { companyInfo, menuItems } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="bg-green-700 p-2 rounded-lg">
            <span className="text-white font-black text-2xl tracking-tighter">
              ĐT
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="font-extrabold text-green-800 text-xl tracking-tight block leading-tight">
              ĐẠI THẮNG
            </span>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
              Gạch không nung Sân Cu
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-bold transition-all hover:text-green-700 relative py-2 ${
                  isActive
                    ? "text-green-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-700"
                    : "text-gray-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-700 hover:after:w-full after:transition-all"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-green-200"
          >
            <span>📞</span>
            <span>{companyInfo.phone}</span>
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg bg-gray-50 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <span className="text-xl font-bold">✕</span>
          ) : (
            <span className="text-xl font-bold">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white border-b transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg font-bold p-2 rounded-lg ${isActive ? "bg-green-50 text-green-700" : "text-gray-700"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <hr className="border-gray-100" />
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center justify-center gap-2 bg-green-700 text-white p-4 rounded-xl font-bold"
          >
            <span>📞</span>
            <span>Gọi ngay: {companyInfo.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
