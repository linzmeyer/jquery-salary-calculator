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
  $( '#btn-submit').on( 'click', submit );

}


//------------------------------------------------------------------------------
// EVENT HANDLERS --------------------------------------------------------------
//------------------------------------------------------------------------------

/*
 When btn-submit is clicked,
 - create an Employee object using user inputs
 - push Employee into allEmployees array
 - calculate totalMonthly variable
 - refresh DOM
  - render the table and it's contents with the allEmployees array
  - render the total monthly with the totalMonthly variable
*/
// create an Employee object using info currently in DOM input fields
function submit() {
  console.log( 'in submit' );

  // get user inputs into an object
  let userInputs = getUserInputs();

  // create an employee object using user inputs
  let emp = createEmployeeObj( userInputs );

  // add the Employee object to allEmployees array.
  allEmployees.push( emp );

  // calculate totalMonthly variable
  setTotalMonthly();

  // refresh DOM
  renderDOMData();

  // return emp object
  return emp;
}



//------------------------------------------------------------------------------
// OTHER FUNCTIONS -------------------------------------------------------------
//------------------------------------------------------------------------------

function test() {
  console.log( 'in test' );

  let result = 0;

  return result;
}



function createEmployeeObj( inputs ) {

  inputs = new Employee(
    window.DOMstrings.first,
    window.DOMstrings.last,
    window.DOMstrings.idNum,
    window.DOMstrings.ttl,
    window.DOMstrings.annSal
  );
  return inputs;
}



//calculate totalMonthly variable
function setTotalMonthly( arrEmployees ) {
  console.log( 'in setTotalMonthly' );

  let result = 0;

  for ( let employee of arrEmployees ) {
    result += employee.annualSalary;
  }

  // store value in yearly variable
  let totalYear = result;

  // set monthly variable
  result /= 12;

  console.log( 'total Year', totalYear );
  console.log( 'total Monthly', totalMonthly );

  return result;
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



function renderDOMData(){
  console.log( 'in renderDOMData' );

  // remove all data
  $( '.input' ).val( '' );
  $( '#in-first-name' ).focus();


  // append all data


}

