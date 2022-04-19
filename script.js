
// $( document ).ready(function() {
// 	$('.fac-prompt-grid__links ul a').hover(function(){
// 		$('.fac-prompt-grid__image').removeClass('open');
// 		var myProduction = $(this).data('workid');
// 		var myDiv = $('.fac-prompt-grid__image' + '.' + myProduction);
// 		$(myDiv).addClass('open');
// 	});
// });

const links = document.querySelectorAll('.fac-prompt-grid__links ol li a');

links.forEach(f => f.addEventListener('mouseenter', function(x) {
const open = document.querySelector('.open');
 open.classList.remove('open');
  const linkSelected = f.getAttribute('data-selected');
  const imgSelected = document.querySelector('.fac-prompt-grid__image' + '.' + linkSelected)
  imgSelected.classList.add("open");
}))
