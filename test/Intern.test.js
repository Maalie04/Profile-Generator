//import the Employee class from the lib folder
const Intern = require('../lib/Intern');

describe("Intern", () => {
    
        it("should return a object containing a name,id,email, and school properties", () => {
            const name = "Ted";
            const id = "123";
            const email = "jlawson@gmail.com";
            const school = "Frostburg State University";

const intern = new Intern(name,id,email,school);
expect(intern.name).toBe("Ted");
expect(intern.id).toBe("123");
expect(intern.email).toBe("jlawson@gmail.com");
expect(intern.school).toBe("Frostburg State University");
expect(intern.getRole()).toBe("Intern");
    })
})

