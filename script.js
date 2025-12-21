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
      blurb: "First time in the city - fewer bugs, more spectators.",
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
      location: "The Yaolympic Village: Basking Ridge, NJ",
      theme: "The OG Yaolympics",
      blurb:
        "The year it all began!",
      teams: [
        { name: "Team Legend", members: ["Nicolae", "JB"], color: "gold" },
        { name: "Team Chaos", members: ["Brandon", "Tim"], color: "silver" },
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
      // You can change this to e.g.
      // "Chicken Dinner: Patrick Wu and Jin Bin Liu"
      championTeam: "Chicken Dinner: Patrick Wu and Jin Bin Liu",
      media: [
        {
          label: "2014 Highlight Video",
          type: "video",
          url: "photos/2014/MVI_6039.MOV"
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
      hometown: "Buzau, Romania",
      funFact: "Has never missed a Yaolympics.",
      photoUrl: "photos/yaolympians/nicolae_done_yaolympian.png",
      bio: "The fearless leader of The Caravan! A master of watermelon heists, the king of swimming and billiards, and a self-proclaimed Renaissance man, Dr. Done hails from the quaint Romanian village of Buzau. He made his ways to the halls of Harvard College with an intrepid spirit and deep insights into the Diels Alder reaction. After arriving at Harvard, he quickly splurged approximately 100,000 Romanian Leu on a boombox and could be seen proudly walking around campus with this eyesore on his shoulder (like a true gangsta). Dr. Done was the roommate of fellow Yaolympian Dr. JBL and the two could be seen trudging listlessly toward crew practice or taking selfies with Larry Summers.",
      yearsAttended: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: "Jinbin",
      name: "Jin Bin Liu",
      displayName: 'Jin Bin "JB" Liu',
      nickname: "JB",
      joinedYear: 2014,
      hometown: "",
      funFact: "Hit the game winner in 2018 and won't let anyone forget it.",
      photoUrl: "photos/yaolympians/jinbin_liu_yaolympian.png",
      bio: "Dr. Jin Bin Liu ranked 7th in his class at Boston Latin School. Not great, but better than fellow Yaolympian Patrick Wu! No one is really sure what JB actually does for a living - he supposedly went to medical school and graduated, but all signs point to a nomadic lifestyle delivering uberEats in NYC (by bicycle). In addition to being The Gypsy's roommate during college, JB's college experience has been forever immortalized via his performance in the celebrated course 'Justice' by Prof. Michael Sandel. JB makes three (!) appearances in the Justice MOOC that has been watched by over 2.74M people on YouTube; he is only awake in one of those appearances. While his strengths are few, JB has never lost in foosball and is the only Yaolympian to ever bring the Liebs to the promised land.",
      yearsAttended: [2014, 2015, 2016, 2017, 2018]
    },
    {
      id: "Brandon",
      name: "Brandon Liebeskind",
      displayName: 'Brandon "The Jew" Liebeskind',
      nickname: "The Jew",
      joinedYear: 2014,
      hometown: "",
      funFact: "Hit the game winner in 2018 and won't let anyone forget it.",
      photoUrl: "photos/yaolympians/brandon_liebeskind_yaolympian.png",
      bio: "Dr. Jin Bin Liu ranked 7th in his class at Boston Latin School. Not great, but better than fellow Yaolympian Patrick Wu! No one is really sure what JB actually does for a living - he supposedly went to medical school and graduated, but all signs point to a nomadic lifestyle delivering uberEats in NYC (by bicycle). In addition to being The Gypsy's roommate during college, JB's college experience has been forever immortalized via his performance in the celebrated course 'Justice' by Prof. Michael Sandel. JB makes three (!) appearances in the Justice MOOC that has been watched by over 2.74M people on YouTube; he is only awake in one of those appearances. While his strengths are few, JB has never lost in foosball and is the only Yaolympian to ever bring the Liebs to the promised land.",
      yearsAttended: [2014, 2015, 2016, 2017, 2018]
    },
    {
      id: "Timothy",
      name: "Tim Kovachy",
      displayName: 'Tim "The Magyar" Kovachy',
      nickname: "The Magyar",
      joinedYear: 2017,
      hometown: "Portola Valley",
      funFact: "Shows up late but always brings the chaos.",
      photoUrl: "photos/yaolympians/tim_kovachy_yaolympian.png",
      bio: "Much like L. Ron Hubbard, Prof. Kovachy worships at a different altar than most - the Altar of the Slav (n.b. 15 3/4). A renowned physicist who grapples with the coldest matter in Illinois, TimK was the ill-fated roommate of The Commissioner. Ill-fated for being forced to eat the Yench daily, host table tennis club meetings in knee-deep snow, and accused of gaily eating strawberries. Does he have a lazy eye? Maybe. Does he have two? Maybe. Surely only an atom interferometer can answer such mysteries of the universe. Average at best at most events, each year TimK manages to surprise his fellow Yaolympians. Did he really single-handedly best Pengyao and JimLizzle in poker? Is that TimK studying gomoku in a dark corner? Does he snore louder than a walrus in heat? Yes, yes to all of the above!",
      yearsAttended: [2017, 2018, 2019, 2020, 2021]
    }
  ]
};

