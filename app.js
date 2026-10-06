const buttons = document.querySelectorAll(".bottom-nav button");
const views = document.querySelectorAll(".view");
const workoutList = document.getElementById("workout-list");

const workouts = [
  { name: "Push Day", duration: "40 min", focus: "Chest, shoulders, triceps" },
  { name: "Pull Day", duration: "4040 min", focus: "Back, biceps" },
  { name: "Legs & Core", duration: "45 min", focus: "Quads, hamstrings, glutes, core" }
];

function renderWorkouts() {
  workoutList.innerHTML = "";
  workouts.forEach(w => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${w.name}</h3>
      <p>${w.duration}</p>
      <p>${w.focus}</p>
    `;
    workoutList.appendChild(card);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.getAttribute("data-view");
    views.forEach(v => v.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

renderWorkouts();
