console.log("CONTROLLER");

angular
  .module("budgetApp")
  .controller("MainController", MainController);

MainController.$inject = ['$http', '$state'];

function MainController($http, $state){
  var main = this;
  main.credit = 0;
  main.deposit = 0;
  main.creditNote = "";
  main.addCredit = addCredit;
  main.creditHistory = [];
  main.getCreditHistory = getCreditHistory;
  main.totalCredit = totalCredit;
  //Expenses Stuff
  main.expenses = 0;
  main.deduction = 0;
  main.expenseNote = "";
  main.addExpense = addExpense;
  main.expenseHistory = [];
  main.getExpenseHistory = getExpenseHistory;
  main.totalExpense = totalExpense;



  //calculate total credit.. iterates through each credit object in creditHistory array
  function totalCredit(){
    console.log(main.creditHistory);
    main.credit = 0;
    main.creditHistory.forEach(function(obj){
      console.log("this is obj:", obj);
      main.credit += obj.total;
    });
  }

  //fetch all credit records
  //calculate total once those are fetched
  function getCreditHistory(){
    console.log("button clicked");
    $http
      .get('/credits')
      .then(function(response){
        console.log(response.data);
        main.creditHistory = response.data;
        totalCredit();
      });
  }

  //add new transaction to credit
  function addCredit(){
    console.log("Adding: $", main.deposit, main.creditNote);

    var deposit = {
      note: main.creditNote,
      total: main.deposit
    };

    $http
      .post('/credits', deposit)
      .then(function(response){
        var credit = response.data;
        console.log(response.data);
        getCreditHistory();
      });
  }

  //add expense record to database
  //fetch all expense records upon success
  function addExpense(){
    console.log("Deducting: $", main.deduction, main.expenseNote);

    var deduction = {
      note: main.expenseNote,
      total: main.deduction
    };

    $http
      .post('/expenses', deduction)
      .then(function(response){
        var credit = response.data;
        console.log(response.data);
        getExpenseHistory();
      });
  }

  //fetch all expense records
  //calculate total once those are fetched
  function getExpenseHistory(){
    console.log("button clicked");
    $http
      .get('/expenses')
      .then(function(response){
        console.log(response.data);
        main.expenseHistory = response.data;
        totalExpense();
      });
  }

  //calculate total expenses.. iterates through each credit object in creditHistory array
  function totalExpense(){
    console.log(main.creditHistory);
    main.expenses = 0;
    main.expenseHistory.forEach(function(obj){
      console.log("this is obj:", obj);
      main.expenses += obj.total;
    });
  }

  //call all records of credits and expenses when controller loads
  getCreditHistory();
  getExpenseHistory();
}
