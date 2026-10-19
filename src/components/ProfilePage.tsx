import { useState } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileStats from './ProfileStats'
import ProfileBio from './ProfileBio'
import ProfileTabs from './ProfileTabs'
import PostFeed from './PostFeed'
import GameFeed from './GameFeed'
import AssetFeed from './AssetFeed'
import BadgeFeed from './BadgeFeed'
import BoardFeed from './BoardFeed'
import NavBar from './NavBar'
import GameDetailPage from './GameDetailPage'
import type { GameData } from './GameDetailPage'

import WorldBadge from '../assets/world.png'
import ModelBadge from '../assets/model.png'
import Badges from '../assets/badges.png'

import { IoMdMale } from 'react-icons/io'
import { IoIosArrowForward } from "react-icons/io";
import { LuCopy } from "react-icons/lu";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Post')
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null)

  if (selectedGame) {
    return <GameDetailPage game={selectedGame} onBack={() => setSelectedGame(null)} />
  }

  return (
    <>
      <NavBar />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-0 md:px-6 lg:px-8">

        {/* Banner */}
        <ProfileHeader />
        <div className="md:flex md:gap-6 md:items-start md:mt-6 md:px-0">

          {/* Profile info */}
          <aside className="md:w-80 lg:w-96 md:flex-shrink-0 md:sticky md:top-6 md:self-start">

            {/* Username and ID */}
            <div className="px-4 mt-10 md:mt-0 md:px-0">
              <h1 className="text-xl font-bold text-white">Gilang_117</h1>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-4 h-4 bg-white/90 rounded-full shadow-md">
                    <IoMdMale className="text-blue-600 text-xs" />
                  </div>
                  <span className="text-gray-400 text-xs">ID:FDFLA9X</span>
                  <button
                    className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
                    aria-label="Copy ID"
                  >
                    <LuCopy className='w-3 h-3' />
                  </button>
                </div>
                {/* Badges */}
                <button
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => {
                    setActiveTab('Badges')
                    document.getElementById('profile-feed')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <img src={Badges} alt="Badges" className='w-16' />
                  <IoIosArrowForward className='w-4 h-4 text-white/80' />
                </button>
              </div>

              {/* Creator tags */}
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <div className="flex items-center gap-1">
                  <img src={WorldBadge} alt="World badge" className="w-4 h-4" />
                  <span className="text-white md:text-sm text-xs">Kreator Dunia Bintang</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={ModelBadge} alt="Model badge" className="w-4 h-4" />
                  <span className="text-white md:text-sm text-xs">Kreator Model Bintang</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <ProfileStats />

            {/* Bio */}
            <ProfileBio />        
          </aside>

          {/* Tabs and feed */}
          <div id="profile-feed" className="flex-1 min-w-0">
            <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
            {activeTab === 'Post' && <PostFeed />}
            {activeTab === 'Games' && <GameFeed onSelectGame={setSelectedGame} />}
            {activeTab === 'Assets' && <AssetFeed />}
            {activeTab === 'Badges' && <BadgeFeed />}
            {activeTab === 'Boards' && <BoardFeed />}
            {activeTab !== 'Post' && activeTab !== 'Games' && activeTab !== 'Assets' && activeTab !== 'Badges' && activeTab !== 'Boards' && (
              <div className="flex items-center justify-center py-16 text-gray-500 text-sm">
                Belum ada konten {activeTab} saat ini.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
