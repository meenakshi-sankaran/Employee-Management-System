# Employee-Management-System

An implementation of a simplified Employee Management System using modern JavaScript (ES6) Object-Oriented Programming (OOP) principles. This project demonstrates core OOP concepts including class syntax, constructors, encapsulation, inheritance, and method overriding.

# Features

- Employee Base Class: Encapsulates core profile data (`name`, `department`) and provides a formatting string method.
- Manager Subclass: Inherits from the `Employee` base class using `extends` and `super()`, adding a `teamSize` attribute and overriding the description method.
- Company Class: Serves as a central system to manage an array of employees, allowing dynamic registration and automated listing.

# Concepts Demonstrated

- Inheritance: Utilizing `super()` to pass arguments from the subclass constructor to the parent constructor.
- Method Overriding: Redefining the `describe()` method in the child class to output specialized details.
- Polymorphism: Iterating through a mixed collection of employees and managers and invoking the correct `describe()` logic dynamically.
