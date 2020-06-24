//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var manager_details = [];
  manager_details = [managerName, managerAge, currentTeam, trophiesWon];
  return manager_details;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it

var formation = [4, 4, 3];


// write your function here
function createFormation(formation) {
  var form_obj = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],

  };
  return form_obj;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
// function filterByDebut(year) {
//   if (players.debut == year) {
//     return players;
//   }

// }

function filterByDebut(year) {
  let res = players.filter(function (player) {
    return player.year == year;
  });
  return res;
}


//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  let pos = players.filter(function (player) {
    return player.position == position;
  });
  return pos;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  var short_listed_players = [];
  for (var i = 0; i < players.length; i++) {
    var current_player = players[i];
    for (var j = 0; j < current_player.awards.length; j++) {
      var current_award = current_player.awards[j];
      if (current_award.name == awardName) {
        short_listed_players.push(current_player);
      }
    }
  }
  return short_listed_players;
  // let awa = players.filter(function (item) {

  //   return item.awards.name == awardName;
  // });
  // return awa;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  var short_listed_players = [];
  for (var i = 0; i < players.length; i++) {
    var current_player = players[i];
    var count = 0;
    for (var j = 0; j < current_player.awards.length; j++) {
      var current_award = current_player.awards[j];
      if (current_award.name == awardName) {
        count++;
      }
    }
    if (noOfTimes == count)
      short_listed_players.push(current_player);
  }
  return short_listed_players;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxTimes(awardName, country) {
  var short_listed_players = [];
  for (var i = 0; i < players.length; i++) {
    var current_player = players[i];
    var count = 0;
    for (var j = 0; j < current_player.awards.length; j++) {
      var current_award = current_player.awards[j];
      if (current_award.name == awardName && current_player.country == country) {
        count++;
      }
    }
    if (count != 0)
      short_listed_players.push(current_player);
  }
  return short_listed_players;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var short_listed_players = [];
  for (var i = 0; i < players.length; i++) {
    var current_player = players[i];
    var count = 0;
    for (var j = 0; j < current_player.awards.length; j++) {
      count++;
    }
    if (noOfAward >= count && current_player.team == team && current_player.age < age)
      short_listed_players.push(current_player);
  }
  return short_listed_players;
}


//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var i, j, temp;
  for (i = 0; i < players.length; i++) {
    for (j = 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
  return players;

  // var i, j;
  // for (i = 0; i < players.length; i++) {
  //   for (j = 1; j < players.length; j++) {
  //     players.sort(function () {
  //       return players[j].age - players[i].age;
  //     });
  //   }
  // }
  // return players;

}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  var short_listed_players = [];
  for (var i = 0; i < players.length; i++) {
    var current_player = players[i];
    var current_player_team = players[i].team;
    var count = 0;
    for (var j = 0; j < current_player.awards.length; j++) {
      count++;
    }
    if (current_player_team == team) {
      short_listed_players = [{
        player_add: players[i],
        awards_count: count
      }];
    }
  }
  for (var i = 0; i < short_listed_players.length; i++) {
    for (var j = 1; j < short_listed_players.length; j++) {
      if (short_listed_players[i].awards_count < short_listed_players[j].awards_count) {
        temp = short_listed_players[i];
        short_listed_players[i] = short_listed_players[j];
        short_listed_players[j] = temp;
      }
    }
  }
  return short_listed_players;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order