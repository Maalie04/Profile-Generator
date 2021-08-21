//import the Employee class from the lib folder
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    
        it("should return a object containing a name,id,email, and github properties", () => {
            const name = "Ted";
            const id = "123";
            const email = "jlawson@gmail.com";
            const github = "github/Maalie04.com";

const engineer = new Engineer(name,id,email,github);
expect(engineer.name).toBe("Ted");
expect(engineer.id).toBe("123");
expect(engineer.email).toBe("jlawson@gmail.com");
expect(engineer.github).toBe("github/Maalie04.com")
expect(engineer.getRole()).toBe("Engineer");
    })
})

