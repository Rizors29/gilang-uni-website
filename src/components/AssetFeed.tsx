import asset1Img from '../assets/models/asset1.png'
import asset2Img from '../assets/models/asset2.png'

import { FaEye } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";

interface Asset {
  id: number
  cover: string
  collectCount: string
  title: string
}

const ASSETS: Asset[] = [
  {
    id: 1,
    cover: asset1Img,
    collectCount: '7.3k',
    title: 'Milo Kotak',
  },
  {
    id: 2,
    cover: asset2Img,
    collectCount: '22.3k',
    title: 'Kodok',
  },
]

export default function AssetFeed() {
  return (
    <div className="px-4 md:px-0 pt-4 pb-8">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {ASSETS.map((asset) => (
          <a href="https://uni.prd.h5.uni2play.com/prod/landing/?to=uni://unicc.com/user/detail?uid=FDFLA9X" target="_blank" className="cursor-pointer">
            <div key={asset.id} className="flex flex-col cursor-pointer group bg-white/5 rounded-xl">
              {/* Cover card */}
              <div className="relative rounded-2xl overflow-hidden">
                {/* Cover image */}
                <img
                  src={asset.cover}
                  alt={asset.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 from-black/70 via-transparent to-transparent" />

                {/* Badge top-left */}
                <div className="absolute top-1 left-1 flex bg-black/30 rounded-full w-6 h-6 flex items-center justify-center">
                  <IoIosCube />
                </div>

                {/* Collect count bottom-left */}
                <div className="absolute bottom-1 left-1 bg-black/20 py-0.5 px-1 rounded-md flex items-center gap-1 text-white text-xs font-semibold drop-shadow">
                  <FaEye className="w-3 h-3" />
                  <span>{asset.collectCount} Collected</span>
                </div>
              </div>

              {/* Title below card */}
              <div className="px-3 md:px-4 pb-3 md:pb-4 space-y-1 font-semibold">
                <p className="text-white text-sm line-clamp-2">
                  {asset.title}
                </p>
                <p className="text-xs text-gray-300">Gilang_117</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
