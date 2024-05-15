"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maqe_bot_1 = require("./maqe-bot");
const process_1 = require("process");
const output = (0, maqe_bot_1.calcXYDirection)(process_1.argv[2]);
console.log('X: %d Y: %d Direction: %s', output.x, output.y, output.direction);
//# sourceMappingURL=index.js.map