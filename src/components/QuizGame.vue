<template>
  <div>
    <h1>Welcome to the Quiz, {{ name }}!</h1>
    <QuizQuestion
      v-if="currentQuestion"
      :question="currentQuestion.question"
      :answers="currentQuestion.answers"
      @answer="handleAnswer"
    />
    <QuizResults v-else :name="name" :score="score" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useQuizStore } from "../store/quizStore";
import QuizQuestion from "./QuizQuestion.vue";
import QuizResults from "./QuizResults.vue";

export default {
  components: { QuizQuestion, QuizResults },
  setup() {
    const quizStore = useQuizStore();
    const name = computed(() => quizStore.name);
    const score = computed(() => quizStore.score);
    const currentQuestion = computed(
      () => quizStore.questions[quizStore.currentQuestionIndex]
    );

    function handleAnswer(index) {
      quizStore.answerQuestion(index);
    }

    return { name, score, currentQuestion, handleAnswer };
  },
};
</script>
