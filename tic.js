
//var player1score=document.getElementById(player1score).innerHTML;
//var player2score=0;//=document.getElementById(player2score).value;
//var player2score=document.getElementById(player1score).innerHTML;
//var player2score=document.getElementById(player2score).innerHTML;
document.getElementById("player").innerHTML = localStorage.getItem('name')+" Score(X)";
var ChanceCount=0;
var CellCheck=0;
var score = localStorage.getItem('score');
console.log(score);
document.getElementById("player1score").innerHTML = score;
function clickevent(id){
	//console.log(id);
	if(document.getElementById(id).innerHTML){
		alert("Please Don't Cheat");
		}
		else
			{
				if(CellCheck==0){
								document.getElementById(id).innerHTML="X";
								document.getElementById(id).style.backgroundColor = "#ff6a00";
								ChanceCount = ChanceCount +1;
								MatchRefereee();
								CellCheck=1;
								}								
								
				else{
							document.getElementById(id).innerHTML="O";
							document.getElementById(id).style.backgroundColor = "#76b852";
							ChanceCount = ChanceCount +1;
							MatchRefereee();
							CellCheck=0;
					}
			}
}
function MatchRefereee(){
	var one = document.getElementById("1").innerHTML;
    var two = document.getElementById("2").innerHTML;
    var three = document.getElementById("3").innerHTML;
    var four = document.getElementById("4").innerHTML;
    var five = document.getElementById("5").innerHTML;
    var six = document.getElementById("6").innerHTML;
    var seven = document.getElementById("7").innerHTML;
    var eight = document.getElementById("8").innerHTML;
    var nine = document.getElementById("9").innerHTML;
	
	if ((one == two && two == three && three== "X")||
       (four == five && five == six && six== "X")||
       (seven == eight && eight == nine && nine== "X")||
       (one == four && four == seven && seven== "X")||
       (five == two && two == eight && eight== "X")||
       (three == six && six == nine && nine== "X")||
       (nine == five && five == one && one== "X")||
       (seven == five && five == three && three== "X")){
		   var score = localStorage.getItem('score');
			score = parseInt(score)+10;
			localStorage.setItem('score', score);
		   alert("X Player won");
		   updateScore();
	   }
	   else if((one == two && two == three && three== "O")||
       (four == five && five == six && six== "O")||
       (seven == eight && eight == nine && nine== "O")||
       (one == four && four == seven && seven== "O")||
       (five == two && two == eight && eight== "O")||
       (three == six && six == nine && nine== "O")||
       (nine == five && five == one && one== "O")||
       (seven == five && five == three && three== "O")){
		   var score = localStorage.getItem('score');
			score = parseInt(score)-5;
			localStorage.setItem('score', score);
		   alert("O Player won");
		   updateScore();
	   }
	   else if(ChanceCount == 9){
		   alert("tie");  
	   }
}

function updateScore(){
	var id = localStorage.getItem('id');
	var pass = localStorage.getItem('pass');
	var score = localStorage.getItem('score');
	var name = localStorage.getItem('name');
	//score = parseInt(score)+10;
	console.log(score);
	//localStorage.setItem('score', score);
	var dataforTicTac={
        "ID": id,
        "Name": name,
        "Password": pass,
        "Score": score
	};

	$.ajax({
		url: 'http://localhost:56869/api/EmployeeDetails/'+id,
		data: dataforTicTac,
		type: 'PUT',
		dataType: 'json', 
		success: function(response){ 
			window.location="tictactoe.html"
		}	
	});
}






