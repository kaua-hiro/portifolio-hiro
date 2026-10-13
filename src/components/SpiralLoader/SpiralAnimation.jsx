import React, { useEffect, useRef } from 'react'

/*
 * Animação em espiral (canvas 2D) usada na tela de loading.
 * Adaptada do componente original em TS/GSAP: o GSAP foi trocado por
 * requestAnimationFrame para não adicionar uma dependência só para servir de relógio.
 */

// Duração de um ciclo completo (o original era 15s). Menor = mais rápido.
const CYCLE_DURATION_MS = 4000

const CHANGE_EVENT_TIME = 0.32
const CAMERA_Z = -400
const CAMERA_TRAVEL_DISTANCE = 3400
const START_DOT_Y_OFFSET = 28
const VIEW_ZOOM = 100
const NUMBER_OF_STARS = 5000
const TRAIL_LENGTH = 80

const ease = (p, g) => (p < 0.5 ? 0.5 * Math.pow(2 * p, g) : 1 - 0.5 * Math.pow(2 * (1 - p), g))
const easeOutElastic = (x) => {
    const c4 = (2 * Math.PI) / 4.5
    if (x <= 0) return 0
    if (x >= 1) return 1
    return Math.pow(2, -8 * x) * Math.sin((x * 8 - 0.75) * c4) + 1
}
const map = (v, s1, e1, s2, e2) => s2 + (e2 - s2) * ((v - s1) / (e1 - s1))
const constrain = (v, min, max) => Math.min(Math.max(v, min), max)
const lerp = (a, b, t) => a * (1 - t) + b * t

// PRNG com seed fixa: a espiral fica idêntica a cada carregamento
const seededRandom = (seed = 1234) => () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
}

function spiralPath(p) {
    p = ease(constrain(1.2 * p, 0, 1), 1.8)
    const theta = 2 * Math.PI * 6 * Math.sqrt(p)
    const r = 170 * Math.sqrt(p)
    return { x: r * Math.cos(theta), y: r * Math.sin(theta) + START_DOT_Y_OFFSET }
}

function rotate(v1, v2, p, orientation) {
    const mx = (v1.x + v2.x) / 2
    const my = (v1.y + v2.y) / 2
    const dx = v1.x - mx
    const dy = v1.y - my
    const o = orientation ? -1 : 1
    const r = Math.sqrt(dx * dx + dy * dy)
    const bounce = Math.sin(p * Math.PI) * 0.05 * (1 - p)
    const a = Math.atan2(dy, dx) + o * Math.PI * easeOutElastic(p)
    return { x: mx + r * (1 + bounce) * Math.cos(a), y: my + r * (1 + bounce) * Math.sin(a) }
}

function createStar(random) {
    const angle = random() * Math.PI * 2
    const distance = 30 * random() + 15
    const star = {
        angle,
        distance,
        rotationDirection: random() > 0.5 ? 1 : -1,
        expansionRate: 1.2 + random() * 0.8,
        finalScale: 0.7 + random() * 0.6,
        dx: distance * Math.cos(angle),
        dy: distance * Math.sin(angle),
        spiralLocation: (1 - Math.pow(1 - random(), 3.0)) / 1.3,
    }
    const minZ = 0.5 * CAMERA_Z
    const z = minZ + random() * (CAMERA_TRAVEL_DISTANCE + CAMERA_Z - minZ)
    star.z = lerp(z, CAMERA_TRAVEL_DISTANCE / 2, 0.3 * star.spiralLocation)
    star.strokeWeightFactor = Math.pow(random(), 2.0)
    return star
}

