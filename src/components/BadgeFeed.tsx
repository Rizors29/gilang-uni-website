import badge1 from '../assets/badges/badge1.png'
import badge2 from '../assets/badges/badge2.png'
import badge3 from '../assets/badges/badge3.png'
import badge4 from '../assets/badges/badge4.png'
import badge5 from '../assets/badges/badge5.png'
import badge6 from '../assets/badges/badge6.png'
import badge7 from '../assets/badges/badge7.png'
import badge8 from '../assets/badges/badge8.png'

interface Badge {
  id: number
  image: string
  title: string
  description: string
  date: string
}

const BADGES: Badge[] = [
  {
    id: 1,
    image: badge1,
    title: 'Uni Superstar',
    description: 'Memperoleh total lebih dari 10000 followers',
    date: 'Ags 20, 2025',
  },
  {
    id: 2,
    image: badge2,
    title: 'Trending Hotshot',
    description: 'Menang Event Tantangan Remake Trending',
    date: 'May 5, 2025',
  },
  {
    id: 3,
    image: badge3,
    title: 'Social Spark',
    description: "Menang Event Let's Make Friends!",
    date: 'Feb 2, 2025',
  },
  {
    id: 4,
    image: badge4,
    title: 'Multiverse Dasher',
    description: 'Menang Event Multiverse Obby!',
    date: 'Jan 27, 2025',
  },
  {
    id: 5,
    image: badge5,
    title: 'Uni Game Jam S2',
    description: 'Menang Uni Game Jam Season 2',
    date: 'Dec 12, 2024',
  },
  {
    id: 6,
    image: badge6,
    title: 'Defense Guru',
    description: 'Menang Event Game Menara Pertahanan',
    date: 'Oct 29, 2024',
  },
  {
    id: 7,
    image: badge7,
    title: 'Script Master',
    description: 'Menang Event Dunia Bertema Skrip Uni',
    date: 'May 31, 2024',
  },
  {
    id: 8,
    image: badge8,
    title: 'Eksplorasi Pengetahuan',
    description: 'Menang Event Dunia Eksplorasi Pengetahuan!',
    date: 'Jan 26, 2024',
  },
]

export default function BadgeFeed() {
  return (
    <div className="px-4 md:px-0 pt-4 pb-8">
      {/* 2 cols on mobile, 3 cols on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {BADGES.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 rounded-xl p-3 transition-all duration-200 group"
          >
            {/* Badge image */}
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={badge.image}
                alt={badge.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200 drop-shadow-lg"
              />
            </div>

            {/* Text info */}
            <div className="flex flex-col items-center text-center gap-0.5 w-full">
              <span className="text-white text-sm font-bold leading-tight line-clamp-1">
                {badge.title}
              </span>
              <span className="text-gray-400 text-[9px] leading-snug line-clamp-2 px-1">
                {badge.description}
              </span>
              <span className="text-[10px] mt-2 text-gray-400">
                {badge.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
