const links = document.querySelectorAll('.fac-prompt-grid__links ol li a');

links.forEach(f => f.addEventListener('mouseenter', function(x) {
  const open = document.querySelector('.open');
  open.classList.remove('open');
  const linkSelected = f.getAttribute('data-selected');
  const imgSelected = document.querySelector('.fac-prompt-grid__image' + '.' + linkSelected)
  imgSelected.classList.add("open");
}))
