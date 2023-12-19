"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const book_route_1 = require("./modules/Book/book.route");
const category_route_1 = require("./modules/Category/category.route");
const order_route_1 = require("./modules/Order/order.route");
const auth_route_1 = require("./modules/auth/auth.route");
const user_route_1 = require("./modules/user/user.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1', auth_route_1.authRoutes);
app.use('/api/v1', user_route_1.UserRoutes);
app.use('/api/v1', category_route_1.CategoryRoutes);
app.use('/api/v1', book_route_1.BookRoutes);
app.use('/api/v1', order_route_1.OrderRoutes);
app.get('/', (req, res) => {
    res.send('Hello Book Catalog Server 📚!');
});
//global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
