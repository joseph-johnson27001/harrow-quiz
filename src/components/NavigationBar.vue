<template>
  <nav id="navbar">
    <div
      class="navbar-content"
      :class="{ 'centered-content': !userStore.firstName }"
    >
      <div class="navbar-left">
        <img
          src="@/assets/Harrow-School.png"
          alt="Harrow School Logo"
          class="logo"
        />
      </div>
      <div class="navbar-right">
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
  padding: 10px 20px;
  border-bottom: 1px solid white;
}

.navbar-content {
  width: 90%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.centered-content {
  justify-content: center; /* Center content when no name is available */
}

.logo {
  height: 50px;
  width: 50px;
  margin-right: 10px;
}

.navbar-left,
.navbar-right {
  font-size: 16px;
}

.navbar-right {
  display: flex;
  align-items: center;
}
</style>
