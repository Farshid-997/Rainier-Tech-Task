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
exports.OrderService = void 0;
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createOrderService = (order, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new ApiError_1.default(404, 'User not found !');
        }
        const result = yield prisma_1.default.order.create({
            data: {
                userId: user.id,
                orderedBooks: order.orderedBooks,
            },
        });
        return result;
    }
    catch (error) {
        console.error('Error creating order:', error);
        throw new ApiError_1.default(404, 'faield to create Order !');
    }
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findMany({});
    return result;
});
const getOrdersByUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findMany({
        where: { userId: id },
    });
    return result;
});
const getOrdersByIdService = (userId, role, orderId) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (role === 'admin') {
        result = yield prisma_1.default.order.findUnique({
            where: { id: orderId },
        });
    }
    else {
        result = yield prisma_1.default.order.findUnique({
            where: {
                userId: userId,
                id: orderId,
            },
        });
    }
    return result;
});
exports.OrderService = {
    createOrderService,
    getOrdersByUser,
    getAllOrders,
    getOrdersByIdService,
};
