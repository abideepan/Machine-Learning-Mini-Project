const stage = document.getElementById("stage");

let robots = [];

const robotWidth = 70;   // includes hands
const gap = 30;          // space between robots
const stageWidth = 500;
const centerY = 100;

// center calculation
const startX = (stageWidth - (3 * robotWidth + 2 * gap)) / 2;

for (let i = 0; i < 3; i++) {
    const r = document.createElement("div");
    r.className = "robot";

    // centered with spacing
    r.style.left = (startX + i * (robotWidth + gap)) + "px";
    r.style.top = centerY + "px";

    r.innerHTML = `
        <div class="head">
            <div class="eye left"></div>
            <div class="eye right"></div>
            <div class="mouth"></div>
        </div>
        <div class="body">
            <div class="hand left"></div>
            <div class="hand right"></div>
        </div>
        <div class="leg left"></div>
        <div class="leg right"></div>
    `;

    stage.appendChild(r);
    robots.push(r);
}

function startParty() {
    robots.forEach(r => r.classList.add("dance"));
}

function stopParty() {
    robots.forEach(r => r.classList.remove("dance"));
}