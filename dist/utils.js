"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directionCodeToDegree = exports.splitDirectionPoint = exports.splitCommand = void 0;
const splitCommand = (inputCmd) => {
    return inputCmd.match(/([RL]?)+(W[0-9]+)?/g) || [];
};
exports.splitCommand = splitCommand;
const splitDirectionPoint = (inputCode) => {
    const [directionCodes, strPoint = '0'] = inputCode.split('W');
    const point = Number.parseInt(strPoint);
    return { directionCodes, point };
};
exports.splitDirectionPoint = splitDirectionPoint;
const directionCodeToDegree = (directionCodes, startDegree = 0) => {
    let degree = startDegree;
    directionCodes.match(/\w/g)?.forEach((directionCode) => {
        switch (directionCode) {
            case 'L':
                degree += 90;
                break;
            case 'R':
                degree += -90;
                break;
            default:
                throw `Unsupport direction code "${directionCode}"`;
        }
    });
    degree = degree % 360;
    if (degree < 0) {
        degree += 360;
    }
    return degree;
};
exports.directionCodeToDegree = directionCodeToDegree;
//# sourceMappingURL=utils.js.map