import { sounds } from "./elements.js";
import state from "./state.js";

export function soundControl() {
  sounds.forEach((sound) => {
    sound.addEventListener("click", (event) => {
      sounds.forEach((btn) => {
        btn.classList.remove("selected");
      });

      const isSelected = sound.classList.contains("selected");
      if (!isSelected) {
        sound.classList.add("selected");
      }
    });
  });
}
