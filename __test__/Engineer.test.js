const Engineer = require('../lib/Engineer');

test('Creates an engineer object', () => {
    const name = "Wofi";
    const id = 2;
    const email = "Wofi3033@gmail.com";
    const github = "Wofi32";
    const engineer1 = new Engineer(name, id, email, github);

    expect(typeof engineer1).toBe("object");

    expect(engineer1.getName()).toBe("Wofi");
    expect(engineer1.getName()).toEqual(expect.any(String));

    expect(engineer1.getId()).toBe(2);
    expect(engineer1.getId()).toEqual(expect.any(Number));

    expect(engineer1.getEmail()).toBe("Wofi3033@gmail.com");
    expect(engineer1.getEmail()).toEqual(expect.any(String));

    expect(engineer1.getGithub()).toBe("Wofi32");
    expect(engineer1.getGithub()).toEqual(expect.any(String));

    expect(engineer1.getRole()).toBe("Engineer");
    expect(engineer1.getRole()).toEqual(expect.any(String));
});