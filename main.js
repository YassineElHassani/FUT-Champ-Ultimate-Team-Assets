const playerContainer = document.getElementById("playerContainer");
const playerForm = document.getElementById("playerForm");
const gkForm = document.getElementById("gkForm");

displayData();

function addPlayer() {
    playerContainer.classList.remove('hidden');
}

function closeContainer() {
    playerContainer.classList.add('hidden');
}

playerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const playerName = document.getElementById("playerName").value;
    const playerPhoto = document.getElementById("playerPhoto").value;
    const playerPosition = document.getElementById("playerPosition").value;
    const playerNationality = document.getElementById("playerNationality").value;
    const playerNationalityFlag = document.getElementById("playerNationalityFlag").value;
    const playerClub = document.getElementById("playerClub").value;
    const playerClubLogo = document.getElementById("playerClubLogo").value;
    const playerRating = document.getElementById("playerRating").value;
    const playerPace = document.getElementById("playerPace").value;
    const playerShooting = document.getElementById("playerShooting").value;
    const playerPassing = document.getElementById("playerPassing").value;
    const playerDribbling = document.getElementById("playerDribbling").value;
    const playerDefending = document.getElementById("playerDefending").value;
    const playerPhysical = document.getElementById("playerPhysical").value;

    const playerDiving = document.getElementById("playerDiving").value;
    const playerHandling = document.getElementById("playerHandling").value;
    const playerKicking = document.getElementById("playerKicking").value;
    const playerReflexes = document.getElementById("playerReflexes").value;
    const playerSpeed = document.getElementById("playerSpeed").value;
    const playerPositioning = document.getElementById("playerPositioning").value;

    if(playerPosition == "GK") {
        let pace = document.getElementById("pace");
        pace.classList.add('hidden');
        let shooting = document.getElementById("shooting");
        shooting.classList.add('hidden');
        let passing = document.getElementById("passing");
        passing.classList.add('hidden');
        let dribbling = document.getElementById("dribbling");
        dribbling.classList.add('hidden');
        let defending = document.getElementById("defending");
        defending.classList.add('hidden');
        let physical = document.getElementById("physical");
        physical.classList.add('hidden');

        let diving = document.getElementById("diving");
        diving.classList.remove('hidden');
        let handling = document.getElementById("handling");
        handling.classList.remove('hidden');
        let kicking = document.getElementById("kicking");
        kicking.classList.remove('hidden');
        let reflexes = document.getElementById("reflexes");
        reflexes.classList.remove('hidden');
        let speed = document.getElementById("speed");
        speed.classList.remove('hidden');
        let positioning = document.getElementById("positioning");
        positioning.classList.remove('hidden');
    }

    console.log(`Player Added: ${playerName}, ${playerPhoto}, ${playerPosition}, ${playerNationality}, ${playerNationalityFlag}, ${playerClub}, ${playerClubLogo}, ${playerRating}, ${playerPace}, ${playerShooting}, ${playerPassing}, ${playerDribbling}, ${playerDefending}, ${playerPhysical}, ${playerDiving}, ${playerHandling}, ${playerKicking}, ${playerReflexes}, ${playerSpeed}, ${playerPositioning}`,);
    
    
    playerForm.reset();
    
    closeContainer();
});

async function displayData() {
    const playersData = await getData();

    console.log(playersData);

    const playerSelect = document.getElementById("playerSelect");

    for (const player of playersData.players) {
        playerSelect.innerHTML += `<option>${player.name}</option>`;
    }
}

async function getData() {
    const res = await fetch("./players.json");
    const data = await res.json();
    return data;
}
