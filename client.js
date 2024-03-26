// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
const employee = 
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  };
console.log(employee.name);


// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
if(employee.reviewRating === 3){
   employee.annualSalary * 0.04;
   console.log(employee.annualSalary * 0.04);
  }
  else if(employee.reviewRating === 4){
    employee.annualSalary * 0.06;
    console.log(employee.annualSalary * 0.06);
   }
   else if(employee.reviewRating === 5){
    employee.annualSalary * 0.10;
    console.log(employee.annualSalary * 0.10);
   }
 else if(employee.number >= 7000){ //Ask matt about this 
    employee.annualSalary * 0.05;
    console.log(employee.annualSalary * 0.05);
   }
   else if(employee.annualSalary <= 65000){
    let adjustedBonus= employee.annualSalary * 0.01;
   }
  // return new object with bonus results

}
calculateIndividualEmployeeBonus(employee);
console.log(employee.reviewRating);
