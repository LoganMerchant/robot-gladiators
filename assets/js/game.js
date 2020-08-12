// Game Status
// "WIN" = Player robot defeats all enemies.
    // * Fight all enemy robots.
    // * Defeat each enemy robot.
// "LOSE" = Player robot's health is <=0.
// If enemy has no health, exit the fight immediately.

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

for (i = 0; i < enemyNames.length; i++) {   
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! ROUND " + (i + 1) + "!");
        
        var pickedEnemyName  = enemyNames[i];
        
        enemyHealth = 50;
        
        debugger;
        
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! GAME OVER!");
        break;
    }
}