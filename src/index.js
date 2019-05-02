import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update";
import get from "./actions/get";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");


const pictureUpdateElement = document.getElementById("update-input");
const pictureUpdateButtonElement = document.getElementById("update-button");

const updateInputContents = () => pictureUpdateElement.value;
const clearUpdateInputContents = () => (pictureUpdateElement.value = "");


const refreshGrid = () => {
  const items = [...list()];

  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    imgElement.src = i;

    /*------------------------------------------------------------------------*/

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    deleteButtonElement.addEventListener("click", () => {
      remove(i, imgElement);
    });

    /*------------------------------------------------------------------------*/

    const updateButtonElement = clone.querySelector(
      ".picture-item-update-button"
    );

    updateButtonElement.addEventListener("click", async () => {

      clearUpdateInputContents();
      const updatePictureHandler = () => {
        const url = updateInputContents().trim();
        if ("" !== url) {
          update(i, url, imgElement);
        }
      };

      pictureUpdateButtonElement.addEventListener("click", () => updatePictureHandler())
    });

    /*------------------------------------------------------------------------*/

    const getButtonElement = clone.querySelector(
      ".picture-item-get-button"
    );

    getButtonElement.addEventListener("click", () => {
      const url = get(i);
      if (url) {
        window.open(get(i), 'Download');
      }
    });

    /*------------------------------------------------------------------------*/

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

const addPictureHandler = () => {
  const url = getInputContents().trim();
  if ("" !== url) {
    add(url);
  }
  clearInputContents();
};


refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
