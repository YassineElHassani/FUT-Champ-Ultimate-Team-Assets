document.addEventListener('DOMContentLoaded', () => {
    const addPlayerBtn = document.getElementById('addPlayerBtn');
    const playerFormContainer = document.getElementById('playerFormContainer');
    const playerForm = document.getElementById('playerForm');
    const playerPosition = document.getElementById('playerPosition');
    const standardPlayer = document.getElementById('standardPlayer');
    const gkFields = document.getElementById('gkFields');
    const cancelBtn = document.getElementById('cancelBtn');

    addPlayerBtn.addEventListener('click', () => {
        playerFormContainer.classList.remove('hidden');
    });

    cancelBtn.addEventListener('click', () => {
        playerFormContainer.classList.add('hidden');
        playerForm.reset();
    });

    playerPosition.addEventListener('change', (e) => {
        const isGoalkeeper = e.target.value === 'GK';
        standardPlayer.classList.toggle('hidden', isGoalkeeper);
        gkFields.classList.toggle('hidden', !isGoalkeeper);
    });

    playerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const position = playerPosition.value;
        const playerSlots = document.querySelectorAll(`.${position}`);
        let playerSlot = null;
    
        for (const slot of playerSlots) {
            if (!slot.hasChildNodes()) {
                playerSlot = slot;
                break;
            }
        }
    
        if (!playerSlot) {
            alert(`The ${position} slot is already existing`);
            return;
        }
    
        const playerCard = document.createElement('div');
        playerCard.className = 'playerCard w-full h-full flex flex-col items-center justify-center';
        playerCard.style.backgroundImage = 'url(./src/assets/img/gold.png)';
    
        const playerRating = document.getElementById('playerRating').value;
        const playerPhoto = document.getElementById('playerPhoto').value;
        const playerName = document.getElementById('playerName').value;
    
        if (position === 'GK') {
            const playerDiving = document.getElementById('playerDiving').value;
            const playerHandling = document.getElementById('playerHandling').value;
            const playerKicking = document.getElementById('playerKicking').value;
            const playerReflexes = document.getElementById('playerReflexes').value;
            const playerSpeed = document.getElementById('playerSpeed').value;
            const playerPositioning = document.getElementById('playerPositioning').value;
    
            playerCard.innerHTML = `
                <p class="absolute top-6 left-5 text-black">${position}</p>
                <p class="absolute top-10 left-5 text-red-600">${playerRating}</p>
                <center><img src="${playerPhoto}" class="mt-7" height="120" width="95"></center>
                <center><p class="text-[12px] text-black">${playerName}</p></center>
                <div class="flex justify-center gap-1" style="margin-bottom: 5px;">
                    <div><p class="text-[7px] text-black">DIV</p><p class="text-[8px] text-red-600">${playerDiving}</p></div>
                    <div><p class="text-[7px] text-black">HAN</p><p class="text-[8px] text-red-600">${playerHandling}</p></div>
                    <div><p class="text-[7px] text-black">KIC</p><p class="text-[8px] text-red-600">${playerKicking}</p></div>
                    <div><p class="text-[7px] text-black">REF</p><p class="text-[8px] text-red-600">${playerReflexes}</p></div>
                    <div><p class="text-[7px] text-black">SPE</p><p class="text-[8px] text-red-600">${playerSpeed}</p></div>
                    <div><p class="text-[7px] text-black">POS</p><p class="text-[8px] text-red-600">${playerPositioning}</p></div>
                </div>
            `;
        } else {
            const playerPace = document.getElementById('playerPace').value;
            const playerShooting = document.getElementById('playerShooting').value;
            const playerPassing = document.getElementById('playerPassing').value;
            const playerDribbling = document.getElementById('playerDribbling').value;
            const playerDefending = document.getElementById('playerDefending').value;
            const playerPhysical = document.getElementById('playerPhysical').value;
    
            playerCard.innerHTML = `
                <p class="absolute top-6 left-5 text-black">${position}</p>
                <p class="absolute top-10 left-5 text-red-600">${playerRating}</p>
                <center><img src="${playerPhoto}" class="mt-7" height="120" width="95"></center>
                <center><p class="text-[12px] text-black">${playerName}</p></center>
                <div class="flex justify-center gap-1" style="margin-bottom: 5px;">
                    <div><p class="text-[7px] text-black">PAC</p><p class="text-[8px] text-red-600">${playerPace}</p></div>
                    <div><p class="text-[7px] text-black">SHO</p><p class="text-[8px] text-red-600">${playerShooting}</p></div>
                    <div><p class="text-[7px] text-black">PAS</p><p class="text-[8px] text-red-600">${playerPassing}</p></div>
                    <div><p class="text-[7px] text-black">DRI</p><p class="text-[8px] text-red-600">${playerDribbling}</p></div>
                    <div><p class="text-[7px] text-black">DEF</p><p class="text-[8px] text-red-600">${playerDefending}</p></div>
                    <div><p class="text-[7px] text-black">PHY</p><p class="text-[8px] text-red-600">${playerPhysical}</p></div>
                </div>
            `;
        }
    
        playerSlot.innerHTML = '';
        playerSlot.appendChild(playerCard);
    
        playerFormContainer.classList.add('hidden');
        playerForm.reset();
    });
    
});