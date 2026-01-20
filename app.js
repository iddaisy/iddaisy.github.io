const grid = document.getElementById("grid");

fetch("data.json")
.then(res => res.json())
.then(data => {

  Object.keys(data).forEach(id => {

    const manga = data[id];

    const card = document.createElement("a");
    card.className = "card";
    card.href = `reader.html?manga=${id}&ch=1`;

    card.innerHTML = `
      <div class="badge ${manga.status}">${manga.status.toUpperCase()}</div>
      <img src="${manga.cover}">
      <h3>${manga.title}</h3>
      <p>${manga.genre}</p>
    `;

    grid.appendChild(card);

  });

});
