import NavbarItems from "./navbaritem"

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4">
        <NavbarItems title='Trending' param='fetchTrending' />
        <NavbarItems title='Top Rated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar