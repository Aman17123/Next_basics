"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order placed!");
    router.push(""); // navigate to thank-you page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white">
      {/* Page Title */}
      <h1 className="font-extrabold text-5xl md:text-6xl text-pink-500 drop-shadow-[0_0_10px_rgba(255,0,150,0.9)] animate-pulse">
        🎮 Order Product
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-xl md:text-2xl text-cyan-300 tracking-widest drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]">
        Insert Coin to Continue
      </p>

      {/* Arcade Style Button */}
      <button
        onClick={handleClick}
        className="mt-10 px-10 py-4 text-2xl font-bold bg-gradient-to-r from-pink-600 via-yellow-400 to-pink-600 
                   rounded-xl border-4 border-cyan-400 
                   shadow-[0_0_15px_rgba(255,0,150,0.9),0_0_25px_rgba(0,255,255,0.7)] 
                   hover:scale-110 hover:rotate-1 transition-transform duration-300 ease-in-out"
      >
        🕹️ Place Order
      </button>
    </div>
  );
}
