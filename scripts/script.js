"use strict"

const playerToggleButton = document.querySelector('.toggle-btn');
const playerList = document.querySelector('.playlist');
const songTextButton = document.querySelector('.song__text');

const headerToggleButton = document.querySelector('.header__button');
const headerStreaming = document.querySelector('.header__links');

const toggleInfo = () => {
  playerList.classList.toggle('visible');
  playerToggleButton.classList.toggle('close-btn');
  songTextButton.classList.toggle('visible-btn');
}

const toggleStreaming = () => {
  headerStreaming.classList.toggle('vis-btn');
  headerToggleButton.classList.toggle('close-btn');
  headerToggleButton.classList.toggle('header__button');
}

playerToggleButton.addEventListener('click', toggleInfo);
headerToggleButton.addEventListener('click', toggleStreaming);

