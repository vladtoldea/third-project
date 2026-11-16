"use strict";

/* ---------- Questions (edit or add your own!) ---------- */
// answer = index (starting at 0) of the correct option
const QUESTIONS = [
  {
    q: "Which world is the home of the Ultramarines?",
    options: ["Macragge", "Baal", "Nocturne", "Fenris"],
    answer: 0,
    explain: "Macragge is the capital of the realm of Ultramar.",
  },
  {
    q: "Which Space Marine Chapter calls the ice world of Fenris home?",
    options: ["Imperial Fists", "Space Wolves", "Dark Angels", "Iron Hands"],
    answer: 1,
    explain:
      "The Space Wolves were raised on Fenris by their Primarch, Leman Russ.",
  },
  {
    q: "Which Chapter is cursed with the Black Rage and the Red Thirst?",
    options: ["Space Wolves", "Iron Hands", "Blood Angels", "Salamanders"],
    answer: 2,
    explain:
      "The Blood Angels carry flaws in their gene-seed inherited from Sanguinius.",
  },
  {
    q: "Which Chapter guards the dark secret of the Fallen?",
    options: ["Dark Angels", "Black Templars", "Raven Guard", "White Scars"],
    answer: 0,
    explain:
      "The Dark Angels hunt the Fallen, former members of their Legion who rebelled.",
  },
  {
    q: "How many original Legions of Space Marines were created by the Emperor?",
    options: ["12", "18", "20", "25"],
    answer: 2,
    explain: "There were twenty Legions, one for each Primarch.",
  },
  {
    q: "What is the genetic material that Space Marines inherit from their Primarchs?",
    options: ["Warp-seed", "Gene-seed", "Soul-spark", "Blood-thread"],
    answer: 1,
    explain:
      "Gene-seed organs such as the progenitor glands pass the Primarch's legacy to new Marines.",
  },
  {
    q: "What is the formal name of the Space Marines?",
    options: [
      "Adeptus Arbites",
      "Adeptus Custodes",
      "Adeptus Mechanicus",
      "Adeptus Astartes",
    ],
    answer: 3,
    explain:
      "Adeptus Astartes means Angels of Death, the Emperor's superhuman warriors.",
  },
  {
    q: "Which Archmagos created the Primaris Space Marines?",
    options: [
      "Belisarius Cawl",
      "Kelbor-Hal",
      "Fabricator-General Kane",
      "Magos Dominus",
    ],
    answer: 0,
    explain:
      "Belisarius Cawl of Mars worked for ten thousand years on the Primaris project.",
  },
  {
    q: "Who wrote the Codex Astartes, the book of Space Marine organisation and tactics?",
    options: [
      "Horus Lupercal",
      "Roboute Guilliman",
      "Rogal Dorn",
      "Leman Russ",
    ],
    answer: 1,
    explain:
      "Guilliman wrote the Codex after the Horus Heresy, and it led to the splitting of the Legions into Chapters.",
  },
  {
    q: "How many Companies does a Codex-compliant Chapter have?",
    options: ["5", "8", "10", "12"],
    answer: 2,
    explain:
      "A Chapter has ten Companies of about 100 Marines each, around 1,000 in total.",
  },
  {
    q: "Which Chapter fights in a perpetual crusade under a High Marshal?",
    options: [
      "Black Templars",
      "Ultramarines",
      "Blood Angels",
      "Imperial Fists",
    ],
    answer: 0,
    explain:
      "The Black Templars, a successor Chapter of the Imperial Fists, are led by a High Marshal and never stop their crusade.",
  },
  {
    q: "Which Chapter is known for its black skin, green armour and love of forging?",
    options: ["Raven Guard", "Salamanders", "Iron Hands", "White Scars"],
    answer: 1,
    explain:
      "The Salamanders of Nocturne are famed for craftsmanship and for protecting humanity.",
  },
  {
    q: "Which Primarch founded the Imperial Fists?",
    options: ["Sanguinius", "Corvus Corax", "Rogal Dorn", "Jaghatai Khan"],
    answer: 2,
    explain: "Rogal Dorn was the master of siegecraft and fortification.",
  },
  {
    q: "What is the iconic Space Marine firearm that fires mass-reactive shells?",
    options: ["Lasgun", "Plasma gun", "Meltagun", "Bolter"],
    answer: 3,
    explain:
      "The bolter fires rocket-propelled shells that explode inside the target.",
  },
  {
    q: "What do you call a Space Marine who wields psychic powers?",
    options: ["Librarian", "Apothecary", "Chaplain", "Techmarine"],
    answer: 0,
    explain:
      "Librarians are psykers. Apothecaries heal, Chaplains guide the faith and Techmarines maintain the machines.",
  },
  {
    q: "Which winged Primarch founded the Blood Angels?",
    options: ["Sanguinius", "Horus Lupercal", "Mortarion", "Angron"],
    answer: 0,
    explain: "Sanguinius was the Primarch of the Blood Angels.",
  },
  {
    q: "Which Primarch led the Space Wolves?",
    options: ["Lion El'Jonson", "Leman Russ", "Ferrus Manus", "Vulkan"],
    answer: 1,
    explain: "Leman Russ led the Space Wolves, who were raised on Fenris.",
  },
  {
    q: "Which Primarch founded the Dark Angels?",
    options: ["Konrad Curze", "Mortarion", "Lion El'Jonson", "Horus Lupercal"],
    answer: 2,
    explain:
      "Lion El'Jonson was the Primarch of the First Legion, the Dark Angels.",
  },
  {
    q: "Which Primarch led the Salamanders?",
    options: ["Ferrus Manus", "Corvus Corax", "Konrad Curze", "Vulkan"],
    answer: 3,
    explain:
      "Vulkan, the Primarch of the Salamanders, was known for his compassion and his skill at the forge.",
  },
  {
    q: "Which Primarch led the Iron Hands?",
    options: ["Ferrus Manus", "Rogal Dorn", "Sanguinius", "Leman Russ"],
    answer: 0,
    explain:
      "Ferrus Manus was a great smith, and the Iron Hands remember him through their bionic augmentations.",
  },
  {
    q: "Which world is the home of the Blood Angels?",
    options: ["Macragge", "Baal", "Fenris", "Medusa"],
    answer: 1,
    explain:
      "Baal is the Blood Angels' homeworld, a harsh desert world in the Segmentum Solar.",
  },
  {
    q: "Which world is the home of the Iron Hands?",
    options: ["Nocturne", "Baal", "Medusa", "Terra"],
    answer: 2,
    explain: "Medusa is the Iron Hands' homeworld.",
  },
  {
    q: "What is the sacred duty of an Apothecary beyond healing his battle-brothers?",
    options: [
      "Piloting Dreadnoughts",
      "Commanding Companies",
      "Maintaining the Chapter fleet",
      "Recovering gene-seed from the fallen",
    ],
    answer: 3,
    explain:
      "Apothecaries recover gene-seed from dead Marines so the Chapter can continue.",
  },
  {
    q: "Which Space Marine officer wears a skull-faced helm and carries a crozius arcanum?",
    options: ["Chaplain", "Librarian", "Captain", "Techmarine"],
    answer: 0,
    explain:
      "Chaplains guard the spiritual faith of the Chapter and lead the Marines in battle.",
  },
  {
    q: "Which Marine is trained by the Adeptus Mechanicus of Mars to maintain the Chapter's wargear?",
    options: ["Apothecary", "Techmarine", "Chaplain", "Sergeant"],
    answer: 1,
    explain:
      "Techmarines are devoted to the Omnissiah and keep armour, weapons and vehicles running.",
  },
  {
    q: "Which walker houses a mortally wounded Space Marine hero entombed inside it?",
    options: ["Sentinel", "Land Speeder", "Dreadnought", "Whirlwind"],
    answer: 2,
    explain:
      "A Dreadnought lets a hero continue to serve the Chapter after near-fatal wounds.",
  },
  {
    q: "What is the name of the heavy armour worn by Terminators?",
    options: [
      "Scout Carapace",
      "Mark X Tacticus",
      "Phobos Armour",
      "Tactical Dreadnought Armour",
    ],
    answer: 3,
    explain:
      "Tactical Dreadnought Armour is among the strongest personal armour of the Imperium.",
  },
  {
    q: "Which heavily armoured tank can carry a squad of Terminators into battle?",
    options: ["Land Raider", "Chimera", "Leman Russ", "Basilisk"],
    answer: 0,
    explain:
      "The Land Raider is an assault transport armed with heavy weapons. The other options are Imperial Guard vehicles.",
  },
  {
    q: "What are the rocket-propelled capsules Space Marines use to land directly from orbit?",
    options: ["Valkyries", "Drop Pods", "Escape pods", "Warp gates"],
    answer: 1,
    explain:
      "Drop Pods let Marines strike enemies anywhere on a planet within moments of launching.",
  },
  {
    q: "How many hearts does a Space Marine have?",
    options: ["One", "Three", "Two", "Four"],
    answer: 2,
    explain:
      "Space Marines have a secondary heart that keeps them alive if the first is wounded.",
  },
  {
    q: "Which Legion number belonged to the Ultramarines?",
    options: ["IX", "VII", "I", "XIII"],
    answer: 3,
    explain:
      "The Ultramarines were the Thirteenth Legion. The Blood Angels were the Ninth, the Imperial Fists the Seventh and the Dark Angels the First.",
  },
  {
    q: "Which name did Horus's Legion use before it was called the Sons of Horus?",
    options: ["Luna Wolves", "Word Bearers", "Night Lords", "Death Guard"],
    answer: 0,
    explain: "The Luna Wolves were later renamed the Sons of Horus.",
  },
  {
    q: "How many of the twenty Legions sided with Horus in the Heresy?",
    options: ["Five", "Nine", "Twelve", "Fifteen"],
    answer: 1,
    explain:
      "Nine Legions turned traitor, nine stayed loyal and two were lost from the records.",
  },
  {
    q: "Who was the first High Marshal of the Black Templars?",
    options: ["Rogal Dorn", "Helbrecht", "Sigismund", "Abaddon"],
    answer: 2,
    explain:
      "Sigismund, a First Captain of the Imperial Fists, founded the crusading order of the Black Templars.",
  },
  {
    q: "Which Primarch was revived by Belisarius Cawl after thousands of years of stasis?",
    options: ["Sanguinius", "Rogal Dorn", "Vulkan", "Roboute Guilliman"],
    answer: 3,
    explain:
      "Guilliman was healed by Cawl and became Lord Commander of the Imperium.",
  },
  {
    q: "Who commands a Space Marine Company?",
    options: ["Captain", "Chaplain", "Apothecary", "Techmarine"],
    answer: 0,
    explain:
      "Each Company is led by a Captain, who answers to the Chapter Master.",
  },
  {
    q: "Who is the supreme commander of a Space Marine Chapter?",
    options: ["Captain", "Chapter Master", "High Marshal", "Librarian"],
    answer: 1,
    explain: "The Chapter Master leads the entire Chapter.",
  },
  {
    q: "Which close-combat weapon has a blade of chainsaw-like teeth?",
    options: ["Power fist", "Thunder hammer", "Chainsword", "Combat knife"],
    answer: 2,
    explain: "The chainsword is a standard Space Marine melee weapon.",
  },
  {
    q: "Which twin-barrelled weapon is a rapid-fire version of the bolter?",
    options: ["Lasgun", "Autocannon", "Flamer", "Storm bolter"],
    answer: 3,
    explain: "The storm bolter has two barrels and a high rate of fire.",
  },
  {
    q: "Which Chapter specialises in stealth and hit-and-run assaults?",
    options: ["Raven Guard", "Imperial Fists", "Ultramarines", "Blood Angels"],
    answer: 0,
    explain:
      "The Raven Guard fight a guerrilla war inspired by their Primarch, Corvus Corax.",
  },
  {
    q: "Which Chapter prefers lightning-fast assaults on bikes and skimmers?",
    options: ["Iron Hands", "White Scars", "Space Wolves", "Salamanders"],
    answer: 1,
    explain:
      "The White Scars hail from Chogoris and are famous for swift attacks.",
  },
  {
    q: "Which Chapter replaces flesh with machine, believing flesh is weak?",
    options: ["Ultramarines", "Dark Angels", "Iron Hands", "Raven Guard"],
    answer: 2,
    explain:
      "The Iron Hands put their faith in the Machine God and are covered in bionic augmentations.",
  },
  {
    q: "What do Chapters call their fortress home base?",
    options: [
      "Hive Spire",
      "Forge-Temple",
      "Citadel-Vault",
      "Fortress-Monastery",
    ],
    answer: 3,
    explain:
      "Chapters keep their gene-seed, armouries and warriors in Fortress-Monasteries.",
  },
  {
    q: "Which type of capital ship is the flagship of many Space Marine fleets?",
    options: ["Battle Barge", "Gladius frigate", "Thunderhawk", "Rhino"],
    answer: 0,
    explain:
      "The Battle Barge is a massive warship that carries hundreds of Marines.",
  },
  {
    q: "Which force of Space Marines from many Chapters is dedicated to fighting alien threats?",
    options: ["Grey Knights", "Deathwatch", "Astra Militarum", "Blood Ravens"],
    answer: 1,
    explain: "The Deathwatch serves the Ordo Xenos of the Inquisition.",
  },
  {
    q: "Which secretive Chapter of psykers is sworn to hunt daemons?",
    options: ["Deathwatch", "Dark Angels", "Grey Knights", "Space Wolves"],
    answer: 2,
    explain: "The Grey Knights are the Chamber Militant of the Ordo Malleus.",
  },
  {
    q: "What is the title of the leader of a Space Wolves Great Company?",
    options: ["Wolf Guard", "Rune Priest", "Iron Priest", "Wolf Lord"],
    answer: 3,
    explain: "Wolf Lords lead the Great Companies of the Space Wolves.",
  },
  {
    q: "Which Chapter was almost destroyed when Orks invaded Rynn's World?",
    options: ["Crimson Fists", "Imperial Fists", "Salamanders", "Blood Angels"],
    answer: 0,
    explain:
      "The Crimson Fists, a successor Chapter of the Imperial Fists, lost most of their strength in the siege.",
  },
  {
    q: "Who is the Chapter Master of the Ultramarines and Lord of Macragge?",
    options: [
      "Cato Sicarius",
      "Marneus Calgar",
      "Marius Gage",
      "Uriel Ventris",
    ],
    answer: 1,
    explain: "Marneus Calgar has ruled Ultramar for centuries.",
  },
  {
    q: "Which Primaris squad forms the standard battleline infantry?",
    options: ["Aggressors", "Reivers", "Intercessors", "Hellblasters"],
    answer: 2,
    explain: "Intercessors are the Primaris equivalent of a Tactical Squad.",
  },
];

