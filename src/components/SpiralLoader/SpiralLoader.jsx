import React, { useEffect, useState } from 'react'
import SpiralAnimation from './SpiralAnimation'
import './SpiralLoader.css'

export default function SpiralLoader() {
    const [textVisible, setTextVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setTextVisible(true), 600)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="spiral-loader" role="status" aria-live="polite">
            <SpiralAnimation />
            <span className={`spiral-loader__text ${textVisible ? 'is-visible' : ''}`}>Loading</span>
        </div>
    )
}
