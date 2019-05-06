alert("hi");
console.log("hi");
var app = angular.module("App",[]);
app.controller("Controller",['$scope','$timeout', function($scope, $timeout){
var dictionary = ["daniel", "Sliman"];
$scope.Bad = [];
$scope.good = [];
$scope.bad =[];
$scope.guessess = 6;
$scope.displayWord = '';
$scope.WordTobeGuessed ='';
$scope.input = {
  letter:''

}

var randNumber = function(){
  var i = Math.floor(Math.random() * dictionary.length);
  return dictionary[i];
}

var Start = function(){
  $scope.Bad = [];
  $scope.good = [];
  $scope.guessess = 6;
  $scope.displayWord = '';
  WordTobeGuessed = randNumber();
 
  var tempDisplayWord = '';
  for (var i = 0; i < WordTobeGuessed.length; i++) {
  tempDisplayWord+='*';

  }  console.log(tempDisplayWord);
  $scope.displayWord = tempDisplayWord;
}

$scope.letterChosen = function(){
  //when user types input(compare output)
console.log($scope.displayWord + "123");

for(var i = 0; i<$scope.good.length;i++){
      if( $scope.good[i].toLowerCase() == $scope.input.letter.toLowerCase()){
          $scope.input.letter = "" ;
          return;
}

}

for(var i = 0; i<$scope.Bad.length;i++){console.log($scope.displayWord+"125");
      if( $scope.Bad[i].toLowerCase() == $scope.input.letter.toLowerCase()){
          $scope.input.letter = "" ;
          return;
        }
}
    console.log(WordTobeGuessed+"1221345+"+dictionary.length);
var valid = false;
for (var i = 0; i < WordTobeGuessed.length; i++) {
  if( WordTobeGuessed[i].toLowerCase() == $scope.input.letter.toLowerCase()){
    console.log($scope.displayWord+"1221345");
    $scope.displayWord = $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+ $scope.displayWord.slice( i+1)
valid = true;
}
}
if(valid){
  $scope.good.push($scope.input.letter.toLowerCase());
}
else {
  $scope.guessess--;
    $scope.Bad.push($scope.input.letter.toLowerCase());
}

$scope.input.letter = "";
if($scope.guessess ==0){
//$timeout(function(){Start();,500});
  alert("Try again, it's worth it");}

if($scope.displayWord.indexOf("*")==-1){
  alert("You found" + WordTobeGuessed);
}






}
Start();

}]);
