import { Course, Prisma, PrismaClient } from '@prisma/client';
import ApiError from '../../errors/ApiError';



const prisma = new PrismaClient();

const createCourse = async (course: Course): Promise<Course | null> => {
  const result = await prisma.course.create({
    data: {
      id: course.id,
      name: course.name,
      description: course.description,
      price: course.price,
      duration: course.duration,
      level: course.level,
      topics: course.topics,
      schedule: course.schedule as Prisma.JsonObject,
    },
  });
  if (!result) {
    throw new ApiError(400, 'failed to create course');
  }
  return result;
};

const getAllcourses = async (): Promise<Course[]> => {
  const result = await prisma.course.findMany();

  return result;
};


const getsingleCourse = async (id: string): Promise<Course | null> => {
  const result = await prisma.course.findUnique({
    where: {
      id: id,
    },
   
  });
  return result;
};

const updateCourse = async (
  id: string,
  payload: Partial<Course>
): Promise<Course> => {
  const result = await prisma.course.update({
    where: {
      id,
    },
    data: {
      ...payload,
      schedule: payload.schedule as Prisma.JsonObject, // Explicitly cast to Prisma.JsonObject
    },
  });
  return result;
};




const deleteCourse = async (id: string): Promise<Course> => {
  const result = await prisma.course.delete({
    where: {
      id,
    },
  });
  return result;
};


export const CourseService = {
 createCourse,
 getAllcourses,
 getsingleCourse,
 updateCourse,
 deleteCourse
};
