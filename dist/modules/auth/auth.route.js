"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post('/auth/signup', auth_controller_1.authController.createUser);
router.post('/auth/signin', auth_controller_1.authController.loginUser);
router.post('/auth/refresh-token', auth_controller_1.authController.getRefreshToken);
exports.authRoutes = router;
