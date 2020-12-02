<template>
  <div>
    <v-app-bar color="white" elevation="0">
      <v-spacer></v-spacer>
      <v-btn icon class="ma-3">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn color="primary" small @click="goToLogin">登入</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Index",
  methods: {
    goToLogin() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
