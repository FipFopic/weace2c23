import { cache } from 'react'
import {dbClient} from "@/shared/lib/db";

class CoursesRepository {

  findList = cache((): Promise<CourseElement[]> => dbClient.course.findMany())

  create = cache((command: CreateCourseElementCommand): Promise<CourseElement> => {
    return dbClient.course.create({
      data: command
    })
  })

  delete  = cache((command: DeleteCourseElementCommand): Promise<CourseElement>  => {
    return dbClient.course.delete({
      where: { id: command.id }
    })
  })
}

export const coursesRepository = new CoursesRepository()
