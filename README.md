READ ME
==========

About
----------------------
This is a news application that tracks all the injury data from the NHL 2013-14 regular season (no playoffs) and analyzes their impact on team performance and financial status.


Idea
----------------------
The story idea was inspired by a news article from PRI.com earlier this January, which reported that injuries sustained by players in the NHL cost the league nearly $218 million each season. The number was astonishing for me and pushed me to think about how much the injuries have impacted each team in the league.

Are there some teams that suffered more, some less? Are there more vulnerable positions on the hockey field? Do the top-value players get injured most, or the opposite? How much would a team have to pay for player injuries? Does that account for a big proportion of its financial statement? And how would the game result be different if we exclude the injury influence? If a team could have performed much much better without injuries, does that mean it needs to change some of its strategies?

Some of these questions are answered in this news application and some are not. I’ve collected the raw data of hockey injuries and only studied it from several aspects. But I’d like to think this news application as a good starting point for us to think about this topic, ask questions and develop stories out of it.

I am not a big sports fan. Actually I barely know anything about hockey before I started on this project. But I find this story interesting because it connects the human interest with the number methodology. 

Sport is captivating because it’s the game of people. But at the same time, it also has a hard data side - the scores, the fans, the money. Everything flows through the games can be measured by number. And all of those numbers can be humanized again, since people always feel an emotional connection with their favorite teams and players and want to know everything about them.

I will keep working on this project and hopefully update it with more interesting data and findings in the future.

Workflow
----------------------
- Get familiar with NHL facts, how the data are reported and what they mean.
- Read news and reports about hockey injuries and come up with the initial idea of the news application.
- Search for and collect raw data from different sources.
- Transform data from plain table to spreadsheet.
- Scrape and reorganize data so that they are meaningful to the story.
- Calculate and create new index for the story.
- Design webpage and user interface using HTML and CSS.
- Acquire user input and process back-end database using JQuery and JSON.
- Incorporate and customize JQuery plugins to create interactive charts for data visualization.
- Design the flow of user experience and make sure the launch of each function is flawless.
- Locate the project on a server so that people can view it online.

Functionality
----------------------
- Select any team from NHL, get its data on 2013-14 regular season performance and how it could have improved if no injury occurred during the season.
- Select any team from NHL, get the value of cap hit that the team has lost due to injuries, and how much percent it takes in the team’s 2013 annual revenue.
- Visualize the data above with interactive charts.  
- Search through the player injuries database (890 skaters + 97 goalies) and pull out the typed-in player’s information on team, injured games and CHIP in real time.
- A Tableau chart visualizing the whole raw injury database and comparing between different teams and positions. Users can customize the chart through different filters and parameters. 

Used Framework & Plugin
----------------------
- Bootstrap
- Chart.js

Data Notes & Explanation
----------------------

####<b>What is Man Games Lost?</b>
This number is the official, team-reported Man Games Lost number for each team as of their last game. An injured player missing 1 game is counted as 1 man games lost for the team. 

####<b>What is CHIP?</b>

Cap Hit of Injured Player (CHIP) is a metric that attempt to quantify the impact of a player not playing for their team due to injury. It utilizes a player’s cap hit under the formula CHIP = (CapHit x playerGamesInjured)/82. The result represents the amount of cap hit or salary lost based on the number of games lost by the player to injury over an 82 game season.

####<b>What is TMITT?</b>

Time Missed Impact To Team (TMITT) is a metric that attempts to quantify the impact of a player not playing for their team due to injury. A higher TMITT number equals a higher impact of injured players to the team. TMITT utilizes a skater’s average time on ice (ATOI) or minutes played for goalies, the number of games missed due to injury, the number of games played by their team, and the number of games that the player has played in (necessary due to players who aren’t on the team’s roster or IR at all times i.e. AHL call-ups).

           Basic NHL TMITT = (playerGP x ATOI x playerGamesInjured) / teamGP

####<b>How did you calculate the hypothetical points/ ranking without injury influence?</b>

I calculated the average of 30 teams’ TMITT and created an index by dividing each team’s TMITT by the average number. Since a bigger index number means a higher TMITT and therefore a higher impact of player injuries on the team, the bigger the index number is, the lower the team’s “hypothetical points” should be. 

Therefore, I divided each team’s actual points in the 2013-14 regular season by the index and got a “hypothetical points” for each of them. This number is an estimation of how this team could have performed if no injury occurred during this season. 

Then I ranked the teams again with these “hypothetical points” and got a “hypothetical ranking” in eastern and western conference respectively.

           Hypothetical Points = ActualPoints / (TMITT/TMITTAverage) 

####<b>How did you calculate the percentage of lost cap hit to the team’s annual revenue?</b>

           Percentage = TeamCHIP / TeamRevenue

Data & Image Credit
----------------------
- Team & player injury data (Injured, Man Games Lost, CHIP, TMITT),  courtesy [www.mangameslost.com](http://www.mangameslost.com/end-2013-2014-regular-season-man-games-lost-chip-tmitt-april-14-2014/)

- Team performance data (Points), courtesy [www.nhl.com](http://www.nhl.com/ice/standings.htm)

- Team financial data (Revenue), courtesy [www.forbes.com](http://www.forbes.com/nhl-valuations/list/#page:1_sort:0_direction:asc_search:)

- NHL team logos, courtesy [www.official-nhl.tumblr.com](http://official-nhl.tumblr.com/post/48006936448/nhl-icon-pack-transparent-150x100-png-icons-of)

- Background images, courtesy [www.hdwallsource.com](http://hdwallsource.com/nhl-wallpaper-15323.html) and [www.pichost.me](http://pichost.me/1473757/)
