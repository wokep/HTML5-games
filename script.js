document.addEventListener("DOMContentLoaded", () => {
    const games = [
        "1v1lol", "2048", "8ball", "adarkroom", "amongus", "asciispace", "asteroids", "astray",
        "backcountry", "basketballstars", "blackholesquare", "bloonstd4", "bounceback", "breaklock",
        "breakout", "captaincallisto", "chess", "chromaincident", "chrome-dino", "chromedino", 
        "connect3", "cookieclicker", "crossyroad", "cubefield", "cuttherope", "cuttherope2", 
        "cuttheropeholiday", "cuttheropetimetravel", "dinosaur", "doctor-acorn2", "doctor-acorn3",
        "doge2048", "dogeminer", "doodle-jump", "driftboss", "ducklife", "ducklife2", "ducklife3",
        "ducklife4", "ducklife5", "edge-surf", "edgenotfound", "elasticmorty", "evilglitch",
        "factoryballsforever", "fireboy-and-watergirl-1", "fireboy-and-watergirl-2", 
        "fireboy-and-watergirl-3", "fireboy-and-watergirl-4", "firewater", "flappy-2048", "flappybird",
        "fnaf", "fnaf2", "fnaf3", "fnaf4", "friendlyfire", "geometry", "geometrydash", "gopher",
        "hextris", "icypurplehead2", "icypurplehead3", "konnekt", "mc1.5.2", "mcbeta0.30", "mcbeta1.3",
        "minecraft", "motox3m", "ninjavsevilcorp", "packabunchas", "pacman", "paperio", "particleclicker",
        "physicsplayground", "pushback", "q1k3", "rabbit-samurai", "rabbit-samurai2", "racer",
        "radiusraid", "retrobowl", "retrohaunt", "roadblocks", "rooftopsniper", "run3", "shuttledeck",
        "sleepingbeauty", "slitherio", "slope", "sm63", "sm64", "snake", "spacecompany", "spacegarden",
        "spacehuggers", "spaceinvaders", "stack", "stacktower", "subway-surfers", "survivio", 
        "templerun", "tetris", "towermaster", "underrun", "vex3", "vex4", "vex5", "vex6", "webretro", 
        "xx142-b2exe"
    ];

    const grid = document.getElementById("games-grid");

    games.forEach(game => {
        const card = document.createElement("a");
        card.href = `html5/${game}/`;
        card.className = "game-card";
        card.innerHTML = `
            <img src="html5/${game}/thumbnail.jpg" alt="${game} Thumbnail">
            <h2>${game}</h2>
        `;
        grid.appendChild(card);
    });
});
