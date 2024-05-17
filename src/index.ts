import { calcXYDirection } from "./maqe-bot";
import { argv } from 'process'
import { vectorText } from "./utils";

const vector = calcXYDirection(argv[2]);
const output = vectorText(vector);
console.log(output);
