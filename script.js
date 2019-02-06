function login(){
	var id = document.getElementById("userid").value;
	var password = document.getElementById("password").value;
	$.ajax({
            url: 'http://localhost:56869/api/EmployeeDetails/'+id,
            type: 'GET',
            dataType: 'json',
            success: function(res){
                var pass = document.getElementById("password").value;
                if(pass == res.Password){
					localStorage.setItem('id', id);
					localStorage.setItem('pass', password);
					localStorage.setItem('score', res.Score);
					localStorage.setItem('name', res.Name);
                    window.location = "tictactoe.html";
                }
                else{
                   alert("wrong id or password");
                }
            }
        });
}

function signup(){
	var id = document.getElementById("userid").value;
	var password = document.getElementById("password").value;
	var name = document.getElementById("name").value;
		var dataforTicTac={
        "ID": id,
        "Name": name,
        "Password": password,
        "Score": "0"
	};
	$.ajax({
            url: 'http://localhost:56869/api/EmployeeDetails',
			data: dataforTicTac,
            type: 'POST',
            dataType: 'json',
            success: function(res){
					localStorage.setItem('id', id);
					localStorage.setItem('pass', password);
					localStorage.setItem('score', res.Score);
					localStorage.setItem('name', res.Name);
                    window.location = "tictactoe.html";

            }
        });
}