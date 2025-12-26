"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Optionnel : tu peux exposer le canvas globalement
    // si le script en a besoin
    if (canvasRef.current) {
      (window as any).__FLUID_CANVAS__ = canvasRef.current;
    }

    return () => {
      // cleanup minimal (le script gère souvent son loop)
      delete (window as any).__FLUID_CANVAS__;
    };
  }, []);

  return (
    <>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        id="fluid-canvas"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none", // important pour ne pas bloquer l’UI
        }}
      />

      {/* Script WebGL Fluid Simulation */}
      <Script src="/fluid/script.js" strategy="afterInteractive" />
    </>
  );
}
