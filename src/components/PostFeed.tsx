import post1Img from '../assets/post/post1.png'
import post2Img from '../assets/post/post2.png'
import post3Img from '../assets/post/post3.png'
import profileImg from '../assets/profile.png'

import { useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { PiShareFat } from 'react-icons/pi'

interface PostAttachment {
  image: string
  title: string
  username: string
  collectCount: string
  countLabel: 'Collect' | 'Played'
}

interface Post {
  id: number
  date: string
  content: string
  likes: number
  comments: number
  shares: number
  liked: boolean
  attachment?: PostAttachment
}

const INITIAL_POSTS: Post[] = [
  {
    id: 1,
    date: 'Jul 15th, 2024',
    content:
      'aku main uni buat ngumpulin uang sampe 3 juta buat beli HP ini, dan sekarang ga nyangka aku lagi pake HP ini, makasih uni 😭😭😭',
    likes: 83,
    comments: 63,
    shares: 1,
    liked: false,
    attachment: {
      image: post1Img,
      title: 'Infinix Note 40 Titan Gold',
      username: 'Gilang_117',
      collectCount: '1.9k',
      countLabel: 'Collect',
    },
  },
  {
    id: 2,
    date: 'Mar 31st, 2024',
    content: 'Model Skibidi Toilet ini bisa bergerak. Ayo kumpulkan gratis ~',
    likes: 58,
    comments: 21,
    shares: 3,
    liked: false,
    attachment: {
      image: post2Img,
      title: 'Animasi Skibidi Toilet',
      username: 'Gilang_117',
      collectCount: '1.1k',
      countLabel: 'Collect',
    },
  },
  {
    id: 3,
    date: 'Mar 29th, 2024',
    content:
      'Game viral "Thats Not My Neighbor yang dimainin bang @WindahBasudara dan @MiawAug kini hadir di UNI. Yukk mainkan ~',
    likes: 36,
    comments: 14,
    shares: 7,
    liked: false,
    attachment: {
      image: post3Img,
      title: "That's Not My Neighbor",
      username: 'Gilang_117',
      collectCount: '2.5k',
      countLabel: 'Played',
    },
  },
]

export default function PostFeed() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS)

  const toggleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    )
  }

  const formatCount = (n: number) =>
    n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n)

  return (
    <div className="flex flex-col divide-y divide-gray-800/60 pb-4">
      {posts.map((post) => (
        <article key={post.id} className="px-4 py-4">

          {/* Post header */}
          <p className="text-gray-400 mb-1 text-xs">Posted on {post.date}</p>

          {/* Post content */}
          <p className="text-white text-sm leading-relaxed">{post.content}</p>

          {/* Attachment card */}
          {post.attachment && (
            <div className="mt-3 flex items-center gap-3 border border-white/20 rounded-2xl overflow-hidden hover:border-gray-600/60 transition-colors cursor-pointer">
              {/* Thumbnail */}
              <div className="w-24 h-20 p-1">
                <img
                  src={post.attachment.image}
                  alt={post.attachment.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Info */}
              <div className="flex flex-col gap-1 py-2 pr-3">
                <span className="text-white text-sm font-semibold leading-snug">
                  {post.attachment.title}
                </span>
                <div className="flex items-center gap-1">
                  <img src={profileImg} alt="Profile image" className='w-4 h-4' />
                  <span className="text-gray-300 text-xs">{post.attachment.username}</span>
                </div>
                <span className="text-gray-500 text-xs">
                  {post.attachment.countLabel}·{post.attachment.collectCount}
                </span>
              </div>
            </div>
          )}

          {/* Post actions */}
          <div className="flex items-center justify-between mt-3">
            {/* Share */}
            <button
              className="flex items-center gap-1.5 text-gray-400 hover:text-green-400 text-xs transition-colors cursor-pointer"
              aria-label="Share post"
            >
              <PiShareFat className="w-5 h-5" />
              {post.shares > 0 && <span>{formatCount(post.shares)}</span>}
            </button>

            {/* Comment + Like */}
            <div className="flex items-center gap-5">
              <button
                className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 text-xs transition-colors cursor-pointer"
                aria-label="Comment"
              >
                <IoChatbubbleOutline className="w-5 h-5" />
                <span>{formatCount(post.comments)}</span>
              </button>

              <button
                onClick={() => toggleLike(post.id)}
                className={`flex items-center gap-1.5 text-xs transition-colors cursor-pointer ${
                  post.liked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                }`}
                aria-label={post.liked ? 'Unlike' : 'Like'}
              >
                <AiOutlineLike className="w-5 h-5" />
                <span>{formatCount(post.likes)}</span>
              </button>
            </div>
          </div>

        </article>
      ))}
    </div>
  )
}
