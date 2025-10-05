"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathname = usePathname(); 

  // Declare nav links as a proper array
  const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
  ];

  return (
    <div className="p-6">
      {/* Search input */}
      <div className="mb-4">
        <input
          value={input}
          onChange={(e) => (e.target.value)}
          placeholder="Searc... nigga"
          className="border-2 border-blue-500 px-3 py-1 rounded"
        />
      </div>

      {/* Navigation links */}
      <nav className="flex gap-4">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              key={link.name}
              href={link.href}
              className={
                isActive
                  ? "text-red-500 font-bold underline"
                  : "text-blue-500 hover:text-blue-700"
              }
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Render children */}
      <div className="mt-6">{children}</div>
    </div>
  );
}
