"use strict";
/**
 * This is Class, long story short it's a template.
 */
class Department {
    /**
     * Constructor, a method that works as an intializaitor
     *
     * This kind of parameter is called shorthand initialization. So you dont't have
     * to include the properties like employee above and assign it with "this.properties = param".
     * ex: "private name: string; => constructor(n: string) => this.name: n;"
     *
     * readonly, properties can only be initialize once, can't be change after.
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
        /**
         * Assign a so called "properties" for the class
         *
         * private modifiers moedified the properties to only be able
         * to be accessed by the class instances, i.e inside the class
         * (not even the class that inherit the original class).
         */
        // private id: string;
        // private name: string;
        /**
         * protected modifiers is like private but give inherited
         * class an access
         */
        this.employees = [];
        // this.name = n;
        /**
         * Static prop can't be access inside the class using "this", must use the
         * class name i.e "Department";
         */
        // console.log(Department.fiscalYear);
    }
    /**
     * custom Method here.
     *
     * "this" refer to the thing that responsible on calling
     * the method.
     *
     * "this: Department" means that the thing that responsible
     * for calling the method, must be a instance or have the same
     * properties as Department class.
     *
     * Therefore if accountingCopy doesnt have "name" prop, it will
     * yield an error and if "this: Department" isnt specified this.name
     * will return undefined since "name" prop doesnt exist.
     *
     * To be able to access a method or property without initiating a class,
     * making the class more like "Grouping Mechanism", use statis modefiers.
     */
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
/**
 * Inheritance, to inherit all properties and method
 * of a class to a new class use extends.
 * if constructor is not specified than the parent class
 * is used as default.
 */
class ITDeparment extends Department {
    constructor(id, admins) {
        /**
         * Super calls the constructor of the parent class.
         * do this before using any "this".
         */
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Departmnet - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Acounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    /**
     * get(getter) and set(setter) is to read or set
     * properties that are private but can still be controlled
     * by you like the example below.
     */
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReports(value);
    }
    /**
     * This is called a Singleton Patterns, make sure that a class
     * only has 1 instance and not more.
     * Below things is needed.
     * - private constructor
     * - private static instance
     */
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
const it = new ITDeparment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
// it.employees[2] = "Anna";
it.describe();
it.printEmployeeInformation();
console.log(it);
// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = "Year End Report";
accounting.addReports("Something wrong...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe()
//# sourceMappingURL=classes.js.map