<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
const goBangCanvas = ref<HTMLCanvasElement>();

const context = computed(() => goBangCanvas.value?.getContext('2d'));
const boxpix = 10;
const width = boxpix;
const height = boxpix;

onMounted(() => draw());
const draw = () => {
  if (context.value === undefined) return;
  context.value?.fillRect(0, 0, width, height / 2);
};
</script>
<template>
  <div class="GameGobang">
    <h1>五目並べ</h1>
  </div>
  <div>
    <canvas ref="goBangCanvas"></canvas>
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
