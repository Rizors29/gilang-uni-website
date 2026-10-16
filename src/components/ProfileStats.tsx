export default function ProfileStats() {
  const stats = [
    { value: '54.2k', label: 'Likes' },
    { value: '334', label: 'Following' },
    { value: '58.2k', label: 'Followers' },
  ]

  return (
    <div className="flex items-center px-4 md:px-0 mt-4">
      <div className="flex gap-10 flex-1">
        {stats.map((stat) => (
          <button key={stat.label} className="flex flex-col items-start hover:opacity-80 transition-opacity cursor-pointer mx-auto md:mx-0">
            <span className="text-white text-base font-bold leading-tight mx-auto">
              {stat.value}
            </span>
            <span className="text-gray-400 text-xs mx-auto">{stat.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
