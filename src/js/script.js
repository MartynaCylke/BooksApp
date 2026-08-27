const app = {
  favoriteBooks: [],
  filters: [],
};

app.initData = function() {
  const savedFavorites = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
  app.favoriteBooks = savedFavorites.filter((id) =>
    dataSource.books.some((book) => book.id === id)
  );
};

app.renderBooks = function() {
  const booksList = document.querySelector('.books-list');
  const templateSource = document.querySelector('#template-book').innerHTML;
  const template = Handlebars.compile(templateSource);

  booksList.innerHTML = '';
  for (const book of dataSource.books) {
    const bookElement = utils.createDOMFromHTML(template(book));
    const imageLink = bookElement.querySelector('.book__image');
    const ratingFill = bookElement.querySelector('.book__rating__fill');

    imageLink.classList.toggle('favorite', app.favoriteBooks.includes(book.id));
    imageLink.setAttribute('aria-pressed', app.favoriteBooks.includes(book.id));
    ratingFill.style.width = `${book.rating * 10}%`;

    booksList.appendChild(bookElement);
  }
};

app.applyFilters = function() {
  const bookElements = document.querySelectorAll('.book');

  for (const bookElement of bookElements) {
    const bookId = Number(bookElement.querySelector('.book__image').dataset.id);
    const book = dataSource.books.find((item) => item.id === bookId);
    const matchesFilters = app.filters.every((filter) => book.details[filter]);

    bookElement.classList.toggle('is-hidden', !matchesFilters);
  }
};

app.initActions = function() {
  const booksList = document.querySelector('.books-list');
  const filtersForm = document.querySelector('.filters');

  booksList.addEventListener('click', function(event) {
    const imageLink = event.target.closest('.book__image');
    if (!imageLink) return;

    event.preventDefault();
    const bookId = Number(imageLink.dataset.id);
    const favoriteIndex = app.favoriteBooks.indexOf(bookId);

    if (favoriteIndex === -1) app.favoriteBooks.push(bookId);
    else app.favoriteBooks.splice(favoriteIndex, 1);

    imageLink.classList.toggle('favorite', favoriteIndex === -1);
    imageLink.setAttribute('aria-pressed', favoriteIndex === -1);
    localStorage.setItem('favoriteBooks', JSON.stringify(app.favoriteBooks));
  });

  filtersForm.addEventListener('change', function(event) {
    if (!event.target.matches('input[name="filter[]"]')) return;

    app.filters = Array.from(
      filtersForm.querySelectorAll('input[name="filter[]"]:checked'),
      (input) => input.value
    );
    app.applyFilters();
  });
};

app.init = function() {
  app.initData();
  app.renderBooks();
  app.initActions();
};

app.init();