const ROUNDS = 10; // questions per game
const TIME_LIMIT = 30; // seconds per question
const STORAGE_KEY = "spaceMarineQuiz";

/* ---------- Element references ---------- */
const $ = (id) => document.getElementById(id);
const screens = {
  start: $("start-screen"),
  quiz: $("quiz-screen"),
  result: $("result-screen"),
};

/* ---------- State ---------- */
let questions = [],
  index = 0,
  score = 0,
  streak = 0,
  correctCount = 0;
let timeLeft = TIME_LIMIT,
  timerId = null,
  locked = false,
  playerName = "Aspirant";

/* ---------- localStorage helpers ---------- */
function loadData() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data && Array.isArray(data.history)) return data;
  } catch (e) {
    /* ignore corrupted data */
  }
  return { name: "", best: 0, history: [] };
}
function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    /* storage unavailable */
  }
}

/* ---------- Utilities ---------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function show(name) {
  Object.keys(screens).forEach((k) =>
    screens[k].classList.toggle("hidden", k !== name),
  );
}

/* ---------- Start screen ---------- */
function renderStart() {
  const data = loadData();
  $("player-name").value = data.name;
  $("best-score").textContent = data.best;
  const list = $("history");
  list.innerHTML = "";
  if (data.history.length === 0) {
    const li = document.createElement("li");
    li.className = "muted";
    li.textContent = "No trials recorded.";
    list.appendChild(li);
  }
  data.history.forEach((h) => {
    const li = document.createElement("li");
    const left = document.createElement("span");
    left.textContent = h.name + " (" + h.correct + "/" + h.total + ")";
    const right = document.createElement("strong");
    right.textContent = h.score;
    li.append(left, right);
    list.appendChild(li);
  });
  show("start");
}

