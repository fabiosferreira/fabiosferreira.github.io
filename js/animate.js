wow = new WOW(
	{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
	}
)
wow.init();

function showMore(el) {
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

  	// if (dots.style.display === "none") {
   //  	dots.style.display = "inline";
   //  	btnText.innerHTML = "Read more"; 
   //  	moreText.style.display = "none";
  	// } else {
   //  	dots.style.display = "none";
    	btnText.style.display = "none"; 
    	moreText.style.display = "inline";
  	// }
}


function exibeHabilidade(el){
	var content = el.nextElementSibling;
	el.classList.toggle("active");
    if (content.style.display === "block") {
      content.style.display = "none";
      el.firstElementChild.innerHTML = "playlist_add";
    } else {
      content.style.display = "block";
      el.firstElementChild.innerHTML = "minimize";
    }
}

function exibeMenu(el){
	var content = el.nextElementSibling;
	el.classList.toggle("press");
    if (content.style.display === "block") {
      content.style.display = "none";
      el.firstElementChild.innerHTML = "playlist_add";
    } else {
      content.style.display = "block";
      el.firstElementChild.innerHTML = "minimize";
    }
}

function escondeMenu(el){
	// document.getElementById("menu").style.WebkitTransform = "none"; 
	// // Code for IE9
	// document.getElementById("menu").style.msTransform = "none"; 
	// // Standard syntax
	// document.getElementById("menu").style.transform = "none"; 
	document.getElementById("check").checked = false;
}

// function favorita(el) {
// 	if (el.firstElementChild.style.color=='red'){
// 		el.firstElementChild.style.color = 'black';
// 		el.firstElementChild.className = el.firstElementChild.className.replace("fa-heart", "fa-heart-o");
// 	}else{
// 		el.firstElementChild.style.color = 'red';
// 		el.firstElementChild.className = el.firstElementChild.className.replace("fa-heart-o", "fa-heart");
// 	}	         
// }