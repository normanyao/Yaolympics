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
          label: "Highlight Reel",
          type: "video",
          url: "https://example.com/yaolympics-2024-highlight"
        },
        {
          label: "Dock Chaos Photo",
          type: "photo",
          url: "https://example.com/yaolympics-2024-photo1"
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
          url: "https://example.com/yaolympics-2022-group"
        }
      ]
    }
  ],

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
          color: "gold" // make gold for the champs if you want
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
          url: "photos/2014/group-photo.jpg"
        },
        {
          label: "Iconic Moment",
          type: "photo",
          url: "photos/2014/iconic-moment.jpg"
        },
        {
          label: "2014 Highlight Video",
          type: "video",
          url: "photos/2014/highlight.mp4"
        }
      ]
    }

    // you can keep other years after this if you want; the buttons are sorted by year
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
  const yearObj = YAOLYMPICS_DATA.years.find((y) => y.year === year);
  if (!yearObj) {
    target.innerHTML = "<p>Year not found.</p>";
    return;
  }

  const card = createEl("div", "year-card");

  const header = createEl("div", "year-header");
  const title = createEl(
    "div",
    "year-title",
    `Yaolympics ${yearObj.year}`
  );
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

  const mediaHeading = createEl("h3", null, "Media");
  const mediaList = createEl("ul", "media-list");
  if (yearObj.media && yearObj.media.length > 0) {
    yearObj.media.forEach((m) => {
      const li = createEl("li");
      const typeEmoji = m.type === "video" ? "▶️" : "📸";
      const link = createEl("a");
      link.href = m.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${typeEmoji} ${m.label}`;
      li.appendChild(link);
      mediaList.appendChild(li);
    });
  } else {
    const li = createEl("li", null, "No media added yet.");
    mediaList.appendChild(li);
  }

  rightCol.append(resultsHeading, resultsList, mediaHeading, mediaList);

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
// 6. RANDOM MOMENT BUTTON
// ------------------------

function setupRandomMoment() {
  const btn = $("#randomMomentBtn");
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
    detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
