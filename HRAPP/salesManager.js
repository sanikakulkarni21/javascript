import salesEmployee from './salesEmployee.js';

class salesManager extends salesEmployee{

constructor(id ,name,basicSalary,hra,tax,commission,bonus){
    super(id,name,basicSalary,hra,tax,commission);
    this.bonus=bonus;
}

 computePay(){
    return (super.computePay() + this.bonus);
 }

 doWork(){
    console.log("SalesManager is working");

 
}

conductTraining(){

    console.log("salesManager is conducting training");
}

conductHandsOnSession(){
    console.log("salesManagrer is conducting Hands-On Session");
}
}

export default salesManager;
