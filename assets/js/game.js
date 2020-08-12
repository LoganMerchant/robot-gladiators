// At game's end, ask if user would like to play again.
    // Display user's score 
    // Ask for decision
// After an enemy's defeat, ask if user would like to visit the shop.
    // The shop should allow:
        // *REFILL health.
        // *UPGRADE attack.
        // *LEAVE the store.

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
        // Asks user to fight or skip 
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this fight? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "SKIP" || promptFight === "skip") {
            
            // Asks user to confirm that they want to skip 
            var confirmSkip = window.confirm("Are you sure you want to QUIT?")

                if (confirmSkip) {
                    // Penalty for skipping a fight 
                    playerMoney = playerMoney - 10;
                    window.alert(playerName + " has chosen to skip the fight!");
                    console.log("playerMoney", playerMoney);
                    break;
                }
            }
            
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        } 
    }
};

var startGame = function() {
    // Reset stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for (i = 0; i < enemyNames.length; i++) {   
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! ROUND " + (i + 1) + "!");
            
            var pickedEnemyName  = enemyNames[i];
            
            enemyHealth = 50;
            
            // debugger;
            
            fight(pickedEnemyName);

            if (i < enemyNames.length - 1 && playerHealth > 0) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                if (storeConfirm) {
                    shop();
                }
            }
        } 
        else {
            window.alert("You have lost your robot in battle! GAME OVER!");
            break;
        }
    }
    // Play again
    endGame();
};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney) + ".";
    } else {
        window.alert("You've lost your robot in the battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame()
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE'."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 5) {
                window.alert("Refilling player's health by 10 for 5 dollars.");
                playerHealth = playerHealth + 10;
                playerMoney = playerMoney - 5;
            } else {
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 5) {
                window.alert("Upgrading player's attack by 10 for 5 dollars.");
                playerAttack = playerAttack + 10;
                playerMoney = playerMoney - 5;
            } else {
                window.alert("You don't have enough money!");
            }
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the shop.");
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
}
startGame()