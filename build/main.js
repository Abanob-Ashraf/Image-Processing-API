"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
// create an instance server
const app = (0, express_1.default)();
// HTTP request logger middleware
app.use((0, morgan_1.default)('short'));
// // add routing for / path
app.use('/', api_1.default);
// start express server
app.listen(PORT, () => {
    console.log(`Server is starting at http://localhost:prot:${PORT}`);
});
exports.default = app;
