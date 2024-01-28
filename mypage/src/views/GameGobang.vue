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
  farstDraw();
};
window.addEventListener('click', (e) => {
  const x = Math.floor(e.offsetX / boxpix);
  const y = Math.floor(e.offsetY / boxpix);
  if (e.offsetX > 400 || e.offsetY > 400) return;
  if (e.offsetX < 0 || e.offsetY < 0) return;
  console.log(e.offsetX, e.offsetY);
  if (!context.value) return;
  if (borad[y][x]) {
    borad[y][x] = 0;
  } else {
    borad[y][x] = 1;
  }
  draw();
});
const draw = () => {
  if (!context.value) return;
  for (let i = 0; i < canvasPixel / boxpix; i++) {
    for (let j = 0; j < canvasPixel / boxpix; j++) {
      if (borad[j][i] === 1) {
        context.value.fillStyle = 'white';
      } else {
        context.value.fillStyle = 'black';
      }
      context.value?.fillRect(i * boxpix, j * (boxpix / 2), width, height / 2);
    }
  }
};
const farstDraw = () => {
  if (!context.value) return;
  context.value.fillStyle = 'orange';
  for (let i = 0; i < canvasPixel / boxpix; i++) {
    for (let j = 0; j < canvasPixel / boxpix; j++) {
      context.value?.fillRect(i * boxpix, j * (boxpix / 2), width, height / 2);
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
