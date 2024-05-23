import { soundsControls } from "./elements.js";
import state from "./state.js";
import * as timer from "./timer.js";
import * as audios from "./sounds.js";

// Actions of controls
export function toogleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countdown();
}
export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}
export function add() {
  console.log("add");
}
export function remove() {
  console.log("remove");
}

//actions of sounds

export function selectionSound(sound, backgroundSound) {
  const isSelected = sound.classList.contains("selected");
  soundsControls.forEach((audio) => {
    audio.classList.remove("selected");
    const song = audio.dataset.sound;
    audios[song].pause()
  });
  if (!isSelected) {
    sound.classList.add("selected");
    audios[backgroundSound].play()
  }
}
