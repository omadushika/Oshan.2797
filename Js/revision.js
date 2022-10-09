var university = "AMDT";
console.log(university);

var uniFriends = ["Sahan","Sangeeth","Zaharan"];
console.log(uniFriends[2]);

var isCheck = true;

function checkFirstLetter(uniFriends) {
    if (uniFriends[0].charAt(0) === 'C' || uniFriends[0].charAt(0) === 'c' ) {
        console.log("Yes");
    }
    if (uniFriends[1].charAt(0) === 'C' || uniFriends[1].charAt(0) === 'c' ) {
        console.log("Yes");
    }
    if (uniFriends[2].charAt(0) === 'C' || uniFriends[2].charAt(0) === 'c' ) {
        console.log("Yes");
    }
    else {
        console.log("Nope");
    }
}

checkFirstLetter(uniFriends);

uniFriends = [];
uniFriends[0] = "siril";
uniFriends[1] = "siril";
uniFriends[2] = "ciril";


checkFirstLetter(uniFriends);