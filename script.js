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
          type: "photo",
          url: "photos/2024/highlight.jpg"
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
          url: "photos/2022/group.jpg"
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
          note: "
