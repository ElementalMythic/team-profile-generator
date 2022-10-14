const Employee = require('../lib/employee')

//use extend to connect to employee

//class ___ extends Employee {

class Manager extends Employee {
    constructor(name,identification,emailAddress,managerOffice) {
        super(name,identification,emailAddress)
        this.managerOffice = managerOffice
    }
}

// export === module.exports = Manager

module.exports = Manager

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super