/* ---------- Game flow ---------- */
function startGame() {
  playerName = $("player-name").value.trim() || "Aspirant";
  const data = loadData();
  data.name = playerName === "Aspirant" ? "" : playerName;
  saveData(data);

  questions = shuffle(QUESTIONS).slice(0, ROUNDS);
  index = 0;
  score = 0;
  streak = 0;
  correctCount = 0;
  show("quiz");
  showQuestion();
}

function showQuestion() {
  locked = false;
  const item = questions[index];
  $("progress-text").textContent =
    "Question " + (index + 1) + " / " + questions.length;
  $("score-text").textContent = "Score: " + score;
  $("streak-text").textContent = "Streak: " + streak;
  $("question").textContent = item.q;
  $("feedback").textContent = "";
  $("next-btn").classList.add("hidden");

  const box = $("answers");
  box.innerHTML = "";
  // shuffle options but remember which one is correct
  const opts = shuffle(
    item.options.map((text, i) => ({ text, correct: i === item.answer })),
  );
  opts.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = opt.text;
    btn.dataset.correct = opt.correct;
    btn.addEventListener("click", () => chooseAnswer(btn));
    box.appendChild(btn);
  });
  startTimer();
}

function startTimer() {
  clearInterval(timerId);
  timeLeft = TIME_LIMIT;
  const bar = $("time-bar");
  bar.style.transition = "none";
  bar.style.width = "100%";
  bar.classList.remove("low");
  void bar.offsetWidth; // restart the CSS transition
  bar.style.transition = "";
  updateTimer();
  timerId = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      chooseAnswer(null); // time ran out
    }
  }, 1000);
}
function updateTimer() {
  $("time-text").textContent = timeLeft + "s";
  $("time-bar").style.width = (timeLeft / TIME_LIMIT) * 100 + "%";
  $("time-bar").classList.toggle("low", timeLeft <= 10);
}

