const Employee = require('../lib/Employee');

test("can create an object", () => {
    const employee = new Employee();
    expect(typeof(employee).toBe("object"))
})
test('employee name', () => {
    const name = "Ted",
    const employee = new Employee(name);
    expect(employee.name).toBe("Ted");
})