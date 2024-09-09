<template>
  <nav id="navbar">
    <div class="navbar-content">
      <div class="navbar-right">
        <span>Harrow Counselling</span>
      </div>
      <div class="navbar-left">
        <span v-if="userStore.firstName"
          >{{ userStore.firstName }} {{ userStore.secondName }}</span
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from "../store/userStore";

export default {
  name: "NavigationBar",
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
};
</script>

<style scoped>
#navbar {
  width: 100%;
  background-color: #001744;
  color: white;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-bottom: 1px solid white;
}

.navbar-content {
  min-height: 20px;
  width: 90%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left,
.navbar-right {
  font-size: 16px;
}
</style>
