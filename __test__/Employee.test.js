const Employee = require('../lib/Employee');

test('Creates an employee object', () => {
    const name = "Kofi";
    const id = 1;
    const email = "kofi323@gmail.com";
    const employee1 = new Employee(name, id, email);

    expect(employee1.getName()).toBe("Kofi");
    expect(employee1.getName()).toEqual(expect.any(String));

    expect(employee1.getId()).toBe(1);
    expect(employee1.getId()).toEqual(expect.any(Number));

    expect(employee1.getEmail()).toBe("kofi323@gmail.com");
    expect(employee1.getEmail()).toEqual(expect.any(String));

    expect(employee1.getRole()).toBe("Employee");
    expect(employee1.getRole()).toEqual(expect.any(String));
});