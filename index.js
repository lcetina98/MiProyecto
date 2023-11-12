document.querySelectorAll("nav a").forEach(Link =>  {
  Link.addEventListener("click", scrollToSection);
});
function scrollToSection(event) {
  event.preventDefault();

  const targetId= event.target.getAttribute("href").substring(1);
  const targetSection= document.getElementById(targetId);

  if(targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}
document.querySelectorAll("nav a").forEach(Link =>  {
  Link.addEventListener("click", scrollToSection);
});

function scrollToSection(event) {
  event.preventDefault();

  const targetId= event.target.getAttribute("href").substring(1);
  const targetSection= document.getElementById(targetId);

  if(targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}

document.querySelectorAll("nav a").forEach(Link =>  {
  Link.addEventListener("click", scrollToSection);
});

function scrollToSection(event) {
  event.preventDefault();

  const targetId= event.target.getAttribute("href").substring(1);
  const targetSection= document.getElementById(targetId);

  if(targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}

const carouselContainer = document.querySelector('.carousel-container');
const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let currentIndex = 0; // Índice de la diapositiva actual

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function mostrarResenas() {
  const resenasContainer = document.getElementById("resenas-container");
  const resenasGuardadas = JSON.parse(localStorage.getItem("resenas")) || [];

  resenasContainer.innerHTML = "";

  if (resenasGuardadas.length === 0) {
    resenasContainer.innerHTML = "<p>No hay resenas aún.</p>";
  } else {
    resenasGuardadas.forEach((resena) => {
      const estrellas = "★".repeat(resena.calificacion);
      const resenaHTML = `<div class="resena">
                            <p class="estrellas">${estrellas}</p>
                            <p>${resena.descripcion}</p>
                          </div>`;
      resenasContainer.innerHTML += resenaHTML;
    });
  }
}

function agregarResena() {
  const calificacion = document.getElementById("calificacion").value;
  const descripcion = document.getElementById("descripcion").value;

  if (calificacion && descripcion) {
    const nuevaResena = { calificacion: parseInt(calificacion), descripcion };
    const resenasGuardadas = JSON.parse(localStorage.getItem("resenas")) || [];
    resenasGuardadas.push(nuevaResena);
    localStorage.setItem("resenas", JSON.stringify(resenasGuardadas));

    mostrarResenas();

    // Limpiar formulario después de agregar la reseña
    document.getElementById("calificacion").value = "";
    document.getElementById("descripcion").value = "";
  } else {
    alert("Por favor, complete todos los campos.");
  }
}