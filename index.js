class Vehicle {
    constructor(model) {
        this.model = model
    }
    drive() {
        return this.model + " " + "drives"
    }
}

class Sedan extends Vehicle {
    constructor(model, backupCamera) {
        super(model)
        this.model = model
        this.backupCamera = backupCamera
    }
    drive() {
        return `${this.model} drives`
    }
}


class Suv extends Vehicle {
    constructor(model, offroadPackage) {
        super(model)
        this.model = model
        this.offroadPackage = offroadPackage

    }
    drive() {
        return `${this.model} drives`
    }
}

class Truck extends Vehicle {
    constructor(model, towingCapacity) {
        super(model)
        this.model = model
        this.towingCapacity = towingCapacity
    }
    drive() {
        return `${this.model} drives`
    }
}

class EVSedan extends Sedan { //this already has the backupCamera from the Suv class
    constructor(model) { //adding recharge to contructor does not work, not sure why....
        super(model)
        this.model = model
        
    }
    drive() {
        return `${this.model} drives`
    }
    recharge() {
        return `${this.model} recharges`
    }
}