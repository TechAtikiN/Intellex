// named imports
import { UserButton } from '@clerk/nextjs'
import { getApiLimitCount } from '@/lib/apiLimit'
// default imports
import MobileSidebar from './MobileSidebar'

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount()
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  )
}

export default Navbar
