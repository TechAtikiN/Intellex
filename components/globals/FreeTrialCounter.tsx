// named imports
import { useEffect, useState } from 'react'
import { MAX_FREE_COUNTS } from '@/constants'
import { Card, CardContent } from '@/components/ui/card'
import { BoltIcon } from '@heroicons/react/24/outline'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { useProModal } from '@/hooks/useProModal'

interface Props {
  apiLimitCount: number | undefined
}

const FreeTrialCounter = ({ apiLimitCount }: Props) => {
  const proModal = useProModal()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='px-3'>
      <Card className='bg-white/10 border-0'>
        <CardContent className='py-6'>
          <div className='text-center text-sm text-white mb-4 space-y-2'>
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generation
            </p>
            <Progress
              className='h-3'
              value={(apiLimitCount! / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button onClick={proModal.onOpen} variant={'premium'} className='w-full'>
            Upgrade <BoltIcon className='h-5 w-5 fill-white' />
          </Button>
        </CardContent>

      </Card>
    </div>
  )
}

export default FreeTrialCounter
