
const games = [
  { name: "Counter-Strike 2", id: 730, cat: "online", type: "أونلاين" },
  { name: "Dota 2", id: 570, cat: "online", type: "أونلاين" },
  { name: "PUBG: Battlegrounds", id: 578080, cat: "online", type: "أونلاين" },
  { name: "Apex Legends", id: 1172470, cat: "action", type: "أكشن" },
  { name: "Grand Theft Auto V", id: 271590, cat: "action", type: "أكشن" },
  { name: "Red Dead Redemption 2", id: 1174180, cat: "adventure", type: "مغامرات" },
  { name: "Cyberpunk 2077", id: 1091500, cat: "action", type: "أكشن" },
  { name: "The Witcher 3", id: 292030, cat: "adventure", type: "مغامرات" },
  { name: "Elden Ring", id: 1245620, cat: "action", type: "أكشن" },
  { name: "Dark Souls III", id: 374320, cat: "action", type: "أكشن" },
  { name: "Sekiro", id: 814380, cat: "action", type: "أكشن" },
  { name: "Hogwarts Legacy", id: 990080, cat: "adventure", type: "مغامرات" },
  { name: "Mortal Kombat 11", id: 976310, cat: "action", type: "أكشن" },
  { name: "Street Fighter 6", id: 1364780, cat: "action", type: "أكشن" },
  { name: "TEKKEN 8", id: 1778820, cat: "action", type: "أكشن" },
  { name: "Forza Horizon 5", id: 1551360, cat: "sports", type: "سباق" },
  { name: "Forza Horizon 4", id: 1293830, cat: "sports", type: "سباق" },
  { name: "Need for Speed Heat", id: 1222680, cat: "sports", type: "سباق" },
  { name: "Euro Truck Simulator 2", id: 227300, cat: "sports", type: "محاكاة" },
  { name: "The Sims 4", id: 1222670, cat: "adventure", type: "محاكاة" },
  { name: "Minecraft", id: 1672970, cat: "adventure", type: "مغامرات" },
  { name: "Terraria", id: 105600, cat: "adventure", type: "مغامرات" },
  { name: "Stardew Valley", id: 413150, cat: "indie", type: "مستقلة" },
  { name: "Among Us", id: 945360, cat: "online", type: "أونلاين" },
  { name: "Fall Guys", id: 1097150, cat: "online", type: "أونلاين" },
  { name: "Rocket League", id: 252950, cat: "sports", type: "رياضة" },
  { name: "Rust", id: 252490, cat: "online", type: "أونلاين" },
  { name: "ARK: Survival Evolved", id: 346110, cat: "adventure", type: "مغامرات" },
  { name: "The Forest", id: 242760, cat: "horror", type: "رعب" },
  { name: "Sons Of The Forest", id: 1326470, cat: "horror", type: "رعب" },
  { name: "Phasmophobia", id: 739630, cat: "horror", type: "رعب" },
  { name: "Left 4 Dead 2", id: 550, cat: "action", type: "أكشن" },
  { name: "Resident Evil 4", id: 2050650, cat: "horror", type: "رعب" },
  { name: "Resident Evil Village", id: 1196590, cat: "horror", type: "رعب" },
  { name: "Silent Hill 2", id: 2124490, cat: "horror", type: "رعب" },
  { name: "Dead by Daylight", id: 381210, cat: "horror", type: "رعب" },
  { name: "Five Nights at Freddy's", id: 319510, cat: "horror", type: "رعب" },
  { name: "DOOM Eternal", id: 782330, cat: "action", type: "أكشن" },
  { name: "Far Cry 6", id: 2369390, cat: "action", type: "أكشن" },
  { name: "Assassin's Creed Valhalla", id: 2208920, cat: "adventure", type: "مغامرات" },
  { name: "Watch Dogs 2", id: 447040, cat: "action", type: "أكشن" },
  { name: "Rainbow Six Siege", id: 359550, cat: "online", type: "أونلاين" },
  { name: "Overwatch 2", id: 2357570, cat: "online", type: "أونلاين" },
  { name: "Team Fortress 2", id: 440, cat: "online", type: "أونلاين" },
  { name: "Warframe", id: 230410, cat: "action", type: "أكشن" },
  { name: "Genshin Impact", id: 0, cat: "adventure", type: "مغامرات" },
  { name: "Honkai: Star Rail", id: 0, cat: "adventure", type: "مغامرات" },
  { name: "Palworld", id: 1623730, cat: "adventure", type: "مغامرات" },
  { name: "Hades", id: 1145360, cat: "indie", type: "مستقلة" },
  { name: "Hollow Knight", id: 367520, cat: "indie", type: "مستقلة" },
  { name: "Cuphead", id: 268910, cat: "indie", type: "مستقلة" },
  { name: "Celeste", id: 504230, cat: "indie", type: "مستقلة" },
  { name: "Ori and the Blind Forest", id: 261570, cat: "adventure", type: "مغامرات" },
  { name: "It Takes Two", id: 1426210, cat: "adventure", type: "مغامرات" },
  { name: "A Way Out", id: 1222700, cat: "adventure", type: "مغامرات" },
  { name: "The Last of Us Part I", id: 1888930, cat: "action", type: "أكشن" },
  { name: "Days Gone", id: 1259420, cat: "action", type: "أكشن" },
  { name: "God of War", id: 1593500, cat: "action", type: "أكشن" },
  { name: "Marvel's Spider-Man Remastered", id: 1817070, cat: "action", type: "أكشن" },
  { name: "HITMAN World of Assassination", id: 1659040, cat: "action", type: "أكشن" },
  { name: "Sea of Thieves", id: 1172620, cat: "adventure", type: "مغامرات" },
  { name: "Subnautica", id: 264710, cat: "adventure", type: "مغامرات" },
  { name: "Don't Starve Together", id: 322330, cat: "indie", type: "مستقلة" }
];

