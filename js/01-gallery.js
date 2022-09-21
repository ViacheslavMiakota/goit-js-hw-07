import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const listItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"укааукауцк
       alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", listItems);
galleryRef.addEventListener("click", onClickGaleryItem);

function onClickGaleryItem(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image"))
    return;
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener(
          "keydown",
          function (event) {
            if (event.code === "Escape") {
              return instance.close();
            }
          }
        );
      },
      onClose: (instance) => {
        window.addEventListener(
          "keydown",
          function (event) {
            if (event.code === "Escape") {
              return instance.close();
            }
          }
        );
      },
    }
  );

  instance.show();
  console.log(event.code);
}
