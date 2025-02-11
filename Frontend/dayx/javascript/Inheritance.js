class Employee {
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    worked(){
        console.log('emp is worked');
    }

    work(){
        console.log('emp is working');
    }
}

class Developer extends Employee {
    work() {
        console.log("Dev is coding");
        
    }
}

class Tester extends Employee {
    Testing() {
        console.log("Testing s/w");
        
    }
}

d1 = new Developer('akash', 1);
d1.work();
d1.worked();

t1 = new Tester("Zubair", 2);
t1.Testing();
t1.worked();