import { FaEye } from "react-icons/fa";
import asset1Img from '../assets/asset1.png'
import asset2Img from '../assets/asset2.png'
import { TbArrowBigUpLine } from "react-icons/tb";

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
      <div className="grid grid-cols-2 gap-3">
        {ASSETS.map((asset) => (
          <div key={asset.id} className="flex flex-col gap-2 cursor-pointer group">

            {/* Cover card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900">
              {/* Cover image */}
              <img
                src={asset.cover}
                alt={asset.title}
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
                <span>{asset.collectCount} Collected</span>
              </div>
            </div>

            {/* Title below card */}
            <p className="text-white text-sm font-semibold leading-snug px-0.5 line-clamp-2">
              {asset.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
