var tablinks = document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents")

function openTabe(tabname){
for(tablik of tablinks){
    tablik.classList.remove("active-link");
}
for(tabcotent of tabcontents){
    tabcotent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}
// ========smallScreen============

var sidemenu = document.getElementById("sidemenu");

function openMenu(){
sidemenu.style.right = "0";
}
function closeMenu(){
sidemenu.style.right = "-200px";
}
// ========smallScreen============
