const AddProjects = require("./AddProjects")
// @ponicode
describe("handleSubmit", () => {
    let inst

    beforeEach(() => {
        inst = new AddProjects.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleSubmit(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleSubmit(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleSubmit(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleSubmit(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleSubmit(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleSubmit(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
