import heroImg from '../assets/hero.png'
import profileImg from '../assets/profile.png'
import characterImg from '../assets/character.png'

export default function ProfileHeader() {
  return (
    <div className="relative w-full">
      {/* Banner — taller on desktop */}
      <div className="mt-0 md:mt-4 relative w-full h-40 md:h-56 lg:h-64 overflow-hidden md:rounded-2xl">
        <img
          src={heroImg}
          alt="Profile banner"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#111114] md:to-transparent" />
      </div>

      {/* Avatar + Character — positioned over the banner bottom edge */}
      <div className="absolute bottom-4 md:bottom-14 left-4 right-4 md:left-6 md:right-6 flex items-end justify-between translate-y-1/3">

        {/* Avatar — larger on desktop */}
        <div className="relative">
          <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-3 border-white/40 overflow-hidden bg-gray-800 shadow-xl">
            <img
              src={profileImg}
              alt="Profile image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Game character — larger on desktop */}
        <div className="h-44 w-32 lg:h-52 lg:w-40 flex items-end justify-center">
          <img
            src={characterImg}
            alt="Character"
            className="h-full w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Spacer so content below clears the overlapping avatar */}
      <div className="h-10 md:h-14 lg:h-16" />
    </div>
  )
}
