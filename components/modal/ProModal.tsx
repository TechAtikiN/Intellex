'use client'
// named imports
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { useProModal } from '@/hooks/useProModal'
import { DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { tools } from '@/constants'
import { BoltIcon, CheckIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'
import { useState } from 'react'
// default imports
import axios from 'axios'

const ProModal = () => {
  const proModal = useProModal()
  const [loading, setLoading] = useState(false)

  const onSubscribe = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/stripe')
      window.location.href = response.data.url
    } catch (error) {
      console.log(error, 'STRIPE ERROR')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
            <div className='flex items-center gap-x-2 font-bold py-1'>
              Upgrade to Intellex
              <Badge variant={'premium'} className='uppercase text-sm py-1'>pro</Badge>
            </div>
          </DialogTitle>
          <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
            {tools.map((tool, index) => (
              <Card
                key={index}
                className='p-3 border-black/5 flex items-center justify-between'
              >
                <div className='flex items-center gap-x-4'>
                  <div className={`p-2 w-fit rounded-mg ${tool.bgColor}`}>
                    <div className='h-6 w-6'>{tool.icon}</div>
                  </div>
                  <div className='font-semibold text-sm'>{tool.label}</div>
                </div>
                <CheckIcon className='h-6 w-6 text-primary' />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size='lg'
            variant='premium'
            className='w-full font-semibold'
          >
            Upgrade<BoltIcon className='h-5 w-5 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProModal
