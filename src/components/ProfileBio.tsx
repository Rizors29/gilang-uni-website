import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function ProfileBio() {
  return (
    <div className="px-4 md:px-0 mt-4 space-y-3">
      {/* Bio text */}
      <p className="text-white text-sm font-semibold italic leading-relaxed">
        Terima kasih yang udah follow ~
      </p>

      {/* Social links */}
      <div className="flex items-center gap-2">
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@peanut8819"
          className="w-7 h-7 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors shadow"
          aria-label="YouTube"
          target="_blank"
        >
          <FaYoutube />
        </a>

        {/* TikTok */}
        <a
          href="#"
          className="w-7 h-7 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors border border-gray-700 shadow"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  )
}
