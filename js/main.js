'use strict';

{
  const hb = document.getElementById('hb');
  const cake = document.getElementById('cake');

  cake.addEventListener('click', () => {
    hb.classList.add('open')
  });

}