<template>
  <div class="results-page">
    <h1>Quiz Results</h1>

    <div class="result-details">
      <p>
        <strong>Name:</strong> {{ userStore.firstName }}
        {{ userStore.secondName }}
      </p>
      <p><strong>Form:</strong> {{ userStore.form }}</p>
      <p><strong>House:</strong> {{ userStore.house }}</p>
      <p>
        <strong>Score:</strong> {{ userStore.score }} out of
        {{ totalQuestions }}
      </p>
    </div>

    <button @click="retakeQuiz">Retake Quiz</button>
  </div>
</template>

<script>
import { useUserStore } from "../store/userStore";

export default {
  name: "ResultsPage",
  setup() {
    const userStore = useUserStore();
    const totalQuestions = 10;
    return {
      userStore,
      totalQuestions,
    };
  },
  methods: {
    retakeQuiz() {
      this.userStore.resetScore();
      this.$router.push({ name: "WelcomePage" });
    },
  },
};
</script>

<style scoped>
.results-page {
  text-align: center;
  padding: 40px 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.result-details {
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.result-details p {
  font-size: 1.2rem;
  margin: 10px 0;
}

button {
  padding: 12px 25px;
  background-color: #1e90ff;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4682b4;
}
</style>
