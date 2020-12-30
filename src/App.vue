<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-toolbar>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="./assets/logo.png" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Vue</v-list-item-title>
              <v-list-item-subtitle>vuetify</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-toolbar>
      <v-divider />
      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content @click="routerTo(i)">
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import Home from "./views/Home";
import AppBar from "./components/core/AppBar";

export default {
  name: "App",
  data: () => ({
    drawer: true,
    items: [
      { text: "口罩地圖", icon: "mdi-home-map-marker", path: "MaskMap" },
      { text: "ToDoList", icon: "mdi-notebook-edit-outline", path: "Home" }
    ]
  }),
  components: {
    Home,
    AppBar
  },
  methods: {
    routerTo(i) {
      this.$router.push({ name: this.items[i].path });
      console.log(this.items[i].path);
    }
  }
};
</script>



