"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcXYDirection = void 0;
const enums_1 = require("./enums");
const utils_1 = require("./utils");
const calcXYDirection = (cmdInput) => {
    let vector = { x: 0, y: 0, direction: enums_1.Direction.North };
    let lastDegree = 0;
    const cmdCodes = (0, utils_1.splitCommand)(cmdInput);
    for (let i = 0; i < cmdCodes.length; i++) {
        const cmdCode = cmdCodes[i];
        const { directionCodes, point } = (0, utils_1.splitDirectionPoint)(cmdCode);
        const degree = (0, utils_1.directionCodeToDegree)(directionCodes, lastDegree);
        switch (degree) {
            case 0:
                vector.y += point;
                vector.direction = enums_1.Direction.North;
                break;
            case 90:
                vector.x -= point;
                vector.direction = enums_1.Direction.West;
                break;
            case 180:
                vector.y -= point;
                vector.direction = enums_1.Direction.South;
                break;
            case 270:
                vector.x += point;
                vector.direction = enums_1.Direction.East;
                break;
            default:
                throw `Unknown direction ${degree}`;
        }
        lastDegree = degree;
    }
    return vector;
};
exports.calcXYDirection = calcXYDirection;
//# sourceMappingURL=maqe-bot.js.map