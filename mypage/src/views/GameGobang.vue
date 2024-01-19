<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
const goBangCanvas = ref<HTMLCanvasElement>();
const context = computed(() => goBangCanvas.value?.getContext('2d'));
const boxpix = 20;
const width = boxpix;
const height = boxpix;
const canvasPixel = 400;
const box = canvasPixel / boxpix;
const borad = Array.from(new Array(box), () => new Array(box).fill(0));

onMounted(() => setboard());
const setboard = () => {
  if (context.value === undefined) return;
  //draw();
};
window.addEventListener('click', (e) => {
  const x = Math.floor(e.offsetX / boxpix);
  const y = Math.floor(e.offsetY / boxpix);
  console.log(e.offsetX, e.offsetY);
  console.log(x, y);
  console.log(borad[x][y]);
  if (borad[y][x]) {
    borad[y][x] = 0;
  } else {
    borad[y][x] = 1;
  }

  draw();
});
const draw = () => {
  console.log(JSON.stringify(borad));
  for (let i = 0; i < canvasPixel / boxpix; i++) {
    for (let j = 0; j < canvasPixel / boxpix; j++) {
      if (borad[j][i]) {
        context.value?.fillRect(i * boxpix, j * (boxpix / 2), width, height / 2);
      }
    }
  }
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
  background-color: burlywood;
  width: 400px;
  height: 400px;
  border: 4px solid saddlebrown;
}
</style>
