import { Request, RequestHandler, Response } from 'express';

import { Schedule } from '@prisma/client';
import catchAsync from '../../shared/catchAsync';

import httpStatus from 'http-status';
import { sendResponse } from '../../shared/sendResponse';
import { ScheduleService } from './schedule.service';



const createSchedudle: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...scheduleData } = req.body;

    const result = await ScheduleService.createSchedule(scheduleData);

    sendResponse<Schedule>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: '“The schedule has been added successfully',
      data: result,
    });
  }
);

const getAllSchedule: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ScheduleService.getAllSchedule();

    sendResponse<Schedule[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Schedule fetched successfully',

      data: result,
    });
  }
);

const singleSchedule = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ScheduleService.getsingleSchedule(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Fetch single Schedule successfully',

    data: result,
  });
});

const updateSchedule: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await ScheduleService.updateSchedule(id, updatedData);

    sendResponse<Schedule>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Schedule Update successfully',
      data: result,
    });
  }
);

const deleteSchedule = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ScheduleService.deleteSchedule(id);

  sendResponse<Schedule>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Schedule is deleted successfully',
    data: result,
  });
});

export const ScheduleController = {
  createSchedudle,
  getAllSchedule,
  singleSchedule,
  updateSchedule,
  deleteSchedule
};
