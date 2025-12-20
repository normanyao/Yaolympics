// ------------------------
// 1. DATA MODEL
// ------------------------

const YAOLYMPICS_DATA = {
  years: [
    {
      year: 2024,
      location: "Lake House",
      theme: "Return of the Kings",
      blurb:
        "Back at the lake, older, slightly wiser, and significantly more sore the next day.",
      teams: [
        { name: "Splash Bros", members: ["Alice", "Ben"], color: "gold" },
        { name: "Airball Empire", members: ["Chris", "Dana"], color: "silver" },
        { name: "Dad Bod Squad", members: ["Eli", "Frank"], color: "bronze" }
      ],
      results: [
        { event: "2v2 Basketball", winner: "Splash Bros", note: "OT thriller" },
        { event: "Relay Swim", winner: "Dad Bod Squad", note: "??? How." },
        { event: "Cornhole", winner: "Airball Empire", note: "Dialed in." }
      ],
      championTeam: "Splash Bros",
      media: [
        {
          label: "Dock Chaos",
          type: "photo",
          url: "photos/2024/dock-chaos.jpg"
        }
      ]
    },
    {
      year: 2023,
      location: "City Pool & Park",
      theme: "Urban Legends",
      blurb: "First time in the city — fewer bugs, more spectators.",
      teams: [
        { name: "Bricklayers", members: ["Alice", "Chris"], color: "gold" },
        { name: "Splash Zone", members: ["Ben", "Dana"], color: "silver" },
        { name: "Snack Bar All-Stars", members: ["Eli", "Frank"], color: "bronze" }
      ],
      results: [
        {
          event: "3-Point Contest",
          winner: "Bricklayers",
          note: "Name did not match performance."
        },
        {
          event: "Sprint Relay",
          winner: "Splash Zone",
          note: "Won by a shoelace."
        }
      ],
      championTeam: "Bricklayers",
      media: [
        {
          label: "Half-court Shot Video",
          type: "video",
          url: "https://example.com/yaolympics-2023-halfcourt"
        }
      ]
    },
    {
      year: 2014,
      location: "Your Original Spot",
      theme: "The OG Yaolympics",
      blurb:
        "The year it all began. Questionable rules, chaotic scoring, unforgettable moments.",
      teams: [
        { name: "Team Legend", members: ["Player 1", "Player 2"], color: "gold" },
        { name: "Team Chaos", members: ["Player 3", "Player 4"], color: "silver" },
        { name: "Team Underdogs", members: ["Player 5", "Player 6"], color: "bronze" }
      ],
      results: [
        {
          event: "2v2 Basketball",
          winner: "Team Legend",
          note: "Started the dynasty."
        },
        {
          event: "Relay Swim",
          winner: "Team Chaos",
          note: "Came out of nowhere."
        }
      ],
      championTeam: "Team Legend",
      media: [
        {
          label: "2014 Group Photo",
          type: "photo",
          url: "photos/2014/group-photo.jpg" // change to your real file
        },
        {
          label: "2014 Highlight Video",
          type: "video",
          url: "photos/2014/highlight.mp4" // change to your real file
        }
      ]
    }
  ],
  players: [
    {
      id: "nicolae",
      name: "Nicolae Done",
      displayName: 'Nicolae "The Gypsy" Done',
      nickname: "The Gypsy",
      joinedYear: 2014,
      hometown: "Example City",
      funFact: "Has never missed a Yaolympics.",
      photoUrl: "photos/nicolae.jpg", // large portrait photo
      bio: "Write Nicolae's legendary Yaolympics backstory here. This text will appear under the photo, in a narrower column.",
      yearsAttended: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: "friend1",
      name: "Friend One",
      displayName: 'Friend One "The Closer"',
      nickname: "The Closer",
      joinedYear: 2014,
      hometown: "",
      funFact: "Hit the game winner in 2018 and won’t let anyone forget it.",
      photoUrl: "photos/friend1.jpg",
      bio: "Short bio for Friend One. You can talk about signature moments, archetype, and recurring jokes.",
      yearsAttended: [2014, 2015, 2016, 2017, 2018]
    },
    {
      id: "friend2",
      name: "Friend Two",
      displayName: 'Friend Two "Wildcard"',
      nickname: "Wildcard",
      joinedYear: 2017,
      hometown: "",
      funFact: "Shows up late but always brings the chaos.",
      photoUrl: "photos/friend2.jpg",
      bio: "Short bio for Friend Two. Describe why everyone is nervous when they step onto the court.",
      yearsAttended: [2017, 2018, 2019, 2020, 2021]
    }
  ]
};

// ------------------------
// 2. DOM HELPERS
// ------------------------

function $(selector) {
  return document.querySelector(selector);
}

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined && text !== null) el.textContent = text;
  return el;
}

// ------------------------
// 3. SELECT POPULATION
// ------------------------

