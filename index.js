import {saveQ} from './firebase.js';
window.addEventListener('DOMContentLoaded', () =>{
    
})

const Qform = document.getElementById('Qform')

Qform.addEventListener('submit', (e) => {
    e.preventDefault();
    
   
    const Materia = document.getElementById('Materia')
    const Area = document.getElementById('Area')
    const Pregunta = document.getElementById('Pregunta')
    const RespuestaC = document.getElementById('RespuestaC')
    const Respuesta1 = document.getElementById('Respuesta1')
    const Respuesta2 = document.getElementById('Respuesta2')
    const Respuesta3 = document.getElementById('Respuesta3')
    
    
    saveQ(Materia.value,  Area.value, Pregunta.value, RespuestaC.value, Respuesta1.value, Respuesta2.value, Respuesta3.value)
    

   
   Qform.reset()

});