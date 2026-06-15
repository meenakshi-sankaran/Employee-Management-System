// Step 2: Base Class Employee
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Employee: ${this.name}, Department: ${this.department}`;
    }
}


// Step 3: Subclass Manager
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `Manager: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`;
    }
}

// Step 4: Create sample employees and managers
const emp1 = new Employee("Alice", "Engineering");
const emp2 = new Employee("Bob", "Marketing");
const mgr1 = new Manager("Charlie", "Engineering", 5);

// Step 5: Company Class
class Company {
    constructor() {
        this.employees = []; // Array to store employees and managers
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}
