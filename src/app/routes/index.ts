import express from 'express';
import { courseRoutes } from '../../modules/Course/course.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/courses',
    route: courseRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
