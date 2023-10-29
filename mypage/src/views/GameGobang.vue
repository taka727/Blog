<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { Options, Vue } from "vue-class-component";
const goBangCanvas = ref<HTMLCanvasElement>();

const context = computed(() => goBangCanvas.value?.getContext("2d"));

onMounted(() => {
  context.value?.fillRect(200, 100, 100, 100);
});
</script>
<template>
  <div class="GameGobang">
    <h1>五目並べ</h1>
  </div>
  <div>
    <canvas id="goBangCanvas"></canvas>
  </div>
</template>

<style scoped>
h1 {
  color: red;
  margin: 40px 0 0;
}
canvas {
  width: 400px;
  height: 400px;
  border: 4px solid;
}
</style>
