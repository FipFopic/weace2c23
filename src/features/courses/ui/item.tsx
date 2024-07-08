'use client'

import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/ui/card";
import {Button} from "@/shared/ui/button";
import {useTransition} from "react";

interface Props {
  course: CourseElement
  onDelete: () => void
}

export const CourseItem = (props: Props) => {
  const { course, onDelete} = props

  const [isLoadingDelete, startDeleteTransition] = useTransition()
  const handleDelete = () => {
    startDeleteTransition(() => {
      onDelete()
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{ course.name }</CardTitle>
        <CardDescription>{ course.description }</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>Удалить</Button>
      </CardFooter>
    </Card>
  )
}
