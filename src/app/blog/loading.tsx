"use client";

import { motion } from "framer-motion";

export default async function Loading() {
  await new Promise ((resolve) => {
    setTimeout( () => {
      resolve("HATT BSDK");
    }, 9000 )
  })
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p
        className="mt-6 text-lg tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
