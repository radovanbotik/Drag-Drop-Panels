import { units } from "./units.js";

const renderHTML = list => {
  const tilesHTML = units.map(unit => {
    const { name, img } = unit;
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "tile");
    listItem.setAttribute("id", "blank-tile");
    if (list.id === "unit-list") {
      listItem.innerHTML = `
        <div class="unit" id="${name}" data-id='unit' draggable="true">
          <img src="${img}" alt="icon for ${name}" class="unit-icon" />
        </div>
      `;
    }

    list.appendChild(listItem);
  });

  return list;
};

export { renderHTML };
