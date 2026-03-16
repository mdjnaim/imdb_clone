'use client'
import { useTheme } from "next-themes"
import { MdDarkMode, MdLightMode, MdOutlineLightMode } from "react-icons/md"
import { useState, useEffect } from "react"

const DarkMoodeButton = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
        {mounted && (currentTheme === 'dark' ? (
            <MdLightMode onClick={() => setTheme('light')}
            className="text-xl cursor-pointer hover:text-amber-500"/>
        ) : (
            <MdDarkMode onClick={() => setTheme('dark')} className="text-xl cursor-pointer hover:text-amber-500" />
        ))}
    </div>
  )
}

export default DarkMoodeButton