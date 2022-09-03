import { getElement } from "./utility/getElement.js";
import { renderList } from "./renderList.js";
import { renderHTML } from "./renderHTML.js";

const unitList = getElement("unit-list");
const blankList = getElement("blank-list");
const init = () => {
  renderList(renderHTML(unitList));
  renderList(renderHTML(blankList));

  //   renderList(unitList);
  //   renderList(blankList);
};
/* Event Listeners */
window.addEventListener("DOMContentLoaded", init);

export { unitList, blankList };
