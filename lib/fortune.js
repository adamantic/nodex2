/**
 * Created by Michael on 15/06/2017.
 */

var fortuneCookies = [
    "1 conquer your fears",
    "2 rivers need springs",
    "3 do not, fear not",
    "4 pleasant surprise"
];

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
}


