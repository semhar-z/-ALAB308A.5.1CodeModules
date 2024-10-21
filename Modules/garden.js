// Constants
export const PI = 3.1415;
export const spaceOnePlantReq = 0.8;

// Function to calculate the garden area
export function calculateArea(radius) {
    return PI * radius * radius;
}

// Function to calculate the total plant growth after a given number of weeks
export function calculatePlantGrowth(initialPlants, weeks) {
    return initialPlants * Math.pow(2, weeks);
}

// Function to determine the garden status
export function gardenStatus(plantGrowth, capacity) {
    if (plantGrowth > 0.8 * capacity) {
        return "It should be pruned";
    } else if (plantGrowth <= 0.8 * capacity && plantGrowth >= 0.5 * capacity) {
        return "It should be monitored";
    } else {
        return "It should be planted";
    }
}
