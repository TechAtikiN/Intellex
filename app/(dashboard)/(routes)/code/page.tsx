"use client"
// named imports
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { ChatCompletionRequestMessage } from "openai"
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { CodeBracketIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// default imports
import * as z from "zod"
import Heading from "@/components/globals/Heading"
import axios from "axios"
import Empty from "@/components/globals/Empty"
import UserAvatar from "@/components/globals/UserAvatar"
import BotAvatar from "@/components/globals/BotAvatar"
import ReactMarkdown from "react-markdown"

const CodePage = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const router = useRouter()

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  })

  const isLoading = form.formState.isSubmitting

  // API call to generate code
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      }
      const newMessages = [...messages, userMessage]

      const response = await axios.post("/api/code", {
        messages: newMessages
      })
      // console.log(response.data)
      setMessages((current) => [...current, userMessage, response.data])
      form.reset()


    } catch (error) {
      // TODO: Open pro modal 
      console.log(error)
    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title="Code Generation"
        description="Generate code using descriptive text"
        icon={<CodeBracketIcon />}
        iconColor="text-sky-700"
        bgColor="bg-sky-700/10" />
      <div className="mx-10">
        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full px-3 py-2 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem
                    className="col-span-12 lg:col-span-10"
                  >
                    <FormControl className="m-0 p-0">
                      <Input
                        disabled={isLoading}
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        placeholder="Simple toggle button using react and tailwindcss"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>Generate</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <Empty label="Intellex is thinking" />
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No Conversation Started" />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                className={`p-8 w-full flex items-center gap-x-8 rounded-lg ${message.role === "user" ? "bg-white border border-black/10" : "bg-muted"}`}
                key={index}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    )
                  }}
                  className="text-sm overflow-hidden leading-7"
                >
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodePage
