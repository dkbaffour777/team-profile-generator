const Intern = require('../lib/Intern');

test('Creates an intern object', () => {
    const name = "Asamoah";
    const id = 213;
    const email = "Asamoah@gmail.com";
    const school = 'UofA';
    const intern1 = new Intern(name, id, email, school);
    
    expect(typeof intern1).toBe("object");

    expect(intern1.getName()).toBe("Asamoah");
    expect(intern1.getName()).toEqual(expect.any(String));

    expect(intern1.getId()).toBe(213);
    expect(intern1.getId()).toEqual(expect.any(Number));

    expect(intern1.getEmail()).toBe("Asamoah@gmail.com");
    expect(intern1.getEmail()).toEqual(expect.any(String));

    expect(intern1.getSchool()).toBe("UofA");
    expect(intern1.getSchool()).toEqual(expect.any(String));

    expect(intern1.getRole()).toBe("Intern");
    expect(intern1.getRole()).toEqual(expect.any(String));
});