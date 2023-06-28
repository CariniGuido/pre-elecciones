import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { onSnapshot, collection, doc, setDoc, getDocs, getFirestore, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh9_foQiyNYjMAyvhjDqglCALeIEEM8Yk",
    authDomain: "votos-11d12.firebaseapp.com",
    projectId: "votos-11d12",
    storageBucket: "votos-11d12.appspot.com",
    messagingSenderId: "749944122292",
    appId: "1:749944122292:web:856682d456e713a0f760e1",
    measurementId: "G-JQZGDCK8QJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Referencia a la colección "candidatos" en Firebase
// Referencia a la colección "candidatos" en Firebase
const candidatosCollection = collection(db, "candidatos");

// Función para crear una card de candidato
function crearCardCandidato(candidato) {
  // Crea el elemento div con la clase "card"
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  // Función para obtener la dirección IP del usuario
function obtenerDireccionIP() {
    return fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => data.ip)
      .catch((error) => {
        console.log("Error al obtener la dirección IP:", error);
        return null;
      });
  }

  // Crea el elemento div con la clase "card-body" dentro de la card
  const cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("card-body");

  // Crea el elemento h5 con la clase "card-title" para el nombre del candidato
  const nombreElement = document.createElement("h5");
  nombreElement.classList.add("card-title");
  nombreElement.textContent = candidato.nombre;

  // Crea el elemento p con la clase "card-text" para la información del candidato
  const informacionElement = document.createElement("p");
  informacionElement.classList.add("card-text");
  informacionElement.textContent = candidato.informacion;

  // Crea el elemento p con la clase "card-text card-text-votos" para los votos del candidato
  const votosElement = document.createElement("p");
  votosElement.classList.add("card-text", "card-text-votos");
  votosElement.textContent = "Votos: " + candidato.votos;
  
  // Crea el elemento img con la clase "card-img-top" para la foto del candidato
const fotoElement = document.createElement("img");
fotoElement.classList.add("card-img-top","custom-img-size");
console.log("Valor de candidato.img:", candidato.img);
// Asigna la URL de la foto del candidato según el candidato actual
if (candidato.img.includes("lamerce")) {
    fotoElement.src = "https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/lamerce.jpg?alt=media&token=8ae5d097-25bf-4cd2-8e55-fc42376511f1";
  } else if (candidato.img.includes("danielo")) {
    fotoElement.src = "https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/danielo.jpg?alt=media&token=0ce73180-53e9-4b38-bc79-c70b47e4360f";
  } else if (candidato.img.includes("elflexita")) {
    fotoElement.src = "https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/elflexita.jpg?alt=media&token=bf325cb2-0dbc-47c4-b2fc-90a57376aa5f";
  } else {
    fotoElement.src = "https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/danielo.jpg?alt=media&token=0ce73180-53e9-4b38-bc79-c70b47e4360f";
  }
  // Crea el botón de votar
  const votarButton = document.createElement("button");
  votarButton.classList.add("btn", "btn-primary");
  votarButton.textContent = "Votar";

  // Crea el contador de votos
  const contadorVotos = document.createElement("span");
  contadorVotos.classList.add("contador-votos");
  contadorVotos.textContent = "Votos: " + candidato.votos;

  // Agrega los elementos al card-body
  cardBodyElement.appendChild(nombreElement);
  cardBodyElement.appendChild(informacionElement);
  cardBodyElement.appendChild(fotoElement);
  cardBodyElement.appendChild(votosElement);
  cardBodyElement.appendChild(votarButton);
  cardBodyElement.appendChild(contadorVotos);

  // Agrega el card-body al card
  cardElement.appendChild(cardBodyElement);

  // Agrega la card al contenedor HTML correspondiente
  const contenedorElement = document.getElementById("candidatosContainer");
  contenedorElement.appendChild(cardElement);

  // Agrega el evento click al botón de votar
  votarButton.addEventListener("click", async () => {
    const ip = obtenerDireccionIP();
    const haVotado = localStorage.getItem(ip);
  
    if (haVotado) {
      alert("Ya has votado antes");
      return;
    }
    const votosActualizados = candidato.votos + 1;

    // Actualiza el número de votos en Firebase
    const candidatoRef = doc(db, "candidatos", candidato.id);
    await updateDoc(candidatoRef, { votos: increment(1) });
    localStorage.setItem(ip, true);
    // Actualiza el contador de votos en la interfaz
    contadorVotos.textContent = "Votos: " + votosActualizados;
  });
}

// Obtén los candidatos de Firebase y crea las cards correspondientes
async function obtenerCandidatos() {
  const querySnapshot = await getDocs(candidatosCollection);
  querySnapshot.forEach((doc) => {
    const candidato = doc.data();
    candidato.id = doc.id;
    
    crearCardCandidato(candidato);
  });
}

// Llama a la función para obtener y mostrar los candidatos
obtenerCandidatos();