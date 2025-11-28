"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
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
  const timeRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartYRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          velocityX: (Math.random() - 0.5) * 0.2,
          velocityY: Math.random() * 0.15 + 0.05,
          drift: Math.random() * 1.5 - 0.75,
          driftSpeed: Math.random() * 0.008 + 0.003,
          driftOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Reset last time when page becomes visible to prevent speed-up
        lastTimeRef.current = 0;
      }
    };

    const handleScroll = () => {
      // Pause animation during scroll to prevent speed-up issues
      if (window.scrollY <= 0) {
        isPausedRef.current = true;
        lastTimeRef.current = 0;
      }

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Resume animation after scroll ends
      scrollTimeoutRef.current = setTimeout(() => {
        isPausedRef.current = false;
        lastTimeRef.current = 0;
      }, 150);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0 && window.scrollY <= 0) {
        const touchY = e.touches[0].clientY;
        // If pulling down at top of page, pause animation
        if (touchY > touchStartYRef.current) {
          isPausedRef.current = true;
          lastTimeRef.current = 0;
        }
      }
    };

    const handleTouchEnd = () => {
      // Resume after a delay when touch ends
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isPausedRef.current = false;
        lastTimeRef.current = 0;
      }, 300);
    };

    const animate = (timestamp: number) => {
      // Skip updates when paused (during overscroll)
      if (isPausedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Calculate delta time and cap it to prevent speed-ups after pauses
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp;
      }
      const deltaTime = Math.min(timestamp - lastTimeRef.current, 32); // Cap at 32ms (~30fps minimum)
      lastTimeRef.current = timestamp;

      // Increment time based on delta (normalized to ~60fps)
      timeRef.current += deltaTime / 16.67;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const interactionRadius = 100;
      const pushStrength = 2;
      const time = timeRef.current;

      particlesRef.current.forEach((particle) => {
        // Gentle snowflake drift
        const sway = Math.sin(time * particle.driftSpeed + particle.driftOffset) * particle.drift;

        particle.x += particle.velocityX + sway * 0.2;
        particle.y += particle.velocityY;

        // Mouse/touch interaction - push particles away
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

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
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
