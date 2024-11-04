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
