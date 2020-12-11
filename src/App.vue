<template>
  <div id="app">
    <mask-map />
    <router-view />
  </div>
</template>

<script>
import MaskMap from "./components/maskMap/MaskMap";

export default {
  name: "App",
  components: {
    MaskMap
  }
};
</script>



