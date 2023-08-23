class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(501, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(301, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(401, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(201, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(101, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(701, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(601, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahi];
arrayEmployees.sort((a,b)=> {
//    ----- using sort with if else -----
    // if (a.emp_id>b.emp_id) {
    //     return +1;
    // }else if (a.emp_id<b.emp_id) {
    //     return -1;
    // }else{
    //     return 0;
    // }
   return (a.emp_name>b.emp_name) ? +1 : -1 ; /*----- using ternary oprerator -----*/
})
arrayEmployees.forEach((employee)=>{
console.log(`Sorting Employee name by ascending order: ${employee.emp_id}, ${employee.emp_name}`);
})
// employee details in ascending order of their name
console.table(arrayEmployees);

// using sort method only
arrayEmployees.sort((a,b)=>{return a.emp_id - b.emp_id});
arrayEmployees.forEach((empObject)=>{
    console.log(`Sorting Employee id by ascending order: ${empObject.emp_id}, ${empObject.emp_name}`);
})

