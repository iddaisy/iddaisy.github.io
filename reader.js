const reader = document.getElementById("reader");
const titleBar = document.getElementById("chapterTitle");

// read URL params

const params = new URLSearchParams(window.location.search);

const mangaID = params.get("manga");
const chapterID = params.get("ch");

// load JSON

fetch("data.json")
.then(res => res.json())
.then(data => {

  const manga = data[mangaID];
  const pages = manga.chapters[chapterID];

  titleBar.innerText = manga.title + " — Chapter " + chapterID;

  pages.forEach(url => {

    const img = document.createElement("img");

    img.src = url;
    img.className = "page";
    img.loading = "lazy";

    reader.appendChild(img);

  });

});
