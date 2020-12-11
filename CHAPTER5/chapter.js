var item1;
var item2;
var item3;
var item4;
var item5;
var item6;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("first new thing");
    item2 = prompt("second new thing");
    item3 = prompt("third new thing");
    item4 = prompt("fourth new thing");
    item5 = prompt("fifth new thing");
    item6 = prompt("sixth new thing");
    updateList();
}

function updateList() {
    document.getElementById("o").innerHTML = item1;
    document.getElementById("d").innerHTML = item2;
    document.getElementById("g").innerHTML = item3;
    document.getElementById("m").innerHTML = item4;
    document.getElementById("f").innerHTML = item5;
    document.getElementById("b").innerHTML = item6;
}