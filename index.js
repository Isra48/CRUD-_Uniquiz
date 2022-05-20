import {getQ, saveQ, onSnapshot,collection,db} from './firebase.js';
const Qform = document.getElementById('Qform')

const ContainerQ = document.getElementById('List-Container')

window.addEventListener('DOMContentLoaded', async () =>{
  //const Questions= await getQ()
  onSnapshot(collection(db,'Preguntas'),(Questions)=>{
    let html = ''
    
    Questions.forEach(doc =>{
        const task = doc.data()
        console.log(doc.data())
  
        html += `
        <div class="card-question" style=" justify-content:space-around; margin-right:1em; ">
       
  
          
          <p class="">${task.Pregunta} </p>
          <i class="fa-solid fa-circle-xmark fa-xl quitIcon"></i>
        </div>
        `
    } )
    ContainerQ.innerHTML = html

  });

  

 
});



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