"use strict"

const playerToggleButton = document.querySelector('.button__toggle');
const playerList = document.querySelector('.playlist');
const songTextButton = document.querySelector('.button__text');

const headerToggleButton = document.querySelector('.header__button');
const headerStreaming = document.querySelector('.header__links');

const toggleInfo = () => {
  playerList.classList.toggle('visible');
  playerToggleButton.classList.toggle('button__close');
  playerToggleButton.classList.toggle('button__toggle');
  songTextButton.classList.toggle('visible-btn');
}

const toggleStreaming = () => {
  headerStreaming.classList.toggle('visible-btn');
  headerToggleButton.classList.toggle('button__close');
  headerToggleButton.classList.toggle('header__button');
  headerToggleButton.classList.toggle('button__close_top');
}

playerToggleButton.addEventListener('click', toggleInfo);
headerToggleButton.addEventListener('click', toggleStreaming);

