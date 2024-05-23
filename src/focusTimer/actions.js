import { soundsControls } from "./elements.js";
import state from "./state.js";
import * as timer from "./timer.js";
import * as audios from "./sounds.js";
import * as elements from "./elements.js";

// Actions of timer controls
state.minutes = Number(elements.minutes.textContent);

export function toogleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countdown();
}
export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  console.log(state.minutes)
  timer.updateDisplay();
}
export function add() {
  state.minutes += 5;
  if(state.minutes > 60){
    return
  }
  if (state.isRunning) {
    timer.countdown(state.minutes);
  } else {
    timer.updateDisplay(state.minutes,0)
  }
}
export function remove() {
  state.minutes -= 5;
  if(state.minutes < 0){
    return
  }
  if (state.isRunning) {
    timer.countdown(state.minutes);
  } else {
    timer.updateDisplay(state.minutes,0)
  }
}

//actions of sounds controls
export function selectionSound(sound, backgroundSound) {
  const isSelected = sound.classList.contains("selected");
  soundsControls.forEach((audio) => {
    audio.classList.remove("selected");
    const song = audio.dataset.sound;
    audios[song].pause();
  });
  if (!isSelected) {
    sound.classList.add("selected");
    audios[backgroundSound].play();
  }
}
