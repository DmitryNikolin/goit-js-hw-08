// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createMarkup(galleryItems);
console.log(galleryMarkup);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onGalleryContainerClick);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
                <a class="gallery__item" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
            `;
    })
    .join('');
}

function onGalleryContainerClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
