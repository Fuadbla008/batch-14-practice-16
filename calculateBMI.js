/*
BMI Calculator (Arrow Refactor)
Function Name Must be: calculateBMI
একটি Fitness App-এর পুরানো ES5 Function কে Arrow Function এ Refactor করতে হবে। Function টি Weight (kg) এবং Height (m) নিয়ে BMI বের করবে।
Input
Arrow Function দুইটি Parameter গ্রহণ করবে — weight (Number, kg), height (Number, m)
Output / নিয়ম
BMI = weight / (height × height)
Return করতে হবে BMI একটি Number হিসেবে, 2 Decimal Place পর্যন্ত (toFixed(2), তারপর Number এ Convert)
Validation
Return "Invalid" যদি weight বা height শূন্য বা Negative হয়।

টেস্ট কেস
Input
Output
70, 1.75
22.86
50, 1.6
19.53
60, -1.7
Invalid
*/


const calculateBMI = (Weight, Height) => {
    if (Weight > 0 && Height > 0) {
        const bMI = Weight / (Height * Height)
        const finalBMI = bMI.toFixed(2);
        const result = parseInt(finalBMI);
        return result;
    }
    else{
        return "Invalid"
    }
}

console.log(calculateBMI(64,1.76784))