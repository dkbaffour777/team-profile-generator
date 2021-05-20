const Manager = require('../lib/Manager');

test('Creates a manager object', () => {
    const name = "Kwame";
    const id = 23;
    const email = "Kwame@gmail.com";
    const officeNumber = 4;
    const manager1 = new Manager(name, id, email, officeNumber);

    expect(typeof manager1).toBe("object");

    expect(manager1.getName()).toBe("Kwame");
    expect(manager1.getName()).toEqual(expect.any(String));

    expect(manager1.getId()).toBe(23);
    expect(manager1.getId()).toEqual(expect.any(Number));

    expect(manager1.getEmail()).toBe("Kwame@gmail.com");
    expect(manager1.getEmail()).toEqual(expect.any(String));

    expect(manager1.officeNumber).toBe(4);
    expect(manager1.officeNumber).toEqual(expect.any(Number));

    expect(manager1.getRole()).toBe("Manager");
    expect(manager1.getRole()).toEqual(expect.any(String));
});