const getElement = nodeID => {
  if (document.getElementById(nodeID)) {
    return document.getElementById(nodeID);
  } else {
    throw new Error("provide correct ID");
  }
};

export { getElement };
