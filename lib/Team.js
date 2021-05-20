const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');
const pageTemplate = require('../src/team-profile-template');
const fs = require('fs');

class Team {
    constructor() {
        this.teamInfo = {
            manager: null,
            engineer: [],
            intern: [],
        };
    }

    start() {
        this.getManagerInfo(false);
    }

    teamMemberQuestion() {
        return [
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: `Do you want add an employee (just hit enter for YES)?`,
                default: true,
            },
            {
                type: 'list',
                name: 'teamMember',
                message: 'Select the employee you\'ll like to add to your team',
                choices: [
                    'Engineer',
                    'Intern'
                ],
                when: ({ confirmAddEmployee }) => confirmAddEmployee,
                filter: (val) => {
                    return val.toLowerCase();
                },
            },
        ];
    }

    getManagerInfo(isCommonInfoFilled, commonInfo = null) {
        if(isCommonInfoFilled) {
            // Get the rest of the manager info if the common info is filled out
            inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'officeNumber',
                    message: `Please enter the office number of the Manager for the team: (Required)`,
                    validate: officeNumber => {
                        if (officeNumber) {
                            return true;
                        } else {
                            console.log(` Error => Please fill out the Manager\'s office number (Values should be numbers only)!`);
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'teamMember',
                    message: 'Select the employee you\'ll like to add to your team',
                    choices: [
                        'Engineer',
                        'Intern'
                    ],
                    filter: (val) => {
                        return val.toLowerCase();
                    },
                },
            ])
            .then(managerInfo => {
                const { name, id, email } = commonInfo;
                const { officeNumber } = managerInfo;
                this.teamInfo.manager = new Manager(name, id, email, officeNumber);
                switch (managerInfo.teamMember) {
                    case "engineer":
                        return this.getEngineerInfo(false);
                    case "intern":
                        return this.getInternInfo(false);
                }
            });
        } else  this.getCommonInfo("manager"); // Get the common info if not filled 

    }

    askManagerQuestion(question) {
        inquirer
            .prompt(question)
            .then(managerInfo => {
                if(managerInfo.confirmAddEmployee) {
                    switch (managerInfo.teamMember) {
                        case "engineer":
                            return this.getEngineerInfo(false);
                        case "intern":
                            return this.getInternInfo(false);
                    }
                } else this.end();
            });
    }

    getCommonInfo(role) {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `Please enter the name of the ${role} for the team: (Required)`,
                    validate: name => {
                        if (name) {
                            return true;
                        } else {
                            console.log(` Error => Please fill out the ${role}\'s name!`);
                            return false;
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'id',
                    message: `Please enter the ID of the ${role} for the team: (Required)`,
                    validate: id => {
                        if (id) {
                            return true;
                        } else {
                            console.log(` Error => Please fill out the ${role}\'s ID! (Values must be numbers only)`);
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `Please enter the email of the ${role} for the team: (Required)`,
                    validate: email => {
                        if (email) {
                            return true;
                        } else {
                            console.log(` Error => Please fill out the ${role}\'s email!`);
                            return false;
                        }
                    }
                },
            ])
            .then(commonInfo => {
                // Send the common info to it's respective employees
                switch (role) {
                    case "manager":
                        return this.getManagerInfo(true, commonInfo);
                    case "engineer":
                        return this.getEngineerInfo(true, commonInfo);
                    case "intern":
                        return this.getInternInfo(true, commonInfo);
                    default:
                        console.log("role not found");
                        break;
                }
            })
    }

    getEngineerInfo(isCommonInfoFilled, commonInfo = false) {
        if(isCommonInfoFilled) {
            // Get the rest of the engineer info if the common info is filled out
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: `Please enter the github of the engineer for the team: (Required)`,
                        validate: github => {
                            if (github) {
                                return true;
                            } else {
                                console.log(` Error => Please fill out the engineer\'s github`);
                                return false;
                            }
                        }
                    },
                ])
                .then(engineerInfo => {
                    const { name, id, email } = commonInfo;
                    const { github } = engineerInfo;
                    const { engineer } = this.teamInfo
                    this.teamInfo.engineer = [...engineer, new Engineer(name, id, email, github)];
                    this.askManagerQuestion(this.teamMemberQuestion());
                });
        } else this.getCommonInfo("engineer");

    }
    
    getInternInfo(isCommonInfoFilled, commonInfo = null) {
        isCommonInfoFilled ?
            // Get the rest of the intern info if the common info is filled out
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: `Please enter the school of the intern for the team: (Required)`,
                        validate: school => {
                            if (school) {
                                return true;
                            } else {
                                console.log(` Error => Please fill out the intern\'s school`);
                                return false;
                            }
                        }
                    },
                ])
                .then(internInfo => {
                    const { name, id, email } = commonInfo;
                    const { school } = internInfo;
                    const { intern } = this.teamInfo
                    this.teamInfo.intern = [...intern, new Intern(name, id, email, school)];
                    this.askManagerQuestion(this.teamMemberQuestion());
                })

            :
            // Get the common info if not filled out
            this.getCommonInfo("intern");
    }

    end() {
        const data = pageTemplate(this.teamInfo);
        fs.writeFile('./dist/index.html', data, () => console.log("success! Check the 'dist' folder for the index.html file"));
    }
}

module.exports = Team;