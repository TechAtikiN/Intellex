'use client'
// name imports
import { Button } from '@/components/ui/button'
import { BoltIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast'
// default imports
import axios from 'axios'
import { useState } from 'react'

interface SubscriptionButtonProps {
  isPro: boolean
}
const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/stripe')
      window.location.href = response.data.url
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button disabled={loading} variant={isPro ? 'default' : 'premium'} onClick={handleClick}>
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <BoltIcon className='w-4 h-4 ml-2 fill-white' />}
    </Button>
  )
}

export default SubscriptionButton
