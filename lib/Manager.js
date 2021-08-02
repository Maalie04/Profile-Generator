const Employee = require("./Employee");
//Manager extends the Employee class
class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
     this.officeNumber = officeNumber;
    }

    getRole() {
        return this.Manager;
    }
}
