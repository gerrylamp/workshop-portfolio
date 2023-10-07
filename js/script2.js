var header = document.getElementById("home");
var navs = header.getElementsByClassName("navs");
var aspiring = document.getElementById("aspiring");
var socialLinks = document.getElementById("social-links");
var headerTag = document.getElementsByTagName("header")[0];
var about = document.getElementById("about");

for (var i = 0; i < navs.length; i++) {
    (function(index) {
        navs[index].addEventListener("click", function() {
            // if (index === 0) {
            //     aspiring.classList.remove("display-none");
            //     socialLinks.classList.remove("display-none");
            //     header.classList.remove("header-top");
            //     headerTag.classList.remove("bg-black");

            //     about.classList.remove("section-show");
            // } else {
            //     headerTag.classList.add("bg-black");
            //     header.classList.add("header-top");

            //     aspiring.classList.add("display-none");
            //     socialLinks.classList.add("display-none");
            // }

            // if (index === 1){
            //     about.classList.add("section-show");
            // }
            var current = document.getElementsByClassName("active");

if (current.length > 0) {
  current[0].className = current[0].className.replace("active", "");

  if (index > 0) {
    if (current[0] && current[0].className.includes("opacity-0")) {
      current[0].className = current[0].className.replace("opacity-0", "");
    } else {
      alert("asdasd");
      current[0].className = current[0].className.replace("opacity-0", "");
    }
  }
}


            
            
            this.className += " active";
            this.className += " opacity-0";
        });
    })(i);
}



// window.addEventListener('scroll', reveal );

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveals.length; i++){

//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 100;

//         if (revealtop < windowheight - revealpoint) {
//             reveals[i].classList.add('active');
//         } else {
//             reveals[i].classList.remove('active');
//         }
//     }
// }



