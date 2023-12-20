import express from 'express';
import { courseRoutes } from '../../modules/Course/course.route';
import { authRoutes } from '../../modules/auth/auth.route';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },

  {
    path: '/course',
    route: courseRoutes,
  },

 
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
