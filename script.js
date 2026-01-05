// ------------------------
// 0. SIMPLE PASSWORD GATE (client-side only)
// ------------------------

const SITE_PASSWORD = "winthrop09!";
const AUTH_KEY = "yao_auth_v1"; // change this if you ever want to force everyone to re-enter

function isAuthed() {
  return sessionStorage.getItem(AUTH_KEY) === "1";
}

function unlockSite() {
  sessionStorage.setItem(AUTH_KEY, "1");
  const gate = document.getElementById("passwordGate");
  const shell = document.getElementById("siteShell");
  if (gate) gate.classList.add("hidden");
  if (shell) shell.classList.remove("hidden");
  initSite(); // only initialize the app AFTER unlock
}

function initPasswordGate() {
  const gate = document.getElementById("passwordGate");
  const shell = document.getElementById("siteShell");

  if (!gate || !shell) {
    // If someone deletes the gate markup, just initialize normally
    initSite();
    return;
  }

  if (isAuthed()) {
    gate.classList.add("hidden");
    shell.classList.remove("hidden");
    initSite();
    return;
  }

  // locked state
  shell.classList.add("hidden");
  gate.classList.remove("hidden");

  const input = document.getElementById("passwordInput");
  const btn = document.getElementById("passwordSubmit");
  const err = document.getElementById("passwordError");

  function attempt() {
    const val = (input?.value || "").trim();
    if (val === SITE_PASSWORD) {
      if (err) err.classList.add("hidden");
      unlockSite();
    } else {
      if (err) err.classList.remove("hidden");
      if (input) {
        input.focus();
        input.select();
      }
    }
  }

  if (btn) btn.addEventListener("click", attempt);
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") attempt();
    });
    input.focus();
  }
}

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
        { event: "2v2 Basketball" },
        { event: "Relay Swim" },
        { event: "Cornhole" }
      ],
      championTeam: "Splash Bros",
      media: []
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
        { event: "3-Point Contest" },
        { event: "Sprint Relay" }
      ],
      championTeam: "Bricklayers",
      media: []
    },
    {
      year: 2021,
      location: "The Yaolympic Village: Basking Ridge, NJ",
      theme: "The first showing of the Magyar!",
      blurb: "The Magnificent Seven!",
      teams: [
        { name: "The Mercenary", members: ["The Commish"], color: "platinum" },
        { name: "DentalJew", members: ["Jim Li", "Brandon Liebeskind"], color: "gold" },
        { name: "Jin and Slav", members: ["Jin Bin Liu", "Tim Kovachy"], color: "silver" },
        { name: "Transylvania Reunited", members: ["Mike Zaletel", "Nicolar Done"], color: "bronze" }
      ],
      results: [
        { event: "Beer Pong" },
        { event: "2v2 Basketball" },
        { event: "Tennis Doubles" },
        { event: "Swimming Relay" },
        { event: "Foosball" },
        { event: "Team Texas Hold'em Poker" },
        { event: "Table Tennis Doubles" },
        { event: "Badminton Doubles" },
        { event: "Mini golf" },
        { event: "Billiards" }
      ],
      championTeam: "The Year of the Mercenary: The Commish",
      media: [
        {
          label: "2021 Opening Ceremony Video",
          type: "video",
          url: "photos/2021/2021_opening_ceremony.mp4"
        }
      ]
    },
    {
      year: 2019,
      location: "The Yaolympic Village: Basking Ridge, NJ",
      theme: "The Zaletel's first presence!",
      blurb: "Romaniyao claims its second crown!",
      teams: [
        { name: "Romaniyao", members: ["Nicolae Done", "The Commish"], color: "gold" },
        { name: "Two White Dudes", members: ["Michael Zaletel", "Brandon Liebeskind"], color: "silver" },
        { name: "Chicken Dinner", members: ["Patrick Wu", "Jin Bin Liu"], color: "bronze" }
      ],
      results: [
        { event: "Beer Pong" },
        { event: "2v2 Basketball" },
        { event: "Tennis Doubles" },
        { event: "Swimming Relay" },
        { event: "Foosball" },
        { event: "Team Texas Hold'em Poker" },
        { event: "Table Tennis Doubles" },
        { event: "Mini golf" },
        { event: "Shooting Range" },
        { event: "Billiards" }
      ],
      championTeam: "Romaniyao: Nicolae Done and The Commish",
      media: [
        {
          label: "2019 Opening Ceremony Video",
          type: "video",
          url: "photos/2019/2019_opening_ceremony.mp4"
        }
      ]
    },
    {
      year: 2018,
      location: "The Yaolympic Village: Basking Ridge, NJ",
      theme: "The year Laffey visited!",
      blurb: "Hills highland pool break-in!",
      teams: [
        { name: "Jin and Jews", members: ["Brandon Liebeskind", "Jin Bin Liu"], color: "gold" },
        { name: "Romaniyao", members: ["Nicolae Done", "The Commish"], color: "silver" },
        { name: "BLS", members: ["Patrick Wu", "Jim Li"], color: "bronze" }
      ],
      results: [
        { event: "Beer Pong" },
        { event: "2v2 Basketball" },
        { event: "Tennis Doubles" },
        { event: "Swimming Relay" },
        { event: "Foosball" },
        { event: "Team Texas Hold'em Poker" },
        { event: "Table Tennis Doubles" },
        { event: "Mini golf" },
        { event: "Billiards" }
      ],
      championTeam: "Jin and Jews: Jin Bin Liu and Brandon Liebeskind",
      media: [
        {
          label: "When Marat Safin comes to Basking Ridge...",
          type: "video",
          url: "photos/2018/2018_gypsy_rage.mp4"
        }
      ]
    },
    {
      year: 2017,
      location: "The Yaolympic Village: Basking Ridge, NJ",
      theme: "First three-peat in Yaolympic History!",
      blurb: "JB for Threeeee!",
      teams: [
        { name: "Yao BIN Winning", members: ["Jin Bin Liu", "The Commish"], color: "gold" },
        { name: "Ridge 05", members: ["Brandon Liebeskind", "The Commish"], color: "silver" },
        { name: "BLS", members: ["Patrick Wu", "Jim Li"], color: "bronze" }
      ],
      results: [
        { event: "Beer Pong" },
        { event: "2v2 Basketball" },
        { event: "Tennis Doubles" },
        { event: "Swimming Relay" },
        { event: "Foosball" },
        { event: "Team Texas Hold'em Poker" },
        { event: "Table Tennis Doubles" },
        { event: "Billiards" }
      ],
      championTeam: "Yao BIN Winning: Jin Bin Liu and The Commish",
      media: [
        {
          label: "2017 Opening Ceremony Video",
          type: "video",
          url: "photos/2017/2017_opening_ceremony.mp4"
        }
      ]
    },
    {
      year: 2016,
      location: "The Yaolympic Village: Basking Ridge, NJ",
      theme: "Hi ya! Gypsy turtles for the win!",
      blurb: "The Year of the Doctors!",
      teams: [
        { name: "Donetello and Liunardo", members: ["Jin Bin Liu", "Nicolae Done"], color: "gold" },
        { name: "Ridge 05", members: ["Brandon Liebeskind", "The Commish"], color: "silver" },
        { name: "BLS", members: ["Patrick Wu", "Jim Li"], color: "bronze" }
      ],
      results: [
        { event: "Beer Pong" },
        { event: "2v2 Basketball" },
        { event: "Tennis Doubles" },
        { event: "Swimming Relay" },
        { event: "Foosball" },
        { event: "Team Texas Hold'em Poker" },
        { event: "Table Tennis Doubles" },
        { event: "Billiards" }
      ],
      championTeam: "Donetello and Liunardo: Nicolae Done and Jin Bin Liu",
      media: [
        {
          label: "2016 Highlight Video",
          type: "video",
          url: "photos/2016/2016_doctors_ceremony.mp4"
        }
      ]
    },
    {
      year: 2015,
      location: "The Yaolympic Village: Basking Ridge, NJ",
      theme: "The Caravan Arrives",
      blurb: "Fognini in Five!",
      teams: [
        { name: "Romaniyao", members: ["Nicolae Done", "The Commish"], color: "gold" },
        { name: "Team Sacko", members: ["Jim Li", "Nicolae Done"], color: "silver" },
        { name: "Jin and Jews", members: ["Jin Bin Liu", "Brandon Liebeskind"], color: "bronze" }
      ],
      results: [
        { event: "Beer Pong" },
        { event: "2v2 Basketball" },
        { event: "Tennis Doubles" },
        { event: "Swimming Relay" },
        { event: "Foosball" },
        { event: "Team Texas Hold'em Poker" },
        { event: "Table Tennis Doubles" },
        { event: "Billiards" }
      ],
      championTeam: "Romaniyao: Nicolae Done and The Commish",
      media: [
        {
          label: "2015 Confessional Video",
          type: "video",
          url: "photos/2015/patrick_confessional_v2.mp4"
        }
      ]
    },
    {
      year: 2014,
      location: "The Yaolympic Village: Basking Ridge, NJ",
      theme: "The Second Cumming",
      blurb: "The Year of the Yao: PengYAO Wu becomes a two time champ!",
      teams: [
        { name: "YAO know what I MING", members: ["Patrick Wu", "The Commish"], color: "gold" },
        { name: "Team Sacko", members: ["Jim Li", "Nicolae Done"], color: "silver" },
        { name: "Jin and Jews", members: ["Jin Bin Liu", "Brandon Liebeskind"], color: "bronze" }
      ],
      results: [
        { event: "Beer Pong" },
        { event: "2v2 Basketball" },
        { event: "Tennis Doubles" },
        { event: "Swimming Relay" },
        { event: "Foosball" },
        { event: "Team Texas Hold'em Poker" },
        { event: "Table Tennis Doubles" },
        { event: "Billiards" }
      ],
      championTeam: "YAO know what I MING: Patrick Wu and The Commish",
      media: [
        {
          label: "2014 Confessional Video",
          type: "video",
          url: "photos/2014/MVI_6056.mp4"
        }
      ]
    },
    {
      year: 2013,
      location: "The Yaolympic Village: Basking Ridge, NJ",
      theme: "The OG Yaolympics",
      blurb: "The year it all began!",
      teams: [
        { name: "Chicken Dinner", members: ["Patrick Wu", "Jin Bin Liu"], color: "gold" },
        { name: "Jew Gypsy", members: ["Nicolae Done", "Brandon Liebeskind"], color: "silver" },
        { name: "The Doctors", members: ["Jim Li", "The Commish"], color: "bronze" }
      ],
      results: [
        { event: "Beer Pong" },
        { event: "2v2 Basketball" },
        { event: "Tennis Doubles" },
        { event: "Swimming Relay" },
        { event: "Foosball" },
        { event: "Team Texas Hold'em Poker" },
        { event: "Table Tennis Doubles" },
        { event: "Billiards" }
      ],
      championTeam: "Chicken Dinner: Patrick Wu and Jin Bin Liu",
      media: []
    },
    {
      year: 2012,
      location: "Before the village was The Village: Basking Ridge, NJ",
      theme: "Prequel to Greatness",
      blurb: "Before it was Yaolympics...",
      teams: [
        { name: "Who knows?", members: ["Nicolae Done", "Patrick Wu"], color: "gold" },
        { name: "Who cares?", members: ["Patrick Wu", "Jim Li"], color: "silver" },
        { name: "The Lone Wolf", members: ["Jin Bin Liu", "Lieb in Spirit"], color: "bronze" }
      ],
      results: [
        { event: "Beer Pong" },
        { event: "2v2 Basketball" },
        { event: "Tennis Doubles" },
        { event: "Swimming Relay" },
        { event: "Foosball" },
        { event: "Team Texas Hold'em Poker" },
        { event: "Table Tennis Doubles" },
        { event: "Billiards" }
      ],
      championTeam: "We were all winners back then: The Yaolympians",
      media: []
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
      yearsAttended: [2013, 2014, 2015, 2016, 2017, 2018]
    },
    {
      id: "Patrick",
      name: "Patrick Wu",
      displayName: 'Patrick "Pdubs" Wu',
      nickname: "Pdubs",
      joinedYear: 2014,
      hometown: "",
      funFact: "Hit the game winner in 2018 and won't let anyone forget it.",
      photoUrl: "photos/yaolympians/patrick_wu_yaolympian.png",
      bio: `Featured with his DSL (IYKYK), Pengyao "Patrick" "Pat" "Pdubs" "Dubs" Wu hails from the ancient city of Guangzhou. This slick ass muhf'er was on his way to visit some dark corners in Harvard Yard one night with fellow BLS alum Jin Bin "JB" Liu, when a chance encounter with a drunken fool changed his life forever. Because that drunkard happened to be none other than the future corrupt Commish of the yet-to-be-formed Yaolympics Committee. The bonds of brotherhood formed that night would lead to years of carousing in the storied halls of Harvard and beyond. Nearly a decade later, at the inaugural Yaolympic games, he and JB defied all ESPN projections to become the first champions of Yaolympics lore. When he is not giving himself concussions with ludicrous fadeaways, Pat can be seen clutching it out as the Canto Mamba. Having established his place in the Yaolympics pantheon with multiple championships, he now spends his days as a professional Magic: The Gathering player, while masquerading as a finance bro.`,
      yearsAttended: [2013, 2014, 2015, 2016, 2017, 2018]
    },
    {
      id: "Brandon",
      name: "Brandon Liebeskind",
      displayName: 'Brandon "The Jew" Liebeskind',
      nickname: "The Jew",
      joinedYear: 2013,
      hometown: "",
      funFact: "Still claims the refs were biased.",
      photoUrl: "photos/yaolympians/brandon_liebeskind_yaolympian.png",
      bio: `As the saying goes, Brandon “The Jew” Liebeskind is the jack of no trades and the master of appeals, objections, and postgame jurisprudence. Since graduating from the Harvard of Lewisburg, Pennsylvania (Bucknell University), Brandon has worked an assortment of high-flying jobs: Insurance actuary? Yep! AAA Worldwide Transportation? Yep! Founder and owner of HobokenTennisCoach.com (emphasis on the hobo)? Yep! The Lieb was a true OG Yaolympian, who graduated (we think?) from the celebrated Ridge high school together with The Commish. A 4.0 USTA tennis player who talks like he’s Fognini, Brandon’s dad-joke-meets-war-crime commentary is matched only by his appetite for spicy beef with longhorn peppers at the annual Yaolympics feast. While family responsibilities have kept him from the Games in recent years, his epic performance as one-half of “Jin and Jews” will forever live in glory.`,
      yearsAttended: [2013, 2014, 2015, 2016, 2017, 2018]
    },
    {
      id: "Marlowe",
      name: "Marlowe Rillera",
      displayName: 'Marlowe "C**slinger" Rillera',
      nickname: "Slinger",
      joinedYear: 2013,
      hometown: "",
      funFact: "Still claims the refs were biased.",
      photoUrl: "photos/yaolympians/marlowe_rillera_yaolympian.png",
      bio: "Hailing from the lush, tropical paradise of Las Vegas, Marlowe too—like many of his fellow Yaolympians—is a doctor…technically. When he’s not cleaning teeth, DMD Rillera can usually be found on the dance floor, fist-bumping with one hand and clutching a sketchpad with the other. At the big H, Marlowe was best known for bequeathing his ever-fragrant roommate to fellow Yaolympian, JB, during his sophomore year. Upon rejoining the group, he injected much-needed Vegas flair and questionable vibes into an otherwise respectable cohort of Harvard nerds. Despite what his self-given nickname might suggest, Marlowe has only slung loss after loss at the almighty Games. While his time may eventually come, this Pinoy remains focused on his true calling: tirelessly petitioning for the return of Water Pong to Yaolympics (Kobe!).",
      yearsAttended: [2013, 2014, 2015, 2016, 2017, 2018]
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

// Collage images
const YEAR_COLLAGE_IMAGES = {
  2012: [
    "photos/2012/IMG_0578.JPG",
    "photos/2012/IMG_0584.JPG",
    "photos/2012/IMG_0585.JPG",
    "photos/2012/IMG_0587.JPG",
    "photos/2012/IMG_0624.JPG",
    "photos/2012/IMG_0635.JPG"
  ],
  2013: [
    "photos/2013/2013_yaolympics_champs.jpg",
    "photos/2013/IMG_2013JB.JPG",
    "photos/2013/IMG_2013JB2.JPG",
    "photos/2013/IMG_2863.JPG",
    "photos/2013/IMG_2864.JPG",
    "photos/2013/IMG_4583.JPG",
    "photos/2013/IMG_4584.JPG",
    "photos/2013/IMG_4585.JPG",
    "photos/2013/USopen_2013.jpg"
  ],
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
  ],
  2015: [
    "photos/2015/IMG_4010.JPG",
    "photos/2015/IMG_4011.JPG",
    "photos/2015/IMG_4012.JPG",
    "photos/2015/IMG_4013.JPG",
    "photos/2015/IMG_4016.JPG",
    "photos/2015/IMG_4018.JPG",
    "photos/2015/IMG_4019.JPG",
    "photos/2015/IMG_4021.JPG",
    "photos/2015/IMG_4022.JPG",
    "photos/2015/IMG_4024.JPG",
    "photos/2015/IMG_4026.JPG",
    "photos/2015/IMG_4039.JPG",
    "photos/2015/IMG_4040.JPG",
    "photos/2015/IMG_4042.JPG",
    "photos/2015/IMG_4044.JPG",
    "photos/2015/IMG_4045.JPG",
    "photos/2015/IMG_4049.JPG",
    "photos/2015/IMG_4051.JPG",
    "photos/2015/IMG_4054.JPG",
    "photos/2015/IMG_4055.JPG",
    "photos/2015/IMG_4057.JPG",
    "photos/2015/IMG_8031.JPG",
    "photos/2015/IMG_8033_v2.jpg",
    "photos/2015/IMG_8034_v2.jpg",
    "photos/2015/IMG_8035.JPG",
    "photos/2015/USopen.jpg",
    "photos/2015/USopen2_v2.jpg",
    "photos/2015/USopen3_v2.jpg"
  ],
  2016: [
    "photos/2016/IMG_6659.JPG",
    "photos/2016/IMG_6660.JPG",
    "photos/2016/IMG_6663.JPG",
    "photos/2016/IMG_6670.JPG",
    "photos/2016/IMG_6672.JPG",
    "photos/2016/IMG_6675.JPG",
    "photos/2016/IMG_6677.JPG",
    "photos/2016/IMG_6679.JPG",
    "photos/2016/IMG_6680.JPG",
    "photos/2016/IMG_6685.JPG",
    "photos/2016/IMG_6686.JPG",
    "photos/2016/IMG_6693.JPG",
    "photos/2016/IMG_6695.JPG",
    "photos/2016/IMG_6702.JPG",
    "photos/2016/IMG_6706.JPG",
    "photos/2016/IMG_6709.JPG",
    "photos/2016/IMG_6713.JPG",
    "photos/2016/IMG_6716.JPG",
    "photos/2016/IMG_6721.JPG",
    "photos/2016/IMG_6727.JPG",
    "photos/2016/IMG_6733.JPG",
    "photos/2016/IMG_6738.JPG",
    "photos/2016/IMG_6741.JPG",
    "photos/2016/IMG_6742.JPG",
    "photos/2016/IMG_6747.JPG",
    "photos/2016/IMG_6750.JPG",
    "photos/2016/IMG_6756.JPG",
    "photos/2016/IMG_6759.JPG",
    "photos/2016/IMG_6765.JPG",
    "photos/2016/IMG_6766.JPG",
    "photos/2016/IMG_6770.JPG",
    "photos/2016/IMG_6772.JPG",
    "photos/2016/IMG_6795.JPG"
  ],
  2017: [
    "photos/2017/20170904_152542.jpeg",
    "photos/2017/IMG_9647.JPG",
    "photos/2017/IMG_9648.JPG",
    "photos/2017/IMG_9651.JPG",
    "photos/2017/IMG_9657_v2.JPG",
    "photos/2017/IMG_9659.JPG",
    "photos/2017/IMG_9662_v2.JPG",
    "photos/2017/IMG_9665.JPG",
    "photos/2017/IMG_9670.JPG",
    "photos/2017/IMG_9671.JPG",
    "photos/2017/IMG_9680.JPG",
    "photos/2017/IMG_9686.JPG",
    "photos/2017/IMG_9692.JPG",
    "photos/2017/IMG_9696.JPG",
    "photos/2017/IMG_9698.JPG",
    "photos/2017/IMG_9701.JPG",
    "photos/2017/IMG_9703.JPG",
    "photos/2017/IMG_9707.JPG",
    "photos/2017/IMG_9715.JPG",
    "photos/2017/IMG_9722.JPG",
    "photos/2017/IMG_9727.JPG"
  ],
  2018: [
    "photos/2018/IMG_1826.JPG",
    "photos/2018/IMG_1827.JPG",
    "photos/2018/IMG_1831.JPG",
    "photos/2018/IMG_1833.JPG",
    "photos/2018/IMG_1834.JPG",
    "photos/2018/IMG_1839.JPG",
    "photos/2018/IMG_1840.JPG",
    "photos/2018/IMG_1842.JPG",
    "photos/2018/IMG_1843.JPG",
    "photos/2018/IMG_1845.JPG",
    "photos/2018/IMG_1852_v2.JPG",
    "photos/2018/IMG_1853.JPG",
    "photos/2018/IMG_1856.JPG",
    "photos/2018/IMG_1857.JPG",
    "photos/2018/IMG_1872.JPG",
    "photos/2018/IMG_1874.JPG",
    "photos/2018/IMG_1876.JPG",
    "photos/2018/IMG_1878.JPG",
    "photos/2018/IMG_1879.JPG",
    "photos/2018/IMG_1880.JPG",
    "photos/2018/IMG_1881.JPG",
    "photos/2018/IMG_1882.JPG",
    "photos/2018/IMG_1887.JPG",
    "photos/2018/IMG_1888.JPG",
    "photos/2018/IMG_1889.JPG",
    "photos/2018/IMG_1894.JPG",
    "photos/2018/IMG_1896.JPG",
    "photos/2018/IMG_1897.JPG",
    "photos/2018/IMG_1899.JPG",
    "photos/2018/IMG_1901.JPG"
  ],
  2019: [
    "photos/2019/IMG_1179.jpg",
    "photos/2019/IMG_1182.jpg",
    "photos/2019/IMG_1185.JPG",
    "photos/2019/IMG_1186.jpg",
    "photos/2019/IMG_1187.jpg",
    "photos/2019/IMG_1188.jpg",
    "photos/2019/IMG_1191.JPG",
    "photos/2019/IMG_1194.jpg",
    "photos/2019/IMG_1195.jpg",
    "photos/2019/IMG_1199.jpg",
    "photos/2019/IMG_1200.JPG",
    "photos/2019/IMG_1202.JPG",
    "photos/2019/IMG_1203.JPG",
    "photos/2019/IMG_1204.JPG",
    "photos/2019/IMG_1211.jpg",
    "photos/2019/IMG_1212.jpg",
    "photos/2019/IMG_1215.jpg",
    "photos/2019/IMG_1217.jpg",
    "photos/2019/IMG_1218.jpg",
    "photos/2019/IMG_1220.jpg",
    "photos/2019/IMG_1221.jpg",
    "photos/2019/IMG_1223.jpg",
    "photos/2019/IMG_1224.jpg",
    "photos/2019/IMG_1227.jpg",
    "photos/2019/IMG_1228.jpg",
    "photos/2019/IMG_1231.jpg",
    "photos/2019/IMG_1233.jpg",
    "photos/2019/IMG_1243.jpg",
    "photos/2019/IMG_1245.jpg",
    "photos/2019/IMG_1248.JPG",
    "photos/2019/IMG_1249.JPG",
    "photos/2019/IMG_1255.jpg",
    "photos/2019/IMG_1256.jpg",
    "photos/2019/IMG_1265.JPG",
    "photos/2019/IMG_20190831_190010.JPG",
    "photos/2019/IMG_20190901_175242.JPG",
    "photos/2019/IMG_20190901_175307.JPG",
    "photos/2019/IMG_20190901_175326.JPG"
  ],
  2021: [
    "photos/2021/IMG_4786.jpeg",
    "photos/2021/IMG_7678.jpg",
    "photos/2021/IMG_7681.jpg",
    "photos/2021/IMG_7683.jpg",
    "photos/2021/IMG_7684.jpg",
    "photos/2021/IMG_7686.jpg",
    "photos/2021/IMG_7689.jpg",
    "photos/2021/IMG_7695.jpg",
    "photos/2021/IMG_7697.jpg",
    "photos/2021/IMG_7698.jpg",
    "photos/2021/IMG_7699.jpg",
    "photos/2021/IMG_7704.jpg",
    "photos/2021/IMG_7705.jpg",
    "photos/2021/IMG_7707.JPG",
    "photos/2021/IMG_7711.jpg",
    "photos/2021/IMG_7713.jpg",
    "photos/2021/IMG_7715.jpg",
    "photos/2021/IMG_7717.jpg",
    "photos/2021/IMG_7720.jpg",
    "photos/2021/IMG_7721.jpg",
    "photos/2021/IMG_7722.jpg",
    "photos/2021/IMG_7723.jpg",
    "photos/2021/IMG_7725.jpg",
    "photos/2021/IMG_7729.jpg",
    "photos/2021/IMG_7734.jpg",
    "photos/2021/IMG_7737.jpg",
    "photos/2021/IMG_7739.jpg",
    "photos/2021/IMG_7755.jpg",
    "photos/2021/IMG_7758.jpg",
    "photos/2021/IMG_7761.jpg",
    "photos/2021/IMG_7762.jpg",
    "photos/2021/IMG_7767.jpg",
    "photos/2021/IMG_7771.jpg",
    "photos/2021/IMG_7777.jpg",
    "photos/2021/IMG_7779.jpg",
    "photos/2021/IMG_7782.jpg",
    "photos/2021/IMG_7784.jpg",
    "photos/2021/IMG_7787.jpg",
    "photos/2021/IMG_7796.jpg",
    "photos/2021/IMG_7800.jpg",
    "photos/2021/IMG_7802.jpg",
    "photos/2021/IMG_7817.jpg",
    "photos/2021/IMG_7822.jpg",
    "photos/2021/IMG_7827.jpg",
    "photos/2021/IMG_7836.jpg",
    "photos/2021/IMG_7840.jpg",
    "photos/2021/IMG_7842.jpg",
    "photos/2021/IMG_7851.jpg",
    "photos/2021/IMG_7855.jpg",
    "photos/2021/image000000.jpeg"
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
  const count = Math.min(9, urls.length); // show all if < 9
  const subset = shuffled.slice(0, count);

  const wrapper = createEl("div", "year-collage");
  const grid = createEl("div", "year-collage-grid");

  subset.forEach((url) => {
    const item = createEl("div", "year-collage-item");
  
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    
    const img = document.createElement("img");
    img.src = url;
    img.alt = `Yaolympics ${year} moment`;
    
    link.appendChild(img);
    item.appendChild(link);
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

  // Big champions line with styled team name, no colon after name
  const championsLine = createEl("div", "year-champions");
  const championsLabel = document.createElement("span");
  championsLabel.textContent = "🏆 Champions: ";
  championsLine.appendChild(championsLabel);

  const teamText = yearObj.championTeam || "";
  const parts = teamText.split(":");

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

  const media = yearObj.media || [];
  const videos = media.filter((m) => m.type === "video");

  // Left: Teams + Events
  const teamsBlock = createEl("div", "card-block");

  teamsBlock.appendChild(createEl("div", "section-heading", "Teams"));

  const teamList = createEl("ul", "simple-list teams-list");
  yearObj.teams.forEach((t) => {
    const li = createEl("li", "team-item");

    const nameLine = createEl("div", "team-name", t.name);
    const membersLine = createEl("div", "team-members", `(${t.members.join(", ")})`);

    li.append(nameLine, membersLine);
    teamList.appendChild(li);
  });
  teamsBlock.appendChild(teamList);

  teamsBlock.appendChild(createEl("div", "section-heading", "Events"));

  const eventsList = createEl("ul", "simple-list events-list");
  yearObj.results.forEach((r) => {
    const li = createEl("li", null, r.event || "");
    eventsList.appendChild(li);
  });
  teamsBlock.appendChild(eventsList);

  let layout;

  if (videos.length > 0) {
    layout = createEl("div", "two-column");

    const rightBlock = createEl("div", "card-block");
    rightBlock.appendChild(createEl("div", "section-heading", "Highlight Video"));

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
    layout.append(teamsBlock, rightBlock);
  } else {
    layout = createEl("div", "single-column");
    layout.appendChild(teamsBlock);
  }

  const collage = createYearCollage(yearObj.year);

  yearDetail.append(title, championsLine, blurb, meta);
  if (collage) yearDetail.appendChild(collage);
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
    } else if (pickType === "player" && players.length === 0 && years.length > 0) {
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
// Init site (only called after password unlock)
// ------------------------

function initSite() {
  populateSeasonSelect();
  populatePlayerSelect();

  const seasonSelect = $("#seasonSelect");
  const playerSelect = $("#playerSelect");

  // Top-left Yaolympics button -> home (matches your HTML id="homeLink")
  const homeButton = document.getElementById("homeLink");
  if (homeButton) {
    homeButton.addEventListener("click", (e) => {
      if (e && e.preventDefault) e.preventDefault();
      if (seasonSelect) seasonSelect.value = "";
      if (playerSelect) playerSelect.value = "";
      setView("intro");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

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
}

// ------------------------
// Boot
// ------------------------

document.addEventListener("DOMContentLoaded", () => {
  initPasswordGate();
});
