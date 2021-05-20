const Manager = require('../lib/Manager');

test('Creates a manager object', () => {
    const officeNumber = 4;
    const manager1 = new Manager(officeNumber);

    expect(manager1.officeNumber).toBe(4);
    expect(manager1.officeNumber).toEqual(expect.any(Number));

    expect(manager1.getRole()).toBe("Manager");
    expect(manager1.getRole()).toEqual(expect.any(String));
});