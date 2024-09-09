import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    name: "",
    score: 0,
    currentQuestionIndex: 0,
    questions: [
      {
        question: "What is the capital of France?",
        answers: [
          {
            text: "Berlin",
            correct: false,
            explanation: "Berlin is the capital of Germany.",
          },
          {
            text: "Madrid",
            correct: false,
            explanation: "Madrid is the capital of Spain.",
          },
          {
            text: "Paris",
            correct: true,
            explanation: "Paris is the capital of France.",
          },
          {
            text: "Lisbon",
            correct: false,
            explanation: "Lisbon is the capital of Portugal.",
          },
        ],
      },
      // Add more questions here
    ],
  }),
  actions: {
    setName(name) {
      this.name = name;
    },
    answerQuestion(index) {
      if (this.questions[this.currentQuestionIndex].answers[index].correct) {
        this.score++;
      }
      this.currentQuestionIndex++;
    },
    resetQuiz() {
      this.name = "";
      this.score = 0;
      this.currentQuestionIndex = 0;
    },
  },
});
