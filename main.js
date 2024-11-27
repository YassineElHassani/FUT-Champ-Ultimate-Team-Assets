const playerContainer = document.getElementById("playerContainer");
const playerForm = document.getElementById("playerForm");
const plyForm = document.querySelectorAll('.ply');
const gkForm = document.querySelectorAll('.gk');


// displayData();

function addPlayer() {
    playerContainer.classList.remove('hidden');
}

function closeContainer() {
    playerContainer.classList.add('hidden');
}


//Submit the inputs data 
playerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const playerName = document.getElementById("playerName").value;
    const playerPhoto = document.getElementById("playerPhoto").value;
    const playerPosition = document.getElementById("playerPosition").value;
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
    //GK
    const playerDiving = document.getElementById("playerDiving").value;
    const playerHandling = document.getElementById("playerHandling").value;
    const playerKicking = document.getElementById("playerKicking").value;
    const playerReflexes = document.getElementById("playerReflexes").value;
    const playerSpeed = document.getElementById("playerSpeed").value;
    const playerPositioning = document.getElementById("playerPositioning").value;

    console.log(`Player Added: ${playerName},
                             ${playerPhoto}, ${playerPosition}, ${playerNationalityFlag}, 
                             ${playerClub}, ${playerClubLogo}, ${playerRating}, 
                             ${playerPace}, ${playerShooting}, ${playerPassing}, 
                             ${playerDribbling}, ${playerDefending}, ${playerPhysical}, 
                             ${playerDiving}, ${playerHandling}, ${playerKicking}, 
                             ${playerReflexes}, ${playerSpeed}, ${playerPositioning}`,);

    
    const playerCard = document.createElement("div");
    playerCard.classList.add("LM");
    playerCard.style.backgroundImage = `./src/assets/img/bronze.png`;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card_content");

    const contentPlayerPhoto = document.createElement("img");
    contentPlayerPhoto.setAttribute("src", playerPhoto.value);

    const contentPlayerName = document.createElement("p");
    contentPlayerName.textContent = playerName;

    const playerStats = document.createElement("div");
    playerStats.classList.add("player_stats");
    
    
    function createStat(label, value) {
        const stat = document.createElement("div");
        const statLabel = document.createElement("strong");
        statLabel.textContent = label;
        stat.appendChild(statLabel);
        stat.appendChild(document.createTextNode(value));
        return stat;
    }
    

    playerStats.appendChild(createStat("Rating: ", playerRating));
    playerStats.appendChild(createStat("Pace: ", playerPace));
    playerStats.appendChild(createStat("Shooting: ", playerShooting));
    playerStats.appendChild(createStat("Passing: ", playerPassing));
    playerStats.appendChild(createStat("Dribbling: ", playerDribbling));
    playerStats.appendChild(createStat("Defending: ", playerDefending));
    playerStats.appendChild(createStat("Physical: ", playerPhysical));

    cardContent.appendChild(contentPlayerName);
    cardContent.appendChild(playerStats);
    playerCard.appendChild(cardContent);

    if (position === "RW" || position === "LW" || position === "CF") {
        document.getElementById("attackPlayer").appendChild(playerCard);
    } else if (position === "CM") {
        document.getElementById("centerPlayer").appendChild(playerCard);
    } else if (position === "CB") {
        document.getElementById("defencePlayer").appendChild(playerCard);
    } else if (position === "GK") {
        document.getElementById("golePlayer").appendChild(playerCard);
    }
    
    playerForm.reset();
    
    closeContainer();
});


//Switching the form
// function formChoose() {
//     if(playerPosition.value === "GK") {
//         gkForm.forEach(field => field.style.display = "block");
//         plyForm.forEach(field => field.style.display="none");
//     } else {
//         gkForm.forEach(field => field.style.display = "none");
//         plyForm.forEach(field => field.style.display="block");
//     }
// }

// playerPosition.addEventListener("change", formChoose);
// formChoose();


// function displayData() {
//     if(playerPosition.value === "LF") {
//         let LF = document.getElementsByClassName('.LF');
//         const LF_rate = document.createElement("p");
//         LF_rate.innerText = playerRating.value;
//         LF.appendChild(LF_rate);
//         const LF_photo = document.createElement("img");
//         LF_photo.setAttribute("src", playerPhoto.value);
//         LF.appendChild(LF_photo);
//         const LF_name = document.createElement("p");
//         LF_name.innerText = playerName.value;
//         LF.appendChild(LF_name);
//         const LF_div = document.createElement("div");
//         LF_div.setAttribute("id", "LF_div");
//         LF.appendChild(LF_div);
//         const LF_div_pac = document.createElement("div");
//         LF_div.appendChild(LF_div_pac);
//         const LF_PAC = document.createElement("p");
//         const LF_PAC_NUM = document.createElement("p");
//         LF_PAC.innerText = "PAC";
//         LF_PAC_NUM = playerPace.value;
//         LF_div_pac.appendChild(LF_PAC);
//         LF_div_pac.appendChild(LF_PAC_NUM);
//         const LF_div_sho = document.createElement("div");
//         LF_div.appendChild(LF_div_sho);
//         const LF_SHO = document.createElement("p");
//         const LF_SHO_NUM = document.createElement("p");
//         LF_SHO.innerText = "SHO";
//         LF_SHO_NUM = playerShooting.value;
//         LF_div_sho.appendChild(LF_SHO);
//         LF_div_sho.appendChild(LF_SHO_NUM);
//         const LF_div_pas = document.createElement("div");
//         LF_div.appendChild(LF_div_pas);
//         const LF_PAS = document.createElement("p");
//         const LF_PAS_NUM = document.createElement("p");
//         LF_PAS.innerText = "PAS";
//         LF_PAS_NUM = playerPassing.value;
//         LF_div_pas.appendChild(LF_PAS);
//         LF_div_pas.appendChild(LF_PAS_NUM);

//     }
// }

// async function displayData() {
//     const playersData = await getData();
    
//     console.log(playersData);
    
//     const playerSelect = document.getElementById("playerSelect");
    
//     for (const player of playersData.players) {
//         playerSelect.innerHTML += `<option>${player.name}</option>`;
//     }
// }

// async function getData() {
//     const res = await fetch("./nation.json");
//     const data = await res.json();
//     return data;
// }

