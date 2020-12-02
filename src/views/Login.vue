<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-8 pt-12 pb-12 pl-6 pr-6">
          <v-card-title v-text="card.cardTitle" class="font-weight-black justify-center"></v-card-title>
          <v-card-subtitle v-text="card.cardSubTitle" class="font-weight-black text-center mt-0"></v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      card: {
        cardTitle: "登入",
        cardSubTitle: "請輸入密碼"
      }
    };
  }
};
</script>
