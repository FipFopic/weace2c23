import {coursesRepository} from "../courses.repository";
import {CourseItem} from "@/features/courses/ui/item";
import {revalidatePath} from "next/cache";

export const CoursesList = async ({ revalidatePagePath }: { revalidatePagePath: string }) => {

  const coursesList = await coursesRepository.findList()

  const handleDelete = async (id: string) => {
    'use server'

    await coursesRepository.delete({ id })
    revalidatePath(revalidatePagePath)
  }

  return (
    <div className="flex flex-col gap-3">
      {
        coursesList.map((course) => (
          <CourseItem course={course} onDelete={handleDelete.bind(null, course.id)} key={course.id} />
        ))
      }
    </div>
  )
}
