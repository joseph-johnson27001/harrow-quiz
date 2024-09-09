<template>
  <nav id="navbar">
    <div class="navbar-content">
      <div class="navbar-left">[Name]</div>
      <div class="navbar-right">Score:</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
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
