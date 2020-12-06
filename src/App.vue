<template>
  <div>
    <core-app-bar />
    <core-footer />
  </div>
</template>

<script>
export default {
  name: "App",

  components: {
    CoreAppBar: () => import("@/components/core/AppBar"),
    CoreFooter: () => import("@/components/core/Footer")
  },

  data: () => ({
    //
  })
};
</script>


