var fight = function(enemy) {
    while(enemy.health > 0 && playerInfo.health > 0) {
        // Asks user to fight or skip 
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this fight? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "SKIP" || promptFight === "skip") {
            
            // Asks user to confirm that they want to skip 
            var confirmSkip = window.confirm("Are you sure you want to QUIT?")

                if (confirmSkip) {
                    // Penalty for skipping a fight 
                    playerInfo.money = Math.max(0, playerInfo.money - 10);
                    window.alert(playerInfo.name + " has chosen to skip the fight!");
                    console.log("Player has " + playerInfo.money + " dollars.");
                    break;
                }
            }
        var damage = (randomNumber - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );

        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        } 
    }
};

var startGame = function() {
    // Reset stats
    playerInfo.reset();
    
    for (i = 0; i < enemyInfo.length; i++) {   
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! ROUND " + (i + 1) + "!");
            
            var pickedEnemyObj = enemyInfo[i];
            
            pickedEnemyObj.health = randomNumber(40, 60);
            
            fight(pickedEnemyObj);

            if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money) + ".";
    } else {
        window.alert("You've lost your robot in the battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame()
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE'."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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
};

var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var getPlayerName = function() {
    var name = "";

    while(name === "" || name === null) {
        name = prompt("What is your robot's name?");
    } 

    console.log("Your robot's name is " + name + ".");
    return name; 
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (playerMoney >= 7) {
            window.alert("Refilling your robot's health by 20 points, for 7 dollars.");
            this.health += 20; 
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (playerMoney >= 7) {
            window.alert("Upgrading your robot's attack by 6 points, for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    } 
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber (10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber (10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber (10, 14)
    }
];

startGame()