import { BackgroundGlow } from './components/layout/BackgroundGlow';

export function App() {
  return (
    <div className="min-h-screen bg-[#060D1E] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden selection:bg-[#0038A8] selection:text-white">
      {/* Background Atmosphere */}
      <BackgroundGlow />

      <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Announcement Megaphone Icon */}
        <div className="relative mb-5 group">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform hover:scale-105 duration-300">
            <img
              src="/megaphone.png"
              alt="Announcement Megaphone"
              className="w-full h-full object-contain select-none drop-shadow-[0_12px_28px_rgba(252,209,22,0.35)]"
            />
          </div>
        </div>

        {/* Single Horizontal Line "Coming soon!" Headline */}
        <h1
          className="font-display font-normal tracking-[-0.03em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] mb-5 leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.75rem, 7.5vw, 6.75rem)',
          }}
        >
          Coming soon!
        </h1>

        {/* Subtext */}
        <p className="font-body text-slate-300 text-base sm:text-lg md:text-xl font-normal max-w-lg mx-auto leading-relaxed">
          <span className="font-semibold text-[#FCD116] drop-shadow-[0_0_16px_rgba(252,209,22,0.45)]">
            onepilipinas.com
          </span>{' '}
          is going live soon. Please stay tuned. Thank you!
        </p>

        {/* Footer */}
        <div className="mt-14 text-xs text-slate-500 font-medium">
          &copy; 2026 One Pilipinas. All rights reserved.
        </div>
      </main>
    </div>
  );
}

export default App;


