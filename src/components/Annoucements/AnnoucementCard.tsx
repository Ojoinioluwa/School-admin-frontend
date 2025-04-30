import { Avatar } from "@mui/material";
import { CiSearch } from "react-icons/ci";

function AnnouncementCard() {
  return (
    // Main container
    <div className="w-full  p-4 bg-gray-50 border border-gray-300 rounded-lg hover:bg-purple-50 transition-all duration-300 ease-in-out">
      {/* Heading Section */}
      <div className="flex justify-between items-start gap-4">
        {/* Right side (Avatar + Heading) */}
        <div className="flex gap-3 items-center">
          <Avatar />
          <div>
            <h5 className="text-xl sm:text-2xl font-bold text-gray-800">
              Welcome Back to School
            </h5>
            <p className="text-sm text-gray-500">By Principal Ojo Inioluwa</p>
          </div>
        </div>

        {/* Left side (Date + Views) */}
        <div className="flex gap-3 items-center">
          <time className="bg-white p-2 rounded-full text-xs text-gray-500">
            March 26, 2005
          </time>
          <div className="flex items-center gap-2 text-gray-500">
            <CiSearch />
            <p className="text-sm">23,000</p>
          </div>
        </div>
      </div>

      {/* Announcement Description */}
      <p className="text-xs text-gray-600 mt-2 line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        voluptatibus totam numquam nulla beatae cum. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Corrupti, sequi.
      </p>
    </div>
  );
}

export default AnnouncementCard;
