"use strict";

// The document is fully usable without JavaScript. This small enhancement
// describes which project is focused in the architecture diagram.
const projectMap = document.querySelector(".ecosystem");
const counter = document.querySelector(".map-counter");
if (projectMap && counter) {
  const nodes = [...projectMap.querySelectorAll(".system-node")];
  const showIndex = (node) => {
    const index = nodes.indexOf(node);
    if (index >= 0) counter.textContent = `${String(index + 1).padStart(2, "0")} / 04`;
  };
  nodes.forEach((node) => {
    node.addEventListener("focus", () => showIndex(node));
    node.addEventListener("pointerenter", () => showIndex(node));
  });
}
