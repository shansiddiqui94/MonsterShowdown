function fight() {
    let monster = prompt("What Monster will you use?")
    let hero = prompt("What hero will you use?")

    let villanHealth = 50
    let heroHealth = 50
    while (villanHealth > 0 && heroHealth > 0) {
        console.log("Health low")
            // Bellow Math.Random * 20, will give us 20 different options. Even numbers and odd numbers to keep track of numbers
        let heroDice = Math.floor(Math.random() * 20);
        let villanDice = Math.floor(Math.random() * 20);
        if (heroDice === 1 || heroDice === 2) {
            heroHealth -= 5
            alert(`Hero Hit ${heroHealth}`)
        } else if (heroDice >= 3 || heroDice <= 10) {
            villanHealth = 0
            alert(`Villan Hit ${villanHealth}`)
        } else if (heroDice >= 11 || heroDice <= 18) {
            villanHealth -= 10
            alert(` Villan Hit ${villanHealth}`)
        } else if (heroDice === 19 || heroDice === 20) {
            villanHealth -= 20
            alert(`Critical Hit! ${villanHealth}`)
        }

        if (villanDice === 1 || villanDice === 2) {
            villanHealth -= 5
            alert(`Villan Hit ${villanHealth}`)
        } else if (villanDice >= 3 || villanDice <= 10) {
            heroDice = 0
            alert(`Hero Hit ${heroDice}`)
        } else if (villanDice >= 11 || villanDice <= 18) {
            heroDice -= 10
            alert(`Hero Hit ${heroDice}`)
        } else if (villanDice === 19 || villanDice === 20) {
            heroDice -= 20
            alert(`Critical Hit! ${heroDice}`)
        }

        if (villanHealth <= 0 && heroHealth <= 0) {
            alert("Both Hero and Monster have knocked each other out!");
        } else if (villanHealth <= 0) {
            alert("Hero has killed Monster");
        } else {
            alert("Monster killed Hero");
        }
        const playAgain = () => {
            const answer = prompt("Want to play again? Type 'yes' or 'no'");
            if (answer === "yes") {
                fight();
            } else if (answer === "no") {
                alert("The end. Thanks for playing!");
            } else {
                playAgain();
            }
        }
        playAgain();
    }
}

fight();