function populateSeasonSelect() {
  const select = $("#seasonSelect");
  if (!select) return;

  select.innerHTML = "";
  const placeholder = createEl("option", null, "Select season…");
  placeholder.value = "";
  select.appendChild(placeholder);

  const sortedYears = [...YAOLYMPICS_DATA.years].sort(
    (a, b) => b.year - a.year
  );

  sortedYears.forEach((yearObj) => {
    const opt = createEl("option", null, `Yaolympics ${yearObj.year}`);
    opt.value = String(yearObj.year);
    select.appendChild(opt);
  });
}

function populatePlayerSelect() {
  const select = $("#playerSelect");
  if (!select) return;

  select.innerHTML = "";
  const placeholder = createEl("option", null, "Select player…");
  placeholder.value = "";
  select.appendChild(placeholder);

  const sortedPlayers = [...YAOLYMPICS_DATA.players].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  sortedPlayers.forEach((p) => {
    const label = p.nickname ? `${p.name} “${p.nickname}”` : p.name;
    const opt = createEl("option", null, label);
    opt.value = p.id;
    select.appendChild(opt);
  });
}

// ------------------------
// 4. RENDER YEAR DETAIL
// ------------------------

function renderYearDetail(year) {
  const introCard = $("#introCard");
  const yearDetail = $("#yearDetail");
  const playerDetail = $("#playerDetail");
  const hero = $("#hero");
  if (!yearDetail) return;

  const yearObj = YAOLYMPICS_DATA.years.find((y) => y.year === year);
  if (!yearObj) return;

  // Show hero on season view
  if (hero) hero.classList.remove("hidden");

  if (introCard) introCard.classList.add("hidden");
  yearDetail.classList.remove("hidden");
  if (playerDetail) playerDetail.classList.add("hidden");

  yearDetail.innerHTML = "";

  const title = createEl("h2", null, `Yaolympics ${yearObj.year}`);
  const blurb = createEl("p", null, yearObj.blurb || "");

  const meta = createEl("div", "detail-meta");
  meta.appendChild(createEl("span", null, `📍 ${yearObj.location}`));
  meta.appendChild(createEl("span", null, `🎭 ${yearObj.theme}`));
  meta.appendChild(
    createEl("span", null, `🏆 Champions: ${yearObj.championTeam}`)
  );

  const layout = createEl("div", "two-column");

  // Left: teams
  const teamsBlock = createEl("div", "card-block");
  teamsBlock.appendChild(createEl("div", "section-heading", "Teams"));
  const teamList = createEl("ul", "simple-list");
  yearObj.teams.forEach((t) => {
    const li = createEl("li");
    const nameSpan = createEl("span", null, `${t.name} `);
    const membersSpan = createEl(
      "span",
      null,
      `(${t.members.join(", ")})`
    );
    li.append(nameSpan, membersSpan);
    if (t.color === "gold") {
      const badge = createEl("span", "badge gold", "Defending Champs");
      li.append(" ", badge);
    }
    teamList.appendChild(li);
  });
  teamsBlock.appendChild(teamList);

  // Right: results + media
  const rightBlock = createEl("div", "card-block");
  rightBlock.appendChild(createEl("div", "section-heading", "Results"));
  const resultsList = createEl("ul", "simple-list");
  yearObj.results.forEach((r) => {
    const li = createEl(
      "li",
      null,
      `${r.event} — ${r.winner}${r.note ? " • " + r.note : ""}`
    );
    resultsList.appendChild(li);
  });
  rightBlock.appendChild(resultsList);

  const media = yearObj.media || [];
  const photos = media.filter((m) => m.type === "photo");
  const videos = media.filter((m) => m.type === "video");

  if (photos.length > 0 || videos.length > 0) {
    rightBlock.appendChild(
      createEl("div", "section-heading", "Media")
    );
  }

  if (photos.length > 0) {
    const gallery = createEl("div", "gallery-grid");
    photos.forEach((m) => {
      const item = createEl("a", "gallery-item");
      item.href = m.url;
      item.target = "_blank";
      item.rel = "noopener noreferrer";

      const img = document.createElement("img");
      img.src = m.url;
      img.alt = m.label || "";

      const label = createEl("div", "gallery-item-label", m.label || "");
      item.append(img, label);
      gallery.appendChild(item);
    });
    rightBlock.appendChild(gallery);
  }

  if (videos.length > 0) {
    const videosWrapper = createEl("div", "video-list");
    videos.forEach((m) => {
      const cardVideo = createEl("div", "video-card");
      const titleVideo = createEl(
        "div",
        "video-title",
        m.label || "Video"
      );

      const url = m.url || "";
      const isDirectVideo =
        url.endsWith(".mp4") ||
        url.endsWith(".webm") ||
        url.endsWith(".ogg");

      if (isDirectVideo && !/youtube\.com|youtu\.be/.test(url)) {
        const player = document.createElement("video");
        player.controls = true;
        player.src = url;
        cardVideo.append(titleVideo, player);
      } else {
        const link = createEl("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "▶️ Watch video";
        cardVideo.append(titleVideo, link);
      }

      videosWrapper.appendChild(cardVideo);
    });
    rightBlock.appendChild(videosWrapper);
  }

  layout.append(teamsBlock, rightBlock);

  yearDetail.append(title, blurb, meta, layout);
}

// ------------------------
// 5. RENDER PLAYER DETAIL
// ------------------------

function renderPlayerDetail(playerId) {
  const introCard = $("#introCard");
  const yearDetail = $("#yearDetail");
  const playerDetail = $("#playerDetail");
  const hero = $("#hero");
  if (!playerDetail) return;

  const p = YAOLYMPICS_DATA.players.find((pl) => pl.id === playerId);
  if (!p) return;

  // Hide hero/logo for player page
  if (hero) hero.classList.add("hidden");

  if (introCard) introCard.classList.add("hidden");
  if (yearDetail) yearDetail.classList.add("hidden");
  playerDetail.classList.remove("hidden");

  playerDetail.innerHTML = "";

  const page = createEl("div", "player-page");

  const displayName =
    p.displayName ||
    (p.nickname ? `${p.name} "${p.nickname}"` : p.name);

  const title = createEl("h1", "player-page-title", displayName);
  page.appendChild(title);

  const photoWrapper = createEl("div", "player-page-photo-wrapper");
  if (p.photoUrl) {
    const img = createEl("img", "player-page-photo");
    img.src = p.photoUrl;
    img.alt = p.name;
    photoWrapper.appendChild(img);
  } else {
    // simple placeholder block if no photo yet
    const placeholder = createEl("div", "player-page-photo");
    placeholder.style.display = "flex";
    placeholder.style.alignItems = "center";
    placeholder.style.justifyContent = "center";
    placeholder.style.background = "#e5e7eb";
    placeholder.textContent = "Add a photo for this legend.";
    photoWrapper.appendChild(placeholder);
  }
  page.appendChild(photoWrapper);

  const bioText =
    p.bio ||
    "Add a description here: greatest performances, running jokes, and what they bring to Yaolympics.";

  const bio = createEl("div", "player-page-bio", bioText);
  page.appendChild(bio);

  playerDetail.appendChild(page);
}

// ------------------------
// 6. RANDOM SEASON BUTTON
// ------------------------

function setupRandomMoment() {
  const btn = $("#randomMomentBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const years = YAOLYMPICS_DATA.years;
    if (years.length === 0) return;

    const randomYearObj =
      years[Math.floor(Math.random() * years.length)];

    const seasonSelect = $("#seasonSelect");
    const playerSelect = $("#playerSelect");
    const hero = $("#hero");

    if (seasonSelect) {
      seasonSelect.value = String(randomYearObj.year);
    }
    if (playerSelect) {
      playerSelect.value = "";
    }
    if (hero) hero.classList.remove("hidden");

    renderYearDetail(randomYearObj.year);

    const contentArea = document.getElementById("contentArea");
    if (contentArea) {
      contentArea.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// ------------------------
// 7. INIT
// ------------------------

document.addEventListener("DOMContentLoaded", () => {
  populateSeasonSelect();
  populatePlayerSelect();

  const seasonSelect = $("#seasonSelect");
  const playerSelect = $("#playerSelect");
  const hero = $("#hero");

  if (seasonSelect) {
    seasonSelect.addEventListener("change", (e) => {
      const value = e.target.value;
      const introCard = $("#introCard");
      const yearDetail = $("#yearDetail");
      const playerDetail = $("#playerDetail");

      if (!value) {
        // back to intro
        if (introCard) introCard.classList.remove("hidden");
        if (yearDetail) yearDetail.classList.add("hidden");
        if (playerDetail) playerDetail.classList.add("hidden");
        if (hero) hero.classList.remove("hidden");
        return;
      }

      if (playerSelect) playerSelect.value = "";
      if (hero) hero.classList.remove("hidden");
      renderYearDetail(Number(value));
    });
  }

  if (playerSelect) {
    playerSelect.addEventListener("change", (e) => {
      const value = e.target.value;
      const introCard = $("#introCard");
      const yearDetail = $("#yearDetail");
      const playerDetail = $("#playerDetail");

      if (!value) {
        // back to intro
        if (introCard) introCard.classList.remove("hidden");
        if (yearDetail) yearDetail.classList.add("hidden");
        if (playerDetail) playerDetail.classList.add("hidden");
        if (hero) hero.classList.remove("hidden");
        return;
      }

      if (seasonSelect) seasonSelect.value = "";
      renderPlayerDetail(value);
    });
  }

  setupRandomMoment();
});
