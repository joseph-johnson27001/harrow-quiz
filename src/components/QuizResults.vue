<template>
  <div>
    <h1>{{ name }}'s Quiz Results</h1>
    <p>You scored {{ score }} out of {{ totalQuestions }}!</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useQuizStore } from "../store/quizStore";

export default {
  props: ["name", "score"],
  setup() {
    const quizStore = useQuizStore();
    const totalQuestions = computed(() => quizStore.questions.length);

    return { totalQuestions };
  },
};
</script>
