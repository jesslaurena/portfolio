export default function BackgroundLines() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,66 C25,50 75,20 100,0"
          fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" vectorEffect="non-scaling-stroke" />
        <path d="M0,68 C30,52 70,22 100,2"
          fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" opacity="0.5" vectorEffect="non-scaling-stroke" />
        <path d="M0,64 C20,48 80,18 100,0"
          fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" opacity="0.4" vectorEffect="non-scaling-stroke" />
      </svg>

    </div>
  );
}
