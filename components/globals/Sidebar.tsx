"use client"
// named imports
import { HomeIcon, ChatBubbleLeftRightIcon, PhotoIcon, VideoCameraIcon, MusicalNoteIcon, CodeBracketIcon, CogIcon } from "@heroicons/react/24/outline"
import { usePathname } from 'next/navigation'
// default imports
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  {
    href: "/dashboard",
    icon: <HomeIcon />,
    title: "Dashboard",
    color: "text-sky-500"
  },
  {
    href: "/conversation",
    icon: <ChatBubbleLeftRightIcon />,
    title: "Conversation",
    color: "text-pink-500"
  },
  {
    href: "/image",
    icon: <PhotoIcon />,
    title: "Image Generation",
    color: "text-purple-500"
  },
  {
    href: "/video",
    icon: <VideoCameraIcon />,
    title: "Video Generation",
    color: "text-yellow-500"
  },
  {
    href: "/music",
    icon: <MusicalNoteIcon />,
    title: "Music Generation",
    color: "text-green-500"
  },
  {
    href: "/code",
    icon: <CodeBracketIcon />,
    title: "Code Generation",
    color: "text-orange-500"
  },
  {
    href: '/settings',
    icon: <CogIcon />,
    title: 'Settings',
    color: 'text-emerald-500'
  }
]

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className="flex flex-col space-y-4 py-4 h-full bg-gray-900 text-white">
      <div className="px-3 py-2">
        <Link className="" href="/dashboard">
          <Image className="mx-auto" src="/logo.png" width={120} height={80} alt="logo" />
        </Link>
      </div>
      <div className="flex flex-col space-y-4 mx-10">
        {navLinks.map((link, index) => (
          <Link className={`hover:bg-slate-800 px-3 py-2 rounded-xl ${link.href === pathname ? "bg-slate-800" : null}`} href={link.href} key={link.href}
          >
            <div className="flex justify-start items-center">
              <div className={`h-6 w-6 ${link.color}`}>{link.icon}</div>
              <div className="ml-2 font-semibold text-gray-300">{link.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
