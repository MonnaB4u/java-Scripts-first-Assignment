// feetToMile


function feetToMile(feet){

    var sum = feet/5280;
    return sum;
}
var feetMile= feetToMile(1);
console.log(feetMile);

//woodCalculator

function woodCalculator(chair, table, bed){

var chairCount =chair * 10;
var tableCount= table * 30;
var bedCount= bed * 50;
var totalCount=chairCount + tableCount + bedCount;
return totalCount;

}
var totalResult=woodCalculator(2,4,2);
console.log(totalResult);

// tinyFriend


function tinyFriend(numbers){
    var tiny =numbers[0];
    for(var i=0; i<numbers.length; i++){
    var fList = numbers[i];
    if(fList.length < tiny.length){
    tiny = fList;
    }
    }
    return tiny;
    }
    var friendsList = ["monna", "sam","bappaRaj", "asifAhmed", "apurba"];
    console.log(tinyFriend(friendsList));




// brickCalculator

function brickCalculator(numberOfFloor){
    if (numberOfFloor <0) {
        return "floor number can't be a negative value"
    }  else {
        if (numberOfFloor <= 10) {
            firstTenFloor = numberOfFloor;
          return firstTenFloor * 15 * 1000;
        } else if ((numberOfFloor > 10) && (numberOfFloor <= 20)) {
            firstTenFloor = 10 
            tenToTwentyFloor = numberOfFloor - firstTenFloor;
            return ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor *12 * 1000));
        } else if (numberOfFloor > 20) {
            firstTenFloor = 10
            twentyToMore = numberOfFloor -20;
            return ((firstTenFloor * 15 * 1000) + (firstTenFloor *12 * 1000) +  (twentyToMore * 10 * 1000));
        }
    }
}
console.log(brickCalculator(22));
console.log(brickCalculator(2));
console.log(brickCalculator(8));
console.log(brickCalculator(15));
console.log(brickCalculator(26));
console.log(brickCalculator(28));
    