"use client"
// named imports
import { ChatBubbleLeftRightIcon, VideoCameraIcon, ArrowRightIcon, MusicalNoteIcon, PhotoIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const tools = [
  {
    label: "Conversation",
    icon: <ChatBubbleLeftRightIcon />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/conversation",
    description: "Chat with the smartest AI on the planet. Ask it anything you want and it will answer you in a human-like way."
  },
  {
    label: "Music Generation",
    icon: <MusicalNoteIcon />,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/music",
    description: "Generate music with the power of AI. You can generate music in any genre you want."
  },
  {
    label: "Image Generation",
    icon: <PhotoIcon />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/image",
    description: "Generate images with the power of AI. You can generate images in any genre you want."
  },
  {
    label: "Video Generation",
    icon: <VideoCameraIcon />,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    href: "/video",
    description: "Generate videos with the power of AI. You can generate videos in any genre you want."
  },
  {
    label: "Code Generation",
    icon: <CodeBracketIcon />,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/code",
    description: "Generate code with the power of AI. You can generate code in any language you want."
  },


]

const DashboardPage = () => {
  const router = useRouter()
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the power of AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI on the planet. Ask it anything you want and
        </p>
      </div>
      <div className="space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.label}
            className="p-4 mx-20 space-x-5 border-black/5 flex items-center hover:shadow-lg transition cursor-pointer"
          >
            <div className={`${tool.color} ${tool.bgColor} h-10 w-10 p-2 rounded-md `}>{tool.icon}</div>
            <div>
              <div className="flex items-center space-x-4">
                <h3 className="text-lg text-gray-600 font-bold">{tool.label}</h3>
                <ArrowRightIcon className="h-4 w-4 text-gray-600" />
              </div>
              <p className="text-muted-foreground font-light md:text-sm">{tool.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
