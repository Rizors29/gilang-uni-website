import board1 from '../assets/boards/board1.png'
import board2 from '../assets/boards/board2.png'

interface Board {
  id: number
  title: string
  work: number
  collectCount: number
  image: string
}

const BOARDS: Board[] = [
  {
    id: 1,
    title: 'Icons',
    work: 15,
    collectCount: 23,
    image: board1,
  },
  {
    id: 2,
    title: 'Kartun',
    work: 13,
    collectCount: 98,
    image: board2,
  },
]

export default function BoardFeed() {
  return (
    <div className="px-4 md:px-0 pt-4 pb-8 space-y-4">
      {BOARDS.map((board) => (
        <a href="https://uni.prd.h5.uni2play.com/prod/landing/?to=uni://unicc.com/user/detail?uid=FDFLA9X" target='_blank'>
          <div key={board.id} className="bg-white/5 hover:bg-white/8 rounded-xl p-4 transition-all duration-200 cursor-pointer group">
            {/* Title */}
            <h3 className="text-white font-bold text-base italic mb-1">
              {board.title.toUpperCase()}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-gray-400 text-xs">Work · {board.work}</span>
              <span className="text-gray-400 text-xs">Collected · {board.collectCount}</span>
            </div>

            {/* Single image */}
            <div className="w-full h-fit rounded-xl overflow-hidden bg-white/10">
              <img
                src={board.image}
                alt={board.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
