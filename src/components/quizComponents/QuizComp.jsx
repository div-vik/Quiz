import React, { useState } from "react";

const QuizComp = () => {
  var QuestionBank = [
    {
      Question: "What is the capital of India?",
      Answers: [
        { Answer: "Delhi", isCorrect: true },
        { Answer: "Pune", isCorrect: false },
        { Answer: "Bangalore", isCorrect: false },
        { Answer: "Mumbai", isCorrect: false },
      ],
    },
    {
      Question: "Who is the PM of India?",
      Answers: [
        { Answer: "Amit Shah", isCorrect: false },
        { Answer: "Narendra Modi", isCorrect: true },
        { Answer: "Bangalore", isCorrect: false },
        { Answer: "Mumbai", isCorrect: false },
      ],
    },
    {
      Question: "2 * 3 = ?",
      Answers: [
        { Answer: "6", isCorrect: true },
        { Answer: "5", isCorrect: false },
        { Answer: "3", isCorrect: false },
        { Answer: "20", isCorrect: false },
      ],
    },
    {
      Question: "Animals that eat both plants and meat are called:",
      Answers: [
        { Answer: "Herbivores", isCorrect: false },
        { Answer: "Carnivores", isCorrect: false },
        { Answer: "Omnivores", isCorrect: true },
        { Answer: "Bothivores", isCorrect: false },
      ],
    },
    {
      Question: "When is Pi Day celebrated?",
      Answers: [
        { Answer: "May 14", isCorrect: false },
        { Answer: "March 14", isCorrect: true },
        { Answer: "May 4", isCorrect: false },
        { Answer: "March 4", isCorrect: false },
      ],
    },
    {
      Question: "What is the main ingredient in falafel?",
      Answers: [
        { Answer: "Tofu", isCorrect: false },
        { Answer: "Kidney Beans", isCorrect: false },
        { Answer: "Chickpeas", isCorrect: true },
        { Answer: "Garlic", isCorrect: false },
      ],
    },
    {
      Question: "The Great Pyramid of Giza’s construction was launched by:",
      Answers: [
        { Answer: "Khufu", isCorrect: true },
        { Answer: "Cleopatra", isCorrect: false },
        { Answer: "Amenhotep", isCorrect: false },
        { Answer: "Ramses", isCorrect: false },
      ],
    },
    {
      Question: "What is the capital of Karnataka?",
      Answers: [
        { Answer: "Delhi", isCorrect: false },
        { Answer: "Pune", isCorrect: false },
        { Answer: "Bangalore", isCorrect: true },
        { Answer: "Mumbai", isCorrect: false },
      ],
    },
    {
      Question:
        "Finally, which South American country has the capital city of Quito?",
      Answers: [
        { Answer: "Paraguay", isCorrect: false },
        { Answer: "Colombia", isCorrect: false },
        { Answer: "Ecuador", isCorrect: true },
        { Answer: "Guyana", isCorrect: false },
      ],
    },
    {
      Question: "How long is an Olympic swimming pool (in meters)?",
      Answers: [
        { Answer: "20 meters", isCorrect: false },
        { Answer: "50 meters", isCorrect: true },
        { Answer: "70 meters", isCorrect: false },
        { Answer: "40 meters", isCorrect: false },
      ],
    },
  ];

  const [currentQue, setCurrentQue] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQue + 1;
    if (nextQuestion < QuestionBank.length) {
      setCurrentQue(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQue(0);
    setScore(0);
    setShowScore(false);
  };

  const skip = () => {
    setCurrentQue(currentQue + 1);
  };

  return (
    <div>
      {showScore ? (
        <div className="score">
          You have scored {score} out of {QuestionBank.length}
          <>
            <button type="submit" onClick={resetQuiz}>
              Play Again
            </button>
          </>
        </div>
      ) : (
        <>
          <div className="question">
            <div className="question-num">
              <span>{currentQue + 1}</span>/{QuestionBank.length}
            </div>

            <div className="question-text">
              {QuestionBank[currentQue].Question}
            </div>
          </div>

          <div className="answers">
            {QuestionBank[currentQue].Answers.map((answer) => (
              <button onClick={() => handleAnswerResponse(answer.isCorrect)}>
                {answer.Answer}
              </button>
            ))}
          </div>
          {/* <button type="submit" onClick={() => skip}>
            Skip
          </button> */}
        </>
      )}
    </div>
  );
};

export default QuizComp;
