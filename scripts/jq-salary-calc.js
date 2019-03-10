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




/*******************************************************************************
*** FUNCTION DEFINITIONS *******************************************************
*******************************************************************************/

// DOM initialization, event listeners
// These things will happen once the DOM has loaded.
function readyNow() {
  console.log( 'in readyNow' );


  //----------------------------------------------------------------------------
  // DOM INIT ------------------------------------------------------------------
  //----------------------------------------------------------------------------

  // display TotalMonthly as $0

  /* Define Object literal. Hold all DOM strings in one place for easy
  access/mutation. This cannot be defined before the DOM is; that's why it's in
  this method. */
//  getUserInputs();


  //----------------------------------------------------------------------------
  // EVENT LISTENERS -----------------------------------------------------------
  //----------------------------------------------------------------------------

  // listen for click on btn-submit, add an employee
  $( '#btn-submit').on( 'click', createEmployee );

}


//------------------------------------------------------------------------------
// EVENT HANDLERS --------------------------------------------------------------
//------------------------------------------------------------------------------

/*
 When btn-submit is clicked,
 - create an Employee object
 - push Employee into allEmployees array
 - calculate totalMonthly variable
 - refresh DOM
  - render the table and it's contents with the allEmployees array
  - render the total monthly with the totalMonthly variable
*/




//------------------------------------------------------------------------------
// OTHER FUNCTIONS -------------------------------------------------------------
//------------------------------------------------------------------------------

function test() {
  console.log( 'in test' );

  let result = 0;

  return result;
}



// create an Employee object using info currently in DOM input fields
function createEmployee() {
  console.log( 'in createEmployee' );

  // get user inputs into an object
  getUserInputs();

  let emp = new Employee(
    window.DOMstrings.first,
    window.DOMstrings.last,
    window.DOMstrings.idNum,
    window.DOMstrings.ttl,
    window.DOMstrings.annSal
  );

  console.log( emp );

// add an Employee object to allEmployees array.
  allEmployees.push( emp );

  // return emp object
  return emp;
}



function getUserInputs() {
  console.log( 'in getUserInputs' );

  // create an employee object literal
  window.DOMstrings = {
    first: $( '#in-first-name' ).val(),
    last: $( '#in-last-name' ).val(),
    idNum: $( '#in-id' ).val(),
    ttl: $( '#in-title' ).val(),
    annSal: $( '#in-annual-sal' ).val(),
  };

  return window.DOMstrings;
}




function removeEmployee() {
  console.log('in removeEmployee');
}

//calculate totalMonthly variable
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



function renderTableData(){

}

