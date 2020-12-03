<template>
  <div>
    <v-list-item to="KeyinUser">
      <v-list-item-avatar>
        <v-icon color="gray">mdi-account-circle-outline</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>使用其他帳戶</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-avatar>
        <v-icon color="gray" style="transform: scaleX(-1);">mdi-account-minus-outline</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>移除帳戶</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  watch: {
    $route: {
      handler: function(to, from) {
        // ...
        switch (to.name) {
          // ...
          case "ChooseUser":
            this.setCard("選擇帳戶");
            break;
        }
      }
      // ...
    }
  }
};
</script>
