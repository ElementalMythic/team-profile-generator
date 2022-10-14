const Employee = require('../lib/employee')

//use extend to connect to employee

//class ___ extends Employee {

class Intern extends Employee {
    constuctor(name,identification,emailAddress,internSchool) {
        super(name,identification,emailAddress)
        this.internSchool = internSchool
    }
}

// export === module.exports = Manager

module.exports = Intern