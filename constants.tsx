import {
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  MusicalNoteIcon,
  PhotoIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'

export const MAX_FREE_COUNTS = 5

export
  const tools = [
    {
      label: 'Conversation',
      icon: <ChatBubbleLeftRightIcon />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      href: '/conversation',
    },
    {
      label: 'Music Generation',
      icon: <MusicalNoteIcon />,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      href: '/music',
    },
    {
      label: 'Image Generation',
      icon: <PhotoIcon />,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: <VideoCameraIcon />,
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10',
      href: '/video',
    },
    {
      label: 'Code Generation',
      icon: <CodeBracketIcon />,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      href: '/code',
    },
  ]
