$(document).ready(function(){ // begin document.ready block

$("#start").click(function(){
	var x = document.getElementById("eastconference").selected;
	var y = document.getElementById("westconference").selected;
	console.log(x);
	console.log(y);
	if (x === true)
		{
		console.log("east");
		$("#transit").attr("href","#eastern")
		}
	else
		{
		console.log("west");
		$("#transit").attr("href","#western")
		}
});

$.getJSON("data/eastern-performance.json", function(data){
	console.log("eastern-sucess");	
	$("#submit").click(function(){
		$("#logo, #bar, #bar2").css("visibility", "hidden");
		$ (".lala").empty();
	    $ (".eastern").each(function(){
			if(this.checked) 
				{
				var selectedteam = $(this).val();
				$ ("#innerbox1").html("<div id='teamname'>" + data.teams[selectedteam-1].Team + "</div><span id='normal'> has won</span><span id='emphasize'>" + data.teams[selectedteam-1].Actual_Points + "</span> <span id='normal'> points and ranked</span><span id='emphasize'>" + data.teams[selectedteam-1].Actual_Rank + "</span><span id='normal'> in eastern conference in 2013-14 NHL season.</span></br></br><div><button class='btn btn-warning btn-large'id='whatif'>If nobody got injured..</button></div>");		
				$ ("#innerbox2").append("<button class='btn btn-warning btn-large' id='showbar'>See Graphic</button>");
				var logolink = "img/" + data.teams[selectedteam-1].Team + ".gif";
				console.log (logolink);
				$ ("#logo").attr("src",logolink);		
				}
		});
	});
	
	$("#whatif").live("click", function(){
		console.log("clcked");
		$ ("#teamname2").empty();
		$ (".eastern").each(function(){
			if (this.checked) 
				{
				var selectedteam = $(this).val()
				$ ("#whatif").after("</br></br></br></br><div id='teamname2'><span id='normal'>It could have got</span><span id='emphasize'> " + data.teams[selectedteam-1].Potential_Points + "</span><span id='normal'> points and ranked</span><span id='emphasize'>  " + data.teams[selectedteam-1].Potential_Rank + "</span><span id='normal'> in eastern conference.</span></div>")		
				}
		});
	});


	$("#showbar").live("click", function(){
		$ (".eastern").each(function(){
			if(this.checked) 
				{
				var selectedteam = $(this).val();
	
				var barChartData = {
						labels : ["Points"],
						datasets : [
							{
								fillColor : "hsla(36,79%,45%,1.00)",
								strokeColor : "rgba(220,220,220,1)",
								data : [data.teams[selectedteam-1].Actual_Points]
							},
							{
								fillColor : "rgba(151,187,205,0.5)",
								strokeColor : "rgba(151,187,205,1)",
								data : [data.teams[selectedteam-1].Potential_Points]
							}
						]
						
					}

				var myLine = new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);

				var barChartData = {
							labels : ["Standing"],
							datasets : [
								{
									fillColor : "hsla(36,79%,45%,1.00)",
									strokeColor : "rgba(220,220,220,1)",
									data : [data.teams[selectedteam-1].Actual_Rank]
								},
								{
									fillColor : "rgba(151,187,205,0.5)",
									strokeColor : "rgba(151,187,205,1)",
									data : [data.teams[selectedteam-1].Potential_Rank]
								}
							]
							
						}

				var myLine = new Chart(document.getElementById("bar2").getContext("2d")).Bar(barChartData);
				}
		});
	});
});


	
$.getJSON("data/western-performance.json", function(data){
	console.log("western-sucess");
	$("#submit2").click(function(){ 
		$("#logo, #bar, #bar2").css("visibility", "hidden");
		$ (".lala").empty();
		$ (".western").each(function(){
				if(this.checked) 
					{
					var selectedteam = $(this).val();
					$ ("#innerbox1").html("<div id='teamname'>" + data.teams[selectedteam-17].Team + "</div><span id='normal'> has won</span><span id='emphasize'>" + data.teams[selectedteam-17].Actual_Points + "</span> <span id='normal'> points and ranked</span><span id='emphasize'>" + data.teams[selectedteam-17].Actual_Rank + "</span><span id='normal'> in western conference in 2013-14 NHL season.</span></br></br><div><button class='btn btn-warning btn-large'id='whatif'>If nobody got injured...</button></div>");
					$ ("#innerbox2").append("<button class='btn btn-warning btn-large' id='showbar'>See Graphic</button>");
					var logolink = "img/" + data.teams[selectedteam-17].Team + ".gif";
					console.log (logolink);
					$ ("#logo").attr("src",logolink);			
					}
		});	
	});

	
	$("#whatif").live("click", function(){
		$ (".western").each(function(){
			if(this.checked) 
				{
				var selectedteam = $(this).val();
				$ ("#whatif").after("</br></br></br></br><div id='teamname2'><span id='normal'>It could have got</span><span id='emphasize'> " + data.teams[selectedteam-17].Potential_Points + "</span><span id='normal'> points and ranked</span><span id='emphasize'>  " + data.teams[selectedteam-17].Potential_Rank + "</span><span id='normal'> in western conference.</span></div>");			
				}
		});
	});


	$("#showbar").live("click", function(){
		$("#logo, #bar, #bar2").css("visibility", "visible"); 
		$ (".western").each(function(){
			if(this.checked) 
				{
				var selectedteam = $(this).val();
	
				var barChartData = {
						labels : ["Points"],
						datasets : [
							{
								fillColor : "hsla(36,79%,45%,1.00)",
								strokeColor : "rgba(220,220,220,1)",
								data : [data.teams[selectedteam-17].Actual_Points]
							},
							{
								fillColor : "rgba(151,187,205,0.5)",
								strokeColor : "rgba(151,187,205,1)",
								data : [data.teams[selectedteam-17].Potential_Points]
							}
						]
						
					}

				var myLine = new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);

				var barChartData = {
							labels : ["Standing"],
							datasets : [
								{
									fillColor : "hsla(36,79%,45%,1.00)",
									strokeColor : "rgba(220,220,220,1)",
									data : [data.teams[selectedteam-17].Actual_Rank]
								},
								{
									fillColor : "rgba(151,187,205,0.5)",
									strokeColor : "rgba(151,187,205,1)",
									data : [data.teams[selectedteam-17].Potential_Rank]
								}
							]
							
						}

				var myLine = new Chart(document.getElementById("bar2").getContext("2d")).Bar(barChartData);
				}
		});
	});
});


