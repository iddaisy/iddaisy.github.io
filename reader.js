const reader = document.getElementById("reader");

const totalPages = 2;

for (let i = 1; i <= totalPages; i++) {

  const img = document.createElement("img");
  img.src = `images/chapter1/${i}.jpg`;
  img.className = "page";
  img.loading = "lazy";

  reader.appendChild(img);
}
