import {saveQ} from './firebase.js';
window.addEventListener('DOMContentLoaded', () =>{
    
})

const Qform = document.getElementById('Qform')

Qform.addEventListener('submit', (e) => {
    e.preventDefault() 
   
   
   const Materia = Qform['Materia']
   const Area = Qform['Area']
   const Pregunta = Qform['Pregunta']
   const RespuestaC = Qform['RespuestaC']
   const Respuesta1= Qform['Respuesta1']
   const Respuesta2 = Qform['Respuesta2']
   const Respuesta3 = Qform['Respusta3']

   
   saveQ(Materia.value,Area.value,Pregunta.value,RespuestaC.value,Respuesta1.value, Respuesta2.value,Respuesta3.value)

   Qform.reset()

})