import { AiFillHome } from "react-icons/ai";

import {
  MdSubscriptions,
  MdHistory,
  MdPlaylistPlay,
  MdVideoLibrary,
  MdWatchLater,
  MdThumbUp,
  MdSettings,
  MdFlag,
  MdHelpOutline,
  MdFeedback
} from "react-icons/md";
import {

  IoIosMusicalNotes,
  IoMdVideocam,
 
  IoMdTrophy
} from "react-icons/io";
import {
  FaFireAlt,
  FaRegUserCircle,
  FaYoutube,
  FaYoutubeSquare,

} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";



 export const navItems = [
  {
    title: null,
    items: [
      { icon: <AiFillHome />, name: "Anasayfa", path: "/" },
      { icon: <SiYoutubeshorts />, name: "Shorts", path: "/" },
      { icon: <MdSubscriptions />, name: "Abonelikler", path: "/" },
    ],
  },
  {
    title: "Siz",
    items: [
      { icon: <MdHistory />, name: "Geçmiş", path: "/" },
      { icon: <MdPlaylistPlay />, name: "Oynatma listeleri", path: "/" },
      { icon: <MdVideoLibrary />, name: "Videolarınız", path: "/" },
      { icon: <MdWatchLater />, name: "Daha sonra izle", path: "/" },
      { icon: <MdThumbUp />, name: "Beğendiğim videolar", path: "/" },
    ],
  },
  {
    title: "Keşfet",
    items: [
      { icon: <FaFireAlt />, name: "Trendler", path: "/?category=trendler" },
      { icon: <IoIosMusicalNotes />, name: "Müzik", path: "/?category=müzik" },
      { icon: <IoMdVideocam />, name: "Canlı", path: "/?category=canlı" },
      { icon: <IoGameController />, name: "Oyun", path: "/?category=oyun" },
      { icon: <IoMdTrophy />, name: "Spor", path: "/?category=spor" },
    ],
  },
  {
    title: "YouTube'dan daha fazla",
    items: [
      { icon: <FaYoutube  className="text-red-500" />, name: "YouTube Premium", path: "/" },
     
      { icon: <FaYoutube className="text-red-500" />, name: "YouTube Music", path: "/" },
      { icon: <FaYoutube  className="text-red-500"/>, name: "YouTube Kids", path: "/" },
    ],
  },
  {
    title: null,
    items: [
      { icon: <MdSettings />, name: "Ayarlar", path: "/" },
      { icon: <MdFlag />, name:"İçerik bildirme geç...", path: "/" },
      { icon: <MdHelpOutline />, name: "Yardım", path: "/" },
      { icon: <MdFeedback />, name: "Geri Bildirim Gönder", path: "/" },
    ],
  },
];


export const collapsednavItems=[

      { icon: <AiFillHome />, name: "Anasayfa", path: "/" },
      { icon: <SiYoutubeshorts />, name: "Shorts", path: "/" },
      { icon: <MdSubscriptions />, name: "Abonelikler", path: "/" },
      { icon: <FaRegUserCircle />, name: "Siz", path: "/" },
  
]


