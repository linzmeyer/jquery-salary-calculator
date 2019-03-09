// Globals

// class to create all Employee instances
class Employee {
  constructor( firstName, lastName, id, title, annualSalary ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.annualSalary = annualSalary;
  }
}

// array to hold all employee objects
let allEmployees = [];

// Variable to hold totalMonthly salaries for all Employees
let totalMonthly = 0;

/*******************************************************************************
*** Application Start **********************************************************
*******************************************************************************/

// initialize the page
$( document ).ready( readyNow );


let chase = new Employee( 'Chase', 'Linzmeyer', 1234, 'Web Developer', 80000 );

allEmployees.push( chase );

totalMonthly = getTotalMonthly( allEmployees );







/*******************************************************************************
*** FUNCTION DEFINITIONS *******************************************************
*******************************************************************************/

// DOM initialization, event listeners
function readyNow() {

  console.log( 'in readyNow' );



  //----------------------------------------------------------------------------
  // DOM INIT ------------------------------------------------------------------
  //----------------------------------------------------------------------------


  //----------------------------------------------------------------------------
  // EVENT LISTENERS -----------------------------------------------------------
  //----------------------------------------------------------------------------


}


//------------------------------------------------------------------------------
// EVENT HANDLERS --------------------------------------------------------------
//------------------------------------------------------------------------------





//------------------------------------------------------------------------------
// OTHER FUNCTIONS -------------------------------------------------------------
//------------------------------------------------------------------------------
function getTotalMonthly( arrEmplyees ) {
  console.log( 'in getTotalMonthly' );

  let total = 0;

  for ( let employee of arrEmplyees ) {
    total += employee.annualSalary;
  }

  let totalYear = total;

  total /= 12;

  console.log( 'total Year', totalYear );
  console.log( 'total Monthly', totalMonthly );

  return total;
}




