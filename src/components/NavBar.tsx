import UniIcon from '../assets/uni.png';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 lg:px-8 py-3 border-b border-gray-800 sticky top-0 bg-black/50 backdrop-blur-md z-20">
      {/* Brand */}
      <a href="https://www.uniplaying.com/" target='_blank'>        
        <div className="flex items-center gap-2 flex">
          <img src={UniIcon} alt="Uni Craft your world" className='w-6 h-6'/>
          Uni <span className="text-purple-400 font-semibold text-sm">Craft your world</span>
        </div>
      </a>
      <div>
        <p className='text-semibold hidden md:flex'>Hello there 😄</p>
      </div>
    </nav>
  )
}
