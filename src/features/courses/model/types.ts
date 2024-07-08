
type CourseElement = {
  id: string
  name: string
  description: string
}

type CreateCourseElementCommand = {
  name: string
  description: string
}

type DeleteCourseElementCommand  =  {
  id: string
}
