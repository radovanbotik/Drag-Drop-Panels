import { getElement } from "./utility/getElement.js";
import { removeDragStyles } from "./utility/removeDragStyles.js";
import { addDragStyles } from "./utility/addDragStyles.js";
import { renderHTML } from "./renderHTML.js";

const renderList = list => {
  let tile = [];
  let unit = "";
  const units = [...list.querySelectorAll("[data-id=unit]")];
  const blank_tiles = [...list.querySelectorAll("#blank-tile")];

  units.map(unit => {
    unit.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", unit.id);
    });
  });

  blank_tiles.map(tile => {
    tile.addEventListener("dragover", e => {
      e.preventDefault();
      addDragStyles(tile);
    });

    tile.addEventListener("drop", e => {
      e.preventDefault();
      const retrievedID = e.dataTransfer.getData("text/plain");
      tile.appendChild(getElement(retrievedID));
      removeDragStyles(tile);
    });

    tile.addEventListener("dragleave", e => {
      removeDragStyles(tile);
    });
  });
};
export { renderList };
