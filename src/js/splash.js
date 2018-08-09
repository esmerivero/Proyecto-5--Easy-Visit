// For Demo purposes only (show hover effect on mobile devices)
[].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
    el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
} );

const btnRegistro = document.getElementById('btnRegistro');

btnRegistro.addEventListener('click', () => {
  window.location.href = 'views/registro.html';
});