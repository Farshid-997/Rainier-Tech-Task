import express from 'express';
import { courseRoutes } from '../../modules/Course/course.route';
import { scheduleRoutes } from '../../modules/schedule/schedule.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/courses',
    route: courseRoutes,
  },

  {
    path: '/schedule',
    route: scheduleRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
