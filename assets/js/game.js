var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alerts user of Round Start //
    window.alert("Welcome to Robot Gladiators!");

    // Asks user to fight or skip //
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this fight? Enter 'FIGHT' or 'SKIP' to choose.");

    // Runs fight function if user decides to fight //
    if (promptFight === "FIGHT" || promptFight === "fight") {

        // Subtracts the user's attack from the enemy's health //
        enemyHealth = enemyHealth - playerAttack;

        // Logs a resulting message in the console //
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

        // Check's enemy's health //
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }    
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // Subtracts the enemy's attack from the user's health //
        playerHealth = playerHealth - enemyAttack;

        // Logs a resulting message in the console //
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

        // Checks user's health //
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    // Skips the fight if user decides //
    } else if (promptFight === "SKIP" || promptFight === "skip") {
        
        // Asks user to confirm that they want to skip //
        var confirmSkip = window.confirm("Are you sure you want to QUIT?")

            if (confirmSkip) {
                // Penalty for skipping a fight // 
                playerMoney = playerMoney - 2;
                window.alert(playerName + " has chosen to skip the fight!");
            }

                // Re-runs the fight function //
            else {
                fight();
            }

    // Prompts user for a valid input //     
    } else {
        window.alert("Invalid option. Please try again!")
    }
}   

fight();