//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

function moreAboutHome(address, distanceFromTown, hasNeighbours) {
    var Conval = typeof (address) + typeof (distanceFromTown) + typeof (hasNeighbours);
    return Conval;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    if ((typeof (parents) == 'string') && (typeof (noOfSiblings) == 'number') && (typeof (isNuclearFamily) == 'boolean')) {
        return true;
    } else {
        return false;
    }
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageInText, ageInNumber) {
    var res = "";
    if (isNaN(ageInText)) {
        res = ageInText;
    } else if (isNaN(ageInNumber)) {
        res = ageInNumber;
    }
    return res;
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) {
    var a, b;
    a = totalNoOfSweets - sweetsConsumedByKaren - (sweetsConsumedInNMeters * metersToTravel);
    b = a / 2;
    return b;
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

function convertToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

function aDifficultChoice(choice) {
    var c = "";
    switch (choice) {
        case 1:
            c = "Take her daughter to a doctor";
            break;
        case 2:
            c = "Talk to her husband about it";
            break;
        case 3:
            c = "Counsel her daughter herself";
            break;
        case 4:
            c = "Lock her daughter in her room";
            break;
    }
    return c;
}


//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy

function consoleKaren(strategies) {
    var str = "Try talking to her." + "," + "Make her favourite sweets." + "," + "Let her watch TV all night." + "," + "Don't tell her to study." + "," + "Read her a bedtime story." + "," + "Let her bunk school anytime.";
    return str.length;
}