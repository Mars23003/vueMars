<template>
  <div id="home">
    <!-- <MaskMap /> -->
    <ToDoList />
  </div>
</template>
<script>
// import MaskMap from "../components/maskMap/MaskMap";
import ToDoList from "../components/todolist/ToDoList";

export default {
  name: "Home",
  components: {
    // MaskMap,
    ToDoList
  }
};
</script>
