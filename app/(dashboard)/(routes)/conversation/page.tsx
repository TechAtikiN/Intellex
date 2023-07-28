'use client'
// named imports
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { formSchema } from './constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChatCompletionRequestMessage } from 'openai'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import BotAvatar from '@/components/globals/BotAvatar'
import { toast } from 'react-hot-toast'
import { useProModal } from '@/hooks/useProModal'

// default imports
import * as z from 'zod'
import Heading from '@/components/globals/Heading'
import axios from 'axios'
import Empty from '@/components/globals/Empty'
import UserAvatar from '@/components/globals/UserAvatar'

const ConversationPage = () => {
  const proModal = useProModal()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
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
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt,
      }
      const newMessages = [...messages, userMessage]

      const response = await axios.post('/api/conversation', {
        messages: newMessages
      })
      // console.log(response.data)
      setMessages((current) => [...current, userMessage, response.data])
      form.reset()

    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen()
      } else {
        toast.error('Something went wrong')
      }

    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title='Conversation'
        description='Chat with the smartest AI on the planet.'
        icon={<ChatBubbleLeftRightIcon />}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
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
                        placeholder='What is the radius of the Sun'
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
          {messages.length === 0 && !isLoading && (
            <Empty label='No Conversation Started' />
          )}
          <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message, index) => (
              <div
                className={`p-8 w-full flex items-center gap-x-8 rounded-lg ${message.role === 'user' ? 'bg-white border border-black/10' : 'bg-muted'}`}
                key={index}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}

                <p className='text-sm'>{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversationPage
