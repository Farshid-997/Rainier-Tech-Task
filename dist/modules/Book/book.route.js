"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../app/middlewares/auth"));
const user_1 = require("../../enums/user");
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/books/create-book', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.createBook);
router.get('/books', book_controller_1.BookController.getBooks);
router.get('/books', book_controller_1.BookController.getBooks);
router.get('/books/:id', book_controller_1.BookController.getBooksbyId);
router.patch('/books/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.updateBook);
router.delete('/books/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.deleteBook);
router.get('/books/:categoryId/category', book_controller_1.BookController.getBooksbyCategory);
exports.BookRoutes = router;