const YEAR_COLLAGE_IMAGES = {
  2014: [
    "photos/2014/IMG_1860.JPG",
    "photos/2014/IMG_2026.JPG",
    "photos/2014/IMG_2030.JPG",
    "photos/2014/IMG_2031.JPG",
    "photos/2014/IMG_2032.JPG",
    "photos/2014/IMG_2033.JPG",
    "photos/2014/IMG_2035.jpg",
    "photos/2014/IMG_2037.jpg",
    "photos/2014/IMG_2038.JPG",
    "photos/2014/IMG_6059.JPG",
    "photos/2014/IMG_6060.JPG",
    "photos/2014/IMG_6061.JPG",
    "photos/2014/IMG_6062.JPG",
    "photos/2014/IMG_6063.JPG",
    "photos/2014/IMG_6064.JPG",
    "photos/2014/IMG_6065.JPG",
    "photos/2014/IMG_6066.JPG",
    "photos/2014/IMG_6067.JPG"
  ]
};

// ------------------------
// Helpers
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

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createYearCollage(year) {
  const urls = YEAR_COLLAGE_IMAGES[year];
  if (!urls || urls.length === 0) return null;

  const shuffled = shuffleArray(urls);
  const subset = shuffled.slice(0, 9);

  const wrapper = createEl("div", "year-collage");
  const grid = createEl("div", "year-collage-grid");

  subset.forEach((url) => {
    const item = createEl("div", "year-collage-item");
    const img = document.createElement("img");
    img.src = url;
    img.alt = `Yaolympics ${year} moment`;
    item.appendChild(img);
    grid.appendChild(item);
  });

  wrapper.appendChild(grid);
  return wrapper;
}

// ------------------------
// View state
// ------------------------

