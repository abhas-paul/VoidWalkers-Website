'use client'

export default function AboutImage() {
    return (
        <div
            className="
        relative
        hidden
        lg:block
        lg:w-[55%]
        min-h-[520px]
      "
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 via-black to-black" />

            {/* Image */}
            <img
                src="/About-me-thumbnail.png"
                alt="Void Walkers"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            {/* Inner Shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.9)]" />
        </div>
    )
}
