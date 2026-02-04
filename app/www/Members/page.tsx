"use client";

import MemberDataCards from "@/components/www/Members/MemberDataCards";

export default function Page() {
    return (
        <main className="bg-black min-h-screen pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-28 md:pb-32">

            {/* Heading Section */}
            <section className="w-full max-w-5xl mx-auto text-center px-4 sm:px-6">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white tracking-wide">
                    Our Members
                </h1>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
                    The people who make VoidWalkers what it is.
                </p>

                {/* Divider */}
                <div className="mt-6 sm:mt-8 flex justify-center">
                    <span className="h-px w-16 sm:w-20 md:w-24 bg-purple-500/30"></span>
                </div>
            </section>

            {/* Members Cards Section */}
            <section className="mt-16 sm:mt-20 md:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* RESPONSIVE GRID */}
                <MemberDataCards />
            </section>

        </main>
    )
}