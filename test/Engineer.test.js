//import the Employee class from the lib folder
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    
        it("should return a object containing a name,id,email, and github properties", () => {
            const name = "Ted";
            const id = "123";
            const email = "jlawson@gmail.com";
            const github = "github/Maalie04.com";

const engineer = new Engineer(name,id,email,github);
expect(engineer.name).toEqual("Ted");
expect(engineer.id).toEqual("123");
expect(engineer.email).toEqual("jlawson@gmail.com");
expect(engineer.github).toEqual("github/Maalie04.com")
    })
})

