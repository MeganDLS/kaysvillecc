// Navigation side bar on every page
function openNav() {
  document.getElementById("mySidenav").style.width = "25rem";
  document.getElementById("scoot").style.marginLeft = "25rem";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("scoot").style.marginLeft= "0";
}


//popup alerts in index.html
function closeAlert() {
  document.getElementById("alert").style.width = "0";

// document.getElementById("myBtn").addEventListener("click", open_close);

// var menuState = 0 // close
// function open_close() {
//   if(menuState === 0){
//      menuState = 1;
//      document.getElementById("mySidenav").style.width = "250px";
//      //document.getElementById("main").style.marginLeft = "250px";
//      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//   }
//   else {
//      menuState = 0;
//      document.getElementById("mySidenav").style.width = "0";
//      //document.getElementById("main").style.marginLeft = "0";
//      document.body.style.backgroundColor = "white";
//   }
//   console.log(menuState);
// } 
