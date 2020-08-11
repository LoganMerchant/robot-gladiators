var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alerts user of Round Start //
    window.alert("Welcome to Robot Gladiators!");

    // Subtracts the user's attack from the enemy's health //
    enemyHealth = enemyHealth - playerAttack;

    // Logs a resulting message in the console //
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
    // Subtracts the enemy's attack from the user's health //
    playerHealth = playerHealth - enemyAttack;

    // Logs a resulting message in the console //
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
};

fight();