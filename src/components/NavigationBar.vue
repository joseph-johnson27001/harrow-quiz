<template>
  <nav id="navbar">
    <div class="navbar-content">
      <div class="navbar-left">
        <span v-if="userStore.name">{{ userStore.name }}</span>
      </div>
      <div class="navbar-right">
        <span v-if="userStore.score"> Score:{{ userStore.score }}></span>
        <span v-else>Harrow Quiz </span>
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
  background-color: #4169e1;
  color: white;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-bottom: 1px solid white;
}

.navbar-content {
  width: 90%;
  max-width: 1250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left,
.navbar-right {
  font-size: 16px;
}
</style>
