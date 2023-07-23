// named imports
import { UserButton } from "@clerk/nextjs"
// default imports
import MobileSidebar from "./MobileSidebar"

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
