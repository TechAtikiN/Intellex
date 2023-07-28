// named imports
import { getApiLimitCount } from '@/lib/apiLimit'
import { checkSubscription } from '@/lib/subscription'
// default imports
import Navbar from '@/components/globals/Navbar'
import Sidebar from '@/components/globals/Sidebar'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()

  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 bg-gray-800'>
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className='md:pl-72'>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
