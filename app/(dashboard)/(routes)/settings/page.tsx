// named imports
import { CogIcon } from '@heroicons/react/24/outline'
// export imports
import Heading from '@/components/globals/Heading'
import { checkSubscription } from '@/lib/subscription'
import SubscriptionButton from '@/components/settings/SubscriptionButton'

const SettingsPage = async () => {
  const isPro = await checkSubscription()
  return (
    <div>
      <Heading
        title='Settings'
        description='Manage account settings'
        icon={<CogIcon />}
        iconColor='text-gray-700'
        bgColor='bg-gray-700/10'
      />
      <div className='px-4 lg:px-8 space-y-4'>
        <div className='text-muted-foreground text-sm '>
          {isPro ? "You are on a pro plan" : "You are on a free plan"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  )
}

export default SettingsPage
