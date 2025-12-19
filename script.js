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
          label: "Highlight Photo",
          type: "photo",
          url: "photos/2024/highlight.jpg" // adjust or remove if you don't have this yet
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
      year: 2022,
      location: "Original Backyard",
      theme: "The Beginning",
      blurb:
        "Where the legend started, with a broken net and a stopwatch app.",
      teams: [
        { name: "Day 1 Legends", members: ["Alice", "Dana"], color: "gold" },
        { name: "We Didn’t Stretch", members: ["Ben", "Eli"], color: "silver" },
        { name: "Mystery Meat", members: ["Chris", "Frank"], color: "bronze" }
      ],
      results: [
        { event: "HORSE", winner: "Day 1 Legends", note: "" },
        {
          event: "Backyard Dash",
          winner: "We Didn’t Stretch",
          note: "Pulled hamstring count: 1"
        }
      ],
      championTeam: "Day 1 Legends",
      media: [
        {
          label: "First Ever Group Photo",
          type: "photo",
          url: "photos/2022/group.jpg" // adjust/remove as needed
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
        {
          name: "Team Legend",
          members: ["Player 1", "Player 2"],
          color: "gold"
        },
        {
          name: "Team Chaos",
          members: ["Player 3", "Player 4"],
          color: "silver"
        },
        {
          name: "Team Underdogs",
          members: ["Player 5", "Player 6"],
          color: "bronze"
        }
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
          url: "photos/2014/IMG_6059.JPG" // <- change to your real filename
        },
        {
          label: "Iconic Moment",
          type: "photo",
          url: "photos/2014/IMG_6059.JPG" // <- change to your real filename
        },
        {
          label: "2014 Highlight Video",
          type: "video",
          url: "photos/2014/MVI_6039.MOV" // <- change to your real filename
        }
      ]
    }
  ],
  hallOfFame: [
    {
      title: "Most Championships",
      name: "Alice",
      detail: "Part of the winning team 3 times.",
      note: "Rumored to train for Yaolympics in the off-season."
    },
    {
      title: "Most Iconic Choke",
      name: "Ben",
      detail: "Missed 4 straight game-point free throws (2023).",
      note: "Video evidence exists and is replayed annually."
    },
    {
      title: "Best Hype Person",
      name: "Dana",
      detail: "Invented the official Yaolympics chant.",
      note: "Volume: 10/10. Lyrics: 6/10. Vibes: 15/10."
    }
  ]

  players: [
    {
      id: "norman",
      name: "Norman Yao",
      nickname: "Commissioner",
      joinedYear: 2014,
      hometown: "Somewhere, USA",
      funFact: "Has never missed a Yaolympics.",
      photoUrl: "photos/profiles/norman.jpg", // optional; you can leave "" for now
      yearsAttended: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: "friend1",
      name: "Friend One",
      nickname: "The Closer",
      joinedYear: 2014,
      hometown: "Another Place",
      funFact: "Hit the game winner in 2018 and won’t let anyone forget it.",
      photoUrl: "photos/profiles/friend1.jpg",
      yearsAttended: [2014, 2015, 2016, 2017, 2018]
    },
    {
      id: "friend2",
      name: "Friend Two",
      nickname: "Wildcard",
      joinedYear: 2017,
      hometown: "",
      funFact: "Shows up late but always brings the chaos.",
      photoUrl: "",
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
  if (text) el.textContent = text;
  return el;
}

// ------------------------
// 3. RENDER YEAR BUTTONS
// ------------------------

function renderYearButtons() {
  const container = $("#yearButtons");
  if (!container) return;

  container.innerHTML = "";

  const sortedYears = [...YAOLYMPICS_DATA.years].sort(
    (a, b) => b.year - a.year
  );

  sortedYears.forEach((yearObj, index) => {
    const btn = createEl("button", "year-button", String(yearObj.year));
    btn.dataset.year = String(yearObj.year);
    if (index === 0) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".year-button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderYearDetail(yearObj.year);
    });
    container.appendChild(btn);
  });

  if (sortedYears.length > 0) {
    renderYearDetail(sortedYears[0].year);
  }
}

// ------------------------
// 4. RENDER YEAR DETAIL
// ------------------------

