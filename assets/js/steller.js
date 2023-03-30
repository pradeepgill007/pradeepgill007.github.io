/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	let windowWidth = window.innerWidth

	let topMargin = 0
	if(windowWidth < 991){
		topMargin = 50
	}
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top - topMargin
			}, 700, function(){
				//window.location.hash = hash;
			});
      	} 
    });

	$('.navbar-toggler').click(function(){
		$("#navbarSupportedContent").toggleClass("show");
	});

	$('.navbar-nav .nav-item').click(function(){
		$("#navbarSupportedContent").toggleClass("show");
	});
});