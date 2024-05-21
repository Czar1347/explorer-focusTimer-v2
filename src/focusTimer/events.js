import {timerControls}from './elements.js'

export function registeControls(){
    timerControls.addEventListener('click', event => {
        const actions = event.target.dataset.action
        if(actions === undefined){
            return
        }
    })
}