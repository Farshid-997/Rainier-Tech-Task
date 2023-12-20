import express from 'express';
import auth from '../../app/middlewares/auth';
import { ENUM_USER_ROLE } from '../../enums/user';
import { CourseController } from './course.controller';


const router = express.Router();
router.post('/create-course', auth(ENUM_USER_ROLE.ADMIN), CourseController.createCourse);

router.get('/', CourseController.getAllCourse);



router.get('/:id', CourseController.singleCourse);

router.patch(
  '/:id',
 
  CourseController.updateCourse
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CourseController.deleteCourse
);


export const courseRoutes = router;
