var navhome = document.getElementById("home");

// // if (navhome.querySelector(".active")) {
// //   console.log("Don't do anything");
// //   navhome.querySelector(".active").classList.add("asdasdasd");
// // } else {
// //   console.log("Transform");
// // }


// // var header = document.getElementsByTagName("header");

// // // Loop through the header elements (if there are multiple)
// // for (var i = 0; i < header.length; i++) {
// //   var homeElement = header[i].querySelector("#home");
// //   if (homeElement) {
// //     alert("true");
// //   } else {
// //     alert("false");
// //   }
// // }

var navParent = document.getElementById("nav");
var navss = navParent.getElementsByClassName("navs");
var current = null; // Initialize current outside the click handler
var home = document.getElementsByClassName("active")[0];
var mainHome = document.getElementById("home");
var nav = document.getElementById("nav");
var about = document.getElementById("about");
var resume = document.getElementById("resume");
var services = document.getElementById("services");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

var x = 0;

for (let i = 0; i < navss.length; i++) {
  navss[i].addEventListener("click", function() {

    if (navhome.querySelector(".active").textContent === " > Home"){
      console.log("hello");
    }
    else{
      console.log("bad");
    }

    home.className = home.className.replace("active", "");

    // if (home && x === 0) { // Check if home exists before attempting to manipulate it
    //   // home.className = home.className.replace("active", "");
    //   mainHome.className += " home-transform";
    //   nav.className += " nav-transform";
    //   x++;
    // }

    if (current) {
      current.className = current.className.replace(" li-transform", "");
      current.classList.remove("active");
      current.className = current.className.replace(" active", "");
    }

    console.log("this classname :" +this.classname);
    this.className += " active";
    // this.className += " li-transform";

    current = this; // Update the current element
  }); // Pass the current value of i to the IIFE
}


function removeHome(){

  removeLiTransform();

  if (navhome.querySelector(".active")){
    
  }
  else{
    alert("not home");
  }
  mainHome.classList.remove("home-transform");
  nav.classList.remove("nav-transform");
}
function navAbout(){
  removeLiTransform();
  homeTransform();
  navTransform();

  about.classList.add("li-transform");
}

function navResume(){
  removeLiTransform();
  homeTransform();
  navTransform();

  resume.classList.add("li-transform");
}

function navServices(){
  removeLiTransform();
  homeTransform();
  navTransform();

  services.classList.add("li-transform");
}

function navPortfolio(){
  removeLiTransform();
  homeTransform();
  navTransform();

  portfolio.classList.add("li-transform");
}

function navContact(){
  removeLiTransform();
  homeTransform();
  navTransform();

  contact.classList.add("li-transform");
}

function homeTransform(){
  mainHome.className += " home-transform";
}

function navTransform(){
  nav.className += " nav-transform";
}

function removeLiTransform(){
  if(navParent.querySelector(".li-transform")){
    navParent.querySelector(".li-transform").classList.remove("li-transform");
  }
}