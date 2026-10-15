import game1Img from '../assets/games/game1.png'
import game2Img from '../assets/games/game2.png'
import game3Img from '../assets/games/game3.png'

import { FaEye } from "react-icons/fa";
import { TbArrowBigUpLine } from "react-icons/tb";
import { IoEarthSharp } from "react-icons/io5";

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
  {
    id: 3,
    cover: game3Img,
    playCount: '181k',
    title: 'Brainrot Training',
  },
]

export default function GameFeed() {
  return (
    <div className="px-4 md:px-0 pt-4 pb-8">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {GAMES.map((game) => (
          <div key={game.id} className="flex flex-col gap-2 group">
            {/* Cover card */}
            <a href="https://uni.prd.h5.uni2play.com/prod/landing/?to=uni://unicc.com/world/detail?id=FDFLA9X_264" target="_blank" className="cursor-pointer">
              <div className="relative rounded-xl overflow-hidden">
                {/* Cover image */}
                <img
                  src={game.cover}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Badge top-left */}
                <div className="absolute top-2 left-2 flex bg-black/20 rounded-full w-6 h-6 flex items-center justify-center">
                  <IoEarthSharp />
                </div>

                {/* Play count bottom-left */}
                <div className="absolute bottom-2 left-2 bg-black/20 py-0.5 px-1 rounded-md flex items-center gap-1 text-white text-xs font-semibold drop-shadow">
                  <FaEye className="w-3 h-3" />
                  <span>{game.playCount} Played</span>
                </div>
              </div>
            </a>

            {/* Title below card */}
            <p className="text-white text-xs md:text-sm font-semibold leading-snug px-0.5 line-clamp-2">
              {game.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
