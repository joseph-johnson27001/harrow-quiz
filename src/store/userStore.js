import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    name: "",
    form: "",
    house: "",
    score: 0,
  }),
  actions: {
    setUserDetails(name, form, house) {
      this.name = name;
      this.form = form;
      this.house = house;
    },
    incrementScore() {
      this.score++;
    },
    resetScore() {
      this.score = 0;
    },
  },
});
