// Buttom hamburger menu for SP
$('.hamburger').click( function() {
	$(this).toggleClass('is-active');
  $('.nav__list').slideToggle();
  $('body').toggleClass('locked');
});