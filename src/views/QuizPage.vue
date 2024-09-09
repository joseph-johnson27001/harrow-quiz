<template>
  <div class="quiz-page">
    <!-- Question -->
    <div class="question-section">
      <h2>Question {{ currentQuestionIndex + 1 }} of {{ totalQuestions }}</h2>
      <p class="question">{{ currentQuestion.question }}</p>
    </div>

    <!-- Answer Options -->
    <div class="answer-options">
      <button
        v-for="(option, index) in currentQuestion.options"
        :key="index"
        :class="{
          'correct-answer':
            option === currentQuestion.correctAnswer && showAnswer,
          'incorrect-answer':
            option !== currentQuestion.correctAnswer &&
            showAnswer &&
            selectedAnswer === option,
        }"
        @click="selectAnswer(option)"
        :disabled="showAnswer"
      >
        {{ option }}
      </button>
    </div>

    <!-- Explanation and Next Question -->
    <div v-if="showAnswer" class="answer-section">
      <p
        v-if="selectedAnswer === currentQuestion.correctAnswer"
        class="correct-msg"
      >
        Correct! 🎉
      </p>
      <p v-else class="incorrect-msg">
        Oops! The correct answer is: {{ currentQuestion.correctAnswer }}
      </p>
      <p class="explanation">{{ currentQuestion.explanation }}</p>

      <button class="next-button" @click="nextQuestion">
        {{ isLastQuestion ? "Finish Quiz" : "Next Question" }}
      </button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../store/userStore";

export default {
  name: "QuizPage",
  data() {
    return {
      questions: [
        {
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Jupiter",
          explanation:
            "Jupiter is the largest planet in our solar system, with a diameter of 142,984 km.",
        },
        {
          question: "Who developed the theory of relativity?",
          options: [
            "Isaac Newton",
            "Albert Einstein",
            "Nikola Tesla",
            "Galileo Galilei",
          ],
          correctAnswer: "Albert Einstein",
          explanation:
            "Albert Einstein developed the theory of relativity, which transformed theoretical physics.",
        },
        {
          question: "What is the chemical symbol for gold?",
          options: ["Au", "Ag", "Go", "Pt"],
          correctAnswer: "Au",
          explanation:
            "The chemical symbol for gold is 'Au', which comes from its Latin name 'Aurum'.",
        },
        {
          question: "In what year did World War II end?",
          options: ["1918", "1939", "1945", "1950"],
          correctAnswer: "1945",
          explanation:
            "World War II ended in 1945 when the Axis powers surrendered.",
        },
        {
          question: "What is the capital of Japan?",
          options: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
          correctAnswer: "Tokyo",
          explanation:
            "Tokyo is the capital of Japan, known for being a major financial and cultural hub.",
        },
        {
          question: "Which element is essential for photosynthesis in plants?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correctAnswer: "Carbon Dioxide",
          explanation:
            "Plants require carbon dioxide for photosynthesis, the process through which they produce food.",
        },
        {
          question: "Who painted the Mona Lisa?",
          options: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Claude Monet",
          ],
          correctAnswer: "Leonardo da Vinci",
          explanation:
            "The 'Mona Lisa' was painted by Leonardo da Vinci, one of the most celebrated artists in history.",
        },
        {
          question: "What is the smallest unit of life?",
          options: ["Atom", "Cell", "Molecule", "Organism"],
          correctAnswer: "Cell",
          explanation:
            "The cell is considered the smallest unit of life, as it can carry out all the functions necessary for life.",
        },
        {
          question: "Which planet is closest to the Sun?",
          options: ["Venus", "Earth", "Mercury", "Mars"],
          correctAnswer: "Mercury",
          explanation:
            "Mercury is the closest planet to the Sun, orbiting at an average distance of 57.9 million kilometers.",
        },
        {
          question: "What is the hardest natural substance on Earth?",
          options: ["Gold", "Iron", "Diamond", "Silver"],
          correctAnswer: "Diamond",
          explanation:
            "Diamond is the hardest natural substance on Earth, made of carbon atoms arranged in a crystalline structure.",
        },
      ],
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showAnswer: false,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    totalQuestions() {
      return this.questions.length;
    },
    isLastQuestion() {
      return this.currentQuestionIndex === this.totalQuestions - 1;
    },
  },
  methods: {
    selectAnswer(option) {
      this.selectedAnswer = option;
      this.showAnswer = true;

      const userStore = useUserStore();
      if (option === this.currentQuestion.correctAnswer) {
        userStore.incrementScore();
      }
    },
    nextQuestion() {
      if (!this.isLastQuestion) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
        this.showAnswer = false;
      } else {
        this.$router.push({ name: "ResultsPage" });
      }
    },
  },
};
</script>

<style scoped>
.quiz-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}

.question-section {
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  color: #2c3e50;
}

.question {
  font-size: 18px;
  margin-bottom: 20px;
}

.answer-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 12px;
  font-size: 16px;
  border: 2px solid #1e90ff;
  border-radius: 5px;
  background-color: #f0f8ff;
  color: #1e90ff;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: #1e90ff;
  color: white;
}

button:disabled {
  background-color: #ddd;
  color: #999;
  cursor: not-allowed;
}

.correct-answer {
  background-color: #28a745 !important;
  color: white;
}

.incorrect-answer {
  background-color: #dc3545 !important;
  color: white;
}

.answer-section {
  margin-top: 20px;
}

.correct-msg {
  font-size: 20px;
  color: #28a745;
  margin-bottom: 10px;
}

.incorrect-msg {
  font-size: 20px;
  color: #dc3545;
  margin-bottom: 10px;
}

.explanation {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.next-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.next-button:hover {
  background-color: #4682b4;
}

@media (max-width: 768px) {
  .answer-options {
    grid-template-columns: 1fr;
  }

  button {
    font-size: 14px;
    padding: 10px;
  }

  h2 {
    font-size: 20px;
  }

  .question {
    font-size: 16px;
  }
}
</style>
