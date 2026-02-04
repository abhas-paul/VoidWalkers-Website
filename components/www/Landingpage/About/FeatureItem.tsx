'use client'

import React from 'react'

interface FeatureItemProps {
    icon: React.ReactNode
    text: string
}

export default function FeatureItem({ icon, text }: FeatureItemProps) {
    return (
        <div className="flex gap-3 items-start">
            <span className="text-purple-400 mt-1">{icon}</span>
            <p className="text-sm text-gray-300">{text}</p>
        </div>
    )
}
