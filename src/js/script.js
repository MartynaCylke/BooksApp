{
  ("use strict");

  const select = {
    templateOf: {
      bookTemplate: "#template-book",
    },
    containerOf: {
      booksList: ".books-list",
      images: ".book__image",
      filters: ".filters",
    },
  };

  const templates = {
    bookTemplate: Handlebars.compile(
      document.querySelector(select.templateOf.bookTemplate).innerHTML
    ),
  };

  class Books {
    constructor() {
      const thisBooks = this;

      thisBooks.initData();
      thisBooks.getElements();
      thisBooks.render();
    }

    initData() {
      const thisBooks = this;
      thisBooks.data = dataSource.books;
    }

    getElements() {
      const thisBooks = this;

      thisBooks.bookContainer = document.querySelector(
        select.containerOf.booksList
      );
    }

    render() {
      const thisBooks = this;

      for (let book of thisBooks.data) {
        const generateHTML = templates.bookTemplate({
          id: book.id,
          name: book.name,
          image: book.image,
          rating: book.rating,
          price: book.price,
        });

        const elem = utils.createDOMFromHTML(generateHTML);
        const bookContainer = document.querySelector(
          select.containerOf.booksList
        );
        bookContainer.appendChild(elem);
      }
    }
  }

  new Books();
}
