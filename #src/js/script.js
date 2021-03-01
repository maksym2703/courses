function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

//form validation 

	function validate() {
	let mailName = document.getElementById('email');
	let mailName2 = document.getElementById('email2');
	let userPassword = document.getElementById('password');
	let regValid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	let regValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


	if(!mailName.value || !regValid.test(mailName.value)) {
		mailName.style.border = '2px solid red';
		mailName.value = 'Введіть Вашу ел. адресу';
		mailName.style.color = '#aaa';
		return false;
	}

	if(!userPassword.value || !regValidPassword.test(userPassword.value)) {
		userPassword.style.border = '2px solid red';
		userPassword.style.color = '#aaa';
		return false;
	} 

	
	return true;
};



//slider

$(document).ready(function() {
	$('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
		responsive: [
				{
				breakpoint: 1399,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 1099,
				settings: {
				  slidesToShow: 2,

				}
			},
			{
				breakpoint: 767,
				settings: {
				  slidesToShow: 1,
				  autoplay: true,
				  dots: true,
				  arrows: false,
				}
			}
		]
	});


	$(".header__burger").click(function() {
		$(".header__burger, .menu__list").toggleClass('active');
		$("body").toggleClass('lock');
	})
});







