export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle celestial starlight grid texture */}
      <div className="absolute inset-0 bg-pilipinas-dots opacity-70" />

      {/* Central Philippine Golden Sun radiant aura behind the announcement icon */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] ambient-glow-pilipinas blur-[80px] rounded-full pointer-events-none"
      />

      {/* Royal Blue atmospheric glow (Top / Peace & Justice) */}
      <div 
        className="absolute -top-36 left-1/4 w-[640px] h-[640px] bg-[#0038A8]/35 blur-[120px] rounded-full"
      />

      {/* Scarlet Crimson atmospheric glow (Bottom / Valor & Bravery) */}
      <div 
        className="absolute -bottom-36 right-1/4 w-[640px] h-[640px] bg-[#CE1126]/25 blur-[120px] rounded-full"
      />

      {/* Golden Sun corner warmth */}
      <div 
        className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-[#FCD116]/15 blur-[100px] rounded-full"
      />
    </div>
  );
}


