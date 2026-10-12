import { useState } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileStats from './ProfileStats'
import ProfileBio from './ProfileBio'
import ProfileTabs from './ProfileTabs'
import PostFeed from './PostFeed'
import GameFeed from './GameFeed'
import AssetFeed from './AssetFeed'
import BottomNav from './BottomNav'
import NavBar from './NavBar'
import { IoMdMale } from 'react-icons/io'
import WorldBadge from '../assets/world.png'
import ModelBadge from '../assets/model.png'
import { IoIosArrowForward } from "react-icons/io";
import Badges from '../assets/badges.png'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Post')

  return (
    <>
      {/* ── Desktop top navigation bar ───────────────────── */}
      <NavBar />

      {/* ── Main content ─────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-0 md:px-6 lg:px-8">

        {/* Banner — full width, taller on desktop */}
        <ProfileHeader />

        {/*
          Mobile  : single column
          Desktop : two columns (left = profile info sticky, right = feed)
        */}
        <div className="md:flex md:gap-6 md:items-start md:mt-6 md:px-0">

          {/* ── LEFT COLUMN — profile info ─────────────────── */}
          <aside className="md:w-80 lg:w-96 md:flex-shrink-0 md:sticky md:top-6 md:self-start">

            {/* Username + ID (shown under banner on mobile, in sidebar on desktop) */}
            <div className="px-4 mt-10 md:mt-0 md:px-0">
              <h1 className="text-xl font-bold text-white">Gilang_117</h1>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-4 h-4 bg-white/90 rounded-full shadow-md">
                    <IoMdMale className="text-blue-600 text-xs" />
                  </div>
                  <span className="text-gray-400 text-xs">ID:FDFLA9X</span>
                  <button
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                    aria-label="Copy ID"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 fill-none stroke-current"
                      strokeWidth="2"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </button>
                </div>
                {/* Badges */}
                <div className="flex items-center gap-1">
                  <img src={Badges} alt="Badges" className='w-16' />
                  <IoIosArrowForward className='w-4 h-4 text-white/80' />
                </div>
              </div>

              {/* Creator tags */}
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <div className="flex items-center gap-1">
                  <img src={WorldBadge} alt="World badge" className="w-6 h-6" />
                  <span className="text-white text-sm">Kreator Dunia Bintang</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={ModelBadge} alt="Model badge" className="w-6 h-6" />
                  <span className="text-white text-sm">Kreator Model Bintang</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <ProfileStats />

            {/* Bio */}
            <ProfileBio />        
          </aside>

          {/* ── RIGHT COLUMN — tabs + feed ──────────────────── */}
          <div className="flex-1 min-w-0">
            <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
            {activeTab === 'Post' && <PostFeed />}
            {activeTab === 'Games' && <GameFeed />}
            {activeTab === 'Assets' && <AssetFeed />}
            {activeTab !== 'Post' && activeTab !== 'Games' && activeTab !== 'Assets' && (
              <div className="flex items-center justify-center py-16 text-gray-500 text-sm">
                Belum ada konten {activeTab} saat ini.
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── Mobile bottom navigation ─────────────────────── */}
      <BottomNav />
    </>
  )
}
