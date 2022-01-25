<script setup lang="ts">
import { inject } from "vue"
const progress = inject('overallProgress');
</script>

<template>
  <div class="progressbar">
    <div class="inner">
      <div class="fill" :style="{ width: `${progress}%` }">{{ progress }}%</div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  height: 4px;
  width: 100%;
}

.inner {
  display: block;
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
}

.fill {
  background: #ec6826;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 3px 0;
  transition: width 0.8s ease-in-out;
}
</style>