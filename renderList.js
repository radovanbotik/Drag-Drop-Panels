import { getElement } from "./utility/getElement.js";
import { removeDragStyles } from "./utility/removeDragStyles.js";
import { addDragStyles } from "./utility/addDragStyles.js";
import { renderHTML } from "./renderHTML.js";

const renderList = list => {
  let tile = [];
  let unit = "";
  list.addEventListener("mouseover", e => {
    if (
      e.target.className !== "tile-list" &&
      e.target.className === "unit-icon"
    ) {
      unit = e.target.parentElement;
    }
    if (unit) {
      unit.addEventListener("dragstart", e => {
        const unit = e.target.parentElement;
        e.dataTransfer.setData("text/plain", unit.id);
      });
    }
    if (e.target.className !== "tile-list" && e.target.className === "tile") {
      tile.push(e.target);
    }
    if (tile.length > 0) {
      tile.forEach(tile => {
        tile.addEventListener("dragover", e => {
          e.preventDefault();
          addDragStyles(tile);
        });
        tile.addEventListener("drop", e => {
          console.log(e.target);
          e.preventDefault();
          const retrievedID = e.dataTransfer.getData("text/plain");
          tile.appendChild(getElement(retrievedID));
          removeDragStyles(tile);
        });

        tile.addEventListener("dragleave", e => {
          removeDragStyles(tile);
          tile.dataset.id === "slotted";
        });
      });
    }
  });
};
export { renderList };
// list.addEventListener("mouseover", e => {
//     let unit = "";
//     let tile = "";
//     if (list.id === "unit-list") {
//       if (e.target.parentElement.dataset.id === "unit") {
//         unit = e.target.parentElement;
//       }
//     }
//     if (list.id === "blank-list") {
//       if (e.target.id.includes("blank_tile")) {
//         tile = e.target;
//       }
//     }
//     if (unit && tile) {
//       unit.addEventListener("dragstart", e => {
//         e.dataTransfer.setData("text/plain", unit.id);
//       });
//     }

//     if (tile) {
//       tile.addEventListener("dragover", e => {
//         e.preventDefault();
//         addDragStyles(tile);
//       });

//       tile.addEventListener("drop", e => {
//         e.preventDefault();
//         const retrievedID = e.dataTransfer.getData("text/plain");
//         console.log(retrievedID);
//         tile.appendChild(getElement(retrievedID));
//         removeDragStyles(tile);
//       });

//       tile.addEventListener("dragleave", e => {
//         removeDragStyles(tile);
//         tile.dataset.id === "slotted";
//       });
//     }
// })
