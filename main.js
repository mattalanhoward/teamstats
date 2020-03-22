// Create an empty team object.
let carolinaPanthers = {
    //   Add two properties to your team object. A _players property and a _games property.
    _players: [
      {
        firstName: "Christian",
        lastName: "McCaffrey",
        age: 23,
        Position: "RB"
      },
      {
        firstName: "DJ",
        lastName: "Moore",
        age: 23,
        Position: "WR"
      },
      {
        firstName: "Cam",
        lastName: "Newton",
        age: 30,
        Position: "QB"
      }
    ],
    _games: [
      {
        opponent: "Los Angeles Rams",
        teamPoints: 27,
        opponentPoints: 30,
        week: 1
      },
      {
        opponent: "Tampa Bay Buccaneers",
        teamPoints: 14,
        opponentPoints: 20,
        week: 2
      },
      {
        opponent: "Arizona Cardinals",
        teamPoints: 38,
        opponentPoints: 20,
        week: 3
      }
    ],
    // Create getter methods for your _players and _games keys.
    get games() {
      return this._games;
    },
    get players() {
      return this._players;
    },
  
    // Add a method addPlayer to your team object.
    addPlayer(firstName, lastName, age, position) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        position: position
      };
      this.players.push(player);
    },
  
    // Add a method addGame to your team object.
    addGame(opponent, teamPoints, opponentPoints, week) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
        week: week
      };
      this.games.push(game);
    }
  };
  
  carolinaPanthers.addPlayer("Curtis", "Samuel", 24, "WR");
  carolinaPanthers.addPlayer("Greg", "Olsen", 35, "TE");
  carolinaPanthers.addPlayer("Luke", "Kuechly", 29, "LB");
  
  // Invoke your addGame
  carolinaPanthers.addGame("Houston Texans", 16, 10, 4);
  carolinaPanthers.addGame("Jacksonville Jaguars", 34, 27, 5);
  carolinaPanthers.addGame("Tampa Bay Buccaneers", 37, 26, 6);
  
  // console.log(carolinaPanthers._games)
  // console.log(carolinaPanthers._players)
  
  //update Panthers record
  // log weekly scores and Panthers record.
  
  let wins = 0;
  let losses = 0;
  for (i = 0; i < carolinaPanther_games.length; i++) {
      let panthersScore = carolinaPanthers._games[i].teamPoints;
      let opponentScore = carolinaPanthers._games[i].opponentPoints;
  
        if (panthersScore > opponentScore) {
          wins += 1;
      } else { 
        losses += 1;
      }  
  console.log("Week " + carolinaPanthers._games[i].week);
  console.log(carolinaPanthers._games[i].opponent + " " + carolinaPanthers._games[i].opponentPoints);
  console.log("Carolina Panthers " + carolinaPanthers._games[i].teamPoints);
  console.log('Current Record ' + wins + '-' + losses)
  }
  
      
  
  
   
  
  