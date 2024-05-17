"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maqe_bot_1 = require("./maqe-bot");
const process_1 = require("process");
const utils_1 = require("./utils");
const vector = (0, maqe_bot_1.calcXYDirection)(process_1.argv[2]);
const output = (0, utils_1.vectorText)(vector);
console.log(output);
//# sourceMappingURL=index.js.map