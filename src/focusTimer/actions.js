import { sounds } from "./elements.js";
import state from "./state.js";

// Actions of controls
export function toogleRunning() {
  state.isRunnig = document.documentElement.classList.toggle("running");
}
export function reset() {
  state.isRunnig = false;
  document.documentElement.classList.remove("running");
}
export function add() {
  console.log("add");
}
export function remove() {
  console.log("remove");
}

//actions of sounds
export function tree() {
  console.log("tree");
}
export function snow() {
  console.log("snow");
}
export function storefront() {
  console.log("storefront");
}
export function fire() {
  console.log("fire");
}
export function selectionSound(sound) {
  const isSelected = sound.classList.contains("selected");
  sounds.forEach((audio) => {
    audio.classList.remove("selected");
  });
  if (!isSelected) {
    sound.classList.add("selected");
  }
}
