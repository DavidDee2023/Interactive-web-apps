/**
 * This code is a combination of JavaScript and HTML code. It is handling some actions and events related to a book listing.
 */

import { BOOKS_PER_PAGE, authors, genres, books } from './data.js';


/**
 * First, there are some variable assignments and checks at the beginning of the code. 
 * It checks if the books variable is defined and an array, and throws an error if it is not. 
 * Similarly, it checks if the range variable is defined and has a length of at least 2, and throws an error if it does not.
 */


const matches = books;
const page = 1;
const range = [0, BOOKS_PER_PAGE];

if (!books || !Array.isArray(books)) {
  throw new Error('Source required');
}

if (!range || range.length < 2) {
  throw new Error('Range must be an array with two numbers');
}

/**
 * Here there are two objects defined: day and night , containing color values for dark and light themes. 
 * These preview elements are appended to the fragment.
 */

const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
};

const night = {
  dark: '255, 255, 255',
  light: '10, 10, 20',
};

function createPreview({ author, id, image, title }) {
  const previewElement = document.createElement('div');
  previewElement.classList.add('preview');

  const imageElement = document.createElement('img');
  imageElement.classList.add('preview__image');
  imageElement.src = image;

  const infoElement = document.createElement('div');
  infoElement.classList.add('preview__info');

  const titleElement = document.createElement('h3');
  titleElement.classList.add('preview__title');
  titleElement.textContent = title;

  const authorElement = document.createElement('div');
  authorElement.classList.add('preview__author');
  authorElement.textContent = author;

  infoElement.appendChild(titleElement);
  infoElement.appendChild(authorElement);

  previewElement.appendChild(imageElement);
  previewElement.appendChild(infoElement);

  return previewElement;
}

/**
 * The code then creates a documentFragment to store extracted book previews.
 * It extracts the first 36 books from the books array and iterates over them to create preview elements using the createPreview function.
 */

const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

// Select the element with the class 'list__items'

 

const listItemsElement = document.querySelector('.list__items');

for (let i = 0; i < extracted.length; i++) {
  const { author, image, title, id } = extracted[i];

  const preview = createPreview({
    author,
    id,
    image,
    title,
  });

  fragment.appendChild(preview);
}


/**
 * There are similar operations for creating dropdown options for genres and authors.
 * These options are appended to document.createDocumentFragment which are then appended to their respective elements.
 */

listItemsElement.appendChild(fragment);
const xgenres = document.createDocumentFragment();
let element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Genres';
xgenres.appendChild(element);

for (const [id, name] of Object.entries(xgenres)) {
  element = document.createElement('option');
  element.value = id;
  element.innerText = name;
  xgenres.appendChild(element);
}

// data-search-genres.appendChild(xgenres);

const xauthors = document.createDocumentFragment();
element = document.createElement('option');
element.value = 'any';
element.innerText = 'All Authors';
xauthors.appendChild(element);

for (const [id, name] of Object.entries(xauthors)) {
  element = document.createElement('option');
  element.value = id;
  element.innerText = name;
  authors.appendChild(element);
}

// data-search-authors.appendChild(authors);

/**
 * Also here there are some operations related to setting the theme based on the user's preferred color scheme. 
 * It checks if the user's preferred color scheme is dark and sets the theme accordingly.
 */

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = prefersDarkMode ? 'night' : 'day';
const css = prefersDarkMode ? night : day;

/**
 * The code also manipulates some CSS variables on the documentElement based on the theme.
 * There are some assignments and operations related to buttons and their states, 
 * Such as enabling/disabling the "Show more" button based on the number of remaining items, setting the button label dynamically, etc.
 */
document.documentElement.style.setProperty('--color-dark', css.dark);
document.documentElement.style.setProperty('--color-light', css.light);
const buttonElement = document.querySelector('[data-list-button]');
buttonElement.innerText = `Show more (${matches.length - page * BOOKS_PER_PAGE})`;

if (matches.length - page * BOOKS_PER_PAGE <= 0) {
  buttonElement.disabled = true;
} else {
  buttonElement.disabled = false;
}

