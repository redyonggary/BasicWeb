let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate", price: 2 },
    { name: "Strawberry", type: "Fruit", price: 1 },
    { name: "Vanilla", type: "Vanilla", price: 2 },
    { name: "Pistachio", type: "Nuts", price: 1.5 },
    { name: "Neapolitan", type: "Chocolate", price: 2 },
    { name: "MintChip", type: "Chocolate", price: 1.5 },
    { name: "Raspberry", type: "Fruit", price: 1 },
];

let transactions = [];

transactions.push({
    scoops: ["Chocolate", "Vanilla", "MintChip"],
    total: 5.5,
});
transactions.push({ scoops: ["Raspberry", "StrawBerry"], total: 2 });
transactions.push({ scoops: ["Vanilla", "Vanilla"], total: 4 });

const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
console.log(`You've made ${total} $ today`);

let flavorDistribution = transactions.reduce((acc, curr) => {
    curr.scoops.forEach((scoop) => {
        const key = typeof scoop === "string" ? scoop.trim() : scoop;
        const norm = typeof key === "string" ? key.toLowerCase() : key;
        if (!acc[norm]) {
            acc[norm] = 0;
        }
        acc[norm]++;
    });
    return acc;
}, {});

console.log("판매량(정규화):", flavorDistribution);

const mostSoldKey = Object.keys(flavorDistribution).reduce((best, cur) => {
    return flavorDistribution[cur] > flavorDistribution[best] ? cur : best;
});

const mostSoldInfo = iceCreamFlavors.find(
    (f) => f.name.toLowerCase() === mostSoldKey
);
const mostSoldCount = flavorDistribution[mostSoldKey];

if (mostSoldInfo) {
    console.log(
        `가장 많이 팔린 맛: "${mostSoldInfo.name}" (${mostSoldCount} scoops, type: ${mostSoldInfo.type}, price: $${mostSoldInfo.price})`
    );
} else {
    console.log(
        `가장 많이 팔린 맛: "${mostSoldKey}" (${mostSoldCount} scoops)`
    );
}
