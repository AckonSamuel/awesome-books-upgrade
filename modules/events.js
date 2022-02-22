/* eslint-disable linebreak-style */

import { updateLocalStorage } from './functions.js';

export const bookAdd = (listOfBooks) => {
  const title = document.querySelector('#book_title').value;
  const author = document.querySelector('#book_author').value;
  document.querySelector('#book_title').value = null;
  document.querySelector('#book_author').value = null;
  listOfBooks.addBook(title, author);
  updateLocalStorage(listOfBooks);
};

export const bookRemove = (e, listOfBooks) => {
  if (e.target.classList.contains('remove')) {
    const getLi = document.querySelectorAll('.book-item');
    const index = Array.from(getLi).indexOf(e.target.parentNode);
    listOfBooks.removeBook(index);
    document.querySelectorAll('.book-item')[index].remove();
  }
  updateLocalStorage(listOfBooks);
};

export const showFocusedSection = (event, arr) => {
  const listItems = document.querySelectorAll('.nav-list-item');
  const targetIndex = Array.from(listItems).indexOf(event.target);
  const targetSection = arr[targetIndex];
  const displayedSection = arr.filter((section) => !section.classList.contains('dn'));
  const displayedIndex = arr.indexOf(displayedSection[0]);
  if (displayedSection[0] === targetSection) {
    return;
  }
  targetSection.classList.toggle('dn');
  event.target.classList.toggle('blue');
  displayedSection[0].classList.toggle('dn');
  listItems[displayedIndex].classList.toggle('blue');
};