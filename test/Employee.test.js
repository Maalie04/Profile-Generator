const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return a object containing a name,id, and email properties", () => {
            const name = "Ted";
            const id = "123";
            const email = "jlawson@gmail.com";

const employee = new Employee(name,id,email);
expect(employee.name).toEqual("Ted");
expect(employee.id).toEqual("123");
expect(employee.email).toEqual("jlawson@gmail.com");
        })
    })
})
