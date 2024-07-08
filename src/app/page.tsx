import {CreateCourseForm} from "@/features/courses/pub/create-form";
import {CoursesList} from "@/features/courses/pub/list";

export default async function Home() {


  return (
    <main className="flex min-h-screen flex-col p-8">
      <CreateCourseForm revalidatePagePath="/" className="w-[300px] mb-10" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
