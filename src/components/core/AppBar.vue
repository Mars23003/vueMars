<template>
  <div>
    <v-app-bar absolute color="indigo darken-2">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span>Home</span>
      </v-btn>
      <v-btn text>
        <span>About</span>
      </v-btn>
      <v-btn text>
        <span>OXOX</span>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "CoreAppBar"
};
</script>

<style>
</style>
