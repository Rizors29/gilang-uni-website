import game1Img from '../assets/games/game1.png'
import game2Img from '../assets/games/game2.png'
import game3Img from '../assets/games/game3.png'
import game4Img from '../assets/games/game4.png'

import { FaEye } from 'react-icons/fa'
import { IoEarthSharp } from 'react-icons/io5'

import type { GameData } from './GameDetailPage'

const GAMES: GameData[] = [
  {
    id: 1,
    cover: game1Img,
    playCount: '273k',
    title: '+1 Jump Kodok Tower [x2🦵]',
    playing: 23,
    gameId: 'FDFLA9X_1664',
    description:
      'Di game ini, kamu adalah kodok. Setiap kamu lompat, lompatanmu semakin tinggi. Upgrade sepatumu dan lewati rintangannya!\n\nevent: x2🦵\nupdate: auto jump',
    hastag: '#Obby #Tower #+1Jump',
    like: 7300,
    share: 889,
  },
  {
    id: 2,
    cover: game2Img,
    playCount: '30.0k',
    title: '+1 Stamina Wings Escape',
    playing: 24,
    gameId: 'FDFLA9X_1698',
    description:
      'Di game ini, kamu bisa terbang. Latih sayapmu, lewati rintangan. Dapatkan wins dan beli sayapmu!\n\nUpdate: Bug fix, add some details',
    hastag: '#+1Power #+1Stamina',
    like: 1400,
    share: 191,
  },
  {
    id: 3,
    cover: game3Img,
    playCount: '181k',
    title: 'Brainrot Training',
    playing: 1,
    gameId: 'FDFLA9X_1165',
    description:
      'Game balapan para anomali brainrot. Capai finish dan dapatkan hadiah. Latih brainrot untuk mendapatkan power. Semakin banyak powermu semakin cepat kamu mencapai finish.\n\nupdate: bug fixes',
    hastag: '#Brainrot',
    like: 5900,
    share: 331,
  },
  {
    id: 4,
    cover: game4Img,
    playCount: '250k',
    title: 'Steal a Brainrot',
    playing: 2,
    gameId: 'FDFLA9X_1242',
    description:
      'Beli brainrot, curi brainrot dari player lain, pukul player dan kunci base untuk mencegah player masuk dan mencuri brainrotmu.\n\nupdate: bug fixes',
    hastag: '#Brainrot',
    like: 9200,
    share: 518,
  },
]

interface GameFeedProps {
  onSelectGame: (game: GameData) => void
}

export default function GameFeed({ onSelectGame }: GameFeedProps) {
  return (
    <div className="px-4 md:px-0 pt-4 pb-8">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {GAMES.map((game) => (
          <div
            key={game.id}
            className="flex flex-col gap-2 group cursor-pointer"
            onClick={() => onSelectGame(game)}
          >
            {/* Cover card */}
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
              <div className="absolute top-1 left-1 flex bg-black/20 rounded-full w-6 h-6 flex items-center justify-center">
                <IoEarthSharp />
              </div>

              {/* Play count bottom-left */}
              <div className="absolute bottom-1 left-1 py-0.5 px-1 rounded-md flex items-center gap-1 text-white text-xs font-semibold drop-shadow">
                <FaEye className="w-3 h-3" />
                <span>{game.playCount} Played</span>
              </div>
            </div>

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
