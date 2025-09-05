function updateInventory(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a,b) => a[1].localeCompare(b[1]) );
    let updatedInvObject = merged.reduce((acc, [qty, item]) => {
          acc[item] = (acc[item] || 0) + qty;
    return acc
} ,{});
   let updatedInv = Object.entries(updatedInvObject).map(([item,qty]) => [qty,item])
    return updatedInv;
}

// Example inventory lists
var curInv = [
    [1, "Hair Pin"],
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);