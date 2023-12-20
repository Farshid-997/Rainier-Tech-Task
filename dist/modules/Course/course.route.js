"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../app/middlewares/auth"));
const user_1 = require("../../enums/user");
const course_controller_1 = require("./course.controller");
const router = express_1.default.Router();
router.post('/create-course', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), course_controller_1.CourseController.createCourse);
router.get('/', course_controller_1.CourseController.getAllCourse);
router.get('/:id', course_controller_1.CourseController.singleCourse);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), course_controller_1.CourseController.updateCourse);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), course_controller_1.CourseController.deleteCourse);
exports.courseRoutes = router;