/**
 * There are some event handlers for various elements and interactions, 
 * Such as clicking on the "Show more" button, clicking on the search icon, submitting search and settings forms, and more
 * These handlers perform various actions such as updating the book list, applying filters to the book list, showing book details, etc.
 */

// Select the button with the class 'overlay__button'
const cancelButton = document.querySelector('.overlay__button[data-search-cancel]');

cancelButton.addEventListener('click', () => {
  if (dataSearchOverlay.open === false) {
    
  }
});

data-settings-cancel.addEventListener('click', () => {
  if (document.querySelector('[data-settings-overlay]').open === false) {
    
  }
});


data-settings-form.addEventListener('submit', (event) => {
  event.preventDefault();
  actions.settings.submit();
});

data-list-close.addEventListener('click', () => {
  if (data-list-active.open === false) {
    
  }
});

data-list-button.addEventListener('click', () => {
  document.querySelector(data-list-items).appendChild(
    createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)
  );
  actions.list.updateRemaining();
  page = page + 1;
});

data-header-search.addEventListener('click', () => {
  if (data-search-overlay.open === true) {
    data-search-title.focus();
  }
});


data-search-form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];
  
  
for (const book of booksList) {
  const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
  const authorMatch = filters.author === 'any' || book.author === filters.author;
  let genreMatch = false;

  if (filters.genre === 'any') {
    for (const genre of book.genres) {
      if (genre === filters.genre) {
        genreMatch = true;
        break;
      }
    }
  } else {
    genreMatch = true;
  }

  if (titleMatch && authorMatch && genreMatch) {
    result.push(book);
  }
}
  
if (result.length < 1) {
  data-list-message.classList.add('list__message_show');
} else {
  data-list-message.classList.remove('list__message_show');
}

const listItemsElement = document.querySelector('[data-list-items]');
listItemsElement.textContent = '';

const fragment = document.createDocumentFragment();
const extracted = result.slice(range[0], range[1]);

for (const { author: authorId, id, image, title } of extracted) {
  
  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = /* html */ `
    <img class="preview__image" src="${image}" />
    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[authorId]}</div>
    </div>
  `;

  fragment.appendChild(element);
}


data-list-items.appendChild(fragment);
const initial = result.length - page * BOOKS_PER_PAGE;
const remaining = initial > 0 ? initial : 0;
const buttonElement = document.querySelector('[data-list-button]');
buttonElement.disabled = initial > 0;

buttonElement.innerHTML = ` <span>Show more</span>
<span class="list__remaining"> (${remaining})</span>`;
  
window.scrollTo({ top: 0, behavior: 'smooth' });
const overlayElement = document.querySelector('[data-search-overlay]');
overlayElement.setAttribute('open', false);
  
});
  
data-settings-overlay.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const result = Object.fromEntries(formData);
  document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
  document.documentElement.style.setProperty('--color-light', css[result.theme].light);
  const overlayElement = document.querySelector('[data-search-overlay]');
  overlayElement.setAttribute('open', false);
  
});
  
data-list-items.addEventListener('click', (event) => {
const pathArray = Array.from(event.path || event.composedPath());
let active = null;

for (const node of pathArray) {
const previewId = node?.dataset?.preview;

for (const singleBook of books) {
if (singleBook.id === previewId) {
  active = singleBook;
  break;
}
}

if (active) {
  break;
}

}
  
if (!active) {
  return;
}

const listActiveElement = document.querySelector('[data-list-active]');
const listBlurElement = document.querySelector('[data-list-blur]');
const listTitleElement = document.querySelector('[data-list-title]');
const listSubtitleElement = document.querySelector('[data-list-subtitle]');
const listDescriptionElement = document.querySelector('[data-list-description]');


listActiveElement.open = true;
listBlurElement.style.backgroundImage = `url(${active.image})`;
listTitleElement.textContent = active.title;
listSubtitleElement.textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
listDescriptionElement.textContent = active.description;

});