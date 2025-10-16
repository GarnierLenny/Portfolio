"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type ThreeSceneProps = {
  scrollProgress: number;
};

export default function ThreeSceneVanilla({ scrollProgress }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    passionSun: THREE.Mesh;
    passionGlow: THREE.Mesh;
    planets: THREE.Mesh[];
    planetGlows: THREE.Mesh[];
    planetCores: THREE.Mesh[]; // White cores for planets
    planetOrbits: { orbit: number; speed: number; angle: number }[];
    constellationGroup: THREE.Group;
    targetOpacity: number[];
    lookAtTarget: THREE.Vector3;
    targetCameraPos: THREE.Vector3;
    targetLookAtPos: THREE.Vector3;
    interpolationSpeed: number;
    cameraOrbitAngle: number;
    cameraOrbitRadius: number;
    backgroundStars: THREE.Points;
    raycaster: THREE.Raycaster;
    mouse: THREE.Vector2;
    hoveredPlanetIndex: number | null;
    orbitPaused: boolean;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    // Deep space black background
    scene.background = new THREE.Color(0x000000);
    // No fog - we want to see deep space
    scene.fog = null;

    // Camera - starts EXTREMELY close to Passion sun for intimate hero view
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 1.2); // Right at the edge of Passion
    camera.lookAt(0, 0, 0);

    // Renderer - no shadows needed for space scene
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Ambient light for stars to be visible
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Create distant background stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // Create stars in a large sphere around the scene
      const radius = 100 + Math.random() * 400; // Far from our solar system
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i3 + 2] = radius * Math.cos(phi);

      // Mix of blue, white, and slightly warm stars
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        // Blue stars
        starColors[i3] = 0.6 + Math.random() * 0.4;
        starColors[i3 + 1] = 0.7 + Math.random() * 0.3;
        starColors[i3 + 2] = 1.0;
      } else if (colorChoice < 0.6) {
        // White stars
        starColors[i3] = 0.9 + Math.random() * 0.1;
        starColors[i3 + 1] = 0.9 + Math.random() * 0.1;
        starColors[i3 + 2] = 0.9 + Math.random() * 0.1;
      } else {
        // Slightly warm stars
        starColors[i3] = 1.0;
        starColors[i3 + 1] = 0.9 + Math.random() * 0.1;
        starColors[i3 + 2] = 0.7 + Math.random() * 0.2;
      }
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3),
    );
    starGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(starColors, 3),
    );

    const starMaterial = new THREE.PointsMaterial({
      size: 0.7,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Store stars reference for animation
    const backgroundStars = stars;

    // Create group for constellation
    const constellationGroup = new THREE.Group();
    scene.add(constellationGroup);

    // Create Passion Sun - the center of everything
    const passionGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const passionMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700, // Golden yellow
      emissive: 0xffd700,
      emissiveIntensity: 1,
    });
    const passionSun = new THREE.Mesh(passionGeometry, passionMaterial);
    passionSun.position.set(0, 0, 0);
    constellationGroup.add(passionSun);

    // Passion glow effect - large golden aura
    const passionGlowGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const passionGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      transparent: true,
      opacity: 0.3,
    });
    const passionGlow = new THREE.Mesh(
      passionGlowGeometry,
      passionGlowMaterial,
    );
    passionGlow.position.set(0, 0, 0);
    constellationGroup.add(passionGlow);

    // Define technology planets orbiting around Passion
    // Hard skills orbit at radius 5, soft skills orbit at radius 6.5
    const hardSkillsRadius = 5;
    const softSkillsRadius = 6.5;

    const planetData = [
      // Hard skills (inner orbit - radius 5)
      { orbit: hardSkillsRadius, speed: 0.3, color: 0x61dafb, label: "React", size: 0.12 },
      { orbit: hardSkillsRadius, speed: 0.25, color: 0x3178c6, label: "TypeScript", size: 0.1 },
      { orbit: hardSkillsRadius, speed: 0.2, color: 0xe0e0e0, label: "Next.js", size: 0.11 },
      { orbit: hardSkillsRadius, speed: 0.35, color: 0x38bdf8, label: "Tailwind", size: 0.08 },
      { orbit: hardSkillsRadius, speed: 0.28, color: 0x3776ab, label: "Python", size: 0.11 },
      { orbit: hardSkillsRadius, speed: 0.22, color: 0x336791, label: "PostgreSQL", size: 0.09 },
      { orbit: hardSkillsRadius, speed: 0.32, color: 0x61dafb, label: "React Native", size: 0.12 },
      { orbit: hardSkillsRadius, speed: 0.27, color: 0x2496ed, label: "Docker", size: 0.1 },
      { orbit: hardSkillsRadius, speed: 0.24, color: 0xf05032, label: "Git", size: 0.08 },
      { orbit: hardSkillsRadius, speed: 0.26, color: 0x764abc, label: "Redux", size: 0.08 },

      // Soft skills (outer orbit - radius 6.5)
      { orbit: softSkillsRadius, speed: 0.15, color: 0x68a063, label: "Node.js", size: 0.13 },
      { orbit: softSkillsRadius, speed: 0.12, color: 0x47a248, label: "MongoDB", size: 0.1 },
      { orbit: softSkillsRadius, speed: 0.18, color: 0xfa7343, label: "Swift", size: 0.09 },
      { orbit: softSkillsRadius, speed: 0.1, color: 0xff9900, label: "AWS", size: 0.11 },
      { orbit: softSkillsRadius, speed: 0.14, color: 0x339933, label: "Express", size: 0.09 },
    ];

    const planets: THREE.Mesh[] = [];
    const planetGlows: THREE.Mesh[] = [];
    const planetCores: THREE.Mesh[] = []; // Array to store white cores
    const planetOrbits: { orbit: number; speed: number; angle: number }[] = [];
    const targetOpacity: number[] = new Array(planetData.length).fill(0);

    // Create planets with glows and white cores
    planetData.forEach((data, index) => {
      // Planet sphere
      const geometry = new THREE.SphereGeometry(data.size, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 0,
      });
      const planet = new THREE.Mesh(geometry, material);

      // Glow (outer layer)
      const glowGeometry = new THREE.SphereGeometry(data.size * 1.5, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 0,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);

      // White core (inner bright center) - 40% of planet size
      const coreGeometry = new THREE.SphereGeometry(data.size * 0.4, 16, 16);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, // Pure white
        emissive: 0xffffff, // Emissive white for glow effect
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);

      constellationGroup.add(planet);
      constellationGroup.add(glow);
      constellationGroup.add(core);
      planets.push(planet);
      planetGlows.push(glow);
      planetCores.push(core);

      // Store orbit parameters with random starting angle
      planetOrbits.push({
        orbit: data.orbit,
        speed: data.speed,
        angle: Math.random() * Math.PI * 2,
      });
    });

    // Create two orbit rings - one for hard skills, one for soft skills
    // Use the same radii as the planets
    const hardSkillsOrbitGeometry = new THREE.BufferGeometry();
    const hardSkillsOrbitPoints = [];
    const orbitSegments = 128;
    for (let i = 0; i <= orbitSegments; i++) {
      const angle = (i / orbitSegments) * Math.PI * 2;
      hardSkillsOrbitPoints.push(
        new THREE.Vector3(
          Math.cos(angle) * hardSkillsRadius,
          0,
          Math.sin(angle) * hardSkillsRadius
        )
      );
    }
    hardSkillsOrbitGeometry.setFromPoints(hardSkillsOrbitPoints);
    const hardSkillsOrbit = new THREE.Line(
      hardSkillsOrbitGeometry,
      new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
      })
    );
    constellationGroup.add(hardSkillsOrbit);

    // Soft skills orbit (outer)
    const softSkillsOrbitGeometry = new THREE.BufferGeometry();
    const softSkillsOrbitPoints = [];
    for (let i = 0; i <= orbitSegments; i++) {
      const angle = (i / orbitSegments) * Math.PI * 2;
      softSkillsOrbitPoints.push(
        new THREE.Vector3(
          Math.cos(angle) * softSkillsRadius,
          0,
          Math.sin(angle) * softSkillsRadius
        )
      );
    }
    softSkillsOrbitGeometry.setFromPoints(softSkillsOrbitPoints);
    const softSkillsOrbit = new THREE.Line(
      softSkillsOrbitGeometry,
      new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
      })
    );
    constellationGroup.add(softSkillsOrbit);

    // Initialize raycaster and mouse vector for hover detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Store scene data with initial lookAt target
    sceneRef.current = {
      scene,
      camera,
      renderer,
      passionSun,
      passionGlow,
      planets,
      planetGlows,
      planetCores,
      planetOrbits,
      constellationGroup,
      targetOpacity,
      lookAtTarget: new THREE.Vector3(0, 0, 0), // Initialize at sun center
      targetCameraPos: new THREE.Vector3(0, 0, 1.2), // Initial hero position
      targetLookAtPos: new THREE.Vector3(0, 0, 0), // Initial look at sun center
      interpolationSpeed: 0.1,
      cameraOrbitAngle: 0,
      cameraOrbitRadius: 18,
      backgroundStars,
      raycaster,
      mouse,
      hoveredPlanetIndex: null,
      orbitPaused: false,
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (sceneRef.current) {
        const {
          passionSun,
          passionGlow,
          planets,
          planetGlows,
          planetCores,
          planetOrbits,
          targetOpacity,
          camera,
          renderer,
          scene,
          lookAtTarget,
          targetCameraPos,
          targetLookAtPos,
          interpolationSpeed,
          backgroundStars,
          orbitPaused,
        } = sceneRef.current;

        // Increment camera orbit angle (slow rotation around the sun)
        // Only increment if orbit is not paused (paused when hovering over planet)
        if (!orbitPaused) {
          sceneRef.current.cameraOrbitAngle += 0.0002;
        }

        // Rotate background stars slowly in opposite direction of camera orbit
        // This creates a parallax effect making it feel like the camera is moving through space
        // Rotation is subtle (0.4x camera orbit speed) to simulate distant stars
        backgroundStars.rotation.y = -sceneRef.current.cameraOrbitAngle * 1.0;

        // Smoothly interpolate camera position and lookAt target every frame
        camera.position.x +=
          (targetCameraPos.x - camera.position.x) * interpolationSpeed;
        camera.position.y +=
          (targetCameraPos.y - camera.position.y) * interpolationSpeed;
        camera.position.z +=
          (targetCameraPos.z - camera.position.z) * interpolationSpeed;

        lookAtTarget.x +=
          (targetLookAtPos.x - lookAtTarget.x) * interpolationSpeed;
        lookAtTarget.y +=
          (targetLookAtPos.y - lookAtTarget.y) * interpolationSpeed;
        lookAtTarget.z +=
          (targetLookAtPos.z - lookAtTarget.z) * interpolationSpeed;

        // Update camera lookAt target
        camera.lookAt(lookAtTarget);

        // Passion sun pulse animation
        const pulseScale = 1 + Math.sin(Date.now() * 0.001) * 0.05;
        passionSun.scale.set(pulseScale, pulseScale, pulseScale);
        passionGlow.scale.set(pulseScale, pulseScale, pulseScale);

        // Update planet positions (orbital motion) and appearance
        planets.forEach((planet, index) => {
          const orbit = planetOrbits[index];
          const target = targetOpacity[index];
          const currentOpacity = (planet.material as THREE.MeshBasicMaterial)
            .opacity;

          // Smooth fade in for planet, glow, and core
          const newOpacity = currentOpacity + (target - currentOpacity) * 0.03;
          (planet.material as THREE.MeshBasicMaterial).opacity = newOpacity;
          (planetGlows[index].material as THREE.MeshBasicMaterial).opacity =
            newOpacity * 0.4;
          // Core opacity matches planet opacity for consistent appearance
          (planetCores[index].material as THREE.MeshBasicMaterial).opacity =
            newOpacity;

          // Calculate orbital position
          orbit.angle += orbit.speed * 0.01; // Orbit speed
          const x = Math.cos(orbit.angle) * orbit.orbit;
          const z = Math.sin(orbit.angle) * orbit.orbit;
          const y = Math.sin(orbit.angle * 0.5) * 0.5; // Slight vertical motion

          // Update positions for planet, glow, and core (all at same position)
          planet.position.set(x, y, z);
          planetGlows[index].position.set(x, y, z);
          planetCores[index].position.set(x, y, z);
        });

        renderer.render(scene, camera);
      }
    };
    animate();

    // Mouse move handler for raycasting and hover detection
    const handleMouseMove = (event: MouseEvent) => {
      if (!sceneRef.current || !tooltipRef.current) return;

      const { raycaster, camera, planets, mouse } = sceneRef.current;

      // Calculate normalized device coordinates (-1 to +1) for mouse position
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update raycaster with camera and mouse position
      raycaster.setFromCamera(mouse, camera);

      // Check for intersections with planets
      const intersects = raycaster.intersectObjects(planets);

      if (intersects.length > 0) {
        // Find which planet was intersected
        const intersectedPlanet = intersects[0].object;
        const planetIndex = planets.indexOf(intersectedPlanet as THREE.Mesh);

        if (planetIndex !== -1) {
          // Hovering over a planet
          sceneRef.current.hoveredPlanetIndex = planetIndex;
          sceneRef.current.orbitPaused = true;

          // Show tooltip with planet name
          const planetName = planetData[planetIndex].label;
          tooltipRef.current.textContent = planetName;
          tooltipRef.current.style.display = "block";

          // Position tooltip near cursor (offset slightly to avoid covering cursor)
          tooltipRef.current.style.left = `${event.clientX + 15}px`;
          tooltipRef.current.style.top = `${event.clientY + 15}px`;

          // Change cursor to pointer to indicate interactivity
          renderer.domElement.style.cursor = "pointer";
        }
      } else {
        // Not hovering over any planet
        if (sceneRef.current.hoveredPlanetIndex !== null) {
          sceneRef.current.hoveredPlanetIndex = null;
          sceneRef.current.orbitPaused = false;
          tooltipRef.current.style.display = "none";
          renderer.domElement.style.cursor = "default";
        }
      }
    };

    // Handle mouse leaving the canvas
    const handleMouseLeave = () => {
      if (!sceneRef.current || !tooltipRef.current) return;

      sceneRef.current.hoveredPlanetIndex = null;
      sceneRef.current.orbitPaused = false;
      tooltipRef.current.style.display = "none";
      renderer.domElement.style.cursor = "default";
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Add event listeners
    window.addEventListener("resize", handleResize);
    renderer.domElement.addEventListener("mousemove", handleMouseMove);
    renderer.domElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousemove", handleMouseMove);
      renderer.domElement.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      passionSun.geometry.dispose();
      (passionSun.material as THREE.Material).dispose();
      passionGlow.geometry.dispose();
      (passionGlow.material as THREE.Material).dispose();
      planets.forEach((planet) => {
        planet.geometry.dispose();
        (planet.material as THREE.Material).dispose();
      });
      planetGlows.forEach((glow) => {
        glow.geometry.dispose();
        (glow.material as THREE.Material).dispose();
      });
      planetCores.forEach((core) => {
        core.geometry.dispose();
        (core.material as THREE.Material).dispose();
      });
      // Dispose orbit rings
      hardSkillsOrbitGeometry.dispose();
      (hardSkillsOrbit.material as THREE.Material).dispose();
      softSkillsOrbitGeometry.dispose();
      (softSkillsOrbit.material as THREE.Material).dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  // Update camera position, orbit visibility, and planet visibility based on scroll
  useEffect(() => {
    if (sceneRef.current) {
      const {
        targetOpacity,
        targetCameraPos,
        targetLookAtPos,
        cameraOrbitAngle,
        cameraOrbitRadius,
      } = sceneRef.current;

      // Determine if we're in hero (scrollProgress < 0.15) or viewing solar system
      const heroThreshold = 0.15; // Hero section ends at 15% scroll
      const isInHero = scrollProgress < heroThreshold;

      if (isInHero) {
        // In hero - extremely close to Passion sun
        targetCameraPos.set(0, 0, 1.2);
        targetLookAtPos.set(0, 0, 0);
        sceneRef.current.interpolationSpeed = 0.1;
      } else {
        // After hero - camera orbits around the sun from a high angle
        // Calculate orbital position around the sun
        const x = Math.cos(cameraOrbitAngle) * cameraOrbitRadius;
        const z = Math.sin(cameraOrbitAngle) * cameraOrbitRadius;
        const y = 12; // High elevation to look down at the solar system

        targetCameraPos.set(x, y, z);

        // Look directly at the sun (center of orbit rings) at origin
        // This ensures the sun is at the exact center of the two orbit lines
        targetLookAtPos.set(0, 0, 0);
        sceneRef.current.interpolationSpeed = 0.08;
      }

      // Reveal planets progressively after leaving hero
      const totalPlanets = 15;
      for (let i = 0; i < totalPlanets; i++) {
        // Start revealing planets after hero section
        const planetThreshold =
          heroThreshold + ((i + 1) / (totalPlanets + 1)) * (1 - heroThreshold);
        targetOpacity[i] = scrollProgress >= planetThreshold ? 1 : 0;
      }
    }
  }, [scrollProgress]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full -z-10"
        style={{ touchAction: "none" }}
      />
      {/* Tooltip for planet hover */}
      <div
        ref={tooltipRef}
        className="fixed pointer-events-none z-50 px-3 py-2 bg-black/80 text-white text-sm font-medium rounded-md border border-white/20 backdrop-blur-sm"
        style={{ display: "none" }}
      />
    </>
  );
}
