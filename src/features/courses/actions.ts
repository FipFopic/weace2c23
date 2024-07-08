'use server'

import {revalidatePath} from "next/cache";
import {coursesRepository} from "./courses.repository";

export const createCourseAction = async (command: CreateCourseElementCommand, revalidatePagePath: string) => {

  await coursesRepository.create(command)
  revalidatePath(revalidatePagePath)
}