const grid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const gameCount = document.getElementById("gameCount");
const emptyMessage = document.getElementById("emptyMessage");

function createGameCard(game, index) {
  const card = document.createElement("article");
  card.className = "game-card";
  card.style.animationDelay = `${Math.min(index * 0.025, 0.5)}s`;

  const cover = document.createElement("div");
  cover.className = "game-cover";

  if (game.id) {
    const img = document.createElement("img");
    img.src = `https://cdn.akamai.steamstatic.com/steam/apps/${game.id}/library_600x900.jpg`;
    img.alt = game.name;
    img.loading = "lazy";

    img.onerror = function () {
      this.remove();
      cover.classList.add("cover-fallback");
      const fallback = document.createElement("div");
      fallback.className = "fallback-title";
      fallback.textContent = game.name;
      cover.appendChild(fallback);
    };

    cover.appendChild(img);
  } else {
    cover.classList.add("cover-fallback");
    const fallback = document.createElement("div");
    fallback.className = "fallback-title";
    fallback.textContent = game.name;
    cover.appendChild(fallback);
  }

  const info = document.createElement("div");
  info.className = "game-info";

  const title = document.createElement("h3");
  title.textContent = game.name;

  const type = document.createElement("p");
  type.textContent = game.type;

  info.append(title, type);
  card.append(cover, info);

  return card;
}

function renderGames() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const filtered = games.filter(game => {
    const matchesName = game.name.toLowerCase().includes(search);
    const matchesCategory = category === "all" || game.cat === category;
    return matchesName && matchesCategory;
  });

  grid.replaceChildren();

  filtered.forEach((game, index) => {
    grid.appendChild(createGameCard(game, index));
  });

  gameCount.textContent = `${filtered.length} / ${games.length} GAME`;
  emptyMessage.style.display = filtered.length ? "none" : "block";
}

searchInput.addEventListener("input", renderGames);
categoryFilter.addEventListener("change", renderGames);

document.getElementById("enterBtn").addEventListener("click", () => {
  document.getElementById("intro").classList.add("hide");
  document.getElementById("site").classList.add("show");
});

renderGames();