$.getJSON("data/money.json", function(data){
	console.log("money-sucess");
	$("#financiallost").click(function(){	
	
		$ (".eastern").each(function(){
			if(this.checked) 
				{
				var selectedteam = $(this).val();	
				$ (".lala").html("<div id='teamname'>" + data.money[selectedteam-1].Team + "</div><span id='normal'> has lost</span><span id='emphasize'>$" + data.money[selectedteam-1].CHIP_mil + "</span><span id='normal'> million cap hit due to player injuries in 2013-14 NHL season.</span></br></br><span id='emphasize'>" + data.money[selectedteam-1].Percentage + "</span><span id='normal'> of its annual revenue, </span><span id='emphasize'>$" + data.money[selectedteam-1].Revenue + "</span><span id='normal'> million, in the years of 2013.</span><canvas id='pie' height='400' width='400'></canvas>");
		
				var doughnutData = [
					{
						value: data.money[selectedteam-1].Percent,
						color: "#FDB45C"
					},
					{
						value : 50,
						color : "#46BFBD"
					},
					]
				
				var myDoughnut = new Chart(document.getElementById("pie").getContext("2d")).Doughnut(doughnutData);
	
				$ ("#pie").after("<div id='normal' class='chiplabel'>$" + data.money[selectedteam-1].CHIP + "</div>");
				
				}
		});
	

		$ (".western").each(function(){
			if(this.checked) 
				{
				var selectedteam = $(this).val();	
				$ (".lala").html("<div id='teamname'>" + data.money[selectedteam-1].Team + "</div><span id='normal'> has lost</span><span id='emphasize'>$" + data.money[selectedteam-1].CHIP_mil + "</span><span id='normal'> million cap hit due to player injuries in 2013-14 NHL season.</span></br></br><span id='emphasize'>" + data.money[selectedteam-1].Percentage + "</span><span id='normal'> of its annual revenue, </span><span id='emphasize'>$" + data.money[selectedteam-1].Revenue + "</span><span id='normal'> million, in the years of 2013.</span><canvas id='pie' height='400' width='400'></canvas>");
		
				var doughnutData = [
					{
						value: data.money[selectedteam-1].Percent,
						color: "#FDB45C"
					},
					{
						value : 50,
						color : "#46BFBD"
					},
					]
				
				var myDoughnut = new Chart(document.getElementById("pie").getContext("2d")).Doughnut(doughnutData);
	
				$ ("#pie").after("<div id='normal' class='chiplabel'>$" + data.money[selectedteam-1].CHIP + "</div>")
				
				}
		});
	});
});


$ ("#search").keyup(function(){
	var searchField = $ ("#search").val();
	console.log(searchField);
	var myExp = new RegExp(searchField, "i");
		
	$.getJSON("data/playername.json", function(data){
		console.log("player-sucess");
		var output = ""
		$.each(data, function(key,val){
		 if (val.Name.search(myExp) != -1) 
			/*{ output += "<div id='playername'>" + val.Name + "</div>";
				output += "<ul><li><div id='playerinfo'>Team: " + val.Team + "</div></li>";
				output += "<li><div id='playerinfo'>Position: " + val.Position + "</div></li>"
				output += "<li><div id='playerinfo'>Injured Games: " + val.Injured + "</div></li>"
				output += "<li><div id='playerinfo'>Cap Hit Lost: $" + val.CHIP + "</div></li></ul>"
				} */
			{
			$ ("#innerbox4").html("<div id='playername'>" + val.Name + "</div><ul><li><div id='playerinfo'>Team: " + val.Team + "</div></li><li><div id='playerinfo'>Position: " + val.Position + "</div></li><li><div id='playerinfo'>Injured Games: " + val.Injured + "</div></li><li><div id='playerinfo'>Cap Hit Lost: $" + val.CHIP + "</div></li></ul>")
			}
		
		});
			//$ ("#innerbox4").html(output);
	});
		
		
});


});
