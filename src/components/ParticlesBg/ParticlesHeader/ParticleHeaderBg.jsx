import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleHeaderBg() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {
        console.log(container);
    };

    // A sua Stack Tecnológica isolada para manter o código limpo
    const techIcons = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", width: 20, height: 20 },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg", width: 20, height: 20 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", width: 20, height: 20 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", width: 20, height: 20 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", width: 20, height: 20 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", width: 20, height: 20 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", width: 20, height: 20 }
    ];

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="particles-2-css"
            options={{
                background: {
                    color: "transparent"
                },
                fullScreen: {
                    enable: false
                },
                interactivity: {
                    events: {
                        onHover: { enable: false },
                        onClick: { enable: false },
                    },
                },
                particles: {
                    color: { value: "#ffffff" },
                    links: { enable: false },
                    move: {
                        enable: true,
                        speed: 0.6,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: { default: "out" },
                    },
                    number: { density: { enable: true, area: 900 }, value: 12 },
                    opacity: {
                        value: { min: 0.12, max: 0.3 },
                        animation: { enable: true, speed: 0.3, minimumValue: 0.12, sync: false },
                    },
                    rotate: {
                        random: { enable: true },
                        animation: { enable: true, speed: 2 },
                        direction: "random",
                    },
                    shape: {
                        options: {
                            image: techIcons,
                            images: techIcons,
                        },
                        type: "image",
                    },
                    size: {
                        value: { min: 12, max: 22 },
                    },
                },
            }}
        ></Particles>
    );
}