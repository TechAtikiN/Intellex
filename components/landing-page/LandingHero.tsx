'use client'
import { useAuth } from "@clerk/nextjs"
import Link from "next/link"
import TypeWriterComponet from 'typewriter-effect'
import { Button } from "../ui/button"

const LandingHero = () => {
  const { isSignedIn } = useAuth()
  return (
    <div className='text-white font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1>The<span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-purple-600 to-pink-700'> BEST AI Tool </span> for</h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-300 to-pink-600'>
          <TypeWriterComponet
            options={{
              strings: ['Chatbot', 'Photo Generation', 'Code Generation', 'Image Generation', 'Music Generation', 'Video Generation'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='text-sm md:text-xl font-light text-zinc-400'>
        Create content using AI like never before.
      </div>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant={'premium'}
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold'
          >
            Start Now For Free
          </Button>
        </Link>
      </div>
      <div className='text-zinc-400 text-xs md:text-sm font-normal'>
        No Credit card required
      </div>
    </div>
  )
}

export default LandingHero
