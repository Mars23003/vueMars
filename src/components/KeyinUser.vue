<template>
  <v-form ref="form">
    <v-card-text>
      <v-text-field
        label="輸入您的帳號"
        type="text"
        class="font-weight-bold"
        outlined
        clearable
        v-model="myAccountId"
        :rules="usernameRules"
        :counter="usernameLength"
      ></v-text-field>
      <!-- <v-text-field v-model="myAccountId"></v-text-field> -->
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="mr-2">繼續</v-btn>
    </v-card-actions>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      usernameLength: 10,
      usernameRules: [
        v => !!v || "請輸入帳號",
        v => (v && v.length <= this.usernameLength) || "最多10碼"
      ]
    };
  },
  computed: {
    myAccountId: {
      get() {
        return this.accountId;
      },
      set(value) {
        this.$emit("update:accountId", value);
      }
    }
  }
};
</script>
