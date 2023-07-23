"use client"
// named imports
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// default imports
import Sidebar from "./Sidebar"

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileSidebar
