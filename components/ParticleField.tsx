"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  velocityX: number;
  velocityY: number;
  drift: number;
  driftSpeed: number;
  driftOffset: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];

      // Dense particles at the top (like fog/mist)
      const topDenseCount = Math.floor((canvas.width * 150) / 800);
      for (let i = 0; i < topDenseCount; i++) {
        // Weighted toward top - exponential distribution
        const yWeight = Math.pow(Math.random(), 0.5);
        const y = yWeight * canvas.height * 0.4;

        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y,
          size: Math.random() * 1.5 + 0.3,
          baseOpacity: Math.random() * 0.35 + 0.15,
          velocityX: (Math.random() - 0.5) * 0.2,
          velocityY: Math.random() * 0.15 + 0.05,
          drift: Math.random() * 1.5 - 0.75,
          driftSpeed: Math.random() * 0.008 + 0.003,
          driftOffset: Math.random() * Math.PI * 2,
        });
      }

      // Scattered particles throughout (lighter, ambient)
      const scatteredCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < scatteredCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.4,
          baseOpacity: Math.random() * 0.25 + 0.08,
          velocityX: (Math.random() - 0.5) * 0.25,
          velocityY: Math.random() * 0.18 + 0.08,
          drift: Math.random() * 2 - 1,
          driftSpeed: Math.random() * 0.01 + 0.004,
          driftOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      const mouse = mouseRef.current;
      const interactionRadius = 100;
      const pushStrength = 2.5;

      // Center exclusion zone (where text is)
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const exclusionWidth = Math.min(600, canvas.width * 0.6);
      const exclusionHeight = Math.min(400, canvas.height * 0.45);

      particlesRef.current.forEach((particle) => {
        // Gentle snowflake drift
        const sway = Math.sin(time * particle.driftSpeed + particle.driftOffset) * particle.drift;

        particle.x += particle.velocityX + sway * 0.25;
        particle.y += particle.velocityY;

        // Mouse interaction - push particles away
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < interactionRadius && distance > 0) {
          const force = (interactionRadius - distance) / interactionRadius;
          particle.x -= (dx / distance) * force * pushStrength;
          particle.y -= (dy / distance) * force * pushStrength;
        }

        // Wrap around edges
        if (particle.y > canvas.height + 10) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x > canvas.width + 10) {
          particle.x = -10;
        }
        if (particle.x < -10) {
          particle.x = canvas.width + 10;
        }

        // Calculate opacity based on position
        let opacity = particle.baseOpacity;

        // Fade based on vertical position (denser at top)
        const verticalFade = 1 - (particle.y / canvas.height) * 0.6;
        opacity *= verticalFade;

        // Reduce opacity in center exclusion zone (where content is)
        const distFromCenterX = Math.abs(particle.x - centerX);
        const distFromCenterY = Math.abs(particle.y - centerY);

        if (distFromCenterX < exclusionWidth / 2 && distFromCenterY < exclusionHeight / 2) {
          const xFade = distFromCenterX / (exclusionWidth / 2);
          const yFade = distFromCenterY / (exclusionHeight / 2);
          const centerFade = Math.max(xFade, yFade);
          opacity *= Math.pow(centerFade, 0.8);
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
