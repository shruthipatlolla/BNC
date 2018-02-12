var levelSelected ;
var randomValue ;
var noOfDigits;
var numberOfTrails = 0;

function play(){
    $("#play").removeAttr("style").hide();
    window.alert("Select the level");
    $("#level").show();

}


function selectLevel(selectValue) {
    levelSelected = selectValue.id;
    $("#level").removeAttr("style").hide();
    randomValue = randomValue();
    $("#digits").html("Enter a "+noOfDigits+" digit value");
    $("#formIn").show();
    
}
  
  
function randomValue(){
      if(levelSelected=="easy" ){
        noOfDigits = 2;
        return  Math.floor(Math.random()*90) + 10;
      }
      else if(levelSelected == "medium"){
        noOfDigits = 3;
          return  Math.floor(Math.random()*900) + 100;
      }
      else{
        noOfDigits = 4;
        return Math.floor(Math.random()*9000) + 1000;
      }
  }
  
  
function getBulls(tempRandomNumber,tempEnteredNumber, noOfDigits){
    var bulls = 0;
    for(var i=0;i<noOfDigits;i++){
        if(tempRandomNumber % 10 == tempEnteredNumber % 10) {
            bulls++;
            if(bulls == noOfDigits) {
                alert("Congrats, u r done dis in "+numberOfTrails+" trails");
                window.location.reload();
            }
        }
        tempRandomNumber = parseInt(tempRandomNumber / 10);
        tempEnteredNumber = parseInt(tempEnteredNumber / 10);
        
    }
    return bulls;
  }


function getCows(tempRandomNumber,tempEnteredNumber, noOfDigits){
    var cows = 0;
    var randDigits = [], enteredDigits = [];
    for(var i = 0; i < noOfDigits; i++){
        enteredDigits.push(tempEnteredNumber % 10);
        randDigits.push(tempRandomNumber % 10);
        tempEnteredNumber = parseInt(tempEnteredNumber / 10);
        tempRandomNumber = parseInt(tempRandomNumber / 10);
    }
    for(var i = 0; i < noOfDigits; i++) {
        var digit = enteredDigits[i];
        var position = randDigits.indexOf(digit);
        if(position >= 0) {
            randDigits[position] = null;
            cows++;
        }
    }
    return cows;
  }
function isValid(number,noOfDigits){
    if(number.toString().length == noOfDigits){
        return true;
    }
    else{
        return false;
    }
}
function getBNc(){
    var number = document.getElementById("number").value;
    
    if(!isValid(number,noOfDigits)){
        window.alert("please enter a "+noOfDigits+" digit number");
    }
    else{
    var randomNo = randomValue;
    var tempRandomNumber = randomNo;
    var tempEnteredNumber = number;
   // if(form.isValid()){
    numberOfTrails++;
    //Checking for bulls
   var bulls = getBulls(tempRandomNumber,tempEnteredNumber,noOfDigits);
    
    //Checking for cows
    
    var tempEnteredNumber = number ;
    var tempRandomNumber = randomNo;
    var cows = getCows(tempRandomNumber,tempEnteredNumber,noOfDigits);
    
    cows = cows - bulls;
    var values = new Array(3);
    values[0] = [number, bulls, cows];
    var myTable = document.getElementById("myTable");
   
    var row = myTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = number;
    cell2.innerHTML = bulls;
    cell3.innerHTML = cows;
    }
  }