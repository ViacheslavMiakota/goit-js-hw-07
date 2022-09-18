import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const listItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${preview}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", listItems);
galleryRef.addEventListener("click", onClickGaleryItem);
function onClickGaleryItem(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image"))
    return;
  console.log(event.code);
}
const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(lightBox);
