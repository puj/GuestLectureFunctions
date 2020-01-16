const printSection = (sectionNumber) => {
    console.log("-------------")
    console.log(`Section ${sectionNumber}:`);
    console.log("-------------")
}

const printQuestion = (questionNumber) => {
    console.log(`Question ${questionNumber}:`);
}

const printAnswerPrompt = () => {
    console.log(`Answer:`);
}

const printQuestionBlock = (numQuestions) => {
    for (let i = 0; i < numQuestions; i++) {
        printQuestion(i + 1);
        printAnswerPrompt();
    }
}

const printFooter = () => {
    console.log("-------------")
    console.log("Signature: ");
    console.log("Date: ");
}


printSection(1);
printQuestionBlock(5);
printSection(2);
printQuestionBlock(5);
printFooter();