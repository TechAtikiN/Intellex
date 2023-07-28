'use client'
import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const LandingNavbar = () => {
  const { isSignedIn } = useAuth()
  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-300 to-pink-600'>Intellex</h1>
      </Link>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant={'outline'} className='rounded-full'>
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavbar
