import express from 'express';
import auth from '../../app/middlewares/auth';
import { ENUM_USER_ROLE } from '../../enums/user';
import { ScheduleController } from './schedule.controller';


const router = express.Router();
router.post('/', auth(ENUM_USER_ROLE.ADMIN), ScheduleController.createSchedudle);

router.get('/', ScheduleController.getAllSchedule);

router.get('/:id', ScheduleController.singleSchedule);

router.patch(
  '/:id',

  ScheduleController.updateSchedule
);
router.delete(
  '/books/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ScheduleController.deleteSchedule
);

export const scheduleRoutes = router;
