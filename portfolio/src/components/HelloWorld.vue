<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div>
    <p>game</p>
    <canvas id="gameCanvas" ref="gameCanvas" width="400" height="400"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
