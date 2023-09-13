function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Définissez une fonction pour vérifier si un événement de marchand doit être déclenché
function shouldTriggerMerchantEvent(totalEvents) {
    // Générez un nombre aléatoire entre 1 et totalEvents
    const randomEvent = getRandomInt(1, totalEvents);
    // Si le nombre généré est inférieur ou égal à 5 (par exemple), déclenchez l'événement marchand
    // Vous pouvez ajuster ce chiffre selon vos besoins pour contrôler la fréquence des événements marchands.
    return randomEvent <= 5; // Dans cet exemple, 5 est la fréquence d'apparition du marchand.
}

// Créez une fonction pour gérer l'événement Marchand
function handleMerchantEvent(player, items) {
    if (shouldTriggerMerchantEvent(player.totalEvents)) {
        console.log("Un marchand itinérant apparaît !");
        console.log("Objets à vendre :");

        // Affichez les objets que le joueur peut acheter
        for (let i = 0; i < items.length; i++) {
            console.log(`${i + 1}. ${items[i].name} - Prix: ${items[i].price} pièces d'or`);
        }

        // Permettez au joueur d'acheter des objets
        const choixAchat = parseInt(prompt("Choisissez un objet à acheter (entrez le numéro) :"));

        if (!isNaN(choixAchat) && choixAchat >= 1 && choixAchat <= items.length) {
            const itemAchat = items[choixAchat - 1];

            if (player.gold >= itemAchat.price) {
                console.log(`Vous avez acheté ${itemAchat.name} pour ${itemAchat.price} pièces d'or.`);
                player.gold -= itemAchat.price;
                player.addItem(itemAchat);
            } else {
                console.log("Vous n'avez pas assez d'or pour acheter cet objet.");
            }
        } else {
            console.log("Choix invalide.");
        }
    }
}

// Créez une fonction pour gérer l'événement de vente du marchand
function handleSellEvent(player, items) {
    console.log("Le marchand propose d'acheter vos objets !");
    console.log("Objets à vendre :");

    // Utilisez getPlayer() pour obtenir le joueur
let playerData = getPlayer();

// Maintenant, vous pouvez accéder à l'inventaire du joueur sans erreur
for (let i = 0; i < player.inventory.length; i++) {
    console.log(`${i + 1}. ${player.inventory[i].name} - Valeur: ${player.inventory[i].price} pièces d'or`);
}

    // Permettez au joueur de choisir un objet à vendre
    const choixVente = parseInt(prompt("Choisissez un objet à vendre (entrez le numéro) :"));

    if (!isNaN(choixVente) && choixVente >= 1 && choixVente <= player.inventory.length) {
        const itemVente = player.inventory[choixVente - 1];

        console.log(`Vous vendez ${itemVente.name} pour ${itemVente.price} pièces d'or.`);
        player.gold += itemVente.price;
        player.removeItem(itemVente); // Supprimez l'objet de l'inventaire du joueur
    } else {
        console.log("Choix invalide.");
    }
}

// Utilisez les objets dans votre tableau "items"
const items = [
    item4,
    item5,
    item6,
    item7,
    item8,
    
];

console.log(items);