function setView(view) {
  const hero = $("#hero");
  const introCard = $("#introCard");
  const yearDetail = $("#yearDetail");
  const playerDetail = $("#playerDetail");

  if (!hero || !introCard || !yearDetail || !playerDetail) return;

  if (view === "intro") {
    hero.classList.remove("hidden");
    introCard.classList.remove("hidden");
    yearDetail.classList.add("hidden");
    playerDetail.classList.add("hidden");
  } else if (view === "season") {
    hero.classList.add("hidden");
    introCard.classList.add("hidden");
    yearDetail.classList.remove("hidden");
    playerDetail.classList.add("hidden");
  } else if (view === "player") {
    hero.classList.add("hidden");
    introCard.classList.add("hidden");
    yearDetail.classList.add("hidden");
    playerDetail.classList.remove("hidden");
  }

  if (view !== "intro") {
    const contentArea = document.getElementById("contentArea");
    if (contentArea) {
      contentArea.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

// ------------------------
// Dropdown population
// ------------------------

function populateSeasonSelect() {
  const select = $("#seasonSelect");
  if (!select) return;

  select.innerHTML = "";
  const placeholder = createEl("option", null, "Select season…");
  placeholder.value = "";
  select.appendChild(placeholder);

  const sortedYears = [...YAOLYMPICS_DATA.years].sort((a, b) => b.year - a.year);

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
    const label = p.nickname ? `${p.name} (${p.nickname})` : p.name;
    const opt = createEl("option", null, label);
    opt.value = p.id;
    select.appendChild(opt);
  });
}

// ------------------------
// Year detail
// ------------------------

function renderYearDetail(year) {
  const yearDetail = $("#yearDetail");
  if (!yearDetail) return;

  const yearObj = YAOLYMPICS_DATA.years.find((y) => y.year === year);
  if (!yearObj) return;

  yearDetail.innerHTML = "";

  const title = createEl("h2", null, `Yaolympics ${yearObj.year}`);

  // Big champions line with styled team name
  const championsLine = createEl("div", "year-champions");
  const championsLabel = document.createElement("span");
  championsLabel.textContent = "🏆 Champions: ";
  championsLine.appendChild(championsLabel);

  const teamText = yearObj.championTeam || "";
  const parts = teamText.split(":"); // "Chicken Dinner: Patrick Wu..." -> ["Chicken Dinner", " Patrick Wu..."]

  if (parts.length >= 2) {
    const namePart = parts[0].trim();
    const restPart = parts.slice(1).join(":").trim();

    const nameSpan = document.createElement("span");
    nameSpan.className = "champion-team-name";
    nameSpan.textContent = namePart;

    championsLine.appendChild(nameSpan);
    championsLine.appendChild(document.createTextNode(` ${restPart}`));

  } else {
    championsLine.appendChild(document.createTextNode(teamText));
  }

  const blurb = createEl("p", null, yearObj.blurb || "");

  const meta = createEl("div", "detail-meta");
  meta.appendChild(createEl("span", null, `📍 ${yearObj.location}`));
  meta.appendChild(createEl("span", null, `🎭 ${yearObj.theme}`));

  const layout = createEl("div", "two-column");

  // Left: Teams + Events
  const teamsBlock = createEl("div", "card-block");

  teamsBlock.appendChild(createEl("div", "section-heading", "Teams"));

  const teamList = createEl("ul", "simple-list");
  yearObj.teams.forEach((t) => {
    const li = createEl("li");
    const nameSpan = createEl("span", null, `${t.name} `);
    const membersSpan = createEl("span", null, `(${t.members.join(", ")})`);
    li.append(nameSpan, membersSpan);
    if (t.color === "gold") {
      const badge = createEl("span", "badge gold", "Defending Champs");
      li.append(" ", badge);
    }
    teamList.appendChild(li);
  });
  teamsBlock.appendChild(teamList);

  teamsBlock.appendChild(createEl("div", "section-heading", "Events"));

  const eventsList = createEl("ul", "simple-list");
  yearObj.results.forEach((r) => {
    const li = createEl(
      "li",
      null,
      `${r.event} — ${r.winner}${r.note ? " • " + r.note : ""}`
    );
    eventsList.appendChild(li);
  });
  teamsBlock.appendChild(eventsList);

  // Right: Highlight Video
  const rightBlock = createEl("div", "card-block");
  rightBlock.appendChild(
    createEl("div", "section-heading", "Highlight Video")
  );

  const media = yearObj.media || [];
  const videos = media.filter((m) => m.type === "video");

  if (videos.length > 0) {
    const m = videos[0];
    const cardVideo = createEl("div", "video-card");
    const titleVideo = createEl("div", "video-title", m.label || "Video");

    const url = m.url || "";
    const isDirectVideo =
      url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");

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

    rightBlock.appendChild(cardVideo);
  } else {
    rightBlock.appendChild(
      createEl(
        "p",
        null,
        "Add a highlight video for this year in the data model."
      )
    );
  }

  layout.append(teamsBlock, rightBlock);

  const collage = createYearCollage(yearObj.year);

  yearDetail.append(title, championsLine, blurb, meta);
  if (collage) {
    yearDetail.appendChild(collage);
  }
  yearDetail.appendChild(layout);
}

// ------------------------
// Player detail
// ------------------------

function renderPlayerDetail(playerId) {
  const playerDetail = $("#playerDetail");
  if (!playerDetail) return;

  const p = YAOLYMPICS_DATA.players.find((pl) => pl.id === playerId);
  if (!p) return;

  playerDetail.innerHTML = "";

  const page = createEl("div", "player-page");

  const displayName =
    p.displayName || (p.nickname ? `${p.name} (${p.nickname})` : p.name);

  const title = createEl("h1", "player-page-title", displayName);
  page.appendChild(title);

  const photoWrapper = createEl("div", "player-page-photo-wrapper");
  if (p.photoUrl) {
    const img = createEl("img", "player-page-photo");
    img.src = p.photoUrl;
    img.alt = p.name;
    photoWrapper.appendChild(img);
  } else {
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
// Randgen button
// ------------------------

function setupRandomMoment() {
  const btn = $("#randomMomentBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const years = YAOLYMPICS_DATA.years;
    const players = YAOLYMPICS_DATA.players;

    if (years.length === 0 && players.length === 0) return;

    const seasonSelect = $("#seasonSelect");
    const playerSelect = $("#playerSelect");

    let pickType = Math.random() < 0.5 ? "season" : "player";

    if (pickType === "season" && years.length === 0 && players.length > 0) {
      pickType = "player";
    } else if (
      pickType === "player" &&
      players.length === 0 &&
      years.length > 0
    ) {
      pickType = "season";
    }

    if (pickType === "season") {
      const randomYearObj = years[Math.floor(Math.random() * years.length)];

      if (seasonSelect) seasonSelect.value = String(randomYearObj.year);
      if (playerSelect) playerSelect.value = "";

      renderYearDetail(randomYearObj.year);
      setView("season");
    } else {
      const player = players[Math.floor(Math.random() * players.length)];

      if (playerSelect) playerSelect.value = player.id;
      if (seasonSelect) seasonSelect.value = "";

      renderPlayerDetail(player.id);
      setView("player");
    }
  });
}

// ------------------------
// Init
// ------------------------

document.addEventListener("DOMContentLoaded", () => {
  populateSeasonSelect();
  populatePlayerSelect();

  const seasonSelect = $("#seasonSelect");
  const playerSelect = $("#playerSelect");

  setView("intro");

  if (seasonSelect) {
    seasonSelect.addEventListener("change", (e) => {
      const value = e.target.value;
      if (!value) {
        if (playerSelect) playerSelect.value = "";
        setView("intro");
        return;
      }

      if (playerSelect) playerSelect.value = "";
      renderYearDetail(Number(value));
      setView("season");
    });
  }

  if (playerSelect) {
    playerSelect.addEventListener("change", (e) => {
      const value = e.target.value;
      if (!value) {
        if (seasonSelect) seasonSelect.value = "";
        setView("intro");
        return;
      }

      if (seasonSelect) seasonSelect.value = "";
      renderPlayerDetail(value);
      setView("player");
    });
  }

  setupRandomMoment();
});
