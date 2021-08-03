//import the Employee class from the lib folder
const Intern = require('../lib/Intern');

describe("Intern", () => {
    
        it("should return a object containing a name,id,email, and school properties", () => {
            const name = "Ted";
            const id = "123";
            const email = "jlawson@gmail.com";
            const school = "Frostburg State University";

const intern = new Intern(name,id,email,school);
expect(intern.name).toEqual("Ted");
expect(intern.id).toEqual("123");
expect(intern.email).toEqual("jlawson@gmail.com");
expect(intern.school).toEqual("Frostburg State University");
    })
})

