//progression 1
function greatestOfTwoNumbers(a, b) {
    if (a > b) {
        console.log("A is the greatest number");
    }
    else {
        console.log("B is the greatest number");
    }
}

console.log(greatestOfTwoNumbers(10, 70));

//progression 2

function findScaryWord(arr) {

    for (var i = 0; i < arr.length; i++) {
        var name;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i].length > arr[j].length || arr[i].length == arr[j].length) {
                name = arr[i];
            }
            else if (arr[i].length < arr[j].length) {
                name = arr[j];
            }
        }
    }
    return name;
}
const arr = ["Ruthra", "Naresh", "HemanthKumar"];
console.log(findScaryWord(arr));

//progression 3

function netPrice(arr1) {
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i];
    }
    return sum;
}

const arr1 = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
console.log(netPrice(arr1));

//progression 3.1

function add(arr3) {
    var sum_num = 0, sum_string = 0, sum_boo = 0;
    for (var i = 0; i < arr3.length; i++) {
        if (typeof (arr3[i]) == 'number') {
            sum_num = sum_num + arr3[i];
        }
        else if (typeof (arr3[i]) == 'string') {
            sum_string = sum_string + arr3[i].length;
        }
        else if (typeof (arr3[i]) == 'boolean') {
            sum_boo = sum_boo + Number(arr3[i]);
        }
    }
    var total = sum_num + sum_string + sum_boo;
    return total;
}
const arr3 = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
console.log(add(arr3));

//progression 4.1

function midPointOfLevels(levels) {
    var sum = 0;
    var div = levels.length;
    for (var i = 0; i < div; i++) {
        sum = sum + levels[i];
    }
    return sum / div;
}

const levels = [22, 16, 9, 10, 7, 14, 11, 9];
console.log(midPointOfLevels(levels));

//progression 4.2

function averageWordLength(items) {
    var length = items.length, count = 0;
    for (var i = 0; i < length; i++) {
        count++;
    }
    var total = count / 2;
    return total;
}

const items = [
    'bread',
    'jam',
    'milk',
    'egg',
    'flour',
    'oil',
    'rice',
    'coffee powder',
    'sugar',
    'salt'
];
console.log(averageWordLength(items));

//progression 4.3
function add(arr3) {
    var sum_num = 0, sum_string = 0, sum_boo = 0, length = arr3.length;
    for (var i = 0; i < length; i++) {
        if (typeof (arr3[i]) == 'number') {
            sum_num = sum_num + arr3[i];
        }
        else if (typeof (arr3[i]) == 'string') {
            sum_string = sum_string + arr3[i].length;
        }
        else if (typeof (arr3[i]) == 'boolean') {
            sum_boo = sum_boo + Number(arr3[i]);
        }
    }
    var total = sum_num + sum_string + sum_boo;
    var result = total / length;
    return;
}
const arr3 = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
console.log(add(arr3));



//progression 5

function uniqueArray(items) {
    var new_arr = [], k = 0, flag = false;
    for (var i = 0; i < items.length; i++) {
        for (var k = 0; k < new_arr.length; k++) {
            if (items[i] == new_arr[k]) {
                flag = true;
            }
        }
        if (flag == false) {
            new_arr[k] = items[i];
        }
    }
    return new_arr;

}
const items = [
    'bread',
    'jam',
    'milk',
    'egg',
    'flour',
    'oil',
    'rice',
    'coffee powder',
    'sugar',
    'salt',
    'egg',
    'flour'
];
console.log(uniqueArray(items));


//progression 6

function searchElement(words, search) {
    var flag = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] == search) {
            flag = 1;
        }
    }
    if (flag == 1) {
        return true;
    }
    else {
        return false;
    }

}
const words = [
    'door',
    'window',
    'ceiling',
    'roof',
    'plinth',
    'tiles',
    'ceiling',
    'flooring'
];
var search = "roof";
console.log(searchElement(words, search));

//progression 7
function howManyTimesElementRepeated(words, search) {
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i] == search) {
            count++;
        }
    }
    return count;
}
const words = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
];
var search = "matter";
console.log(howManyTimesElementRepeated(words, search));


//progression 8
