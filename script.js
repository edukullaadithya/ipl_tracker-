 /* =========================
   🏆 IPL HISTORY DATA
========================= */
const history = [
  { year: 2008, winner: "Rajasthan Royals" },
  { year: 2009, winner: "Deccan Chargers" },
  { year: 2010, winner: "Chennai Super Kings" },
  { year: 2011, winner: "Chennai Super Kings" },
  { year: 2012, winner: "Kolkata Knight Riders" },
  { year: 2013, winner: "Mumbai Indians" },
  { year: 2014, winner: "Kolkata Knight Riders" },
  { year: 2015, winner: "Mumbai Indians" },
  { year: 2016, winner: "Sunrisers Hyderabad" },
  { year: 2017, winner: "Mumbai Indians" },
  { year: 2018, winner: "Chennai Super Kings" },
  { year: 2019, winner: "Mumbai Indians" },
  { year: 2020, winner: "Mumbai Indians" },
  { year: 2021, winner: "Chennai Super Kings" },
  { year: 2022, winner: "Gujarat Titans" },
  { year: 2023, winner: "Chennai Super Kings" },
  { year: 2024, winner: "Kolkata Knight Riders" }
];

/* =========================
   📊 HEAD TO HEAD DATA
========================= */
const headToHead = {
  "CSK-MI": { total: 36, CSK: 16, MI: 20 },
  "CSK-RCB": { total: 31, CSK: 20, RCB: 11 },
  "CSK-KKR": { total: 29, CSK: 18, KKR: 11 },
  "CSK-SRH": { total: 21, CSK: 15, SRH: 6 },
  "CSK-DC": { total: 28, CSK: 19, DC: 9 },
  "CSK-RR": { total: 27, CSK: 15, RR: 12 },
  "CSK-PBKS": { total: 28, CSK: 16, PBKS: 12 },
  "CSK-GT": { total: 5, CSK: 2, GT: 3 },
  "CSK-LSG": { total: 3, CSK: 1, LSG: 1 },

  "MI-RCB": { total: 33, MI: 19, RCB: 14 },
  "MI-KKR": { total: 32, MI: 23, KKR: 9 },
  "MI-SRH": { total: 22, MI: 12, SRH: 10 },
  "MI-DC": { total: 33, MI: 18, DC: 15 },
  "MI-RR": { total: 28, MI: 15, RR: 13 },
  "MI-PBKS": { total: 30, MI: 16, PBKS: 14 },
  "MI-GT": { total: 5, MI: 2, GT: 3 },
  "MI-LSG": { total: 4, MI: 1, LSG: 3 },

  "RCB-KKR": { total: 32, RCB: 14, KKR: 18 },
  "RCB-SRH": { total: 23, RCB: 10, SRH: 13 },
  "RCB-DC": { total: 30, RCB: 18, DC: 12 },
  "RCB-RR": { total: 29, RCB: 15, RR: 14 },
  "RCB-PBKS": { total: 31, RCB: 14, PBKS: 17 },
  "RCB-GT": { total: 5, RCB: 2, GT: 3 },
  "RCB-LSG": { total: 4, RCB: 1, LSG: 3 },

  "KKR-SRH": { total: 26, KKR: 17, SRH: 9 },
  "KKR-DC": { total: 32, KKR: 16, DC: 16 },
  "KKR-RR": { total: 28, KKR: 14, RR: 14 },
  "KKR-PBKS": { total: 31, KKR: 21, PBKS: 10 },
  "KKR-GT": { total: 3, KKR: 1, GT: 2 },
  "KKR-LSG": { total: 4, KKR: 1, LSG: 3 },

  "SRH-DC": { total: 24, SRH: 13, DC: 11 },
  "SRH-RR": { total: 20, SRH: 11, RR: 9 },
  "SRH-PBKS": { total: 22, SRH: 15, PBKS: 7 },
  "SRH-GT": { total: 3, SRH: 1, GT: 2 },
  "SRH-LSG": { total: 3, SRH: 1, LSG: 2 },

  "DC-RR": { total: 27, DC: 13, RR: 14 },
  "DC-PBKS": { total: 32, DC: 16, PBKS: 16 },
  "DC-GT": { total: 3, DC: 1, GT: 2 },
  "DC-LSG": { total: 3, DC: 1, LSG: 2 },

  "RR-PBKS": { total: 26, RR: 14, PBKS: 12 },
  "RR-GT": { total: 5, RR: 1, GT: 4 },
  "RR-LSG": { total: 4, RR: 2, LSG: 2 },

  "PBKS-GT": { total: 5, PBKS: 2, GT: 3 },
  "PBKS-LSG": { total: 4, PBKS: 1, LSG: 3 },

  "GT-LSG": { total: 4, GT: 4, LSG: 0 }
};

/* =========================
   🏆 LOAD HISTORY PAGE
========================= */
const historyList = document.getElementById("historyList");

if (historyList) {
  history.forEach(h => {
    historyList.innerHTML += `
      <li class="card">
        🏆 ${h.year} - ${h.winner}
      </li>
    `;
  });
}

/* =========================
   🧠 WINNER FUNCTION
========================= */
function getWinner(t1, t2) {
  let key1 = ${t1}-${t2};
  let key2 = ${t2}-${t1};

  let data = headToHead[key1] || headToHead[key2];

  if (!data) return "No data available";

  let t1Wins = data[t1] || 0;
  let t2Wins = data[t2] || 0;

  if (t1Wins > t2Wins) return 🏆 ${t1} wins more times;
  else if (t2Wins > t1Wins) return 🏆 ${t2} wins more times;
  else return "🤝 Equal record";
}

/* =========================
   ⚔️ COMPARE FUNCTION
========================= */
function compareTeams() {
  const t1 = document.getElementById("team1").value;
  const t2 = document.getElementById("team2").value;

  if (t1 === t2) {
    alert("Select different teams!");
    return;
  }

  let key1 = ${t1}-${t2};
  let key2 = ${t2}-${t1};
  let data = headToHead[key1] || headToHead[key2];

  if (!data) {
    document.getElementById("result").innerHTML = "No data available";
    return;
  }

  let t1Wins = data[t1] || 0;
  let t2Wins = data[t2] || 0;

  let winner = getWinner(t1, t2);

  document.getElementById("result").innerHTML = `
    <div class="card">
      <h3>${t1} vs ${t2}</h3>
      Matches: ${data.total} <br><br>
      ${t1} Wins: ${t1Wins} <br>
      ${t2} Wins: ${t2Wins} <br><br>
      <strong>${winner}</strong>
    </div>
  `;
}
