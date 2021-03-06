/* eslint-disable linebreak-style */
export default class BookList {
  constructor() {
    this.bookList = [];
  }

  addBook(title = '', author = '') {
    const list = document.querySelector('.booklist');
    list.style.padding = '0';
    const li = document.createElement('li');
    li.className = 'book-item';
    li.style.margin = '0';
    li.style.listStyleType = 'none';
    li.style.background = '#E7E9EB';
    const bookTitle = document.createElement('p');
    bookTitle.className = 'title';
    bookTitle.innerText = `"${title}" by`;
    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'author';
    bookAuthor.innerText = author;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove';
    removeBtn.innerText = 'Remove';
    li.appendChild(bookTitle);
    li.appendChild(bookAuthor);
    li.appendChild(removeBtn);
    list.appendChild(li);
    const book = { title, author };
    this.bookList.push(book);
    window.localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  removeBook(index) {
    this.bookList = this.bookList.filter((book, i) => this.bookList[index] !== this.bookList[i]);
    window.localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }
}