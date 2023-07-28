'use client'
// named imports
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { formSchema } from './constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useProModal } from '@/hooks/useProModal'

// default imports
import * as z from 'zod'
import Heading from '@/components/globals/Heading'
import axios from 'axios'
import Empty from '@/components/globals/Empty'

const MusicPage = () => {
  const proModal = useProModal()
  const [music, setMusic] = useState<string>()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined)
      const response = await axios.post('/api/music', values)
      setMusic(response.data.audio)
      form.reset()

    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen()
      }
    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title='Music Generation'
        description='Turn your prompt into songs'
        icon={<ChatBubbleLeftRightIcon />}
        iconColor='text-yellow-500'
        bgColor='bg-yellow-500/10'
      />
      <div className='mx-10'>
        <div className=''>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='rounded-lg border w-full px-3 py-2 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem
                    className='col-span-12 lg:col-span-10'
                  >
                    <FormControl className='m-0 p-0'>
                      <Input
                        disabled={isLoading}
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        placeholder='Piano solo'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className='col-span-12 lg:col-span-2 w-full' disabled={isLoading}>Generate</Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {isLoading && (
            <Empty label='Intellex is thinking' />
          )}
          {!music && !isLoading && (
            <Empty label='No Music Generated' />
          )}
          {music && (
            <audio controls className='w-full mt-8'>
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  )
}

export default MusicPage