function renderYearDetail(year) {
  const target = $("#year-detail");
  if (!target) return;

  const yearObj = YAOLYMPICS_DATA.years.find((y) => y.year === year);
  if (!yearObj) {
    target.innerHTML = "<p>Year not found.</p>";
    return;
  }

  const card = createEl("div", "year-card");

  const header = createEl("div", "year-header");
  const title = createEl("div", "year-title", `Yaolympics ${yearObj.year}`);
  const meta = createEl("div", "year-meta");

  const loc = createEl("span", null, `📍 ${yearObj.location}`);
  const theme = createEl("span", null, `🎭 ${yearObj.theme}`);
  const champ = createEl(
    "span",
    null,
    `🏆 Champions: ${yearObj.championTeam}`
  );

  meta.append(loc, theme, champ);
  header.append(title, meta);

  const blurb = createEl("p", "section-subtitle", yearObj.blurb || "");

  const layout = createEl("div", "year-layout");

  // LEFT COLUMN: teams
  const leftCol = createEl("div", "card-block");
  const teamsHeading = createEl("h3", null, "Teams");
  const teamList = createEl("ul", "team-list");
  yearObj.teams.forEach((t) => {
    const li = createEl("li");
    const nameSpan = createEl("span", null, t.name + " ");
    const membersSpan = createEl(
      "span",
      "team-members",
      `(${t.members.join(", ")})`
    );
    if (t.color === "gold") {
      const badge = createEl("span", "badge gold", "Defending Champs");
      li.append(nameSpan, membersSpan, document.createTextNode(" "), badge);
    } else {
      li.append(nameSpan, membersSpan);
    }
    teamList.appendChild(li);
  });
  leftCol.append(teamsHeading, teamList);

  // RIGHT COLUMN: results + media gallery
  const rightCol = createEl("div", "card-block");
  const resultsHeading = createEl("h3", null, "Results");
  const resultsList = createEl("ul", "results-list");
  yearObj.results.forEach((r) => {
    const li = createEl(
      "li",
      null,
      `${r.event} — ${r.winner}${r.note ? " • " + r.note : ""}`
    );
    resultsList.appendChild(li);
  });

  rightCol.append(resultsHeading, resultsList);

  const mediaHeading = createEl("h3", null, "Media");
  rightCol.appendChild(mediaHeading);

  const media = yearObj.media || [];
  const photos = media.filter((m) => m.type === "photo");
  const videos = media.filter((m) => m.type === "video");

  if (photos.length === 0 && videos.length === 0) {
    const empty = createEl(
      "p",
      "section-subtitle",
      "No media added yet."
    );
    rightCol.appendChild(empty);
  } else {
    // Photo grid
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

        const label = createEl(
          "div",
          "gallery-item-label",
          m.label || ""
        );

        item.append(img, label);
        gallery.appendChild(item);
      });
      rightCol.appendChild(gallery);
    }

    // Videos
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
      rightCol.appendChild(videosWrapper);
    }
  }

  layout.append(leftCol, rightCol);
  card.append(header, blurb, layout);

  target.innerHTML = "";
  target.appendChild(card);
}

// ------------------------
// 5. HALL OF FAME
// ------------------------

function renderHallOfFame() {
  const container = $("#hofContent");
  if (!container) return;

  container.innerHTML = "";

  YAOLYMPICS_DATA.hallOfFame.forEach((entry) => {
    const card = createEl("div", "hof-card");
    const title = createEl("div", "hof-title", entry.title);
    const meta = createEl(
      "div",
      "hof-meta",
      `${entry.name} · ${entry.detail}`
    );
    const note = createEl("div", "hof-note", entry.note);
    card.append(title, meta, note);
    container.appendChild(card);
  });
}

// ------------------------
// 6. PROFILES
// ------------------------

function renderProfiles() {
  const container = $("#profilesGrid");
  if (!container || !YAOLYMPICS_DATA.players) return;

  container.innerHTML = "";

  YAOLYMPICS_DATA.players.forEach((p) => {
    const card = createEl("div", "profile-card");

    // Header: avatar + name/nickname
    const header = createEl("div", "profile-header");

    const avatar = createEl("div", "profile-avatar");
    if (p.photoUrl) {
      const img = document.createElement("img");
      img.src = p.photoUrl;
      img.alt = p.name;
      avatar.appendChild(img);
    } else {
      // Initials fallback
      const initials = p.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase()
        .slice(0, 3);
      avatar.textContent = initials;
    }

    const nameBlock = document.createElement("div");
    const nameEl = createEl("div", "profile-name", p.name);
    const nickEl = createEl(
      "div",
      "profile-nickname",
      p.nickname ? `“${p.nickname}”` : ""
    );
    nameBlock.append(nameEl, nickEl);

    header.append(avatar, nameBlock);

    // Meta: since, years attended, hometown
    const meta = createEl("div", "profile-meta");

    if (p.joinedYear) {
      meta.appendChild(
        createEl(
          "div",
          "profile-meta-item",
          `Yaolympian since ${p.joinedYear}`
        )
      );
    }

    if (Array.isArray(p.yearsAttended) && p.yearsAttended.length > 0) {
      const count = p.yearsAttended.length;
      const first = Math.min(...p.yearsAttended);
      const last = Math.max(...p.yearsAttended);
      const range =
        first === last ? `${first}` : `${first}–${last}`;
      meta.appendChild(
        createEl(
          "div",
          "profile-meta-item",
          `${count} appearances (${range})`
        )
      );
    }

    if (p.hometown) {
      meta.appendChild(
        createEl("div", "profile-meta-item", `🏡 ${p.hometown}`)
      );
    }

    // Fun fact
    const fun = createEl(
      "div",
      "profile-funfact",
      p.funFact || ""
    );

    card.append(header, meta, fun);
    container.appendChild(card);
  });
}

// ------------------------
// 6. RANDOM MOMENT BUTTON
// ------------------------

function setupRandomMoment() {
  const btn = $("#randomMomentBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const years = YAOLYMPICS_DATA.years;
    if (years.length === 0) return;

    const randomYearObj =
      years[Math.floor(Math.random() * years.length)];

    renderYearDetail(randomYearObj.year);

    // Update active button
    document
      .querySelectorAll(".year-button")
      .forEach((b) => b.classList.remove("active"));
    const active = Array.from(document.querySelectorAll(".year-button")).find(
      (b) => Number(b.dataset.year) === randomYearObj.year
    );
    if (active) active.classList.add("active");

    // Smooth scroll to detail
    const detailSection = document.getElementById("year-detail");
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// ------------------------
// 7. INIT
// ------------------------

document.addEventListener("DOMContentLoaded", () => {
  renderYearButtons();
  renderHallOfFame();
  setupRandomMoment();
});
