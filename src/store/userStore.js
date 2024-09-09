import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    firstName: "",
    secondName: "",
    form: "",
    house: "",
    score: 0,
  }),
  actions: {
    setUserDetails(firstName, secondName, form, house) {
      this.firstName = firstName;
      this.secondName = secondName;
      this.form = form;
      this.house = house;
    },
    incrementScore() {
      this.score++;
    },
    resetScore() {
      this.score = 0;
    },
    resetAll() {
      this.resetScore();
      this.firstName = "";
      this.secondName = "";
      this.form = "";
      this.house = "";
    },
  },
});
