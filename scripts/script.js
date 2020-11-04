"use strict"

const playerToggleButton = document.querySelector('.toggle-btn');
const playerList = document.querySelector('.playlist');
const songTextButton = document.querySelector('.song__text');

const toggleInfo = () => {
  playerList.classList.toggle('visible');
  playerToggleButton.classList.toggle('close-btn');
  songTextButton.classList.toggle('visible-btn');
}

playerToggleButton.addEventListener('click', toggleInfo)

