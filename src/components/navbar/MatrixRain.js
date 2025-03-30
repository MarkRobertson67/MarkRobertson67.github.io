import React, { useRef, useEffect } from "react";

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Get the canvas's actual rendered size
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || window.innerWidth;
    const height = rect.height || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create a black background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    function getRandomChar() {
      const min = 33; // Start of printable ASCII characters
      const max = 255; // End of extended ASCII range
      const code = Math.floor(Math.random() * (max - min + 1)) + min;
      return String.fromCharCode(code);
    }

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    //const drops = new Array(columns).fill(1);
    const drops = new Array(columns)
      .fill(0)
      .map(() => Math.floor(Math.random() * (height / fontSize)));

    function draw() {
      // Fade the background slightly to create trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "rgba(0, 150, 0, 0.7)";

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = getRandomChar();

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly if it goes off-screen
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block absolute top-0 left-0 w-60 h-full pointer-events-none"
    />
  );
}

export default MatrixRain;
