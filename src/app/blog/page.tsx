"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const pathname = usePathname();

  const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-black via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      
      {/* Floating Stars */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white rounded-full opacity-50 animate-pulse`}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.9)] mt-20 animate-bounce">
        🌌 Welcome to Space Auth
      </h1>

      {/* Search Input */}
      <div className="mt-10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search in the galaxy..."
          className="px-4 py-2 rounded-lg border-2 border-cyan-400 bg-black text-white placeholder-cyan-300 shadow-[0_0_10px_rgba(0,255,255,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      {/* Nav Links */}
      <nav className="flex gap-6 mt-8">
        {navLinks.map((link, idx) => {
          const isActive =
            pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-semibold hover:text-pink-400 transition-transform duration-300 ${
                isActive
                  ? "text-pink-500 underline animate-pulse"
                  : "text-cyan-300"
              }`}
              style={{ animationDelay: `${idx * 0.3}s` }} // delayed effect
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Render children below nav */}
      <div className="mt-12 w-full max-w-md">{children}</div>
    </div>
  );
}
