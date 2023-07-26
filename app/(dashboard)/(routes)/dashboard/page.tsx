'use client'
// named imports
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { tools } from '@/constants'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const DashboardPage = () => {
  const router = useRouter()
  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>Explore the power of AI</h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Chat with the smartest AI on the planet. Ask it anything you want and
        </p>
      </div>
      <div className='space-y-4'>
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.label}
            className='p-4 mx-20 space-x-5 border-black/5 flex items-center hover:shadow-lg transition cursor-pointer'
          >
            <div className={`${tool.color} ${tool.bgColor} h-10 w-10 p-2 rounded-md `}>{tool.icon}</div>
            <div>
              <div className='flex items-center space-x-4'>
                <h3 className='text-lg text-gray-600 font-bold'>{tool.label}</h3>
                <ArrowRightIcon className='h-4 w-4 text-gray-600' />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
