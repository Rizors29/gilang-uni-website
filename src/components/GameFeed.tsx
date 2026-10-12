import { FaEye } from "react-icons/fa";
import game1Img from '../assets/game1.png'
import game2Img from '../assets/game2.png'
import { TbArrowBigUpLine } from "react-icons/tb";

interface Game {
  id: number
  cover: string
  playCount: string
  title: string
}

const GAMES: Game[] = [
  {
    id: 1,
    cover: game1Img,
    playCount: '273k',
    title: '+1 Jump Kodok Tower [x2🦵]',
  },
  {
    id: 2,
    cover: game2Img,
    playCount: '30.0k',
    title: '+1 Stamina Wings Escape',
  },
]

export default function GameFeed() {
  return (
    <div className="px-4 md:px-0 pt-4 pb-8">
      <div className="grid grid-cols-2 gap-3">
        {GAMES.map((game) => (
          <div key={game.id} className="flex flex-col gap-2 cursor-pointer group">

            {/* Cover card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900">
              {/* Cover image */}
              <img
                src={game.cover}
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Badge top-left */}
              <div className="absolute top-2 left-2 flex bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                <TbArrowBigUpLine className="text-black" />
              </div>

              {/* Play count bottom-left */}
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-xs font-semibold drop-shadow">
                <FaEye className="w-4 h-4" />
                <span>{game.playCount} Played</span>
              </div>
            </div>

            {/* Title below card */}
            <p className="text-white text-sm font-semibold leading-snug px-0.5 line-clamp-2">
              {game.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
