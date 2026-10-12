const TABS = ['Post', 'Games', 'Assets', 'Collects', 'Likes']

interface ProfileTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <div className="mt-4 md:top-16 z-10">
      <div className="flex overflow-x-auto scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex-shrink-0 px-4 py-3 text-sm font-semibold transition-colors relative cursor-pointer ${
              activeTab === tab
                ? 'text-white font-bold'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.75 w-6 mx-auto bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
