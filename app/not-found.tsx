'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <section className="min-h-screen bg-black flex items-center justify-center px-4 pt-28 pb-16">
            <div
                className="
          relative
          w-full
          max-w-3xl
          rounded-2xl
          border border-purple-500/20
          bg-black/70
          backdrop-blur-xl
          shadow-[0_0_80px_rgba(168,85,247,0.15)]
          p-10
          text-center
        "
            >
                {/* Glow Accent */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_120px_rgba(168,85,247,0.08)]" />

                <h1 className="text-6xl font-bold text-purple-400 tracking-widest">
                    404
                </h1>

                <p className="mt-4 text-xl font-semibold text-white">
                    You’ve Entered the Void
                </p>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
                    The path you’re looking for doesn’t exist.
                    Either it was never here or it has vanished into the void.
                </p>

                <div className="mt-8">
                    <Link
                        href="/www/Home"
                        className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-purple-500/40
              px-6
              py-2
              text-sm
              text-purple-300
              transition
              hover:bg-purple-500/10
              hover:text-purple-200
            "
                    >
                        <ArrowLeft size={16} />
                        Return to Safety
                    </Link>
                </div>
            </div>
        </section>
    )
}
