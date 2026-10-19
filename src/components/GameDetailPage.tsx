import { IoEarthSharp, IoAt } from 'react-icons/io5'
import { IoIosArrowBack } from 'react-icons/io'
import { CgGames } from "react-icons/cg";
import { LuCopy, LuGamepad2 } from 'react-icons/lu'
import { FaServer } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { PiShareFat } from 'react-icons/pi'
import { AiOutlineLike } from 'react-icons/ai'

import profileImg from '../assets/profile.png'
import WorldBadge from '../assets/world.png'
import ModelBadge from '../assets/model.png'

import { useState } from 'react'

export interface GameData {
  id: number
  cover: string
  playCount: string
  title: string
  playing: number
  gameId: string
  description: string
  hastag: string
  like: number
  share: number
}

interface GameDetailPageProps {
  game: GameData
  onBack: () => void
}

export default function GameDetailPage({ game, onBack }: GameDetailPageProps) {
  const [commentText, setCommentText] = useState('');

  return (
    <div className="min-h-screen text-white bg-black/5">
      {/* Top bar */}
      <div className="flex items-center px-4 py-3 sticky top-0 bg-black/5 backdrop-blur-md border-b border-gray-800 z-20">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Back"
        >
          <IoIosArrowBack className="w-6 h-6" />
        </button>

        {/* Creator info */}
        <div className="flex items-center gap-1">
          <img src={profileImg} alt="Profile image" className='w-8 h-8 me-1' />
          <span className="text-sm text-white mb-1">Gilang_117</span>
          <img src={WorldBadge} alt="World badge" className='w-4 h-4 mb-1' />
          <img src={ModelBadge} alt="Model badge" className='w-4 h-4 mb-1' />
        </div>

        {/* Right icons placeholder */}
        <div className="w-8" />
      </div>

      {/* Title */}
      <div className="px-4 pt-2 pb-3 text-center md:flex md:justify-between md:max-w-4xl mx-auto">
        <h1 className="text-xl font-bold text-white leading-snug">{game.title}</h1>

        {/* Stats row */}
        <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
          <div className="flex items-center gap-1 text-gray-400 text-xs md:text-sm">
            <LuGamepad2 className="w-4 h-4" />
            <span>{game.playCount} Played</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-xs md:text-sm">
            <CgGames className="w-4 h-4" />
            <span>{game.playing} Playing</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-xs md:text-sm">
            <span>ID:{game.gameId}</span>
            <button aria-label="Copy game ID" className="text-gray-500 hover:text-gray-300 cursor-pointer">
              <LuCopy className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-80 border-t border-white/10 hidden md:flex" />

      <div className="px-4 mt-0 md:mt-4 md:flex md:gap-6 md:items-start md:max-w-4xl md:mx-auto">
        {/* Cover */}
        <div className="md:w-80 lg:w-96 md:flex-shrink-0">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={game.cover}
              alt={game.title}
              className="w-full object-cover"
            />
            {/* Globe badge */}
            <div className="absolute top-2 left-2 bg-black/30 rounded-full w-7 h-7 flex items-center justify-center">
              <IoEarthSharp className="w-4 h-4" />
            </div>
          </div>

          {/* Server and Play */}
          <div className="mt-4 flex items-center gap-3">
            <a href='https://uni.prd.h5.uni2play.com/prod/landing/?to=uni://unicc.com/user/detail?uid=FDFLA9X' target='_blank' className="flex-1 flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full py-3 transition-colors cursor-pointer flex-shrink-0">
              <FaServer className="w-5 h-5" />
            </a>

            <a href='https://uni.prd.h5.uni2play.com/prod/landing/?to=uni://unicc.com/user/detail?uid=FDFLA9X' target='_blank' className="flex-3 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded-full transition-colors cursor-pointer text-lg">
              <FaPlay className='w-4 h-4' /> Play
            </a>
          </div>
        </div>

        {/* Right column: description (desktop only side-by-side) */}
        <div className="flex-1 min-w-0 mt-5 md:mt-0">
          <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">{game.description}</p>
          <br />
          <p className='text-blue-500 text-sm'>{game.hastag}</p>
        </div>
      </div>

      <br />
      {/* Bottom action bar */}
      <div className="fixed bottom-0 lg:bottom-auto lg:mx-80 left-0 right-0 bg-black border-t border-gray-800 px-4 py-3 flex items-center gap-3">
        <IoAt className='w-7 h-7' />
        {/* Comment input placeholder */}
        <input 
          type="text"
          placeholder="Comments"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="flex-1 bg-white/10 rounded-full px-4 py-2 text-white caret-yellow-400 text-sm cursor-text focus:outline-none placeholder-gray-400"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setCommentText('');
            }
          }}
        />

        {/* Like count */}
        <button className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer">
          <AiOutlineLike className="w-6 h-6" />
          <span className="text-sm font-semibold">{(game.like / 1000).toFixed(1)}k</span>
        </button>

        {/* Share count */}
        <button className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer">
          <PiShareFat className="w-6 h-6" />
          <span className="text-sm font-semibold">{game.share}</span>
        </button>
      </div>

      {/* Spacer so content isn't hidden behind fixed bottom bar */}
      <div className="h-20" />
    </div>
  )
}
