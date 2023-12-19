import { PrismaClient, Schedule } from '@prisma/client';
import ApiError from '../../errors/ApiError';

const prisma = new PrismaClient();

const createSchedule = async (schedule: Schedule): Promise<Schedule | null> => {
  const result = await prisma.schedule.create({
    data: schedule,
  });
  if (!result) {
    throw new ApiError(400, 'failed to create schedule');
  }
  return result;
};

const getAllSchedule = async (): Promise<Schedule[]> => {
  const result = await prisma.schedule.findMany();
  return result;
};

const getsingleSchedule = async (id: string): Promise<Schedule | null> => {
  const result = await prisma.schedule.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateSchedule = async (
  id: string,
  payload: Partial<Schedule>
): Promise<Schedule> => {
  const result = await prisma.schedule.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteSchedule = async (id: string): Promise<Schedule> => {
  const result = await prisma.schedule.delete({
    where: {
      id,
    },
  });
  return result;
};

export const ScheduleService = {
 createSchedule,
 getAllSchedule,
 getsingleSchedule,
 updateSchedule,
 deleteSchedule
};
