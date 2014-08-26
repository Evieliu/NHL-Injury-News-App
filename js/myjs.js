$(document).ready(function(){ // begin document.ready block

	$("#east-conference").click(function(){
		$(".eastern").css("display", "inline-table");
	});

	$("#west-conference").click(function(){
		$(".western").css("display", "inline-table");
	});

	$.getJSON("data/team-performance.json", function(data){

		$("li").click(function(){
			$ ("#resultbox").css("display", "inline");
			$ ("#infobox2").empty();
			$ ("#infobox3").empty();  
					
			var selectedteam = $(this).val();

			$ ("#infobox1").html("<div id='teamname'>" + data.teams[selectedteam-1].Team + "</div><span id='normal'> has won</span><span id='emphasize'>" + data.teams[selectedteam-1].Actual_Points + "</span> <span id='normal'> points and ranked</span><span id='emphasize'>" + data.teams[selectedteam-1].Actual_Rank + "</span><span id='normal'> in its conference in the 2013-14 NHL season.</span></br></br>");

			$ ("#infobox1").append("</br></br><div id='teamname2'><span id='normal'>If no injury occured, the team would have won</span><span id='emphasize'> " + data.teams[selectedteam-1].Potential_Points + "</span><span id='normal'> points, ranking</span><span id='emphasize'>  " + data.teams[selectedteam-1].Potential_Rank + "</span><span id='normal'> in the conference.</span></div>");	

			var logolink = "img/" + data.teams[selectedteam-1].Team + ".gif";
			$ ("#infobox2").append("<img id='logo' src='" + logolink + "'>");

		});

	});
		
	$.getJSON("data/money.json", function(data){

		$("li").click(function(){	

			var selectedteam = $(this).val();

			$ ("#infobox2").append("<div id='financiallost'>Financial Lost</div><span id='normal'> The team has lost</span><span id='emphasize'>$" + data.money[selectedteam-1].CHIP_mil + "</span><span id='normal'> million cap hit due to player injuries occured during the 2013-14 NHL season, which is</span></br></br><span id='emphasize'>" + data.money[selectedteam-1].Percentage + "</span><span id='normal'> of its annual revenue in 2013 - </span><span id='emphasize'>$" + data.money[selectedteam-1].Revenue + "</span><span id='normal'> million.</span>");

			$ ("#infobox3").html("<canvas id='pie' height='300' width='300'></canvas><a id='transit' href='#main'><button class='btn btn-warning btn-large' id='another' align='center'>Select Another Team</button></a>");

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

		});
	});


	$ ("#search").keyup(function(){
		var searchField = $ ("#search").val();
		var myExp = new RegExp(searchField, "i");
			
		$.getJSON("data/playername.json", function(data){
			$ ("#playerinfobox").empty();
			var output = ""

			$.each(data, function(key,val){
			 	if (val.Name.search(myExp) != -1) {
					$ ("#playerinfobox").append("<div id='playername'>" + val.Name + "</div><ul><li><div id='playerinfo'>Team: " + val.Team + "</div></li><li><div id='playerinfo'>Position: " + val.Position + "</div></li><li><div id='playerinfo'>Injured Games: " + val.Injured + "</div></li><li><div id='playerinfo'>Cap Hit Lost: $" + val.CHIP + "</div></li></ul>")
				}
			
			});
		});						
	});


});
