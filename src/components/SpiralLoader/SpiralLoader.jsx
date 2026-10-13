import React, { useEffect, useState } from 'react'
import SpiralAnimation from './SpiralAnimation'
import './SpiralLoader.css'
import { FormattedMessage } from 'react-intl'

export default function SpiralLoader({ onSkip }) {
    const [textVisible, setTextVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setTextVisible(true), 600)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onSkip && onSkip()
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onSkip])

    return (
        <div className="spiral-loader" role="status" aria-live="polite" onClick={onSkip} title="Clique para pular">
            <SpiralAnimation />
            <span className={`spiral-loader__text ${textVisible ? 'is-visible' : ''}`}><FormattedMessage id="loading" defaultMessage="Carregando" /></span>
        </div>
    )
}
