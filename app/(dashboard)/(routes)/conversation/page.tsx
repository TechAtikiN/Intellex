"use client"
// named imports
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline"
import { useForm } from "react-hook-form"
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { Button } from "@/components/ui/button"

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div>
      <Heading title="Conversation" description="Chat with the smartest AI on the planet." icon={<ChatBubbleLeftRightIcon />} iconColor="text-violet-500" bgColor="bg-violet-500/10" />
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
                        placeholder="What is the radius of the Sun"
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
        <div className="space-y-4 mt-4">Messages Content</div>
      </div>
    </div>
  )
}

export default ConversationPage
