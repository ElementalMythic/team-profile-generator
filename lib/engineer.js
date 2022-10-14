const Employee = require('../lib/employee')

//use extend to connect to employee

//class ___ extends Employee {

class Engineer extends Employee {
    constructor(name, identification, emailAddress, engineerGithub) {
        super(name, identification, emailAddress)
        this.engineerGithub = engineerGithub
    }
}

// export === module.exports = Manager

module.exports = Engineer 