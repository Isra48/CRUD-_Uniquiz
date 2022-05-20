  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getFirestore, collection,addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAvEnOl8iud07xG1qylPkylj2vfP8MiMOg",
    authDomain: "crud-5d743.firebaseapp.com",
    projectId: "crud-5d743",
    storageBucket: "crud-5d743.appspot.com",
    messagingSenderId: "734965907218",
    appId: "1:734965907218:web:8a39ad3c7d23dc110f3dcb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore()

  export const saveQ = (Materia, Area, Pregunta, RespuestaC, Respuesta1, Respuesta2, Respuesta3  ) =>{
        addDoc(collection(db,'Preguntas'),{Materia: Materia, Area: Area, Pregunta: Pregunta, RespuestaC: RespuestaC, Respuesta1: Respuesta1, Respuesta2: Respuesta2, Respuesta3: Respuesta3, })
  }

  export const getQ =() => getDocs(collection(db,'Preguntas'))
  export const onGetQ = () => console.log('onGetQ')
  export{
    onSnapshot,collection, db
  }