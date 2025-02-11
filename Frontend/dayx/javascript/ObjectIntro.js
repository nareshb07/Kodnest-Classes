class Employee {
    work() {
        console.log("working");
    }

    eat() {
        console.log("eatting");
    }

    code(){
        console.log("coding");
        
    }

}

e1 = new Employee();
e2 = new Employee(); 

e1.work()
e1.eat()
e1.code()


class Student {
    JavaCourse(){
        console.log("This is JavaCourse");
        
    }

    pythonCourse(){
        console.log("This is pythonCourse");
    }
}

s1 = new Student();
s2 = new Student();

s1.JavaCourse()
s2.pythonCourse()
