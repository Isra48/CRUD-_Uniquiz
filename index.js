import {saveQ} from './firebase.js';
window.addEventListener('DOMContentLoaded', () =>{
    
})

const Qform = document.getElementById('Qform')

Qform.addEventListener('submit', (e) => {
    e.preventDefault();
    
   
    const Materia = document.getElementById('Materia')
    saveQ(Materia.value)

    const Area = document.getElementById('Area')
    saveQ(Area.value)

    const Pregunta= document.getElementById('Pregunta')
    saveQ(Pregunta.value)

    const RespuestaC= document.getElementById('RespuestaC')
    saveQ(RespuestaC.value)

    const Respuesta1 = document.getElementById('Respuesta1')
    saveQ(Respuesta1.value)

    const Respuesta2 = document.getElementById('Respuesta2')
    saveQ(Respuesta2.value)

    const Respusta3 = document.getElementById('Respuesta3')
    saveQ(Respusta3.value)
   
   Qform.reset()

})