import { describe, expect, test } from '@jest/globals';
import { calcXYDirection } from '../src/maqe-bot';

describe('test calcXYDirection', () => {
    test('command is RW15RW1 should be equal X: 15 Y: -1 Direction: South', () => {
        const result = calcXYDirection('RW15RW1');
        expect(result.x).toEqual(15);
        expect(result.y).toEqual(-1);
        expect(result.direction).toEqual('South');
    });

    test('command is W5RW5RW2RW1R should be equal X: 4 Y: 3 Direction: North', () => {
        const result = calcXYDirection('W5RW5RW2RW1R');
        expect(result.x).toEqual(4);
        expect(result.y).toEqual(3);
        expect(result.direction).toEqual('North');
    });
})