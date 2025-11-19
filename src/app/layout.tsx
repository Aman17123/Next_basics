import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navlinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial",
    template: "%s | CodeEvolution",
  },
  description: "A modern Next.js tutorial app with clean design",
};

export default function RootLayout({ children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-50 text-gray-900`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 bg-blue-200 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            <Link href="/" className="text-2xl font-semibold text-gray-900 tracking-tight hover:text-blue-600 transition-colors">
              My Next App
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              {navlinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
          <div className="container mx-auto text-center text-sm">
            <p className="mb-1">
              &copy; {new Date().getFullYear()} <span className="font-semibold">My Next App</span>. All rights reserved.
            </p>
            <p>
              Built with <span className="text-blue-400">Next.js</span> & ❤️ by{" "}
              <a
                href="https://codeevolution.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400 transition-colors"
              >
                CodeEvolution
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
