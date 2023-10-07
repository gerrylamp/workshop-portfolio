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
var navabout = document.getElementById("about");
var resume = document.getElementById("resume");
var services = document.getElementById("services");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");
var main = document.getElementById("main");
const sectionAbout = document.getElementById("sectionAbout");

var x = 0;

for (let i = 0; i < navss.length; i++) {
  navss[i].addEventListener("click", function() {

    if (!document.getElementById("sectionAbout").querySelector(".reveal")){
      // if (document.getElementById("sectionAbout").querySelector(".move-position")){
      //   alert("hax move position")
      // }
      // else{
      //   alert("no move position")
      //   document.getElementById("divAbout").classList.add("move-position");
      // }
    }

    if (!document.getElementById("timeline").querySelector(".reveal")){
      document.getElementById("divResume").classList.add("move-position");
    }

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

// window.addEventListener('scroll', function() {
//   var element = document.getElementById('myElement');
//   if (window.pageYOffset > 0) {
//     element.style.position = 'fixed';
//   } else {
//     element.style.position = 'relative';
//   }
// });

function removeHome(){
  removeLiTransform();

  main.classList.replace("overflow-visible", "overflow-hidden");
  main.querySelector(".reveal").classList.remove("reveal");
  mainHome.classList.remove("home-transform");
  nav.classList.remove("nav-transform");
}
function navAbout(){
  removeLiTransform();
  homeTransform();
  navTransform();
  revealMain();

  navabout.classList.add("li-transform");

  if (sectionAbout.querySelector(".move-position")){
    sectionAbout.querySelector(".move-position").classList.replace("move-position", "fade-up")
  }
  if (sectionAbout.querySelector(".fade-up")) {
      sectionAbout.querySelector(".fade-up").classList.replace("fade-up", "reveal");
      document.getElementById("divResume").classList.remove("reveal");
      document.getElementById("divResume").classList.repalce("fade-up-2", "move-position");
  }
  else{
    document.getElementById("divAbout").classList.add("reveal");
  }
}

function navResume(){
  removeLiTransform();
  homeTransform();
  navTransform();

  if (document.getElementById("timeline").querySelector(".move-position")){
    
    document.getElementById("divResume").classList.add("reveal");
    document.getElementById("timeline").querySelector(".move-position").classList.replace("move-position", "fade-up-2");
    alert("has move position")
  }
  else{
    alert("no move")
    document.getElementById("divResume").classList.add("reveal");
  }
  document.getElementById("divAbout").classList.replace("reveal", "fade-up");
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

function revealMain(){
  main.classList.replace("overflow-hidden", "overflow-visible");
}