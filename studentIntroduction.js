/*
### **Problem-01: Student Introduction Generator**

⚠️ Function Name Must be `studentIntroduction()`

একটি Online Learning Platform নতুন Student Registration-এর পরে একটি Introduction Message তৈরি করতে চায়।

📥 Input:

Function একটি Object গ্রহণ করবে, যেমনঃ

js

```
{
  name: "Rafi",
  age: 18,
  course: "JavaScript"
}
```

🚀 Output:

Template Literal ব্যবহার করে নিচের ফরম্যাটে একটি String রিটার্ন করবে —

text

```
My name is Rafi. I am 18 years old. I am learning JavaScript.
```

🚩 Challenge:

যদি Input Object না হয়, অথবা `name`, `age` অথবা `course` property না থাকে তাহলে `"Invalid"` রিটার্ন করবে।

💡 Hints:

Backtick (`) দিয়ে Template Literal লিখে `${}` এর ভেতরে property গুলো বসাও। দাঁড়ি (.) এবং space গুলো হুবহু মিলতে হবে।
*/


const studentIntroduction = (studentInfo) =>{
    const {name,age,course} = studentInfo;
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`
}


console.log(studentIntroduction({name: "Rafi",age: 18,course: "MongoDB"}));