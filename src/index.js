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

/*
const pictureUpdateElement = document.getElementById("picture-url-update");
const pictureUpdateButtonElement = document.getElementById("picture-update-button");

const updateInputContents = () => pictureInputElement.value;
const clearUpdateInputContents = () => (pictureInputElement.value = "");

const updatePictureHandler = () => {
  const url = updateInputContents();
  clearUpdateInputContents();
  return url;
};
*/

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
      remove(i);
      refreshGrid();
    });

    /*------------------------------------------------------------------------*/

    /*
    const updateButtonElement = clone.querySelector(
      ".picture-item-update-button"
    );

    updateButtonElement.addEventListener("click", () => {
      //const newUrl = updatePictureHandler();
      update(i);
      refreshGrid();
    });
    */

    /*------------------------------------------------------------------------*/

    const getButtonElement = clone.querySelector(
      ".picture-item-get-button"
    );

    getButtonElement.addEventListener("click", () => {
      const url = get(i);
      console.log(url);
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
  const url = getInputContents();

  add(url);
  refreshGrid();

  // FIXME: bonus, trim eventual whitespaces and validate content

  clearInputContents();
};


refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
