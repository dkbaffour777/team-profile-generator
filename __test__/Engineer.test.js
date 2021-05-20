const Engineer = require('../lib/Engineer');

test('Creates an engineer object', () => {
    const github = "k34ds";
    const engineer1 = new Engineer(github);

    expect(typeof engineer1).toBe("object");

    expect(engineer1.getGithub()).toBe("k34ds");
    expect(engineer1.getGithub()).toEqual(expect.any(String));

    expect(engineer1.getRole()).toBe("Engineer");
    expect(engineer1.getRole()).toEqual(expect.any(String));
});