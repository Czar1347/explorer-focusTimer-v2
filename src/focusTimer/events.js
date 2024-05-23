import {timerControls, soundsControls}from './elements.js'
import * as actions from './actions.js'

export function registeControls(){
    timerControls.addEventListener('click', event => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }
        actions[action]()  
    })
}

export function registerAudios() {
soundsControls.forEach(sound => {
    sound.addEventListener('click', event=>{
        const audio = event.target.dataset.sound
        actions.selectionSound(sound, audio)
    })
})
    
}