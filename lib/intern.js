const Employee = require('../lib/employee')

//use extend to connect to employee

//class ___ extends Employee {

class Manager extends Employee {
    constuctor(name,identification,emailAddress,managerOffice) {
        super(name,identification,emailAddress)
        this.managerOffice = managerOffice
    }
}

// export === module.exports = Manager

module.exports = Manager