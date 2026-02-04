"use client";
import DarkVeil from "@/components/www/Landingpage/DarkVeil";
import { AnimatedFoundersUse } from "@/components/www/Landingpage/Animated-founder";
import { useRouter } from "next/navigation";
import AboutImage from '@/components/www/Landingpage/About/AboutImage'
import AboutContent from '@/components/www/Landingpage/About/AboutContent'

export default function Page() {

    const router = useRouter();

    return (
        <div className="w-full">
            {/* HERO / LANDING SECTION */}
            <section className="relative min-h-screen w-full overflow-hidden">
                {/* DarkVeil only for landing */}
                <div className="absolute inset-0 z-0">
                    <DarkVeil
                        hueShift={0}
                        noiseIntensity={0}
                        scanlineIntensity={0}
                        speed={0.5}
                        scanlineFrequency={0}
                        warpAmount={0}
                    />
                </div>

                {/* Hero Content */}
                <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
                    <div className="max-w-3xl space-y-8">

                        <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black/30 backdrop-blur-sm border border-gray-500/50 rounded-full text-xs sm:text-sm text-gray-300 font-medium">
                            Welcome to the community
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                            Where Innovators Connect, <br />
                            Create, and Grow Together.
                        </h1>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                            <button className="cursor-pointer w-full sm:w-auto px-12 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                onClick={() => router.push("https://www.instagram.com/official.voidwalkers/")}
                            >
                                Join Us
                            </button>

                            <button
                                className="cursor-pointer w-full sm:w-auto px-12 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-md"
                                onClick={() => router.push("/www/About")}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </main>
            </section>

            {/* FOUNDERS SECTION */}
            <section className="relative w-full bg-black py-24 px-6">
                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Meet the Founders
                    </h2>

                    {/* Animated founders */}
                    <AnimatedFoundersUse />
                </div>
            </section>
            <section
                className="
    min-h-screen
    bg-black
    flex
    flex-col
    items-center
    justify-center
    px-4
    pt-28
    pb-16
  "
            >
                {/* Heading */}
                <h1 className="mb-10 text-4xl md:text-5xl font-bold text-white tracking-wide">
                    About Us
                </h1>

                <div
                    className="
      relative
      w-full
      max-w-7xl
      rounded-2xl
      border border-purple-500/20
      bg-black/70
      backdrop-blur-xl
      shadow-[0_0_80px_rgba(168,85,247,0.15)]
      overflow-hidden
      flex
      flex-col
      lg:flex-row
    "
                >
                    <AboutImage />
                    <AboutContent />
                </div>
            </section>
        </div>
    );
}
