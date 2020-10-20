"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("./services/controller");
var app = express_1.default();
app.get('/', controller_1.displayUser);
app.listen('3333', function () {
    console.log('servidor está online');
});
