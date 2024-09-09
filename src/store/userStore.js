import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    name: "",
    form: "",
    house: "",
  }),
  actions: {
    setUserDetails(name, form, house) {
      this.name = name;
      this.form = form;
      this.house = house;
    },
  },
});
