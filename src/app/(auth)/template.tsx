// 'app/o/layout.tsx'
// Add "use client" at the beginning for client component
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [input , setInput] = useState("");

  return (
    <div>
      <div>
        <input className='border-2 bg-amber-50' value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <nav>
        {navLinks.map(link => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href}
              href={link.href}
              className={`${isActive ? "font-bold" : "text-white-500"} mr-4`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}