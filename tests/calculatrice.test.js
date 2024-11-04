import {describe, it, expect} from "vitest";

describe('addition test', () => {

    it ('simple addition', () => {

        expect(addition(1,1)).toEqual(2)
    })

    it ('addition little more harder', () => {
        expect(addition(175,32)).toEqual(207)
    })
})

describe('multiplication test', () => {

    it ('simple multiplication', () => {

        expect(multiplication(1,1)).toEqual(1)
    })

    it ('multipication a little more harder', () => {
        expect(multiplication(175,32)).toEqual(5600)
    })
})

describe('subtraction', () => {
    it('should return the difference of two positive numbers', () => {
        expect(soustraction(10, 5)).toBe(5);
    });

    it('should return a negative number if the first number is smaller', () => {
        expect(soustraction(1758, 220)).toBe(1538);
    });

    it('should return zero if both numbers are equal', () => {
        expect(soustraction(5, 5)).toBe(0);
    });
});
