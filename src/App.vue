<template>
  <div>
    <core-app-bar />
  </div>
</template>

<script>
export default {
  name: "App",

  components: {
    CoreAppBar: () => import("@/components/core/AppBar")
  },

  data: () => ({
    //
  })
};
</script>


