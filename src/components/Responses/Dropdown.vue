<script setup lang="ts">
import { PropType, inject } from "vue";
import { Answer } from "../../models/questions";

defineProps({
  answers: {
    type: Array as PropType<Answer[]>,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const questionResponses = inject('questionResponses');
</script>

<template>
  <select class="dropdown" :name="slug" v-model="questionResponses[category]">
    <option
      v-for="(answer, index) in answers"
      :key="index"
      :value="answer.score"
      :id="`question_${slug}_answer-${answer.score}`"
    >
      {{ answer.score }}: {{ answer.label }}
    </option>
  </select>
</template>

<style lang="scss">
.dropdown {
  display: none;
  width: 100%;
  background: #ec6826;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.25rem;
}
</style>