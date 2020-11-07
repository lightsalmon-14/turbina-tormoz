// "use strict"

const playerToggleButton = document.querySelector('.button__toggle');
const playerList = document.querySelector('.playlist');
const songTextButton = document.querySelector('.button__text');

const headerToggleButton = document.querySelector('.header__button');
const headerStreaming = document.querySelector('.header__links');
const closeTop = document.querySelectorAll('button')

const toggleInfo = () => {
  playerList.classList.toggle('visible');
  playerToggleButton.classList.toggle('button__close');
  playerToggleButton.classList.toggle('button__toggle');
  playerToggleButton.classList.toggle('button__close_player');
  songTextButton.classList.toggle('button__visible');
  songTextButton.classList.toggle('button__visible_text');
}

const toggleStreaming = () => {
  headerStreaming.classList.toggle('button__visible');
  headerToggleButton.classList.toggle('button__close');
  headerToggleButton.classList.toggle('header__button');
  headerToggleButton.classList.toggle('button__close_top');
  if(headerStreaming.classList.contains('button__visible')) {
    closeTop[0].textContent = '';
  } else {
    closeTop[0].textContent = 'Стриминги';
  }
}
playerToggleButton.addEventListener('click', toggleInfo);
headerToggleButton.addEventListener('click', toggleStreaming);


