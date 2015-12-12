wow = new WOW(
	{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
	}
)
wow.init();

function favorita(el) {
	if (el.firstElementChild.style.color=='red'){
		el.firstElementChild.style.color = 'black';
		el.firstElementChild.className = el.firstElementChild.className.replace("fa-heart", "fa-heart-o");
	}else{
		el.firstElementChild.style.color = 'red';
		el.firstElementChild.className = el.firstElementChild.className.replace("fa-heart-o", "fa-heart");
	}	         
}