console.log("Array sandbox loaded");

const playliste = [
  "Skillemadinkaduuu",
  "Bim Bam Busse",
  "Det Pisser mig",
  "Dyrene i Afrika",
  "Vandmeloner sangen",
  "Lullaby",
  "Omkring Et Minut",
  "...&On",
  "No More Trouble",
  "Turn Your Lights Down Low",
];

const liste = document.querySelector("ul");

playliste.forEach(lavPlayliste);

function lavPlayliste(playliste) {
  liste.innerHTML += "<li>" + playliste + "</li>";
}

// Alternativ pile-syntax jf. slide 5

// playliste.forEach(
//   (playliste) => (liste.innerHTML += "<li>" + playliste + "</li>"),
// );
