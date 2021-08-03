//import the Employee class from the lib folder
const Manager = require('../lib/Manager');

describe("Manager", () => {
    
        it("should return a object containing a name,id,email, and github properties", () => {
            const name = "Ted";
            const id = "123";
            const email = "jlawson@gmail.com";
            const officeNumber = "BL35";

const manager = new Manager(name,id,email,officeNumber);
expect(manager.name).toEqual("Ted");
expect(manager.id).toEqual("123");
expect(manager.email).toEqual("jlawson@gmail.com");
expect(manager.officeNumber).toEqual("BL35");
    })
})

