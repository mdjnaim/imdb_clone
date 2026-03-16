import Link from "next/link"
import MenuItems from "./menuitems"
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
import DarkMoodeButton from "./darkmodeswitch"

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex gap-4">
        <MenuItems title='home' address='/' Icon={<AiFillHome />} />
        <MenuItems title='about' address='/about' Icon={<BsFillInfoCircleFill />} />
      </div>
      <div className="flex gap-4 items-center">
        <DarkMoodeButton />
      <Link href={'/'} className="flex gap-1 items-center">
      <div className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
        <span className="text-xl hidden sm:inline">Clone</span>
        </div>
        </Link>
        </div>
        </div>
  )
}

export default Header