function createRenderer(ctx, size) {
    const random = seededRandom()
    const stars = Array.from({ length: NUMBER_OF_STARS }, () => createStar(random))

    const showProjectedDot = (time, x, y, z, sizeFactor) => {
        const t2 = constrain(map(time, CHANGE_EVENT_TIME, 1, 0, 1), 0, 1)
        const cameraZ = CAMERA_Z + ease(Math.pow(t2, 1.2), 1.8) * CAMERA_TRAVEL_DISTANCE
        if (z <= cameraZ) return
        const depth = z - cameraZ
        ctx.lineWidth = (400 * sizeFactor) / depth
        ctx.beginPath()
        ctx.arc((VIEW_ZOOM * x) / depth, (VIEW_ZOOM * y) / depth, 0.5, 0, Math.PI * 2)
        ctx.fill()
    }

    const renderStar = (star, p, time) => {
        const q = p - star.spiralLocation
        if (q <= 0) return
        const sp = spiralPath(star.spiralLocation)
        const d = constrain(4 * q, 0, 1)

        const powerEasing = d * d
        const elasticEasing = easeOutElastic(d)
        let easing
        if (d < 0.3) easing = lerp(d, powerEasing, d / 0.3)
        else if (d < 0.7) easing = lerp(powerEasing, elasticEasing, (d - 0.3) / 0.4)
        else easing = elasticEasing

        let sx, sy
        if (d < 0.3) {
            sx = lerp(sp.x, sp.x + star.dx * 0.3, easing / 0.3)
            sy = lerp(sp.y, sp.y + star.dy * 0.3, easing / 0.3)
        } else if (d < 0.7) {
            const mid = (d - 0.3) / 0.4
            const curve = Math.sin(mid * Math.PI) * star.rotationDirection * 1.5
            sx = lerp(sp.x + star.dx * 0.3, sp.x + star.dx * 0.7, mid) - star.dy * 0.4 * curve * mid
            sy = lerp(sp.y + star.dy * 0.3, sp.y + star.dy * 0.7, mid) + star.dx * 0.4 * curve * mid
        } else {
            const fin = (d - 0.7) / 0.3
            const targetDistance = star.distance * star.expansionRate * 1.5
            const spiralAngle = star.angle + 1.2 * star.rotationDirection * fin * Math.PI
            sx = lerp(sp.x + star.dx * 0.7, sp.x + targetDistance * Math.cos(spiralAngle), fin)
            sy = lerp(sp.y + star.dy * 0.7, sp.y + targetDistance * Math.sin(spiralAngle), fin)
        }

        // 2D (tela) -> 3D (espaço) para a projeção em perspectiva
        const vx = ((star.z - CAMERA_Z) * sx) / VIEW_ZOOM
        const vy = ((star.z - CAMERA_Z) * sy) / VIEW_ZOOM

        let sizeMultiplier
        if (d < 0.6) {
            sizeMultiplier = 1.0 + d * 0.2
        } else {
            const t = (d - 0.6) / 0.4
            sizeMultiplier = 1.2 * (1.0 - t) + star.finalScale * t
        }
        showProjectedDot(time, vx, vy, star.z, 8.5 * star.strokeWeightFactor * sizeMultiplier)
    }

    const drawTrail = (t1, time) => {
        for (let i = 0; i < TRAIL_LENGTH; i++) {
            const f = map(i, 0, TRAIL_LENGTH, 1.1, 0.1)
            const sw = (1.3 * (1 - t1) + 3.0 * Math.sin(Math.PI * t1)) * f
            const pos = spiralPath(t1 - 0.00015 * i)
            const r = rotate(pos, { x: pos.x + 5, y: pos.y + 5 }, Math.sin(time * Math.PI * 2) * 0.5 + 0.5, i % 2 === 0)
            ctx.beginPath()
            ctx.arc(r.x, r.y, sw / 2, 0, Math.PI * 2)
            ctx.fill()
        }
    }

    return (time) => {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, size, size)
        ctx.save()
        ctx.translate(size / 2, size / 2)

        const t1 = constrain(map(time, 0, CHANGE_EVENT_TIME + 0.25, 0, 1), 0, 1)
        const t2 = constrain(map(time, CHANGE_EVENT_TIME, 1, 0, 1), 0, 1)
        ctx.rotate(-Math.PI * ease(t2, 2.7))

        ctx.fillStyle = 'white'
        drawTrail(t1, time)
        for (const star of stars) renderStar(star, t1, time)

        if (time > CHANGE_EVENT_TIME) {
            showProjectedDot(time, 0, (CAMERA_Z * START_DOT_Y_OFFSET) / VIEW_ZOOM, CAMERA_TRAVEL_DISTANCE, 2.5)
        }
        ctx.restore()
    }
}

export default function SpiralAnimation() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas && canvas.getContext('2d')
        if (!ctx) return

        let frameId
        let render
        const start = performance.now()

        const setup = () => {
            const dpr = window.devicePixelRatio || 1
            const width = window.innerWidth
            const height = window.innerHeight
            const size = Math.max(width, height)
            canvas.width = size * dpr
            canvas.height = size * dpr
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            render = createRenderer(ctx, size)
        }

        const loop = (now) => {
            render(((now - start) % CYCLE_DURATION_MS) / CYCLE_DURATION_MS)
            frameId = requestAnimationFrame(loop)
        }

        setup()
        frameId = requestAnimationFrame(loop)
        window.addEventListener('resize', setup)

        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('resize', setup)
        }
    }, [])

    return <canvas ref={canvasRef} className="spiral-canvas" aria-hidden="true" />
}
