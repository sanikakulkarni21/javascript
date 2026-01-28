import Employee from './employee.js';

class salesEmployee extends Employee {

    constructor(id, name ,basicSalary, hra,tax, commission){
           super(id, name, basicSalary,hra , tax);
           this.commission=commission;
    }

    computePay(){
        return (super.computePay() + this.commission);
    }

    doWork(){
        console.log("SalesEmployee is Working");

    }

    conductTraining(){
        console.log("SalesEmployee is conducting training");

    }


    conductHandsOnSession(){
        console.log("salesEmployee is conducting Hands-On Session");

    }
}

export default salesEmployee;