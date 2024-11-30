
import React, { useRef, useEffect } from "react";

function BubbleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bubbles = [];
    const colors = ["rgba(0, 123, 255, 0.2)", "rgba(123, 0, 255, 0.2)", "rgba(255, 0, 123, 0.2)"];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
 
    class Bubble {
      constructor() {
        this.radius = Math.random() * 40 + 20;  
 
        const edgeBias = 0.6;
        if (Math.random() < edgeBias) { 
          if (Math.random() > 0.5) {
            this.x = Math.random() < 0.5 ? 0 - this.radius : canvas.width + this.radius;
            this.y = Math.random() * canvas.height;
          } else {
            this.y = Math.random() < 0.5 ? 0 - this.radius : canvas.height + this.radius;
            this.x = Math.random() * canvas.width;
          }
        } else { 
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        this.dx = Math.random() * 1.5 - 0.5;
        this.dy = Math.random() * 1.5 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          this.radius * 0.1,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, this.color.replace("0.2", "0.5")); 
        gradient.addColorStop(1, this.color);  

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 20; 
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;
 
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx *= -1;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy *= -1;
        }

        this.draw();
      }
    }
 
    for (let i = 0; i < 50; i++) {
      bubbles.push(new Bubble());
    }
 
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => bubble.update());

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        filter: "blur(8px)", 
        opacity: 0.7, 
      }}
    />
  );
}

export default BubbleBackground;



