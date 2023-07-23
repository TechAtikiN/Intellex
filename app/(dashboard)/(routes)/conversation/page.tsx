import Heading from "@/components/globals/Heading"
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline"

const ConversationPage = () => {
  return (
    <div>
      <Heading title="Conversation" description="Chat with the smartest AI on the planet." icon={<ChatBubbleLeftRightIcon />} iconColor="text-violet-500" bgColor="bg-violet-500/10" />
    </div>
  )
}

export default ConversationPage
