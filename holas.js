import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { onSnapshot, collection, doc, setDoc, getDocs, getFirestore, updateDoc, increment, query, orderBy } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "votos-11d12.firebaseapp.com",
  projectId: "votos-11d12",
  storageBucket: "votos-11d12.appspot.com",
  messagingSenderId: "749944122292",
  appId: "1:749944122292:web:856682d456e713a0f760e1",
  measurementId: "G-JQZGDCK8QJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const candidatosCollection = collection(db, "candidatos");

function crearCardCandidato(candidato) {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = candidato.nombre;

  let cardInfo = document.createElement("p");
  cardInfo.classList.add("card-text");
  cardInfo.textContent = candidato.informacion;

  let cardVotes = document.createElement("p");
  cardVotes.classList.add("card-text", "card-text-votos");
  cardVotes.textContent = "Votos: " + candidato.votos;

  let cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top", "custom-img-size");
  console.log("Valor de candidato.img:", candidato.img);
  if (candidato.img.includes("lamerce")) {
    cardImage.src = "https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/lamerce.jpg?alt=media&token=8ae5d097-25bf-4cd2-8e55-fc42376511f1";
  } else if (!candidato.img.includes("danielo") && candidato.img.includes("elflexita")) {
    cardImage.src = "https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/elflexita.jpg?alt=media&token=bf325cb2-0dbc-47c4-b2fc-90a57376aa5f";
  } else {
    cardImage.src = "https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/danielo.jpg?alt=media&token=0ce73180-53e9-4b38-bc79-c70b47e4360f";
  }

  let voteButton = document.createElement("button");
  voteButton.classList.add("btn", "btn-primary");
  voteButton.textContent = "Votar";

  let voteCount = document.createElement("span");
  voteCount.classList.add("contador-votos");
  voteCount.textContent = "Votos: " + candidato.votos;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardInfo);
  cardBody.appendChild(cardImage);
  cardBody.appendChild(cardVotes);
  cardBody.appendChild(voteButton);
  cardBody.appendChild(voteCount);

  card.appendChild(cardBody);
  document.getElementById("candidatosContainer").appendChild(card);
  voteButton.addEventListener("click", async () => {
    let ip = await fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => data.ip)
      .catch((error) => {
        console.log("Error al obtener la dirección IP:", error);
        return null;
      });

    if (localStorage.getItem(ip)) {
      alert("Ya has votado antes");
    } else {
      let newVotes = candidato.votos + 1;
      let candidateDoc = doc(db, "candidatos", candidato.id);
      await updateDoc(candidateDoc, { votos: increment(1) });
      localStorage.setItem(ip, true);
      voteCount.textContent = "Votos: " + newVotes;
    }
  });
}

async function obtenerCandidatos() {
  const candidatosQuery = query(candidatosCollection, orderBy("votos", "desc"));
  const candidatosSnapshot = await getDocs(candidatosQuery);
  candidatosSnapshot.forEach((candidatoDoc) => {
    let candidato = candidatoDoc.data();
    candidato.id = candidatoDoc.id;
    crearCardCandidato(candidato);
  });
}

obtenerCandidatos();
// Función para obtener la fecha actual
function getCurrentDate() {
    let currentDate = new Date();
    return currentDate;
  }
  
  // Función para obtener la fecha de fin del contador
  function getEndDate() {
    let currentDate = getCurrentDate();
    let endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (7 - currentDate.getDay())); // Obtener el siguiente domingo
    endDate.setHours(23, 59, 59, 999); // Establecer la hora de finalización en 23:59:59.999
    return endDate;
  }
  
  // Función para actualizar el contador
  function updateCountdown() {
    let endDate = getEndDate();
    let now = getCurrentDate().getTime();
    let timeLeft = endDate - now;
  
    if (timeLeft <= 0) {
      let countdownElement = document.getElementById("countdown");
      countdownElement.innerHTML = "¡Tiempo terminado!";
      let voteButtons = document.getElementsByClassName("btn-primary");
      for (let i = 0; i < voteButtons.length; i++) {
        voteButtons[i].disabled = true;
      }
      return; // Salir de la función si el tiempo ha terminado
    }
  
    let days = Math.ceil(timeLeft / (1000 * 60 * 60 * 24)); // Utilizamos Math.ceil para redondear hacia arriba
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  
 
    let countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "00 días " + formatNumber(hours) + " horas " + formatNumber(minutes) + " minutos";
  }
  // Función para formatear los números a dos dígitos
  function formatNumber(number) {
    return number.toString().padStart(2, "0");
  }
  
  // Actualizar el contador cada segundo
  setInterval(updateCountdown, 1000);