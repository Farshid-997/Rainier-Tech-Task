"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../app/middlewares/auth"));
const user_1 = require("../../enums/user");
const schedule_controller_1 = require("./schedule.controller");
const router = express_1.default.Router();
router.post('/create-schedule', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), schedule_controller_1.ScheduleController.createSchedudle);
router.get('/', schedule_controller_1.ScheduleController.getAllSchedule);
router.get('/:id', schedule_controller_1.ScheduleController.singleSchedule);
router.patch('/:id', schedule_controller_1.ScheduleController.updateSchedule);
router.delete('/books/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), schedule_controller_1.ScheduleController.deleteSchedule);
exports.scheduleRoutes = router;
