'use client'

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/shared/ui/input";
import {Textarea} from "@/shared/ui/textarea";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useTransition} from "react";
import {createCourseAction} from "@/features/courses/actions";
import {Button} from "@/shared/ui/button";
import {cn} from "@/shared/ui/utils";


const createFormSchema = z.object({
  name: z.string(),
  description: z.string(),
})

interface Props {
  revalidatePagePath: string
  className?: string
}

export const CreateCourseForm = (props: Props) => {

  const { revalidatePagePath, className } = props

  const [isCreateLoading, startCreateTransition] = useTransition()

  const form = useForm({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      name: '',
      description: ''
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data: any) => {
        startCreateTransition(() => {
          createCourseAction(data, revalidatePagePath).then()
        });
      })} className={cn(className, "space-y-8")}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder="Название..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder="Описание..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreateLoading}>Добавить</Button>
      </form>
    </Form>
  )
}
