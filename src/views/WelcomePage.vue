<template>
  <div class="welcome-page">
    <h1>Welcome to the Quiz App!</h1>

    <form @submit.prevent="submitForm">
      <div class="input-group">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>

      <div class="input-group">
        <label for="form">Form:</label>
        <input type="text" v-model="form" id="form" required />
      </div>

      <div class="input-group">
        <label for="house">House:</label>
        <input type="text" v-model="house" id="house" required />
      </div>

      <button type="submit">Start Quiz</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from "../store/userStore";

export default {
  name: "WelcomePage",
  data() {
    return {
      name: "",
      form: "",
      house: "",
    };
  },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  methods: {
    submitForm() {
      this.userStore.setUserDetails(this.name, this.form, this.house);
      this.$router.push({ name: "QuizPage" });
    },
  },
};
</script>

<style scoped>
.welcome-page {
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.input-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #1e90ff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #4682b4;
}
</style>
