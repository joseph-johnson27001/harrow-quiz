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
  background-color: #ffffff;
}

h1 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #1e90ff;
  box-shadow: 0 0 5px rgba(30, 144, 255, 0.5);
}

button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #4682b4;
}

button:active {
  background-color: #1c75d8;
}

@media (max-width: 500px) {
  .welcome-page {
    max-width: 90%;
    padding: 15px;
  }

  h1 {
    font-size: 20px;
  }

  input,
  button {
    font-size: 14px;
  }
}
</style>
