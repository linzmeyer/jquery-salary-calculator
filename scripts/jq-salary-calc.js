/*******************************************************************************
*** Globals ********************************************************************
*******************************************************************************/

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
*** FUNCTION DEFINITIONS * A-Z *************************************************
*******************************************************************************/

function costWarning() {
  console.log( 'in costWarning' );
  if ( totalMonthly > 20000 ) {
    $( '#div-total-monthly' ).addClass( 'warning' );
  }
  else {
    $( '#div-total-monthly' ).removeClass( 'warning' );
  }
}

function createEmployeeObj( inputs ) {
  console.log( 'in createEmployeeObj' );
  inputs = new Employee(
    window.DOMstrings.first,
    window.DOMstrings.last,
    window.DOMstrings.idNum,
    window.DOMstrings.ttl,
    window.DOMstrings.annSal
  );
  return inputs;
}

function getUserInputs() {
  console.log( 'in getUserInputs' );
  // create an employee object literal and store user inputs in it.
  window.DOMstrings = {
    first: $( '#in-first-name' ).val(),
    last: $( '#in-last-name' ).val(),
    idNum: $( '#in-id' ).val(),
    ttl: $( '#in-title' ).val(),
    annSal: $( '#in-annual-sal' ).val(),
  };
  return window.DOMstrings;
}

// DOM initialization, event listeners
// These things will happen once the DOM has loaded.
function readyNow() {
  console.log( 'in readyNow' );
  // display totalMonthly value in DOM
  $( '#div-total-monthly' ).append( `<h3 id="h3-total-monthly">Total Monthly $${ totalMonthly }</h3>` );
  // listen for click event on btn-submit, run submit handler
  $( '#btn-submit').on( 'click', submit );
}

function removeEmployee() {
  console.log('in removeEmployee');
}

function renderDOMData(){
  console.log( 'in renderDOMData' );
  // clear input fields
  $( '.input' ).val( '' );
  // set focus on First Name input field
  $( '#in-first-name' ).focus();
  // remove table data elements and Total Monthly tracker.
  $( '#table1-tbody' ).empty();
  $( '#div-total-monthly' ).empty();
  // loop through allEmployees arr
  for ( let employee of allEmployees ) {
    // store current index in idNum
    let idNum = allEmployees.indexOf( employee );
    // append table data of each employee into table rows.
    $( '#table1-tbody' ).append(
      `<tr id="table1-tbody-tr-${ idNum }">
        <td class="">${ employee.firstName }</td>
        <td class="">${ employee.lastName }</td>
        <td class="">${ employee.id }</td>
        <td class="">${ employee.title }</td>
        <td class="">$${ employee.annualSalary }</td>
      </tr>`
    );
    // if the index is odd
    if ( idNum % 2 !== 0 ) {
      // set backgroud color to light grey
      $( `#table1-tbody-tr-${ idNum }` ).css( 'background-color', '#d9d9d9' );
    }

  }
  // display totalMonthly value in DOM
  $( '#div-total-monthly' ).append( `<h3 id="h3-total-monthly">Total Monthly $${ totalMonthly }</h3>` );
  // add warning class to div-total-monthly if hit warning mark
  costWarning();
}

//calculate totalMonthly variable
function setTotalMonthly( arrEmployees ) {
  console.log( 'in setTotalMonthly' );
  let result = 0;
  for ( let employee of arrEmployees ) {
    result += Number( employee.annualSalary );
  }
  // store value in yearly variable
  let totalYear = result;
  // set monthly variable
  result /= 12;
  return result;
}

/*
 EVENT HANDLER: When btn-submit is clicked, do the things:
  - get user inputs into an object
  - create an Employee object using user inputs
  - add Employee into allEmployees array
  - calculate totalMonthly variable
  - refresh DOM
    - render the table and it's contents with the allEmployees array
    - render the total monthly with the totalMonthly variable
*/
function submit() {
  console.log( 'in submit' );
  // get user inputs into an object
  let userInputs = getUserInputs();
  // create an employee object using user inputs
  let emp = createEmployeeObj( userInputs );
  // add the Employee object to allEmployees array.
  allEmployees.push( emp );
  // calculate totalMonthly variable
  totalMonthly = setTotalMonthly( allEmployees ).toFixed( 2 );
  // refresh DOM
  renderDOMData();
  // return emp object
  return emp;
}
