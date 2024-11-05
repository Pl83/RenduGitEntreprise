import {describe, it, expect} from "vitest";
import { division, multiplication, addition, soustraction } from "../main.js" 

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

describe('division', () => {
    it('should return the result of dividing two positive numbers', () => {
        expect(division(10, 2)).toBe(5);
    });

    it('should return a decimal when dividing numbers that do not divide evenly', () => {
        expect(division(7, 2)).toBeCloseTo(3.5);
    });

    it('should return 1 when dividing a number by itself', () => {
        expect(division(5, 5)).toBe(1);
    });

    it('should return 0 when dividing 0 by a positive number', () => {
        expect(division(0, 5)).toBe(0);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => division(5, 0)).toThrow("Cannot divide by zero");
    });
})
