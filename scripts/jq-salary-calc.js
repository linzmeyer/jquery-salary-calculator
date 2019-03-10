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
*** FUNCTION DEFINITIONS * A-Z *************************************************
*******************************************************************************/

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
  // return object
  return window.DOMstrings;
}



// DOM initialization, event listeners
// These things will happen once the DOM has loaded.
function readyNow() {
  console.log( 'in readyNow' );
  //----------------------------------------------------------------------------
  // DOM INIT ------------------------------------------------------------------
  //----------------------------------------------------------------------------

  // todo: display TotalMonthly as $0
    // display totalMonthly value in DOM

  $( '#div-total-monthly' ).append( `<h3>Total Monthly $${ totalMonthly }</h3>` );
  //----------------------------------------------------------------------------
  // EVENT LISTENERS -----------------------------------------------------------
  //----------------------------------------------------------------------------

  // listen for click on btn-submit, run submit handler
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

    // append table data of each employee into table rows.
    $( '#table1-tbody' ).append(

      `<tr id="table1-tbody-tr-${ allEmployees.indexOf( employee ) }">
        <td>${ employee.firstName }</td>
        <td>${ employee.lastName }</td>
        <td>${ employee.id }</td>
        <td>${ employee.title }</td>
        <td>$ ${ employee.annualSalary }</td>
      </tr>`
    );
  }

  // display totalMonthly value in DOM
  $( '#div-total-monthly' ).append( `<h3>Total Monthly $${ totalMonthly }</h3>` );

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

  console.log( 'total Year', totalYear );
  console.log( 'total Monthly', result );

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



function test() {
  console.log( 'in test' );

  let result = 0;

  return result;
}



function costWarning() {
  if ( totalMonthly > 20000 ) {
    $( '#div-total-monthly' ).addClass( 'warning' );
  }
}
