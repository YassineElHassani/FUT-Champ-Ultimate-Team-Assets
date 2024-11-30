document.addEventListener('DOMContentLoaded', () => {
    const addPlayerBtn = document.getElementById('addPlayerBtn');
    const playerFormContainer = document.getElementById('playerFormContainer');
    const playerForm = document.getElementById('playerForm');
    const playerPosition = document.getElementById('playerPosition');
    const standardPlayer = document.getElementById('standardPlayer');
    const gkFields = document.getElementById('gkFields');
    const cancelBtn = document.getElementById('cancelBtn');
    const submitBtn = document.getElementById('submitBtn');

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

        let playerSlot = document.querySelector(`.${position}`);

        if (playerSlot && playerSlot.children.length > 0) {
            const reserveSlots = document.querySelectorAll('.reserve');
            playerSlot = Array.from(reserveSlots).find(slot => slot.children.length === 0);
        }
    
        const playerRating = document.getElementById('playerRating').value;
        const playerPhoto = document.getElementById('playerPhoto').value;
        const playerName = document.getElementById('playerName').value;
        const playerNationality = document.getElementById('playerNationality').value;
        const playerClub = document.getElementById('playerClub').value;

        const playerCard = document.createElement('div');
        playerCard.className = 'playerCard w-full h-full flex flex-col items-center justify-center';

        if(playerRating >= 90)  {
            playerCard.style.backgroundImage = 'url(./src/assets/img/centurions.png)';
        } else if (playerRating >= 75) {
            playerCard.style.backgroundImage = 'url(./src/assets/img/ballon_dor.png)';
        } else if (playerRating >= 60) {
            playerCard.style.backgroundImage = 'url(./src/assets/img/badge_total_rush.png)';
        } else if (playerRating >= 45) {
            playerCard.style.backgroundImage = 'url(./src/assets/img/rttk.png)';
        } else if (playerRating >= 25) {
            playerCard.style.backgroundImage = 'url(./src/assets/img/bronze.png)';
        } else if (playerRating >= 0 ) {
            playerCard.style.backgroundImage = 'url(./src/assets/img/silver.png)';
        }
    
        if (position === 'GK') {
            const playerDiving = document.getElementById('playerDiving').value;
            const playerHandling = document.getElementById('playerHandling').value;
            const playerKicking = document.getElementById('playerKicking').value;
            const playerReflexes = document.getElementById('playerReflexes').value;
            const playerSpeed = document.getElementById('playerSpeed').value;
            const playerPositioning = document.getElementById('playerPositioning').value;

            const crudBtnDiv = document.createElement('div');
            crudBtnDiv.className = 'crudBtn';

            const editButton = document.createElement('button');
            editButton.className = 'edit';
            editButton.setAttribute('type', 'button');
            editButton.textContent = '✏️';

            
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete';
            editButton.setAttribute('type', 'button');
            deleteButton.textContent = '❌';
            
            editButton.addEventListener('click', function() {
                playerFormContainer.classList.remove('hidden');

                document.getElementById('playerPosition').value = position;
                document.getElementById('playerName').value = playerName;
                document.getElementById('playerNationality').value = playerNationality;
                document.getElementById('playerClub').value = playerClub;
                document.getElementById('playerPhoto').value = playerPhoto;
                document.getElementById('playerRating').value = playerRating;
                document.getElementById('playerDiving').value = playerDiving;
                document.getElementById('playerHandling').value = playerHandling;
                document.getElementById('playerKicking').value = playerKicking;
                document.getElementById('playerReflexes').value = playerReflexes;
                document.getElementById('playerSpeed').value = playerSpeed;
                document.getElementById('playerPositioning').value = playerPositioning;

                submitBtn.textContent = 'Save';
                
                submitBtn.addEventListener('click', function() {
                    playerCard.remove();
                    submitBtn.textContent = 'Add Player';
                });
            });

            deleteButton.addEventListener('click', function() {
                playerCard.remove();
            });

            crudBtnDiv.appendChild(editButton);
            crudBtnDiv.appendChild(deleteButton);
            playerCard.appendChild(crudBtnDiv);
        
            const pos = document.createElement('p');
            pos.className = 'absolute top-6 left-5 text-white';
            pos.style.marginTop = '5px';
            pos.textContent = position;
            playerCard.appendChild(pos);
        
            const rating = document.createElement('p');
            rating.className = 'absolute top-10 left-5 text-amber-400';
            rating.style.marginTop = '5px';
            rating.textContent = playerRating;
            playerCard.appendChild(rating);

            const club = document.createElement('img');
            club.src = playerClub;
            club.className = 'absolute top-20 right-5';
            club.height = 9;
            club.width = 25;
            playerCard.appendChild(club);

            const nationality = document.createElement('img');
            nationality.src = playerNationality;
            nationality.className = 'absolute top-10 right-5';
            nationality.height = 9;
            nationality.width = 25;
            playerCard.appendChild(nationality);
        
            const img = document.createElement('img');
            img.src = playerPhoto;
            img.className = 'mt-7';
            img.height = 120;
            img.width = 95;
            const imgCenter = document.createElement('center');
            imgCenter.appendChild(img);
            playerCard.appendChild(imgCenter);
        
            const name = document.createElement('p');
            name.className = 'text-[12px] text-white';
            name.textContent = playerName;
            const nameCenter = document.createElement('center');
            nameCenter.appendChild(name);
            playerCard.appendChild(nameCenter);
        
            const container = document.createElement('div');
            container.className = 'flex justify-center gap-1';
            container.style.marginBottom = '15px';
        
            const attributes = [
                { label: 'DIV', value: playerDiving },
                { label: 'HAN', value: playerHandling },
                { label: 'KIC', value: playerKicking },
                { label: 'REF', value: playerReflexes },
                { label: 'SPE', value: playerSpeed },
                { label: 'POS', value: playerPositioning },
            ];
        
            attributes.forEach(attr => {
                const infoContainer = document.createElement('div');
                const text = document.createElement('p');
                text.className = 'text-[7px] text-white';
                text.textContent = attr.label;
        
                const textValue = document.createElement('p');
                textValue.className = 'text-[8px] text-amber-400';
                textValue.textContent = attr.value;
        
                infoContainer.appendChild(text);
                infoContainer.appendChild(textValue);
                container.appendChild(infoContainer);
            });
        
            playerCard.appendChild(container);
        
        } else {
            const playerPace = document.getElementById('playerPace').value;
            const playerShooting = document.getElementById('playerShooting').value;
            const playerPassing = document.getElementById('playerPassing').value;
            const playerDribbling = document.getElementById('playerDribbling').value;
            const playerDefending = document.getElementById('playerDefending').value;
            const playerPhysical = document.getElementById('playerPhysical').value;

            const crudBtnDiv = document.createElement('div');
            crudBtnDiv.className = 'crudBtn';

            const editButton = document.createElement('button');
            editButton.className = 'edit';
            editButton.setAttribute('type', 'button');
            editButton.textContent = '✏️';
            
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete';
            editButton.setAttribute('type', 'button');
            deleteButton.textContent = '❌';

            editButton.addEventListener('click', function() {
                playerFormContainer.classList.remove('hidden');

                document.getElementById('playerPosition').value = position;
                document.getElementById('playerName').value = playerName;
                document.getElementById('playerNationality').value = playerNationality;
                document.getElementById('playerClub').value = playerClub;
                document.getElementById('playerPhoto').value = playerPhoto;
                document.getElementById('playerRating').value = playerRating;
                document.getElementById('playerPace').value = playerPace;
                document.getElementById('playerShooting').value = playerShooting;
                document.getElementById('playerPassing').value = playerPassing;
                document.getElementById('playerDribbling').value = playerDribbling;
                document.getElementById('playerDefending').value = playerDefending;
                document.getElementById('playerPhysical').value = playerPhysical;

                submitBtn.textContent = 'Save';
                
                
                submitBtn.addEventListener('click', function() {
                    playerCard.remove();
                    submitBtn.textContent = 'Add Player';
                });
            });

            deleteButton.addEventListener('click', function() {
                playerCard.remove();
            });

            crudBtnDiv.appendChild(editButton);
            crudBtnDiv.appendChild(deleteButton);
            playerCard.appendChild(crudBtnDiv);
        
            const pos = document.createElement('p');
            pos.className = 'absolute top-6 left-5 text-white';
            pos.style.marginTop = '5px';
            pos.textContent = position;
            playerCard.appendChild(pos);
        
            const rating = document.createElement('p');
            rating.className = 'absolute top-10 left-5 text-amber-400';
            rating.style.marginTop = '5px';
            rating.textContent = playerRating;
            playerCard.appendChild(rating);

            const club = document.createElement('img');
            club.src = playerClub;
            club.className = 'absolute top-20 right-5';
            club.height = 9;
            club.width = 25;
            playerCard.appendChild(club);

            const nationality = document.createElement('img');
            nationality.src = playerNationality;
            nationality.className = 'absolute top-10 right-5';
            nationality.height = 9;
            nationality.width = 25;
            playerCard.appendChild(nationality);
        
            const img = document.createElement('img');
            img.src = playerPhoto;
            img.className = 'mt-7';
            img.height = 120;
            img.width = 95;
            const imgCenter = document.createElement('center');
            imgCenter.appendChild(img);
            playerCard.appendChild(imgCenter);
        
            const name = document.createElement('p');
            name.className = 'text-[12px] text-white';
            name.textContent = playerName;
            const nameCenter = document.createElement('center');
            nameCenter.appendChild(name);
            playerCard.appendChild(nameCenter);
        
            const container = document.createElement('div');
            container.className = 'flex justify-center gap-1';
            container.style.marginBottom = '15px';
        
            const attributes = [
                { label: 'PAC', value: playerPace },
                { label: 'SHO', value: playerShooting },
                { label: 'PAS', value: playerPassing },
                { label: 'DRI', value: playerDribbling },
                { label: 'DEF', value: playerDefending },
                { label: 'PHY', value: playerPhysical },
            ];
        
            attributes.forEach(attr => {
                const infoContainer = document.createElement('div');
                const labelElement = document.createElement('p');
                labelElement.className = 'text-[7px] text-white';
                labelElement.textContent = attr.label;
        
                const valueElement = document.createElement('p');
                valueElement.className = 'text-[8px] text-amber-400';
                valueElement.textContent = attr.value;
        
                infoContainer.appendChild(labelElement);
                infoContainer.appendChild(valueElement);
                container.appendChild(infoContainer);
            });
        
            playerCard.appendChild(container);
        }
        
    
        playerSlot.innerHTML = '';
        playerSlot.appendChild(playerCard);
    
        playerFormContainer.classList.add('hidden');
        playerForm.reset();
    });
    
});