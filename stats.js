import data from "./data.json" assert {type: "json"};
const stats = document.querySelectorAll(".stat");
for (let i = 0; i < stats.length; i++) {
    const stat = stats[i]
    stat.querySelector(".stat-name > img").src = data[i].icon;
    stat.querySelector(".stat-name > h4").innerHTML = data[i].category;
    stat.querySelector(".stat-score").innerHTML = data[i].score;
}
