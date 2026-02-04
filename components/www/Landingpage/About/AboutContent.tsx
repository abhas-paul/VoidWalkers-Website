'use client'

import { Shield, Code, Swords, Users } from 'lucide-react'
import FeatureItem from './FeatureItem'

export default function AboutContent() {
    return (
        <div
            className="
        w-full
        lg:w-[45%]
        p-6
        sm:p-8
        lg:p-10
        flex
        flex-col
        justify-center
        gap-6
      "
        >
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
                <span className="text-purple-400">Void Walkers</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Void Walkers is a skill-driven community built for hackers,
                developers, competitive players, and problem-solvers who thrive
                in the unknown. We believe real growth happens through practice,
                collaboration, and discipline; not shortcuts.
            </p>

            <div className="space-y-4 pt-2">
                <FeatureItem
                    icon={<Shield size={18} />}
                    text="Ethical hacking, CTFs, and real-world security thinking."
                />
                <FeatureItem
                    icon={<Code size={18} />}
                    text="Full-stack development, systems, and collaborative engineering."
                />
                <FeatureItem
                    icon={<Swords size={18} />}
                    text="Competitive mindset, strategy, pressure handling, and growth."
                />
                <FeatureItem
                    icon={<Users size={18} />}
                    text="A high-trust community focused on learning, not ego."
                />
            </div>

            <p className="pt-4 text-xs tracking-widest text-purple-400/80 uppercase">
                Learn · Build · Compete · Grow
            </p>
        </div>
    )
}
