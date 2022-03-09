type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

/**
 * Intersection Type, intersect / combine 2 types
 * if its an Object, it combine both object.
 * if its a Union Type it take the common type that exist in both union type.
 */
type ElevatedEmployee = Admin & Employee; 

const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if(typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    /**
     * Type Guard to check if a "privileges" property exist in the
     * emp variable.
     */
    if("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}

printEmployeeInformation({name: "Manu", startDate: new Date()});

class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log("Driving a Truck...");
    }

    loadCargo(amount: number) {
        console.log("Loading cargo... " + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    /**
     * Type Guard to check if vehicle variable is created ( instance of ) based of Truck class.
     */
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

/**
 * "type: 'bird'" here is called Dicrimated Unions, which goes the same way
 * for horse.
 * The use is that these two object has a same property that describe the said object
 * which can be used when creating Union Type to check what kind of object 
 * does this variable is as per the example below in the switch statement inside moveAnimal function.
 */
interface Bird {
    type: "bird";
    flyingSpeed: number;
};

interface Horse {
    type: "horse";
    runningSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case "bird": 
            speed = animal.flyingSpeed;
            break;
        case "horse": 
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving with speed: " + speed);
};

moveAnimal({type: "bird", flyingSpeed: 200})