<template>
  <div id="app">
    <NavigationBar />
    <div id="body">
      <div id="main-container">
        <router-view />
        <!-- This will display the current routed component -->
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
}

#body {
  display: flex;
  justify-content: center;
}

#main-container {
  width: 90%;
  max-width: 1250px;
  background-color: white;
  height: 100vh;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-radius: 5px;
}
</style>
