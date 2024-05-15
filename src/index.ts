import { calcXYDirection } from "./maqe-bot";
import { argv } from 'process'

const output = calcXYDirection(argv[2]);
console.log('X: %d Y: %d Direction: %s', output.x, output.y, output.direction);
