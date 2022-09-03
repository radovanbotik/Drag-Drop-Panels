const getElement = nodeID => {
  if (nodeID) {
    return document.getElementById(nodeID);
  } else {
    throw new Error("provide correct ID");
  }
};

export { getElement };
