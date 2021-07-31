const Employee = require("./Employee");
//Intern extends the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.Intern;
    }
}