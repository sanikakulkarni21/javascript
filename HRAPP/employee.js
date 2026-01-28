
class Employee{
    //initialize the employee object
    //in javascript we have only one constructor alloued per class
   
    constructor(id ,name, basicSalary, hra,tax){

        this,id=id;      //here we declare and initialize the instance or member variable
        this.name=name;
        this.basicSalary=basicSalary;
        this.hra=hra;
        this.tax=tax;


    }
 
    computePay(){
        return this.basicSalary + this.hra -this.tax;
    }

    doWork(){
        throw new Error('method "doWork()"must be implemented ');

    }

}
export default Employee;