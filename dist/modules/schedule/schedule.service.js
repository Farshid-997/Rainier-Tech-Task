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
exports.ScheduleService = void 0;
const client_1 = require("@prisma/client");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma = new client_1.PrismaClient();
const createSchedule = (schedule) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.schedule.create({
        data: schedule,
    });
    if (!result) {
        throw new ApiError_1.default(400, 'failed to create schedule');
    }
    return result;
});
const getAllSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.schedule.findMany();
    return result;
});
const getsingleSchedule = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.schedule.findUnique({
        where: {
            id: id,
        },
    });
    return result;
});
const updateSchedule = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.schedule.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteSchedule = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.schedule.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.ScheduleService = {
    createSchedule,
    getAllSchedule,
    getsingleSchedule,
    updateSchedule,
    deleteSchedule
};
