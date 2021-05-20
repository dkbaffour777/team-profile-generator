const Intern = require('../lib/Intern');

test('Creates an intern object', () => {
    const school = 'UofA';
    const intern1 = new Intern(school);
    
    expect(typeof intern1).toBe("object");

    expect(intern1.getSchool()).toBe("UofA");
    expect(intern1.getSchool()).toEqual(expect.any(String));

    expect(intern1.getRole()).toBe("Intern");
    expect(intern1.getRole()).toEqual(expect.any(String));
});