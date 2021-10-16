const rewire = require("rewire")
const Board = rewire("./Board")
const validator = Board.__get__("validator")
// @ponicode
describe("validator", () => {
    test("0", () => {
        let callFunction = () => {
            validator({ name: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            validator({ name: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            validator({ name: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            validator({ name: "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            validator({ name: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            validator({ name: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
