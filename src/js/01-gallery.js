// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      item => `<li class="item">
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join('');
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.innerHTML = addGalleryMarkup;

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });