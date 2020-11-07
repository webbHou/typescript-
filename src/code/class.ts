
class Control {
    protected state: any;
    constructor(name: string) { this.state = name; }
}

interface SelectableControl extends Control {
    select(w:string): void;
}

class Button extends Control implements SelectableControl {
    constructor(name: string) {
        super(name);
    }
    select() { }
    
}

class TextBox extends Control {
    
}

// 错误：“Image”类型缺少“state”属性。
class Images extends Control implements SelectableControl {
    select() { 
        this.state
    }
    
}


let passcode = "secret passcode";

class Employee {
     _fullName!: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}

let kkk:Employee = {
    _fullName: '22',
    fullName: '2'
}

