/**
 * Bottom navigation bar — hanya tampil di mobile (hidden on md+).
 */
export default function BottomNav() {
  return (
    <div className="md:hidden sticky bottom-0 bg-[#111114] border-t border-gray-800/60 flex items-center justify-around py-3">
      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors" aria-label="Home">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
        <span className="text-[10px]">Home</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors" aria-label="Store">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.8">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <span className="text-[10px]">Store</span>
      </button>

      <button
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Create"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-gray-900" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>

      <button className="relative flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors" aria-label="Feed">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.8">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span className="absolute -top-1 right-0 bg-red-500 text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center font-bold">99+</span>
        <span className="text-[10px]">Feed</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-white" aria-label="Profile">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.8">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span className="text-[10px]">Me</span>
      </button>
    </div>
  )
}
