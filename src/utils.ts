import { Vector } from "./types";

export const splitCommand = (inputCmd: string) => {
    return inputCmd.match(/([RL]?)+(W[0-9]+)?/g) || [];
}

export const splitDirectionPoint = (inputCode: string) => {
    const [directionCodes, strPoint = '0'] = inputCode.split('W');
    const point = Number.parseInt(strPoint);
    return { directionCodes, point };
}

export const directionCodeToDegree = (directionCodes: string, startDegree: number = 0) =>{
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
}

export const vectorText = (vector: Vector) => {
    return `X: ${vector.x} Y: ${vector.y} Direction: ${vector.direction}`;
}