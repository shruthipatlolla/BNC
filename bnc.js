
function calc() {
    var name = document.getElementById("value1").value;
    document.getElementById("pTag").innerHTML = "hello, Welcome "+name;
    
  }
  var randomValue =  Math.floor(Math.random()*9000) + 1000;
  
  var numberOfTrails = 0;

  function getBNc(){
    var number = document.getElementById("number").value;
    
    
    var randomNo = randomValue;
     
    var bulls = 0, cows = 0;
    var tempRandomNumber = randomNo;
    var tempEnteredNumber = number;
   // if(form.isValid()){
    numberOfTrails++;
    //Checking for bulls
    for(var i=0;i<4;i++){
        if(tempRandomNumber % 10 == tempEnteredNumber % 10) {
            bulls++;
            if(bulls == 4) {
                alert("Congrats, u r done dis in "+numberOfTrails+" trails");
                window.location.reload();
            }
        }
        tempRandomNumber = parseInt(tempRandomNumber / 10);
        tempEnteredNumber = parseInt(tempEnteredNumber / 10);
    }
    
    //Checking for cows
    var tempEnteredNumber = number ;
    var tempRandomNumber = randomNo;
    var randDigits = [], enteredDigits = [];
    for(var i = 0; i < 4; i++){
        enteredDigits.push(tempEnteredNumber % 10);
        randDigits.push(tempRandomNumber % 10);
        tempEnteredNumber = parseInt(tempEnteredNumber / 10);
        tempRandomNumber = parseInt(tempRandomNumber / 10);
    }
    for(var i = 0; i < 4; i++) {
        var digit = enteredDigits[i];
        var position = randDigits.indexOf(digit);
        if(position >= 0) {
            randDigits[position] = null;
            cows++;
        }
    }
    cows = cows - bulls;
    var values = new Array(3);
    values[0] = [number, bulls, cows];
    var myTable = document.getElementById("myTable");
   
    var row = myTable.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = number;
    cell2.innerHTML = bulls;
    cell3.innerHTML = cows;
  }