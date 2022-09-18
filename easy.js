var name1 = 'Martin';
var name2 = 'Alexander';

var name1Length = name1.length;
var name2Length = name2.length;
var difference = name1Length - name2Length
var isLongerOrShorter = '';

var stringDifference = difference.toString();
var newDiff= stringDifference.replace('-', '');


if(name1Length > name2Length) {
  isLongerOrShorter = 'longer';
} else {
  isLongerOrShorter = 'shorter';
}

console.log('The name ' + name1 + ' is ' + isLongerOrShorter + ' than ' + name2 + ' by ' + newDiff + ' character/s');

