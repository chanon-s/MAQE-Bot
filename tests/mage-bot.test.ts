import { describe, expect, test } from '@jest/globals';
import { calcXYDirection } from '../src/maqe-bot';
import { Vector } from '../src/types';
import { Direction } from '../src/enums';
import { vectorText } from '../src/utils';

describe('test vectorText', () => {
    test('input x=100, y=-50, direction=North should be return "X: 100 Y: -50 Direction: North"', () => {
        const vector: Vector = { x: 100, y: -50, direction: Direction.North }
        const output = vectorText(vector);
        expect(output).toEqual("X: 100 Y: -50 Direction: North");
    })
})

describe('test calcXYDirection', () => {

    test.each([
        ['RW15RW1', 15, -1, 'South'],
        ['W5RW5RW2RW1R', 4, 3, 'North'],
        ['RRW11RLLW19RRW12LW1', 7, -12, 'South'],
        ['LLW100W50RW200W10', -210, -150, 'West'],
        ['LLLLLW99RRRRRW88LLLRL', -99, 88, 'East'],
        ['W55555RW555555W444444W1', 1000000, 55555, 'East']
    ])('command is %s should be equal X: %d Y: %d Direction: %s', (cmd, x, y, d) => {
        const result = calcXYDirection(cmd);
        expect(result.x).toEqual(x);
        expect(result.y).toEqual(y);
        expect(result.direction).toEqual(d);
    });

})