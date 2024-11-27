document.addEventListener('DOMContentLoaded', function () {
    const playerForm = document.getElementById('playerForm');
    
    playerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const photo = document.getElementById('photo').value;
        const position = document.getElementById('position').value;
        const nationality = document.getElementById('nationality').value; // added
        const club = document.getElementById('club').value; // added
        const rating = document.getElementById('rating').value;
        const pace = document.getElementById('pace').value;
        const shooting = document.getElementById('shooting').value;
        const passing = document.getElementById('passing').value;
        const dribbling = document.getElementById('dribbling').value;
        const defending = document.getElementById('defending').value;
        const physical = document.getElementById('physical').value;

        // Validation check for mandatory fields
        if (!name || !photo || !nationality || !club || !position || !rating) {
            alert("Please fill in all fields.");
            return;
        }

        // If the position is 'GK', additional fields are required
        if (position === "GK") {
            const diving = document.getElementById("diving").value;
            const handling = document.getElementById("handling").value;
            const kicking = document.getElementById("kicking").value;
            const reflexes = document.getElementById("reflexes").value;
            const speed = document.getElementById("speed").value;
            const positioning = document.getElementById("positioning").value;

            // Validation for goalkeeper-specific fields
            if (!diving || !handling || !kicking || !reflexes || !speed || !positioning) {
                alert("Please fill in all fields.");
                return;
            }
        } else {
            // Validation for player-specific fields
            if (!pace || !shooting || !passing || !dribbling || !defending || !physical) {
                alert("Please fill in all fields.");
                return;
            }
        }

        // Create player card container
        const playerCard = document.createElement('div');
        playerCard.classList.add('LM');
        playerCard.style.backgroundImage = `url(${photo})`;  // Use photo URL for background

        // Create player name and stats container
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const playerName = document.createElement('p');
        playerName.textContent = name;

        const playerStats = document.createElement('div');
        playerStats.classList.add('player-stats');

        // Helper function to create stat elements
        function createStat(label, value) {
            const stat = document.createElement('div');
            const statLabel = document.createElement('strong');
            statLabel.textContent = label;
            stat.appendChild(statLabel);
            stat.appendChild(document.createTextNode(value));
            return stat;
        }

        // Add stats to player card
        playerStats.appendChild(createStat('Rating: ', rating));
        playerStats.appendChild(createStat('Pace: ', pace));
        playerStats.appendChild(createStat('Shooting: ', shooting));
        playerStats.appendChild(createStat('Passing: ', passing));
        playerStats.appendChild(createStat('Dribbling: ', dribbling));
        playerStats.appendChild(createStat('Defending: ', defending));
        playerStats.appendChild(createStat('Physical: ', physical));

        cardContent.appendChild(playerName);
        cardContent.appendChild(playerStats);
        playerCard.appendChild(cardContent);

        // Append player card to the correct section based on position
        if (position === 'RW' || position === 'LW' || position === 'CF') {
            document.getElementById('attack').appendChild(playerCard);
        } else if (position === 'CM') {
            document.getElementById('medfild').appendChild(playerCard);
        } else if (position === 'CB') {
            document.getElementById('defans').appendChild(playerCard);
        } else if (position === 'GK') {
            document.getElementById('goal').appendChild(playerCard);
        }

        // Clear the form after submission
        playerForm.reset();
    });

    // Toggle visibility of goalkeeper stats fields
    const positionSelect = document.getElementById('position');
    const goalkeeperFields = document.querySelectorAll('.form-group-gk');
    const playerFields = document.querySelectorAll('.form-group-pl');

    function toggleGoalkeeperFields() {
        if (positionSelect.value === 'GK') {
            goalkeeperFields.forEach(field => field.style.display = 'block');
            playerFields.forEach(field => field.style.display = 'none');
        } else {
            goalkeeperFields.forEach(field => field.style.display = 'none');
            playerFields.forEach(field => field.style.display = 'block');
        }
    }

    positionSelect.addEventListener('change', toggleGoalkeeperFields);
    toggleGoalkeeperFields(); // Run on page load to set initial visibility
});
