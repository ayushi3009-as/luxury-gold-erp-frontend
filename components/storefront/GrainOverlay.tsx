export function GrainOverlay() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay z-10">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}
