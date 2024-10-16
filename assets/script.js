const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlideIndex = 0; // La première diapositive est sélectionnée par défaut

// Les flèches
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", ()=>{
	console.log("Vous avez cliqué sur la flèche de gauche");
	showSlide(currentSlideIndex - 1);
});

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", ()=>{
	console.log("Vous avez cliqué sur la flèche de droite");
	showSlide(currentSlideIndex + 1);
});

function showSlide(index) {
	const bannerImage = document.querySelector(".banner-img");
	const bannerTagline = document.querySelector("#banner p");
  
	// Si on dépasse les limites
	if (index >= slides.length) {
	  currentSlideIndex = 0; 
	  console.log("Vous retournez à la première silde");
	} else if (index < 0) {
	  currentSlideIndex = slides.length - 1; 
	  console.log("Vous retournez à la dernière slide");
	} else {
	  currentSlideIndex = index; // Permet de définir la slide actuelle
	}
  
	// Mise à jour de l'image et du texte
	bannerImage.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	bannerTagline.innerHTML = slides[currentSlideIndex].tagLine;
  
	// Mise à jour des bullet points
	updateDots();
}

// Les points
function createDot(){
	const dot = document.querySelector(".dots");
	slides.forEach((_, index)=>{
		const newDot = document.createElement("div");
		newDot.classList.add("dot");
		if (index === currentSlideIndex) {
			newDot.classList.add("dot_selected");
		}
		dot.appendChild(newDot);
	});
}

function updateDots() {
	const dots = document.querySelectorAll(".dot");
  
	// Supprimer la classe 'dot_selected' de tous les points
	dots.forEach(dot => {
	  dot.classList.remove("dot_selected");
	});
  
	// Ajouter la classe 'dot_selected' au point correspondant à la slide actuelle
	dots[currentSlideIndex].classList.add("dot_selected");
}

createDot();