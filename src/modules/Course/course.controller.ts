import { Request, RequestHandler, Response } from 'express';

import { Course } from '@prisma/client';
import catchAsync from '../../shared/catchAsync';

import httpStatus from 'http-status';
import { sendResponse } from '../../shared/sendResponse';
import { CourseService } from './course.service';



// create course
const createCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...courseData } = req.body;

    const result = await CourseService.createCourse(courseData);

    sendResponse<Course>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: '“The course has been added successfully',
      data: result,
    });
  }
);


const getAllCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    

    const result = await CourseService.getAllcourses();

    sendResponse<Course[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course fetched successfully',

      data: result,
    });
  }
);

const singleCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await CourseService.getsingleCourse(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Fetch single Course successfully',

    data: result,
  });
});

const updateCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await CourseService.updateCourse(id, updatedData);

    sendResponse<Course>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course updated successfully',
      data: result,
    });
  }
);

const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await CourseService.deleteCourse(id);

  sendResponse<Course>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is deleted successfully',
    data: result,
  });
});

export const CourseController = {
 createCourse,
 getAllCourse,
 singleCourse,
 updateCourse,
 deleteCourse
};
