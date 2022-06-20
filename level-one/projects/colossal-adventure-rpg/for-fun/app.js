const readline = require("readline-sync");

let strength = 0;
let strengthRaceSkill = 0;
let dexterity = 0;
let dexterityRaceSkill = 0;
let constitution = 0;
let constitutionRaceSkill = 0;
let intelligence = 0;
let intelligenceRaceSkill = 0;
let wisdom = 0;
let wisdomRaceSkill = 0;
let charisma = 0;
let charismaRaceSkill = 0;
let inspiration = 0;
let inspirationRaceSkill = 0;
let proficiencyBonus = 0;
let savingThrows = [];
let acrobatics = 0;
let animalHandling = 0;
let arcana = 0;
let athletics = 0;
let deception = 0;
let history = 0;
let insight = 0;
let intimidation = 0;
let investigation = 0;
let medicine = 0;
let nature = 0;
let perception = 0;
let performance = 0;
let persuation = 0;
let religion = 0;
let sleightOfHand = 0;
let stealth = 0;
let survival = 0;
let skills = [];
let armorClass = 0;
let initiative = 0;
let speed = 0;
let hitPoints = 0;
let playerRace = "";
let ageSelectorMin = 0;
let ageSelectorMax = 0;
let age = 0;
let playerAlignment = "";
let heightFeet = 0;
let weightLBS = 0;
let size = "";
let speedRangeFeet = 0;
let flightRangeFeet = 0;
let weapons = new Object();
let languages = [];
let playerDragonicAncestry = new Object();
let playerProfileSummary = new Object();
let dragonOptions = {
    Black: {
        DamageType: "Acid",
        BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    Blue: {
        DamageType: "Lightning",
        BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    Brass: {
        DamageType: "Fire",
        BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    Copper: {
        DamageType: "Acid",
        BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    Gold: {
        DamageType: "Fire",
        BreathWeapon: "15 ft. cone (Dex. save)"
    },
    Green: {
        DamageType: "Poison",
        BreathWeapon: "15 ft. cone (Dex. save)"
    },
    Red: {
        DamageType: "Fire",
        BreathWeapon: "15 ft. cone (Dex. save)"
    },
    Silver: {
        DamageType: "Cold",
        BreathWeapon: "15 ft. cone (Dex. save)"
    },
    White: {
        DamageType: "Cold",
        BreathWeapon: "15 ft. cone (Dex. save)"
    }
};
let alignment = ["Lawful Good", " Neutral Good", " Chaotic Good", " Lawful Neutral", " True Neutral", " Chaotic Neutral", " Lawful Evil", " Neutral Evil", " Chaotic Evil"];
let race = ["Aarakocra", " Dragonborn", " Dwarf", " Elf", " Genasi", " Gnome", " Goliath", " Half-Elf", " Half-Orc", " Halfling", " Human", " Tiefling", " Variant Aasimar. "];
let level = 0;
let experience = 0;
let breathWeaponSave = "";
let rest = "";
let damageResistance = "";
let playerSpeedReducedByHeavyArmor = "";
let darkVisionFeet = 0;
let darkVisionColor = "";
let combatProficiency = [];
let playerToolsProficiency = new Object();
let dwarfStonecunning = "";
let gnomeCunning = "";
let goliathStoneEndurance = "";

function d20() {
    return Math.floor(Math.random() * (20-1) + 1);
};

function d12() {
    return Math.floor(Math.random() * (12-1) + 1);
};

function d10() {
    return Math.floor(Math.random() * (10-1) + 1);
};

function d8() {
    return Math.floor(Math.random() * (8-1) + 1);
};

function d100() {
    return Math.floor(Math.random() * (100-1) + 1);
};

function d6() {
    return Math.floor(Math.random() * (6-1) + 1);
};

function d4() {
    return Math.floor(Math.random() * (4-1) + 1);
};

function talonsDamage() {
    return Math.floor(strength + strengthRaceSkill + proficiencyBonus + d4());
}

function breathWeaponDC() {
    return Math.floor(8 + constitution + constitutionRaceSkill + proficiencyBonus);
};

function failedSaveBreathWeaponDamageLevel1() {
    return (Math.floor(d6() + d6()));
}; 

function successfulSaveBreathWeaponDamageLevel1() {
    return (Math.floor((d6() + d6()) % 2));
};

function failedSaveBreathWeaponDamageLevel6() {
    return (Math.floor(d6() + d6() + d6()));
}; 

function successfulSaveBreathWeaponDamageLevel6() {
    return (Math.floor((d6() + d6() + d6()) % 2));
};

function failedSaveBreathWeaponDamageLevel11() {
    return (Math.floor(d6() + d6() + d6() + d6()));
}; 

function successfulSaveBreathWeaponDamageLevel11() {
    return (Math.floor((d6() + d6() + d6() + d6()) % 2));
};

function failedSaveBreathWeaponDamageLevel16() {
    return (Math.floor(d6() + d6() + d6() + d6() + d6()));
}; 

function successfulSaveBreathWeaponDamageLevel16() {
    return (Math.floor((d6() + d6() + d6() + d6() +d6()) % 2));
};

function overallBreathWeaponDamage() {
    if (level < 6) {
        if (breathWeaponSave === "failed") {
            return failedSaveBreathWeaponDamageLevel1();
        } else if (breathWeaponSave === "success") {
            return successfulSaveBreathWeaponDamageLevel1();
        };
    } else if (level < 11) {
        if (breathWeaponSave === "failed") {
            return failedSaveBreathWeaponDamageLevel6();
         } else if (breathWeaponSave === "success") {
             return successfulSaveBreathWeaponDamageLevel6();
         };
    } else if (level < 16) {
        if (breathWeaponSave === "failed") {
            return failedSaveBreathWeaponDamageLevel11();
         } else if (breathWeaponSave === "success") {
             return successfulSaveBreathWeaponDamageLevel11();
         };
    } else if (level >= 16) {
        if (breathWeaponSave === "failed") {
            return failedSaveBreathWeaponDamageLevel16();
         } else if (breathWeaponSave === "success") {
             return successfulSaveBreathWeaponDamageLevel16();
         };
    };
};

function drawfStonecunningProficiency() {
    return Math.floor(history * 2);
};

function stoneEndurance() {
    return Math.floor(d12() + constitution + constitutionRaceSkill + proficiencyBonus);
}

//This is the Game Starting Point:

let playerName = readline.question("<<<<Fun Intro Message Here, Asking for name is required.>>>> What is your name? ");

playerProfileSummary.Name = playerName;

let playerRaceOptions = readline.question(playerName + ", Lets build your character. Please choose from the following races: " + race);
playerRace = playerRaceOptions;
playerProfileSummary.Race = playerRace;
if (playerRace === "Aarakocra") {
    dexterityRaceSkill = 2;
    playerProfileSummary.DexterityTrait = dexterityRaceSkill;
    wisdomRaceSkill = 1;
    playerProfileSummary.WisdomTrait = wisdomRaceSkill;
    age = Math.floor(Math.random() * (30-3) + 3);
    playerProfileSummary.Age = age;
    heightFeet = 5;
    playerProfileSummary.Height = heightFeet;
    weightLBS = Math.floor(Math.random() * (100 - 80) + 80);
    playerProfileSummary.Weight = weightLBS;
    size = "Medium";
    playerProfileSummary.Size = size;
    speedRangeFeet = 25;
    playerProfileSummary.Speed = speedRangeFeet;
    flightRangeFeet = 50;
    playerProfileSummary.Flight = flightRangeFeet;
    weapons.Talons = "Strength + D4";
    playerProfileSummary.WeaponInventory = weapons;
    languages.push("Common", "Aarakocra", "Auran");
    playerProfileSummary.SpokenLanguages = languages;
    playerSpeedReducedByHeavyArmor = "true";
    playerProfileSummary.SpeedReducedByHeavyArmor = playerSpeedReducedByHeavyArmor;
} else if (playerRace === "Dragonborn") {
    strengthRaceSkill = 2;
    playerProfileSummary.StrengthTrait = strengthRaceSkill;
    charismaRaceSkill = 1;
    playerProfileSummary.CharismaTrait = charismaRaceSkill;
    age = Math.floor(Math.random() * (80-15) + 15);
    playerProfileSummary.Age = age;
    heightFeet = 6;
    playerProfileSummary.Height = heightFeet;
    weightLBS = 250;
    playerProfileSummary.Weight = weightLBS;
    size = "Medium";
    playerProfileSummary.Size = size;
    speedRangeFeet = 30;
    playerProfileSummary.Speed = speedRangeFeet;
    console.log("THESE ARE THE DRAGON OPTIONS BELOW: ")
    console.log(dragonOptions);
    dragonAncestryChoice = readline.question("You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type outlined above: ");
    if (dragonAncestryChoice === "Black") {
        playerDragonicAncestry = dragonOptions.Black;
        playerProfileSummary.DragonAncestryTrait = playerDragonicAncestry;
    } else if (dragonAncestryChoice === "Blue") {
        playerDragonicAncestry = dragonOptions.Blue;
        playerProfileSummary.DragonAncestryTrait = playerDragonicAncestry;
    } else if (dragonAncestryChoice === "Brass") {
        playerDragonicAncestry = dragonOptions.Brass;
        playerProfileSummary.DragonAncestryTrait = playerDragonicAncestry;
    } else if (dragonAncestryChoice === "Copper") {
        playerDragonicAncestry = dragonOptions.Copper;
        playerProfileSummary.DragonAncestryTrait = playerDragonicAncestry;
    } else if (dragonAncestryChoice === "Gold") {
        playerDragonicAncestry = dragonOptions.Gold;
        playerProfileSummary.DragonAncestryTrait = playerDragonicAncestry;
    } else if (dragonAncestryChoice === "Green") {
        playerDragonicAncestry = dragonOptions.Green;
        playerProfileSummary.DragonAncestryTrait = playerDragonicAncestry;
    } else if (dragonAncestryChoice === "Red") {
        playerDragonicAncestry = dragonOptions.Red;
        playerProfileSummary.DragonAncestryTrait = playerDragonicAncestry;
    } else if (dragonAncestryChoice === "Silver") {
        playerDragonicAncestry = dragonOptions.Silver;
        playerProfileSummary.DragonAncestryTrait = playerDragonicAncestry;
    } else if (dragonAncestryChoice === "White") {
        playerDragonicAncestry = dragonOptions.White;
        playerProfileSummary.DragonAncestryTrait = playerDragonicAncestry;
    };
    playerProfileSummary.BreathWeaponOpponentSavingThrow = "8 + constitution + proficiencyBonus";
    playerProfileSummary.FailedSaveBreathWeaponDamageLevels1to6 = "2d6 damage";
    playerProfileSummary.SuccessfulSaveBreathWeaponDamageLevelsLevels1to6 = "2d6/2 damage";
    playerProfileSummary.FailedSaveBreathWeaponDamageLevels6to11 = "3d6 damage";
    playerProfileSummary.SuccessfulSaveBreathWeaponDamageLevels6to11 = "3d6/2 damage";
    playerProfileSummary.FailedSaveBreathWeaponDamageLevels11to16 = "4d6 damage";
    playerProfileSummary.SuccessfulSaveBreathWeaponDamageLevels11to16 = "4d6/2 damage";
    playerProfileSummary.FailedSaveBreathWeaponDamageLevels16up = "5d6 damage";
    playerProfileSummary.SuccessfulSaveBreathWeaponDamageLevels16up = "5d6/2 damage";
    playerProfileSummary.BreathWeaponRestPeriod = "After you use your breath weapon, you can’t use it again until you complete a short or long rest."
    damageResistance = playerProfileSummary.DragonAncestryTrait.DamageType;
    playerProfileSummary.DamageResistance = damageResistance;
    languages.push("Common", "Draconic");
    playerProfileSummary.SpokenLanguages = languages;
    playerSpeedReducedByHeavyArmor = "true";
    playerProfileSummary.SpeedReducedByHeavyArmor = playerSpeedReducedByHeavyArmor;
} else if (playerRace === "Dwarf") {
    constitutionRaceSkill = 2;
    playerProfileSummary.ConstitutionTrait = constitutionRaceSkill;
    age = Math.floor(Math.random() * (350-18) + 18);
    playerProfileSummary.Age = age;
    heightFeet = Math.floor(Math.random() * (5-4) + 4);
    playerProfileSummary.Height = heightFeet;
    weightLBS = 150;
    playerProfileSummary.Weight = weightLBS;
    size = "Medium";
    playerProfileSummary.Size = size;
    speedRangeFeet = 25;
    playerProfileSummary.Speed = speedRangeFeet;
    speedReducedByHeavyArmor = "false";
    darkVisionFeet = 60;
    playerProfileSummary.Darkvision = darkVisionFeet;
    darkVisionColor = "Grey";
    playerProfileSummary.DarkVisionColor = darkVisionColor;
    damageResistance = "Poison";
    playerProfileSummary.DamageResistance = damageResistance;
    combatProficiency = ["Battle Axe", " Hand Axe", " Light Hammer", " War Hammer"];
    playerProfileSummary.CombatProficiency = combatProficiency;
    let drawfToolProfiency = readline.question("You gain proficiency with the artisan’s tools of your choice: Smith tools, Brewer supplies, or Mason tools.");
    if (drawfToolProfiency === "Smith tools") {
        playerToolsProficiency.SkillOne = "Smith tools";
        playerProfileSummary.ToolProficiency = playerToolsProficiency;
    } else if (drawfToolProfiency === "Brewer supplies") {
        playerToolsProficiency.SkillOne = "Brewer supplies";
        playerProfileSummary.ToolProficiency = playerToolsProficiency;
    } else if (drawfToolProfiency === "Mason tools") {
        playerToolsProficiency.SkillOne = "Mason tools";
        playerProfileSummary.ToolProficiency = playerToolsProficiency;
    };
    dwarfStonecunning = "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.";
    playerProfileSummary.Stonecunning = dwarfStonecunning;
    languages.push("Common", " Dwarvish");
    playerProfileSummary.SpokenLanguages = languages;
} else if (playerRace === "Elf") {
    dexterityRaceSkill = 2;
    playerProfileSummary.DexterityTrait = dexterityRaceSkill;
    age = Math.floor(Math.random() * (750-100) + 100);
    playerProfileSummary.Age = age;
    heightFeet = Math.floor(Math.random() * (7-3) + 3);
    playerProfileSummary.Height = heightFeet;
    size = "Medium";
    playerProfileSummary.Size = size;
    speedRangeFeet = 30;
    playerProfileSummary.Speed = speedRangeFeet;
    darkVisionFeet = 60;
    playerProfileSummary.Darkvision = darkVisionFeet;
    darkVisionColor = "Grey";
    playerProfileSummary.DarkVisionColor = darkVisionColor;
    perception = "Proficient";
    playerProfileSummary.Perception = perception;
    damageResistance = ["Charm Spell", "Sleep Spell"];
    playerProfileSummary.DamageResistance = damageResistance;
    rest = "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.";
    playerProfileSummary.Rest = rest;
    languages.push("Common", "Elvish");
    playerProfileSummary.SpokenLanguages = languages;
} else if (playerRace === "Genasi") {
    languages.push("Common", " Primordial");
    playerProfileSummary.SpokenLanguages = languages;
    constitutionRaceSkill = 2;
    playerProfileSummary.ConstitutionTrait = constitutionRaceSkill;
    age = Math.floor(Math.random() * (120-18) + 18);
    playerProfileSummary.Age = age;
    heightFeet = Math.floor(Math.random() * (7-5) + 5);
    playerProfileSummary.Height = heightFeet;
    size = "Medium";
    playerProfileSummary.Size = size;
    speedRangeFeet = 30;
    playerProfileSummary.Speed = speedRangeFeet;
} else if (playerRace === "Gnome") {
    intelligenceRaceSkill = 2;
    playerProfileSummary.IntelligenceTrait = intelligenceRaceSkill;
    age = Math.floor(Math.random() * (500-40) + 40);
    playerProfileSummary.Age = age;
    heightFeet = Math.floor(Math.random() * (4-3) + 3);
    playerProfileSummary.Height = heightFeet;
    weightLBS = 40;
    playerProfileSummary.Weight = weightLBS;
    size = "Small";
    playerProfileSummary.Size = size;
    speedRangeFeet = 25;
    playerProfileSummary.Speed = speedRangeFeet;
    darkVisionFeet = 60;
    playerProfileSummary.Darkvision = darkVisionFeet;
    darkVisionColor = "Grey";
    playerProfileSummary.DarkVisionColor = darkVisionColor;
    gnomeCunning = "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.";
    languages.push("Common", " Gnome");
} else if (playerRace === "Goliath") {
    strengthRaceSkill = 2;
    playerProfileSummary.StrengthTrait = strengthRaceSkill;
    constitutionRaceSkill = 1;
    playerProfileSummary.ConstitutionTrait = constitutionRaceSkill;
    age = Math.floor(Math.random() * (99-16) + 16);
    playerProfileSummary.Age = age;
    heightFeet = Math.floor(Math.random() * (8-7) + 7);
    playerProfileSummary.Height = heightFeet;
    weightLBS = Math.floor(Math.random() * (340 - 280) + 280);
    playerProfileSummary.Weight = weightLBS;
    size = "Medium";
    playerProfileSummary.Size = size;
    speedRangeFeet = 30;
    playerProfileSummary.Speed = speedRangeFeet
    athletics = "Proficient";
    playerProfileSummary.Athletics = athletics;
    goliathStoneEndurance = "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled and reduce the damage by that total. After you use this trait, you cant use it again until you finish a short or long rest.";
}

console.log(playerProfileSummary);