import Link from "next/link"

const MenuItems = ({ title, address, Icon }) => {
  return (
    <Link href={address} className="hover:text-amber-500">
     <div className="text-2xl sm:hidden">{Icon}</div>
     <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  )
}

export default MenuItems