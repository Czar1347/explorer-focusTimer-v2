import {timerControls, sounds}from './elements.js'
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
sounds.forEach(sound => {
    sound.addEventListener('click', event=>{
        const audio = event.target.dataset.sound
        
        actions[audio]()
        actions.selectionSound(sound)
    })
})
    
}