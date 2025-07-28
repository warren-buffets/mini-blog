"use client";

export default function DevTools() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <>
      {/* Viewport size indicator */}
      <div className="fixed bottom-4 left-4 z-50 px-2 py-1 text-xs font-mono bg-black text-white rounded opacity-50 pointer-events-none">
        <span className="sm:hidden">xs</span>
        <span className="hidden sm:inline md:hidden">sm</span>
        <span className="hidden md:inline lg:hidden">md</span>
        <span className="hidden lg:inline xl:hidden">lg</span>
        <span className="hidden xl:inline 2xl:hidden">xl</span>
        <span className="hidden 2xl:inline">2xl</span>
      </div>

      {/* Grid overlay toggle */}
      <button
        onClick={() => {
          document.body.classList.toggle("debug-grid");
        }}
        className="fixed bottom-4 right-4 z-50 p-2 text-xs font-mono bg-blue-500 text-white rounded opacity-50 hover:opacity-100 transition-opacity"
        title="Toggle debug grid"
      >
        Grid
      </button>

      {/* Custom styles for development */}
      <style jsx global>{`
        .debug-grid {
          background-image:
            linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .debug-grid * {
          outline: 1px solid rgba(0, 255, 0, 0.1) !important;
        }
      `}</style>
    </>
  );
}