function chooseAnswer(btn) {
  if (locked) return;
  locked = true;
  clearInterval(timerId);

  const buttons = document.querySelectorAll(".answer");
  buttons.forEach((b) => {
    b.disabled = true;
    if (b.dataset.correct === "true") b.classList.add("correct");
  });

  const item = questions[index];
  const isCorrect = btn !== null && btn.dataset.correct === "true";
  if (isCorrect) {
    streak++;
    correctCount++;
    const speedBonus = Math.round(timeLeft / 6); // 0 to 5
    const streakBonus = Math.min(streak - 1, 5); // 0 to 5
    const gained = 10 + speedBonus + streakBonus;
    score += gained;
    $("feedback").textContent =
      "Correct! +" + gained + " points. " + item.explain;
  } else {
    streak = 0;
    if (btn) btn.classList.add("wrong");
    $("feedback").textContent =
      (btn ? "Wrong, brother. " : "Too slow. ") + item.explain;
  }
  $("score-text").textContent = "Score: " + score;
  $("streak-text").textContent = "Streak: " + streak;

  const last = index === questions.length - 1;
  $("next-btn").textContent = last ? "See results" : "Next question";
  $("next-btn").classList.remove("hidden");
  $("next-btn").focus();
}

function nextStep() {
  if (index < questions.length - 1) {
    index++;
    showQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  const data = loadData();
  const newRecord = score > data.best;
  if (newRecord) data.best = score;
  data.history.unshift({
    name: playerName,
    score,
    correct: correctCount,
    total: questions.length,
  });
  data.history = data.history.slice(0, 5);
  saveData(data);

  const ratio = correctCount / questions.length;
  $("result-title").textContent =
    ratio === 1
      ? "Chapter Master"
      : ratio >= 0.8
        ? "Captain"
        : ratio >= 0.5
          ? "Battle-Brother"
          : "Neophyte";
  $("result-score").textContent = score + " pts";
  $("result-detail").textContent =
    playerName +
    ", you answered " +
    correctCount +
    " of " +
    questions.length +
    " correctly.";
  $("result-record").textContent = newRecord
    ? "A new highest score. The Emperor is pleased."
    : "Highest score: " + data.best;
  show("result");
}

/* ---------- Events ---------- */
$("start-btn").addEventListener("click", startGame);
$("player-name").addEventListener("keydown", (e) => {
  if (e.key === "Enter") startGame();
});
$("next-btn").addEventListener("click", nextStep);
$("again-btn").addEventListener("click", startGame);
$("menu-btn").addEventListener("click", renderStart);
$("clear-btn").addEventListener("click", () => {
  if (confirm("Purge your highest score and all trial records?")) {
    localStorage.removeItem(STORAGE_KEY);
    renderStart();
  }
});
// keyboard shortcuts: 1-4 pick an answer, Enter goes to next question
document.addEventListener("keydown", (e) => {
  if (screens.quiz.classList.contains("hidden")) return;
  const buttons = document.querySelectorAll(".answer");
  if (!locked && e.key >= "1" && e.key <= String(buttons.length))
    buttons[Number(e.key) - 1].click();
});

renderStart();
