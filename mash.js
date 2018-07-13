function mash(){
return "you will live in a " + "house";
}
const house = mash()
console.log(house);

function getHome(){
    const students = [
        "Mansion",
        "Apartment",
        "Shack",
        "House",
    ];
    const decimal = Math.random();
        const timesrandom = decimal * 4;
        const final = Math.floor(timesrandom);
        const letter = students[final];
    console.log(letter);
}
getHome();

function getChildrenCount() {
        const decimal = Math.random();
        const times100 = decimal * 100;
        const final = Math.floor(times100);
        const thing = final +"kids"
        console.log(final);
    }
    getChildrenCount();





