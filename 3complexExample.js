const numQuestionsSection1 = 5;

const question = "Question";
const answerPrompt = "Answer:";

console.log("-------------")
console.log("Section 1:");
console.log("-------------")

for (let i = 0 ; i < numQuestionsSection1; i++){
    console.log(`${question} ${i+1}: `);
    console.log(`${answerPrompt}`);
}

const numQuestionsSection2 = 5;
console.log("-------------")
console.log("Section 2:");
console.log("-------------")

for (let i = 0 ; i < numQuestionsSection2; i++){
    console.log(`${question} ${i+1}: `);
    console.log(`${answerPrompt}`);
}

console.log("-------------")
console.log("Signature: ");
console.log("Date: ");