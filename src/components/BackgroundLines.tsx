export default function BackgroundLines() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-1 overflow-hidden">
      {/* Middle line - left segment */}
      <div
        className="absolute h-2 rounded-full"
        style={{
          backgroundColor: "var(--primary-light)",
          width: "30%",
          top: "30%",
          left: "0%",
          transform: "rotate(20deg)",
          transformOrigin: "left top",
        }}
      />
      
      {/* Middle line - right segment */}
      <div
        className="absolute h-2 rounded-full"
        style={{
          backgroundColor: "var(--primary-light)",
          width: "75%",
          top: "25%",
          right: "0%",
          transform: "rotate(-10deg)",
          transformOrigin: "right top",
        }}
      />

        {/* Bottom line - left segment */}
        <div
        className="absolute h-2 rounded-full"
        style={{
          backgroundColor: "var(--primary-light)",
          width: "30%",
          top: "35%",
          left: "0%",
          transform: "rotate(20deg)",
          transformOrigin: "left top",
        }}
      />
      
      {/* Bottom line - right segment */}
      <div
        className="absolute h-2 rounded-full"
        style={{
          backgroundColor: "var(--primary-light)",
          width: "75%",
          top: "30%",
          right: "0%",
          transform: "rotate(-10deg)",
          transformOrigin: "right top",
        }}
      />

      {/* Top line - left segment */}
      <div
        className="absolute h-2 rounded-full"
        style={{
          backgroundColor: "var(--primary-light)",
          width: "30%",
          top: "25%",
          left: "0%",
          transform: "rotate(20deg)",
          transformOrigin: "left top",
        }}
      />
      
      {/* Top line - right segment */}
      <div
        className="absolute h-2 rounded-full"
        style={{
          backgroundColor: "var(--primary-light)",
          width: "75%",
          top: "20%",
          right: "0%",
          transform: "rotate(-10deg)",
          transformOrigin: "right top",
        }}
      />

    </div>
  );
}

