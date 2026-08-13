/*
⚠️ Function Name Must be `showWelcome()`

একটি ওয়েবসাইটে ইউজার লগ-ইন করলে তাকে স্বাগত জানাতে একটি Alert বক্স দেখাতে হবে।

📥 Input:

Function একটি string প্যারামিটার `username` নিবে।

🚀 Output:

`alert()` ব্যবহার করে `"Welcome, Rafi!"` (যেখানে Rafi হল username) মেসেজ দেখাবে। কিছু রিটার্ন করবে না।

🚩 Challenge:

যদি `username` string না হয় বা ফাঁকা হয়, তাহলে `"Guest"` হিসেবে ধরে নেবে।

💡 Hints:

`typeof` দিয়ে চেক করো, তারপর alert() কল করো।
*/

const showWelcome = (userName) => {
    if (typeof(userName) === 'string' && userName !== '') {
        return `Hi ${userName}! Welcome Onboard`
    }
    else{
        return 'input username'
    }
}

console.log(showWelcome('Miss Liya'));