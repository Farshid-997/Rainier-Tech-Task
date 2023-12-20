"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const client_1 = require("@prisma/client");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma = new client_1.PrismaClient();
const createCourse = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.course.create({
        data: {
            id: course.id,
            name: course.name,
            description: course.description,
            price: course.price,
            duration: course.duration,
            level: course.level,
            topics: course.topics,
            schedule: course.schedule,
        },
    });
    if (!result) {
        throw new ApiError_1.default(400, 'failed to create course');
    }
    return result;
});
const getAllcourses = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.course.findMany();
    return result;
});
const getsingleCourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.course.findUnique({
        where: {
            id: id,
        },
    });
    return result;
});
const updateCourse = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.course.update({
        where: {
            id,
        },
        data: Object.assign(Object.assign({}, payload), { schedule: payload.schedule }),
    });
    return result;
});
const deleteCourse = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.course.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.CourseService = {
    createCourse,
    getAllcourses,
    getsingleCourse,
    updateCourse,
    deleteCourse
};
