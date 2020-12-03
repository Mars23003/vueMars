<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-8 pt-12 pb-12 pl-6 pr-6">
          <v-img height="60" contain src="../assets/logo.png"></v-img>
          <v-card-title v-text="card.cardTitle" class="font-weight-black justify-center"></v-card-title>
          <v-card-subtitle v-text="card.cardSubTitle" class="font-weight-black text-center mt-0"></v-card-subtitle>
          <!-- <router-view /> -->
          <router-view :account-id.sync="user.accountId"></router-view>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card: {
        cardTitle: "",
        cardSubTitle: ""
      },
      user: {
        username: "",
        accountId: "",
        password: ""
      }
    };
  },
  methods: {
    setCard(title, subTitle) {
      this.card.cardTitle = title;
      this.card.cardSubTitle = subTitle;
    }
  }
};
</script>
