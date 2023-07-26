'use client'
// named imports
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { ChatBubbleLeftRightIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
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

const VideoPage = () => {
  const proModal = useProModal()
  const [video, setVideo] = useState<string>()
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
      setVideo(undefined)
      const response = await axios.post('/api/video', values)
      setVideo(response.data[0])
      // console.log(response.data)
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
        title='Video Generation'
        description='Turn your prompt into videos'
        icon={<VideoCameraIcon />}
        iconColor='text-emerald-500'
        bgColor='bg-emerald-500/10'
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
                        placeholder='Starfish swimming in the deep blue sea'
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
          {!video && !isLoading && (
            <Empty label='No video Generated' />
          )}
          {video && (
            <video controls className='w-full mt-8 aspect-video rounded-lg border bg-black'>
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoPage
