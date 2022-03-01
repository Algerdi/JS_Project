"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'purple';
box.style.width = '333px';

box.style.cssText = 'background-color: blue; width: 555px';

btns[1].style.borderRadius = '88%';

circles[0].style.backgroundColor = 'brown';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'pink';
//     hearts[i].style.cssText = `height: 1${i*3}0px`;
// }

hearts.forEach(item => {
    item.style.cssText = `width: 130px`;
    item.style.backgroundColor = 'pink';
});

const div = document.createElement('div');
// const text = document.createTextNode('hellupa');

div.classList.add('black');
// document.querySelector('.wrapper').append(div);
// document.querySelector('.wrapper').prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();
// hearts[0].replaceWith(circles[0]);

wrapper.insertBefore(div, hearts[0]);

// wrapper.removeChild(hearts[1]);

wrapper.replaceChild(circles[0], hearts[0])

div.innerHTML = '<h1>Kapibara!</h1>';
// div.textContent = 'Kapibara!';

div.insertAdjacentHTML('beforebegin', '<h2>Kalivanich</h2>')