/*
Inventory Merge & Max Score
Function Name Must be: mergeInventory / highestScore
একটি দোকানের Two Branch-এর Stock Array Spread Operator দিয়ে Merge করতে হবে, এবং একটি Student-দের Score Array থেকে Spread দিয়ে Highest Score বের করতে হবে।
Input
mergeInventory(arr1, arr2) — দুইটি Array; highestScore(scores) — একটি Number Array
Output / নিয়ম
mergeInventory: Spread Operator (...arr1, ...arr2) দিয়ে একটি Merged Array Return করবে
highestScore: Math.max(...scores) দিয়ে Highest Number Return করবে
Validation
Return "Invalid" যদি Parameter Array না হয়।

টেস্ট কেস
Input
Output
mergeInventory([1,2],[3,4])
[1, 2, 3, 4]
highestScore([3,7,2,9,4])
9
highestScore("3,7,2")
Invalid

*/

const mergeInventory = (arry1, arry2) => [...arry1, ...arry2];

console.log(mergeInventory([1,2],[3,4]))

// next

const highestScore = (totalScore) => {
    if (Array.isArray(totalScore) == true) {
        return Math.max(...totalScore);
    }
    else{
        return "Invalid"
    }
}

console.log(highestScore([3,7,2]))


// akhane ami onk try kore dekhci sob string ase kintu max ber hoy nai... question ta valokore dekhar por ... operator dia solve korci... akane amar vul silo question valo kore na dekha