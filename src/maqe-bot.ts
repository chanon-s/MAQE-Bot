import { Direction } from "./enums";
import { Vector } from "./types";
import { directionCodeToDegree, splitCommand, splitDirectionPoint } from "./utils";

export const calcXYDirection = (cmdInput: string): Vector => {
    let vector: Vector = { x: 0, y: 0, direction: Direction.North };
    let lastDegree: number = 0;
    const cmdCodes = splitCommand(cmdInput);
    for (let i = 0; i < cmdCodes.length; i++) {
        const cmdCode = cmdCodes[i];
        const { directionCodes, point } = splitDirectionPoint(cmdCode);
        const degree = directionCodeToDegree(directionCodes, lastDegree);
        switch (degree) {
            case 0:
                vector.y += point;
                vector.direction = Direction.North;
                break;
            case 90:
                vector.x -= point;
                vector.direction = Direction.West;
                break;
            case 180:
                vector.y -= point;
                vector.direction = Direction.South;
                break;
            case 270:
                vector.x += point;
                vector.direction = Direction.East;
                break;
            default:
                throw `Unknown direction ${degree}`
        }

        lastDegree = degree;
    }
    return vector;
}