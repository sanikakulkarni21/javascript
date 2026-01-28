import Employee from './employee.js';
import SalesEmployee from './salesEmployee.js';
import SalesManager from './salesManager.js';
//import IAppraisable from './Interfaces/IApprisable.js';
//import ITrainer from './Interfaces/ITrainer.js';

/*var emptype= typeof Employee;
console.log(emptype);

var salesEmp= typeof SalesEmployee;
console.log(salesEmp);

var salesmanager= typeof SalesManager;
console.log(salesmanager);
*/


var emp = new Employee(23,"sanika",50000,2000,4000);
console.log(emp);
console.log(`Employee pay is :${emp.computePay()}`);
emp.computePay();



var salesEmp= new SalesEmployee (45,"amol",60000,3000,5000,7000);
console.log(salesEmp);
console.log(`Sales Employee pay is :${salesEmp.computePay()}`);
salesEmp.doWork();
console.log(salesEmp.computePay());

var salesManager= new SalesManager (67,"ram",80000,4000,6000,10000,15000);
console.log(salesManager);
console.log(`Sales Manager pay is :${salesManager.computePay()}`);





